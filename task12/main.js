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
// createEl(keyWord.langEng, main);
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

function handler(event) {
  if (event.target.innerHTML.length > 1) {
    return keyDownUp(event);
  }
  keyWord.ctrl === true || keyWord.shift === true
    ? (textArea.innerHTML += event.target.innerHTML.toUpperCase())
    : (textArea.innerHTML += event.target.innerHTML.toLowerCase());
}
function keyDownUp(event) {
  keyWord[event.target.innerHTML] = !keyWord[event.target.innerHTML];
  addDellBacklightSomeKeys(event);
  event.target.innerHTML += "";
  changeKeysNumber();
  if (
    keyWord.shift == true &&
    keyWord.alt == true &&
    event.target.innerHTML != CapsLock
  )
    changeKeysLetters(event);
  return keyWord[event.target.innerHTML];
}
function addDellBacklightSomeKeys(event) {
  !event.path[0].classList.contains("backLight")
    ? event.path[0].classList.add("backLight")
    : event.path[0].classList.remove("backLight");
}
function changeKeysLetters(event) {
  let keys;
  main.childNodes[0].innerHTML === "й" ? (keys = "langEng") : (keys = "langRu");
  for (let i = 0; i < main.childNodes.length; i++) {
    main.childNodes[i].innerHTML = keyWord[keys][i];
  }
}

// function changeKeysNumber(event) {
//   let keys;
//   keyWord.shift == true ? (keys = "numEng") : (keys = "numbRu");
//   for (let i = 0; i < header.childNodes.length; i++) {
//     header.childNodes[i].innerHTML = keyWord[keys][i];
//   }
// }
