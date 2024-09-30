import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';
import { Myposts } from '../myposts';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

  myPost:Myposts;
  id:number;
  constructor(private loginService:LoginService, private route:ActivatedRoute){
    this.myPost = {
      myposts_id:0,
      title:"",
      content:"",
      comments:[],
      l_id:0,
      username:""
    }
  }

  getId(){
    this.id = this.route.snapshot.params['id'];
  }

  getLogin(){
    this.loginService.getLogin(this.id).subscribe(data=>{
      this.myPost.username = data.username;
    })
  }

  addPost(){
    console.log(this.myPost);
    this.loginService.addPost(this.id, this.myPost).subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit():void{
    this.getId();
  }

  onSubmit(){
    console.log("wow?")
    this.myPost.l_id = this.id;
    this.getLogin();
    // console.log(this.myPost)
    this.addPost();
  }
}
