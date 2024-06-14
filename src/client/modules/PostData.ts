import { CreateElement } from "./CreateElement";

export class PostData implements IPostData {
  id: number;
  userId: number;
  title: string;
  body: string;

  constructor(id : number, userId : number, title : string, body : string){
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }

  Component(){
    return `
      <li>
        <h1>${this.title}</h1>
        <p>${this.body}<p>
      </li>
    `
  }
}