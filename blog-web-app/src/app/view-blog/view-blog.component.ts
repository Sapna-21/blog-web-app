import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../blog-lists/blog-lists.component';


export interface DialogData {
  comment : string
}

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})

export class ViewBlogComponent implements OnInit {

  blogPost = {} as BlogPost
  liked : boolean = false
  comment : string = ''

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.blogPost = params as BlogPost
    })
  }
  

  onClick() {
    this.liked = !this.liked
  }

  onShare() {
    window.open('https://www.linkedin.com/shareArticle?mini=true&url=http://developer.linkedin.com&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn')
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(CommentComponent, {
  //     width: '550px',
  //     data: { comment: this.comment }
  //   })

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.comment = result
  //   });
  // }

}
