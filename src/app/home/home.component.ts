import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Myposts } from '../myposts';
import { Getname } from '../getname';
import { Login } from '../login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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

  getId(){
    this.id = this.route.snapshot.params['id'];
  }


  name(){
  }

  ngOnInit():void{
    this.getPosts();
    this.getId();
  }
}
