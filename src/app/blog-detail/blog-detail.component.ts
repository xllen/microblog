import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  private blogInfo: any;
  private comments: any;
  private user: any;
  constructor(
    private router: ActivatedRoute,
    private service: BlogServiceService
  ) { }

  ngOnInit() {
    let blogId = this.router.snapshot.params["id"];
    this.blogInfo = this.service.getBlogById(blogId);
    this.comments = this.blogInfo.comment;
    this.user = this.service.getUsers()[0];
    console.log(this.blogInfo);
    console.log(this.comments);
    console.log(this.user);
  }

}
