import { Injectable, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserInfoService implements OnInit{

  // 当前登录的用户ID
  public userId: string;

  // 当前用户登录信息
  public user: any;
  // 当前用户个人信息
  public userInfo: any;

  // 当前登录状态
  public isShowLogin: boolean = false;
  public isShowUnlogin: boolean = true;

  // 接受传递过来的User表的可读流
  public userStream:Observable<any>;

  // 接受传递过来的UserInfo表的内容可读流
  public userInfoStream:Observable<any>;

  constructor(private http: Http) { }

  ngOnInit(){

  }

  // 验证用户名密码是否正确
  confirmUser(username: string, password: string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {
      "username": username,
      "user_password": password
    }
    this.userStream = this.http.post('/MicroBlog/json.do', JSON.stringify(body),options);
    return this.userStream;
  }

  // 获取对应的用户信息
  getUserInfo(){

  }

}

// 接受用户登录表的内容
// export class User{
//   constructor(
//     public id: string,
//     public phone: string,
//     public email: string,
//     public password: string,
//     public nickname: string,
//     public time: string,
//     public status: number
//   ){}
// }

// 接受用户信息表的内容
// export class UserInfo{
//   constructor(
//     public id: string,
//     public name: string,
//     public gender: string,
//     public address: string,
//     public birth: string,
//     public qq: string,
//     // 职业信息
//     public prof: string,
//     // 标签
//     public flag: string,
//     public userId: string
//   ){}
// }