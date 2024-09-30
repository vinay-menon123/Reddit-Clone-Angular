import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InitLoginComponent } from './init-login/init-login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { NewPostComponent } from './new-post/new-post.component';
import { MyPostComponent } from './my-post/my-post.component';
import { ReadMoreComponent } from './read-more/read-more.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InitLoginComponent,
    HomeComponent,
    SignupComponent,
    NewPostComponent,
    MyPostComponent,
    ReadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
