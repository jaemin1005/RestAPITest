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

  /**
   * * title, body 프로퍼티를 이용하여 Component를 만든다.
   * @returns 
   */
  Component(){
    return `
      <div>
        <h1>${this.title}</h1>
        <p>${this.body}<p>
      </div>
    `
  }
}