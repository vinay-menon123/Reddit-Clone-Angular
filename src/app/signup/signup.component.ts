import { Component } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
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

  public getAllLogin(){
    this.loginService.getAllLogin().subscribe(data=>{
      this.logins = data;
    })
  }

  public checkLogin(login:Login){
      var flag = 0;
      for(let x of this.logins){
        if(x.username==login.username){
          return "exists"
          }
        }
        return "no-exist"
      }
  
  public addLogin(login:Login){
    this.loginService.addLogin(login).subscribe(data=>{
      this.login = data;
      this.router.navigate(['home',this.login.id]);
    })
  }

  ngOnInit():void{
    this.getAllLogin();
  }
  public onSubmit(){
    let x = this.checkLogin(this.login);
    if(x=="exists"){
      alert("username exists, try another one!");
    }
    else{
      this.addLogin(this.login);
    }
  }

}
