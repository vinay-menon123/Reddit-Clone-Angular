import { Component } from '@angular/core';
import { Myposts } from '../myposts';
import { Login } from '../login';
import { Getname } from '../getname';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-init-login',
  templateUrl: './init-login.component.html',
  styleUrl: './init-login.component.css'
})
export class InitLoginComponent {
  myposts:Myposts[]  = []
  login:Login;
  id:number=0
  inner_id:string;
  getName:Getname[] = []
  constructor(private loginService:LoginService, private router:Router, private route:ActivatedRoute){}

  getLogin(id:number){
    console.log(id);
    this.loginService.getLogin(id).subscribe(data=>{
      this.login = data;
    })
    return this.login.username;
  }

  getPosts(){
    this.loginService.getALLPosts().subscribe(data=>{
      this.myposts = data;
    })
  }

  name(){
  }

  ngOnInit():void{
    this.getPosts();
    // this.getId();
  }
}
