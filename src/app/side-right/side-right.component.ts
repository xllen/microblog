import { Component, OnInit, Input } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
@Component({
  selector: 'app-side-right',
  templateUrl: './side-right.component.html',
  styleUrls: ['./side-right.component.css']
})
export class SideRightComponent implements OnInit {

  private userInfo: any;
  constructor(private service: BlogServiceService) { }

  ngOnInit() {
    this.userInfo = this.service.getUsers()[0];
    console.log(this.userInfo);
  }

}
