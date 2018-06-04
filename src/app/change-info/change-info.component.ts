import { Component, OnInit, Output } from '@angular/core';
import { User, BlogServiceService } from '../blog-service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserInfoService } from '../user-info.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {

  private userInfo: any;

  private formModel:FormGroup;
  private userInfoStream: Observable<any>;
  
  constructor(private userInfoService: UserInfoService,private router:Router) { 
  }

  ngOnInit() {
    // this.userInfo = this.userInfoService.getUserById("111");
    this.userInfo = this.userInfoService.userInfo;
    let fb = new FormBuilder();

    this.formModel = fb.group({
      name: [this.userInfo.userinfo_name,[Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
      gender: [this.userInfo.userinfo_gender, [Validators.required, this.myValidGender]],
      address: [this.userInfo.userinfo_address,[Validators.required, this.myValidAddress]],
      birth: [this.userInfo.userinfo_birth,[Validators.required,this.myValidBirth]],
      qq: [this.userInfo.userinfo_qq,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      prof: [this.userInfo.userinfo_prof,Validators.required],
      flag: [this.userInfo.userinfo_flag,[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    });
  }
  
  updateUserInfo(){
    if(this.formModel.valid){
      let userInfo = {
        userinfo_name: this.formModel.value.name,
        userinfo_gender: this.formModel.value.gender,
        userinfo_address: this.formModel.value.address,
        userinfo_birth: this.formModel.value.birth,
        userinfo_qq: this.formModel.value.qq,
        userinfo_prof: this.formModel.value.prof,
        userinfo_flag: this.formModel.value.flag,
        userinfo_id: this.userInfoService.userInfo.userinfo_id,
        user_id: this.userInfoService.userInfo.user_id
      };
      console.log(userInfo);
      this.userInfoStream = this.userInfoService.changeUserInfo(userInfo);
      this.userInfoStream.subscribe(
        res => {
          let userInfo = JSON.parse(res._body);
          this.userInfoService.userInfo = userInfo;
          this.userInfo = userInfo;
          this.router.navigate(['/']);
        },
        error => {
          alert("请重新尝试，此次修改失败");
        }
      );
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


  myValidBirth(formControl:FormControl):any{
    if(!formControl.value){
      return null;
    }
    let val = formControl.value;
    if(val.length !== 10){
      return {validBirth: true};
    }
    let year = parseInt(val.slice(0,4));
    let month = parseInt(val.slice(5,7));
    let day = parseInt(val.slice(8));
    let flag1 = val.slice(4,5);
    let flag2 = val.slice(7,8);
    if(isNaN(year)|| isNaN(month) || isNaN(day) || flag1 !== "-" || flag2 !== "-"){
      return {validBirth: true};      
    }else if(year > 2018 || year < 1900 || month > 12 || day > 31){
      return {validBirth: true};
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

  myValidGender(formControl:FormControl): any{
    if(!formControl.value){
      return null;
    }
    let val = formControl.value;
    if(val !== "男" && val !== "女"){
      return {validGender: true};
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
