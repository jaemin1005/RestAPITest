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