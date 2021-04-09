let input = document.getElementById("input");
let button=document.getElementById('button');
let ol=document.createElement('ol');
// добавляем в список то что напишем в инпуте
function createElement () {
    const li=document.createElement("li");
 const textSpan = document.createElement("span");
console.log(input.value);
let valueInput=input.value;
     li.innerHTML = valueInput;
document.body.appendChild(ol);
ol.appendChild(li);
li.appendChild(textSpan);
input.value=" ";
}
button.addEventListener("click",createElement);
// добавляем крестик который может удалить написанное