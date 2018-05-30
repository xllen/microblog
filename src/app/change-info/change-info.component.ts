import { Component, OnInit } from '@angular/core';
import { User, BlogServiceService } from '../blog-service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {

  private userInfo: User;

  private formModel:FormGroup;
  
  constructor(private blogService: BlogServiceService) { 
  }

  ngOnInit() {
    this.userInfo = this.blogService.getUserById("111");
    let fb = new FormBuilder();
    this.formModel = fb.group({
      name: [this.userInfo.name,[Validators.required, Validators.minLength(2),Validators.maxLength(10)]],
      nickName: [this.userInfo.nickName,[Validators.required,Validators.maxLength(5)]],
      motto: [this.userInfo.motto, [Validators.required,Validators.maxLength(20)]],
      age: [this.userInfo.age,[Validators.required,this.myValidAge]],
      phone: [this.userInfo.phone, [Validators.required, this.myValidPhone]],
      address: [this.userInfo.address,[Validators.minLength(3),Validators.maxLength(20),Validators.required,this.myValidAddress]],
      email: [this.userInfo.email,[Validators.required, this.myValidEmail]]
    });
  }
  updateUserInfo(){
    if(this.formModel.valid){
      console.log(this.formModel.value);
    }else{
      console.log("表单验证未通过");
    }
  }
  myValidAge(formControl: FormControl): any{
    if(!formControl.value){
      return null;
    }
    let val = parseInt(formControl.value);
    if(val < 0 || val > 120){
      return {validAge:true};
    }else{
      return null;
    }
  }

  myValidPhone(formControl:FormControl):any{
    if(!formControl.value){
      return null;
    }
    let val = formControl.value;
    let pattern = /^1[3|4|5|8][0-9]\d{8}$/;
    if(!pattern.test(val)){
      return {validPhone: true}
    }else{
      return null;
    }
  }

  myValidAddress(formControl:FormControl):any{
    if(!formControl.value){
      return null;
    }
    let val = formControl.value;
    if(val.length < 3 || val.length > 20){
      return null;
    }
    let pattern = /[@#\$%\^&\*]+/g;
    if(pattern.test(val)){
      return {validAddress: true};
    }else{
      return null;
    }
  }

  myValidEmail(formControl:FormControl):any{
    if(!formControl.value){
      return null;
    }
    let val = formControl.value;
    let pattern = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(!pattern.test(val)){
      return {validEmail: true};
    }else{
      return null;
    }
  }
}
