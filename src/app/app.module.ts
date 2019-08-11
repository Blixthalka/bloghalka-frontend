import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxEchartsModule } from 'ngx-echarts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
    AboutComponent,
    LineChartComponent,
    BookshelfComponent,
    PageHeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgxEchartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BsDropdownModule, TooltipModule, ModalModule, LineChartComponent]
})
export class AppModule { }
