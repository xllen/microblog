import { Component, OnInit, Input } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { UserInfoService } from '../user-info.service';
// import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-side-right',
  templateUrl: './side-right.component.html',
  styleUrls: ['./side-right.component.css']
})
export class SideRightComponent implements OnInit {
  //校验手机号是否合法
  mobileValidator(control:FormControl): any{
    let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(control.value);
    return valid ? null : {mobile:true};
  }
  //校验密码是否正确
  passwordValidator(control:FormControl):any{
    let pwreg = /^[a-zA-Z0-9]{3,18}$/;
    let valid = pwreg.test(control.value);
    return valid ? null : {password:true};
  }
  formModel: FormGroup;
  private userInfo: any;
  isShowLogin: boolean = false;
  isShowUnlogin: boolean = true;
  // 获取登录请求返回的观测流
  loginStream: Observable<any>;

  constructor(private service: BlogServiceService,private route: Router,private http:Http, private userInfoService: UserInfoService) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
       username: [null],
       password: [null,this.passwordValidator]
    });
   }

  ngOnInit() {
    this.isShowLogin = this.userInfoService.isShowLogin;
    this.isShowUnlogin = this.userInfoService.isShowUnlogin;

    // this.userInfo = this.service.getUsers()[0];
    //console.log(this.userInfo);

    // $.ajax({
    //   contentType: 'application/json;charset=utf-8',
    //   url: '/MicroBlog/json.do',
    //   type: 'post',
    //   dataType: 'json',
    //   data: JSON.stringify({"username":"lhz","user_password":"123"}),
    //   success: data => {
    //     console.log(data)
    //   },
    //   error: err => {
    //     console.log(err)
    //   }
    // });
  }
  onLogin() {
    console.log(this.formModel.value);
    this.loginStream = this.userInfoService.confirmUser(this.formModel.value.username, this.formModel.value.password);
    this.loginStream.subscribe(
      res => {
        console.log(res);
        if(res._body !== ""){
          // 把当前用户信息存入服务中的user信息中
          this.userInfoService.user = JSON.parse(res._body);
          console.log(JSON.parse(res._body));
          this.isShowLogin = true;
          this.isShowUnlogin = false;
        }
      }
    );
  }
}
