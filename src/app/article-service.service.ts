import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor() { }

  ARTICLES: Article[] = [
    {
      id: 4, title: "Advent of code 2019",
      entry: "My solutions in Go to AoC 2019",
      content: "./assets/markdown/post5.md", date: new Date("2019-12-02"), image: "./assets/img/advent.png"
    },
    {
      id: 4, title: "Tribe by Sebastian Junger",
      entry: "This book is about belonging in a society and how our modern society does not meet the fundamental needs of a human being. We are cramped in our apartments, living alone or with your family. We are surrounded by people all the time, yet we feel alone",
      content: "./assets/markdown/post4.md", date: new Date("2019-06-02"), image: "./assets/img/elizabeth-lies-T9Gsevu_N8Y-unsplash.jpg"
    },
    {
      id: 3, title: "Creating an index in Redis",
      entry: "Redis is an in-memory key/value database, it does not have any natural indexing capabilities. Without an index a search on anything different than the key will be an expensive operation, since all elements needs to be fetched and then filtered in the application code",
      content: "./assets/markdown/post3.md", date: new Date("2019-04-22"), image: "./assets/img/cassi-josh-lhnOvu72BM8-unsplash.jpg"
    },

    {
      id: 2, title: "Visualizing my running",
      entry: "Recently I stumbled on this blog post about visualizing workout activites. I thought this was really cool, so I figured I try on my own. Thus, I immediately downloaded all my runs and rides from Strava and made my own visualizations",
      content: "./assets/markdown/post2.md", date: new Date("2019-01-26"), image: "./assets/img/joel-filipe-QwoNAhbmLLo-unsplash.jpg"
    },

    {
      id: 1, title: "Starting 2019 with Bash scripting",
      entry: "The calendar has has incremented the year variable to 2019 and you still haven't acted on your new years resolution. But don't worry, you don't have to go to the gym. Instead I propose that you switch your resolution to something else",
      content: "./assets/markdown/post1.md", date: new Date("2019-01-03"), image: "./assets/img/stock-photography-KZNTEn2r6tw-unsplash.jpg"
    }
  ];

  getArticles(): Observable<Article[]> {
    return of(this.ARTICLES);
  }

  getArticle(id: number): Observable<Article> {
    return of(this.ARTICLES.find(article => article.id === id));
  }
}
