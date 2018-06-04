import { Component, OnInit } from '@angular/core';
import { User, BlogServiceService } from '../blog-service.service';
import { UserInfoService } from '../user-info.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  
  private userInfo: any;
  private userInfoStream: Observable<any>;
  constructor(private userInfoService:UserInfoService) { }

  ngOnInit() {
    if (this.userInfoService.userInfo !== undefined) {
      this.userInfo = this.userInfoService.userInfo;
    } else {
      this.userInfoStream = this.userInfoService.getUserInfo();
      this.userInfoStream.subscribe(
        res => {
          let userInfo = JSON.parse(res._body);
          if (userInfo.userinfo_gender === "man") {
            userInfo.userinfo_gender = "男";
          } else {
            userInfo.userinfo_gender = "女";
          }
          console.log(userInfo);
          this.userInfo = userInfo;
          this.userInfoService.userInfo = userInfo;
        }
      );
    }
  }
}