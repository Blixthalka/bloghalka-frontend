import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[]

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleServiceService
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params.category)
        this.articleService.getArticles()
          .subscribe(articles => this.articles = articles);
      })



  }

}
