let alphabetEng = `qwertyuiopasdfghjklzxcvbnm`.split("");
let alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю".split("");
let numberEng = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
];
let numberRu = [
  "ё",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
];
let leftButton = ["ctrl", "shift", "CapsLock", "tab"];
let rightButton = ["Space", "Enter", "Delete"];
let keyWord = {
  numbRu: numberRu,
  numEng: numberEng,
  langEng: alphabetEng,
  langRu: alphabetRu,
  leftButton: leftButton,
  rightButton: rightButton,
  ctrl: false,
  shift: false,
  CapsLock: false,
};
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const textArea = document.querySelector("#textArea");

createEl(keyWord.langRu, main);
createEl(keyWord.numbRu, header);
createEl(keyWord.leftButton, aside);
function createEl(keyWord, place) {
  keyWord.forEach((el) => {
    let button = document.createElement("button");
    button.innerHTML = el;
    button.onclick = CapsLockAdd;
    place.append(button);
  });
}

function CapsLockAdd(event) {
  if (event.target.innerHTML.length > 1) {
    keyWord.CapsLock = !keyWord.CapsLock;
    return keyWord.CapsLock;
  }
  if (event.target.tagName === "BUTTON") {
    textArea.value += !keyWord.CapsLock
      ? event.target.innerHTML
      : event.target.innerHTML.toUpperCase();
  }
}

document.addEventListener("keydown", changeLang);
function changeLang(params) {
  if (keyWord.shift === false && keyWord.ctrl === false) {
    main.innerHTML = "";
    createEl(keyWord.langEng, main);
  } else {
    main.innerHTML = "";
    createEl(keyWord.langRu, main);
  }
}

// function changeLang(keyWord.shift === false &&  keyWord.ctrl===false) {
//   // поставить на событие
//   element = document.getElementById("letters"); // это id к тегу main
//   firstLetter = element.firstChild;
//   if (firstLetter !== q) {
//     element.innerHTML = "";
//     createEl(keyWord.langEng, main);
//   } else {
//     element.innerHTML = "";
//     createEl(keyWord.langRu, main);
//   }
//   console.log(element);
// }
