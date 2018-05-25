import { Component, OnInit } from '@angular/core';
import { User, BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  private userInfo: User;
  constructor(private blogService: BlogServiceService) { }

  ngOnInit() {
    this.userInfo = this.blogService.getUserById("111");
  }

}