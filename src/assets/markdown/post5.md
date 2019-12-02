Here I have gathered my solutions for the advent of code.
Advent of code is a great way of learning a new language and that's why I have choosen to write in Go, which is a new language for me.


### Day 1 

Felt like an easy start. I think the hardest part was returning a list from a function. 


##### Part 1 
 Problem: "Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2."

 So... just iterate over each element, apply the calculation and sum them.


```go
func get_input() []string {
	// just get the input as a list
}

func calc_fuel(weight float64) float64 {
	return math.Floor(weight/3.0) - 2.0
}

func part1() {
	data := get_input()
	sum := 0.0
	for _, s := range data {
		weight, _ := strconv.ParseFloat(s, 64)
		sum += calc_fuel(weight)
	}
	fmt.Printf("part1: %.0f\n", sum)
}
```


##### Part 2 
Problem: "So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative."

Part 2 was pretty much the same as part 1, just needed to do the calculation recursively!
```
func get_input() []string {
    // just get the input as a list
}

func calc_fuel(weight float64) float64 {
	return math.Floor(weight/3.0) - 2.0
}

func calc_fuel_rec(weight float64) float64 {
	fuel := calc_fuel(weight)
	if fuel > 0.0 {
		return fuel + calc_fuel_rec(fuel)
	} else {
		return 0.0
	}
}

func part2() {
	data := get_input()
	sum := 0.0
	for _, s := range data {
		weight, _ := strconv.ParseFloat(s, 64)
		sum += calc_fuel_rec(weight)
	}
	fmt.Printf("part2: %.0f\n", sum)
}
```


