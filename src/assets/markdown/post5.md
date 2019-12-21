When living in a microservice world, you have multiple standalone services that communicates with eachother.
Thus following a whole call chain or maybe an order will be difficult unless you add some kind of tracing.
This post will go through how you can add tracing to your logs if you are using Spring Sleuth and Reactor (WebFlux).
The tracing will also contain custom trace values. 	

Let's start by adding dependencies. 

```
<dependencies>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-webflux</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.cloud</groupId>
		<artifactId>spring-cloud-starter-sleuth</artifactId>
	</dependency>
</dependencies>		
```

Then we need to add a custom key that will be sent with the default traces (Trace-Id and Span-Id) in sleuth this is called a propagation key or a baggage key. We name it `cool-baggage-key`. Then we also need to make it accessable for the logging by whitelisting it. Add the following code to your `application.yaml`.

```
spring:
  sleuth:
    log:
      slf4j:
        whitelisted-mdc-keys:
        - "cool-baggage-key"
    propagation-keys:
    - "cool-baggage-key"
```

In our Application we need to create two beans. 
Firstly we need to create a `Propagation.Factory` that will be picked up by the Trace, this is needed to get the custom propagation key.
Secondly the `WebClient` that we shall be used also needs to be a bean, so that the Trace can get injected. 

```
@SpringBootApplication
public class DemoApplication {

  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }

  @Bean
  WebClient webClient() {
    return WebClient.create();
  }

  @Bean
  Propagation.Factory getFactory() {
    return ExtraFieldPropagation.newFactory(B3Propagation.FACTORY, "cool-baggage-key");
  }
}
```

Last but not least we need to add the traces to be printed to the logs.
Add a file `logback.xml` to the resources directory with a pattern including the keys.

```
<configuration>
  <appender class="ch.qos.logback.core.ConsoleAppender" name="logAppender">
    <encoder>
      <charset>UTF-8</charset>
      <pattern>%d{"yyyy-MM-dd'T'HH:mm:ss,SSS"} [%-5level] [%X{X-B3-TraceId:-}] [%X{X-B3-SpanId:-}] [%X{cool-baggage-key:-}] - %msg%n</pattern>
    </encoder>
  </appender>
  <root level="INFO">
    <appender-ref ref="logAppender"/>
  </root>
</configuration>
```


To demonstrate the tracing I have created a controller with two endpoints that calls it self, this is to simulate that the service calls another service. 
The `/demo` endpoint will make a call to the `/user` endpoint which will return a user for the inputted id. 

```
@RestController
public class DemoController {

  private static final Logger logger = LoggerFactory.getLogger(DemoController.class);

  @Autowired
  WebClient webClient;

  @GetMapping("/demo")
  public Mono<String> demo(@RequestParam() String id) {
    logger.info("server1: got id={}", id);
    return webClient
        .get()
        .uri("localhost:8080/user?id=" + id)
        .retrieve()
        .bodyToMono(String.class)
        .doOnNext(user -> logger.info("server1: Got user: {}", user))
        .map(user -> "Hello " + user + "!\n");
  }

  @GetMapping("/user")
  public Mono<String> getUser(@RequestParam()String id) {
    logger.info("server2: got id={}", id);
    return Mono.just(id)
        .flatMap(this::getUserFromDatabase)
        .switchIfEmpty(Mono.just("Well better luck next time!"))
        .doOnNext(s -> logger.info("server2: Returning string: {}", s));
  }

  private Mono<String> getUserFromDatabase(String id) {
    logger.info("server2: looking up id={} in database", id);
    Map<String, String> db = Map.of(
        "1", "John Doe",
        "2", "Jane Doe"
    );
    return Mono.justOrEmpty(Optional.ofNullable(db.get(id)));
  }
}
```

Let's start the service and see what it looks like. When calling the `/demo` endpoint we need to supply the traces in the headers.

```
curl --header 'X-B3-TraceId: 088359ea7d8c5dd4' 	\
	 --header 'X-B3-SpanId: 088359ea7d8c5dd5'  	\
	 --header 'cool-baggage-key: 1337' 			\
	 localhost:8080/demo?id=2
```

And here are the logs printed by the services. 
We see that the trace id and the propagation key is the same on both "servers", but the span id changes. 
This is expected, since the span is only intended to be in the service.

```
2019-12-21T18:08:23,493 [INFO ] [088359ea7d8c5dd4] [088359ea7d8c5dd5] [1337] - server1: got id=2
2019-12-21T18:08:23,616 [INFO ] [088359ea7d8c5dd4] [a4fe06e1ad6d28b2] [1337] - server2: got id=2
2019-12-21T18:08:23,617 [INFO ] [088359ea7d8c5dd4] [a4fe06e1ad6d28b2] [1337] - server2: looking up id=2 in database
2019-12-21T18:08:23,618 [INFO ] [088359ea7d8c5dd4] [a4fe06e1ad6d28b2] [1337] - server2: Returning string: Jane Doe
2019-12-21T18:08:23,680 [INFO ] [088359ea7d8c5dd4] [088359ea7d8c5dd5] [1337] - server1: Got user: Jane Doe
```

The whole example project is available [here](https://github.com/Blixthalka/tracing-demo).
