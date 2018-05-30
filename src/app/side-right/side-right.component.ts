import { Component, OnInit, Input } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
    let pwreg = /^[a-zA-Z0-9]{6,18}$/;
    let valid = pwreg.test(control.value);
    return valid ? null : {password:true};
  }
  formModel: FormGroup;
  private userInfo: any;
  isShowLogin: boolean = false;
  isShowUnlogin: boolean = true;
  constructor(private service: BlogServiceService,private route: Router) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
       username: [null,this.mobileValidator],
       password: [null,this.passwordValidator]
    });
   }

  ngOnInit() {
    this.userInfo = this.service.getUsers()[0];
    console.log(this.userInfo);
  }
  onLogin() {
    console.log(this.formModel.value);
    this.isShowLogin = true;
    this.isShowUnlogin = false;

  }
}
