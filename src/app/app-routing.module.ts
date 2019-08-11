import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';


const routes: Routes = [
  { path: '', redirectTo: '/om', pathMatch: 'full' },
  { path: 'artiklar', component: ArticlesComponent },
  { path: 'artiklar/:id', component: ArticleComponent },
  { path: 'om', component: AboutComponent },
  { path: 'bokhylla', component: BookshelfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
