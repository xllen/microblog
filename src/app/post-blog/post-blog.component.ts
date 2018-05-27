import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {

  formModel: FormGroup;
  constructor() { 
    let fb = new FormBuilder();
    this.formModel = fb.group({
      content: ['',Validators.minLength(1)]
    });
  }

  ngOnInit() {
    $("#emoj").click(function(){
      alert(111);
    });
  }

}
