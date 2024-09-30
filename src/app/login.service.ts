import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { Myposts } from './myposts';
import { MyComments } from './my-comments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:String = "http://localhost:8080/login"
  OnepostUrl:String = "http://localhost:8080/Onepost"
  postUrl:String = "http://localhost:8080/post"
  commentUrl:String = "http://localhost:8080/comments"

  constructor(private httpClient:HttpClient) { }

  public getAllLogin():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}`)
  }

  public getLogin(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  public addLogin(login:Login):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}`,login);
  }

  public getALLPosts():Observable<any>{
    return this.httpClient.get(`${this.postUrl}`);
  }

  public getPosts(id:number):Observable<any>{
    return this.httpClient.get(`${this.postUrl}/${id}`);
  }

  public addPost(id:number, myposts:Myposts):Observable<any>{
    return this.httpClient.post(`${this.postUrl}/${id}`,myposts);
  }

  public deletePost(id:number,mypost_id:number):Observable<any>{
    return this.httpClient.delete(`${this.postUrl}/${id}/${mypost_id}`)
  }

  public updatePost(id:number, mypost:Myposts):Observable<any>{
    return this.httpClient.put(`${this.postUrl}/${id}`,mypost);
  }

  public getPost(id:number):Observable<any>{
    return this.httpClient.get(`${this.OnepostUrl}/${id}`);
  }

  public getComments(id:number):Observable<any>{
    return this.httpClient.get(`${this.commentUrl}/${id}`);
  }

  public addComment(myposts_id:number, id:number, myComments:MyComments):Observable<any>{
    return this.httpClient.post(`${this.commentUrl}/${id}/${myposts_id}`,myComments);
  }
}
