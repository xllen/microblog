import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
  constructor() { 
    let fb = new FormBuilder();
    this.formModel = fb.group({
       username: [null,this.mobileValidator],
       password: [null,this.passwordValidator]
    });
  }

  ngOnInit() {
  }
  onSearch(value){
    console.log(value);
  }
  onLogin(){
    console.log(this.formModel.value);
  }
}
