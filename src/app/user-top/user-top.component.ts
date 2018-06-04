import { Component, OnInit, Input } from '@angular/core';
import { User } from '../blog-service.service';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-user-top',
  templateUrl: './user-top.component.html',
  styleUrls: ['./user-top.component.css']
})
export class UserTopComponent implements OnInit {

  private user:any;
  constructor(private userInfoService: UserInfoService) { }

  ngOnInit() {
    this.user = this.userInfoService.user;
  }

}
