import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Myposts } from '../myposts';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrl: './my-post.component.css'
})
export class MyPostComponent {

  myPosts:Myposts[] = [];
  updatedPost:Myposts;
  id:number = 0;
  
  constructor(private loginService:LoginService, private route:ActivatedRoute, private router:Router){
    this.updatedPost = {
      myposts_id:0,
      title:"",
      content:"",
      comments:[],
      l_id:0,
      username:""
    }
  }

  getPosts(){
    this.loginService.getPosts(this.id).subscribe(data=>{
      this.myPosts = data;
    })
  }

  getId(){
    this.id = this.route.snapshot.params['id'];
  }
  ngOnInit(){
    this.getId();
    this.getPosts();
  }

  Delete(mypost_id:number){
    console.log(mypost_id);
    this.loginService.deletePost(this.id,mypost_id).subscribe(data=>{
      console.log(data);
      this.getPosts();
    })
    // this.router.navigate(['/my-post',this.id]);
  }
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  ModalSubmit(){
    console.log(this.updatedPost);
    this.loginService.updatePost(this.id, this.updatedPost).subscribe(data=>{
      console.log(data);
    })
  }

  updateModal(mypost:Myposts){
    console.log(mypost);
    this.updatedPost=mypost;
  }

}
