import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListsComponent } from './blog-lists/blog-lists.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  {
    path      : '',
    component : BlogListsComponent  
  },
  {
    path      : 'viewBlog',
    component : ViewBlogComponent 
  },
  {
    path      : 'createBlog',
    component : CreateBlogComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
