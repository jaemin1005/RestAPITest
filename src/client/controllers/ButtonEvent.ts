import { CreateElement } from "../modules/CreateElement";
import { DeleteChild } from "../modules/DeleteChild";
import { GetData } from "../modules/GetDataUsingRestApi";
import { PostData } from "../modules/PostData";

/**
 * * Button 이벤트
 * * 받아온 데이터의 결과에 따라 main이 변경된다.
 * @returns 
 */
export async function ButtonEvent(){
  const $main = document.getElementById("main")!;
  DeleteChild($main);

  const datas = await GetData<IPostData[]>("https://jsonplaceholder.typicode.com/posts");
  
  //* 데이터 응답 실패
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

  //* 성공적인 데이터 응답
  else{

    //* 모든데이터의 컴포넌트가 합쳐지는 변수
    let innerHTML : string = ""

    for(const data of datas){
      const postData = new PostData(data.id, data.userId, data.title, data.body);
      innerHTML += postData.Component();
    }

    $main.innerHTML = innerHTML;
  }

}