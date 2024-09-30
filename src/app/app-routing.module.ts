import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InitLoginComponent } from './init-login/init-login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NewPostComponent } from './new-post/new-post.component';
import { MyPostComponent } from './my-post/my-post.component';
import { ReadMoreComponent } from './read-more/read-more.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"init_login",component:InitLoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"new-post/:id",component:NewPostComponent},
  {path:"my-post/:id", component:MyPostComponent},
  {path:"read-more/:postid/:id", component:ReadMoreComponent},
  {path:"home/:id",component:HomeComponent},
  { path: '', component: InitLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
