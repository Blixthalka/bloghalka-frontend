import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[]

  constructor(
    private articleService: ArticleServiceService
  ) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);
  }

}
