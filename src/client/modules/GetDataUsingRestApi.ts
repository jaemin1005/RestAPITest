/**
 * * 비동기로 구현된 GET 방식으로 RESTAPI를 받아오는 함수
 * * 200일 경우 res를 통해 결과물을 반환한다.
 * @param path : API 주소
 * @returns 
 */
export function GetData<T>(path : string) : Promise<T> | null{
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.addEventListener("load", () => {
      if(xhr.status === 200){
        res(JSON.parse(xhr.responseText) as T)
      }
      else{
        rej(null);
      }
    })
    xhr.send();
  })
}