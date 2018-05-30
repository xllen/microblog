import { Component, OnInit, Input } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
declare var $: any;
@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']

})
export class ShowBlogComponent implements OnInit {

  private blogs:any;
  isRed: boolean = false;
  isAddOne: boolean = false;
  praiseNum: number;
  constructor(private service: BlogServiceService) { }

  ngOnInit() {
    this.blogs = this.service.getBlogs();
    console.log(this.blogs);
    this.praiseNum = this.blogs[0].praiseNum;
    $(document).on('click','.blog-content ul li img',function(){
      var img_content = $(this).attr("src");
            $("body").append(
                "<div class='bg-img'>"
                + "<div class='tra-img'>"
                    + "<img src='" + img_content + "' class='zoom-out'>"
                + "</div></div>"
            );
            //bottom:'0',left:'0';会让图片从页面左下放出现，如果想从左上方出现，将bottom:'0'改成top:'0';
            $(".bg-img").animate({
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
            }, "normal")
    })
    $(document).on("click", ".bg-img", function () {
      $(this).remove();
  })
  }
  collect(){
    if(this.isRed == false){
      this.isRed = true;
    }else {
      this.isRed = false; 
    }    
  }

  //点赞
  praise(){
    if(this.isAddOne == false){
      this.isAddOne = true;
      this.praiseNum = this.praiseNum +1;
    }else {
      this.isAddOne = false;
      this.praiseNum = this.praiseNum -1;
    } 
  }
}
