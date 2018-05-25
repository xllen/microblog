import { Injectable } from '@angular/core';

@Injectable()
export class BlogServiceService {
  private users:User[] = [
    new User("111","Jack",18, "魔尊重楼","一切皆有可能","13164159605","湖北省","810307015@qq.com","http://tva1.sinaimg.cn/crop.0.0.1270.1270.180/0067lse9jw8fcuz4web86j30za0zawhg.jpg")
  ];
  getUsers():User[]{
    return this.users;
  }
  getUserById(id:string):User{
    return this.users.find(user => user.id == id);
  }
  constructor() { }

}

export class User{
  constructor(
    public  id: string,
    public name: string,
    public age: number,
    public nickName: string,
    public motto:string,
    public phone: string,
    public address: string,
    public email: string,
    public headUrl: string
  ){}
}