import { BrowserModule }                from '@angular/platform-browser'
import { NgModule }                     from '@angular/core'

import { AppRoutingModule }             from './app-routing.module'
import { AppComponent }                 from './app.component';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { ViewBlogComponent }            from './view-blog/view-blog.component';
import { BlogListsComponent }           from './blog-lists/blog-lists.component';
import { CreateBlogComponent }          from './create-blog/create-blog.component';
import { MatFormFieldModule }           from  '@angular/material/form-field'
import { CommentComponent }             from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBlogComponent,
    BlogListsComponent,
    CreateBlogComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
