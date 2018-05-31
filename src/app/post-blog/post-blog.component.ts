import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload'
declare var $: any;
@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {

  formModel: FormGroup;
  imgsUrl = [];
  imgPath: any;
  isShowImg: boolean = false;
  public uploader:FileUploader;
  constructor() { 
    let fb = new FormBuilder();
    this.formModel = fb.group({
      content: ['',Validators.minLength(1)]
    });
  }

  ngOnInit() {
  }
  
  //图片选择预览
  chooseImg(event: any){
    let files = event.target.files;
   for(let i = 0;i < files.length;i++){
    let  imgFile = files[i];
     let fileReader = new FileReader();
     fileReader.readAsDataURL(imgFile);
     fileReader.onload = ( (theFile) =>{
       return (e)=>{
        this.isShowImg = true;
         this.imgPath = e.target.result;
         this.imgsUrl.push(this.imgPath);
       };
     })(imgFile);
   }
  }
  //移除图片
  remove(i) {
    this.imgsUrl.splice(i,1);
  }
  closePreview() {
    this.isShowImg = false;
    this.imgsUrl = [];
  }
}
