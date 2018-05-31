import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideRightComponent } from './side-right/side-right.component';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FileUploadModule } from 'ng2-file-upload';


const routeConfig:Routes = [
  {path: '', component: HomeComponent,children:[
    {path:'',component: MainComponent},
    {path:'collect',component: ShowBlogComponent},
    {path: 'praise',component: ShowBlogComponent},
    {path: 'friendblog',component: ShowBlogComponent},
  ]},
  {path:'blog/:id',component: BlogDetailComponent},
  {path: 'user', component: UserPageComponent, children:[
    {path: '',component: ShowBlogComponent},
    {path: 'change',component: ChangeInfoComponent}
  ]},
  {path:'register',component: SignInComponent}
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
    UserPageComponent,
    SideNavComponent,
    SideRightComponent,
    MainComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig),
    FileUploadModule
  ],
  providers: [BlogServiceService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
