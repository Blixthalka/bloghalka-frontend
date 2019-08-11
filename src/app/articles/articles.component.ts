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
        if (params.category) {
          this.articleService.getArticlesWithinCategory(params.category)
            .subscribe(articles => this.articles = articles);
        } else {
          this.articleService.getArticles()
            .subscribe(articles => this.articles = articles);
        }
      })



  }

}
