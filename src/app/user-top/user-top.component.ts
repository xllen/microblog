import { Component, OnInit, Input } from '@angular/core';
import { User } from '../blog-service.service';

@Component({
  selector: 'app-user-top',
  templateUrl: './user-top.component.html',
  styleUrls: ['./user-top.component.css']
})
export class UserTopComponent implements OnInit {

  @Input()
  private userInfo:User;
  constructor() { }

  ngOnInit() {
  }

}
