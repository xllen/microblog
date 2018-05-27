import { Component, OnInit, Input } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']

})
export class ShowBlogComponent implements OnInit {

  private blogs:any;
  isRed: boolean = false;
  constructor(private service: BlogServiceService) { }

  ngOnInit() {
    this.blogs = this.service.getBlogs();
    console.log(this.blogs);
  }
  collect(){
    if(this.isRed == false){
      this.isRed = true;
    }else {
      this.isRed = false;
    }
    
  }
}
