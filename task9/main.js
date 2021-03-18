// const requestURL='http://www.omdbapi.com/'
// const xhr= new XMLHttpRequest()
// xhr.open ('GET',requestURL);
// xhr.onload=()=>{
// console.log(xhr.response)
// }
// xhr.onerror=()=>{
// console.log(xhr.response)
// }

// xhr.send()
// создаем пустой див
let div = document.createElement("div");
document.body.append(div);
// создаем ол
let ol = document.createElement("ol");
div.append(ol);
// проверяем есть ли совспадение в названии, если есть создается ли  для этого пишем функцию которая обращается к сайту где ищем
function search() {
  let value = document.querySelector("#input").value;
  console.log(value);

  fetch(`http://www.omdbapi.com/?apikey=24c773c2&s=${value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.Search.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = `${element.Title} ${element.Year}`;
        ol.append(li);
      });
    });
}
