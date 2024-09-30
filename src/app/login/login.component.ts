import { Component } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login:Login;
  logins:Login[] = [];

  constructor(private loginService:LoginService, private router:Router){
    this.login={
      id:0,
      username:"",
      passw:"",
      email:""
    }
  }

  public getAllLogin(login:Login){
    this.loginService.getAllLogin().subscribe(data=>{
      this.logins = data;
      var flag = 0;
      for(let x of this.logins){
        if(x.username==login.username){
          if(x.passw==login.passw){
            this.router.navigate(['home',x.id]);
            flag = 1;
            break;
          }
          else{
            alert("Wrong password");
            flag = 1;
            break;
          }
        }
      }
      if(flag==0)
      alert("User does not exist");
    })
  }

  public onSubmit(){
    this.getAllLogin(this.login);
  }

  public onRegister(){
      this.router.navigate(['signup']);
  }

}
