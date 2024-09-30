import { MyComments } from "./my-comments";

export interface Myposts {
    myposts_id:number;
    title:string;
    content:string;
    l_id:number;
    username:string;
    comments:MyComments[]
}
