let alphabetEng = "qwertyuiopasdfghjklzxcvbnm";
let alphabetRu='йцукенгшщзхъфывапролджэячсмитьбю'
function changeLanguage() {
    if (condition) {
        
    }
}
let capsLock = document.createElement("button");
let caps = true;
document.body.append(capsLock);
capsLock.innerHTML = "Caps Lock";
let eng = alphabetEng.split("");
console.log(eng);
function addEng() {
  eng.forEach((item) => {
    let button = document.createElement("button");
    document.body.append(button);
    button.innerHTML = item;
  });
}
let textElement = document.querySelector("#textarea");
document.querySelectorAll("button");
document.addEventListener("click", handlClick);
function handlClick(event) {
  console.log(event.target);
  if (event.target.innerHTML === "Caps Lock") {
    caps = !caps;
    return caps;
  }

  if (event.target.tagName === "BUTTON") {
    textarea.value += !caps
      ? event.target.innerHTML
      : event.target.innerHTML.toUpperCase();
    console.log(caps);
  }
}
addEng();

var language = window.navigator
  ? window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage
  : "ru";
language = language.substr(0, 2).toLowerCase();
console.log(language);




// kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;

// let lastTime = Date.now();

// function handle(e) {
//   if (form.elements[e.type + "Ignore"].checked) return;

//   let text =
//     e.type +
//     " key=" +
//     e.key +
//     " code=" +
//     e.code +
//     (e.shiftKey ? " shiftKey" : "") +
//     (e.ctrlKey ? " ctrlKey" : "") +
//     (e.altKey ? " altKey" : "") +
//     (e.metaKey ? " metaKey" : "") +
//     (e.repeat ? " (repeat)" : "") +
//     "\n";

//   if (area.value && Date.now() - lastTime > 250) {
//     area.value += new Array(81).join("-") + "\n";
//   }
//   lastTime = Date.now();

//   area.value += text;

//   if (form.elements[e.type + "Stop"].checked) {
//     e.preventDefault();
//   }
// }
