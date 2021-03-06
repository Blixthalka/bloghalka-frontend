import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
