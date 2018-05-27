import { Injectable } from '@angular/core';

@Injectable()
export class BlogServiceService {
  private users:User[] = [
    new User("111","Jack",18, "魔尊重楼","一切皆有可能","13164159605","湖北省","810307015@qq.com","http://tva1.sinaimg.cn/crop.0.0.1270.1270.180/0067lse9jw8fcuz4web86j30za0zawhg.jpg",201,11,10)
  ];
  private blogs:Blog[] = [
    new Blog("1",
            "张三",
            "https://tva3.sinaimg.cn/crop.16.0.274.274.180/6acdb97fjw8etg75d295sj208x07mt90.jpg",
            "老师傅很实在，还教我们如何辨别真假蜂蜜，请大家多多支持他",
            ["https://wx2.sinaimg.cn/mw690/006YDXLtgy1frk6p4tzs5j30j60eeael.jpg","https://wx4.sinaimg.cn/mw690/006YDXLtgy1frk6p4taxxj30m80ccadi.jpg","https://wx1.sinaimg.cn/mw690/006YDXLtgy1frk6p4v42pj30j60pkwjy.jpg"],
            {"count":"1","comments":[{"name":"大哥","img":"https://tva3.sinaimg.cn/crop.16.0.274.274.180/6acdb97fjw8etg75d295sj208x07mt90.jpg","cont":"帮助","praise": 20},{"name":"二弟","img":"https://tva3.sinaimg.cn/crop.16.0.274.274.180/6acdb97fjw8etg75d295sj208x07mt90.jpg","cont":"都不容易","praise": 30}]},
            100)
  ];
  getUsers():User[]{
    return this.users;
  }
  getBlogs():Blog[]{
    return this.blogs;
  }
  getUserById(id:string):User{
    return this.users.find(user => user.id == id);
  }
  getBlogById(id:string):Blog{
    return this.blogs.find(blog => blog.id == id);
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
    public headUrl: string,
    public attentionNum: number,
    public fans: number,
    public blog: number
  ){}
}
export class Blog{
  constructor(
    public id: string,
    public name: string,
    public userImg: string,
    public content: string,
    public images: Array<string>,
    public comment: Object,
    public praiseNum: number,
  ){}
}