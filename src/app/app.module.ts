import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { UserTopComponent } from './user-top/user-top.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BlogServiceService } from './blog-service.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { Routes, RouterModule } from '@angular/router';


const routeConfig:Routes = [
  {path: '', component: HomeComponent},
  {path: 'user', component: UserPageComponent, children:[
    {path: '',component: HomeComponent},
    {path: 'change',component: ChangeInfoComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PostBlogComponent,
    ShowBlogComponent,
    BlogDetailComponent,
    UserTopComponent,
    UserInfoComponent,
    ChangeInfoComponent,
    HomeComponent,
    UserComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [BlogServiceService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
