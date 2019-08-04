import {
  Component, OnInit, Input, ViewChild, ViewContainerRef, Compiler,
  ComponentFactory, ComponentFactoryResolver, NgModule, ModuleWithComponentFactories,
  ComponentRef
} from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { HttpClient } from '@angular/common/http'

import { CommonModule } from '@angular/common';
import {AppModule} from '../app.module';


@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent implements OnInit {

  @Input()
  src: string;

  @ViewChild('container', { read: ViewContainerRef, static: false }) // migh be false?
  container: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  $compile;

  constructor(
    private compiler: Compiler,
    private http: HttpClient
  ) { }

  ngOnInit() {
    console.log(this.src)

    this.http.get(this.src, {responseType: 'text'})
    .subscribe(
        data => {
            this.compileArticle(data)
        },
        error => {
            console.log(error);
        }
    );

  }

  compileArticle(articleHtml: string) {
    let metadata = {
      selector: `runtime-component`,
      template: articleHtml
    };
    
    let factory = this.createComponentFactorySync(this.compiler, metadata, null);

    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);
  }


  private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
    const cmpClass = componentClass || class RuntimeComponent { };
    const decoratedCmp = Component(metadata)(cmpClass);

    @NgModule({ imports: [CommonModule, AppModule, MarkdownModule.forRoot()], declarations: [decoratedCmp] })
    class RuntimeComponentModule { }

    let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
    return module.componentFactories.find(f => f.componentType === decoratedCmp);
  }

}
