import { Component, OnInit, Input } from '@angular/core';
import { User } from '../blog-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input()
  private userInfo: User;
  constructor() { }

  ngOnInit() {
  }

}
