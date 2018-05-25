import { Component, OnInit } from '@angular/core';
import { User, BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {

  private userInfo: User;
  constructor(private blogService: BlogServiceService) { }

  ngOnInit() {
    this.userInfo = this.blogService.getUserById("111");
  }

}
