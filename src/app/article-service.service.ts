import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Article } from './article';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor() { }

ARTICLES: Article[] = [
    {id: 1, title: "Starting 2019 with some Bash scripting", content: "./assets/markdown/post1.md", date: new Date()},
    {id: 2, title: "Visualizing my running", content: "./assets/markdown/post2.md", date: new Date()},
    {id: 3, title: "Creating An Index In Redis", content: "./assets/markdown/post3.md", date: new Date()},
    {id: 4, title: "Tribe by Sebastian Junger", content: "./assets/markdown/post4.md", date: new Date()}
];

  getArticles() : Observable<Article[]> {
    return of(this.ARTICLES);
  }

  getArticle(id: number) : Observable<Article> {
    return of(this.ARTICLES.find(article => article.id === id));
  }
}
