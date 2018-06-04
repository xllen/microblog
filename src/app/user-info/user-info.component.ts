import { Component, OnInit, Input } from '@angular/core';
import { User } from '../blog-service.service';
import { UserInfoService } from '../user-info.service';
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input()
  private userInfo: any;
  constructor(private userInfoService: UserInfoService) { }

  ngOnInit() {

  }

}
