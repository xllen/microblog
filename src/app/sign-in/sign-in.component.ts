import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
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
  myFormModel: FormGroup;
  constructor() { 
    let fb = new FormBuilder();
    this.myFormModel = fb.group({
       username: [null,this.mobileValidator],
       password: [null,this.passwordValidator]
    });
  }

  ngOnInit() {
  }

}
