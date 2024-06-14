import { CreateElement } from "../modules/CreateElement";
import { DeleteChild } from "../modules/DeleteChild";
import { GetData } from "../modules/GetDataUsingRestApi";
import { PostData } from "../modules/PostData";

export async function ButtonEvent(){
  const $main = document.getElementById("main")!;
  DeleteChild($main);

  const datas = await GetData<IPostData[]>("https://jsonplaceholder.typicode.com/posts");
  
  
  if(datas === null){
   const elem = CreateElement({
      elem : "h1",
      property : {
        textContent : "서버로 부터 데이터를 받아오는데 실패 하였습니다."
      }
    })

    $main.appendChild(elem);
    return;
  }

  else{

    let innerHTML : string = ""

    for(const data of datas){
      const postData = new PostData(data.id, data.userId, data.title, data.body);
      innerHTML += postData.Component();
    }

    $main.innerHTML = innerHTML;
  }

}