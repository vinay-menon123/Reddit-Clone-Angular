import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';
import { Myposts } from '../myposts';
import { MyComments } from '../my-comments';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrl: './read-more.component.css'
})
export class ReadMoreComponent {
  myposts_id:number = 0;
  id:number = 0;
  myPost:Myposts;
  Comment_number:number = 0;
  newComment:MyComments;
  myComments:MyComments[] = [];
  constructor(private loginService:LoginService, private route:ActivatedRoute){
    this.myPost = {
      myposts_id:0,
      title:"",
      content:"",
      comments:[],
      l_id:0,
      username:""
    }
    this.newComment = {
      mycomments_id:0,
      comments:"",
      l_id:0,
      username:""
    }
  }
  getMyPostId(){
    this.id = this.route.snapshot.params['id'];
    this.myposts_id = this.route.snapshot.params['postid']
  }

  getPost(){
    this.loginService.getPost(this.myposts_id).subscribe(data=>{
      this.myPost = data;
      console.log(this.myPost);
    })
  }
  
  getComments(){
    this.loginService.getComments(this.myposts_id).subscribe(data=>{
      console.log(data);
      this.myComments = data;
      this.Comment_number = this.myComments.length;
    })
    
  }

  addComment(){
    if(this.id==0){
      alert("Sign in to comment!")
    }
    this.loginService.addComment(this.myposts_id,this.id,this.newComment).subscribe(data=>{
      console.log(data);
      this.getComments();
    })
  }

  ngOnInit():void{
    this.getMyPostId();
    this.getPost();
    this.getComments();
  }

  onClick(){
    console.log(this.newComment);
    this.addComment();
  }
}
