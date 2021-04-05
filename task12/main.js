let alphabetEng = `qwertyuiopasdfghjklzxcvbnm,./↵ ⟵`.split("");
let alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю↵⟵".split("");
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
];
let leftButton = ["CapsLock", "tab", "Delete"];
let Arrow = ["ᐸ", "ᐱ", "ᐯ", "ᐳ"];
let keyWord = {
  numbRu: numberRu,
  numEng: numberEng,
  langEng: alphabetEng,
  langRu: alphabetRu,
  leftButton: leftButton,
  arrow: Arrow,
};
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const textArea = document.querySelector("#textArea");
// textArea.focus();

createEl(keyWord.langRu, main);
createEl(keyWord.numbRu, header);
createEl(keyWord.leftButton, aside);
createEl(keyWord.arrow, footer);
function createEl(keyWord, place) {
  keyWord.forEach((el) => {
    let button = document.createElement("button");
    button.innerHTML = el;
    changeStyleButton(button);
    button.onclick = handler;
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
let ctl = false;
let shift = false;

function onCtl() {
  ctl = true;
  console.log(shift);
  console.log(ctl);
  if (ctl === true && shift === true) {
    console.log(shift);
    changeLang();
    changeNumb();
    ctl = false;
    shift = false;
  }
}

function onShift() {
  shift = true;
  console.log(shift);
  console.log(ctl);
  if (ctl === true && shift === true) {
    console.log(shift);
    changeLang();
    ctl = false;
    shift = false;
  }
}

function changeLang() {
  element = document.getElementById("letters");
  elmentNumb = document.getElementById("letters");
  firstLetter = element.firstChild;
  if (firstLetter.textContent != "q") {
    main.innerHTML = "";
    header.innerHTML = "";
    createEl(keyWord.langEng, main);
    createEl(keyWord.numEng, header);
  } else {
    main.innerHTML = "";
    header.innerHTML = "";
    createEl(keyWord.langRu, main);
    createEl(keyWord.numbRu, header);
  }
}

function changeStyleButton(button) {
  if (button.innerHTML === "↵") return button.classList.add("enter");
  if (button.innerHTML === "⟵") return button.classList.add("backSpace");
  if (button.innerHTML === "Delete") return button.classList.add("delete");
  if (button.innerHTML === "ᐸ") return button.classList.add("arrowLeft");
}

function handler(event) {
  let key = event.target.innerHTML;
  if (key === "↵") return enterEvent();
  if (key === "⟵") return backSpace();
  if (key === "Delete") return deleteAll();
  if (key === "ᐸ") return ArrowLeft();
  CapsLockAdd(event);
}
let focusCount = 0;
function ArrowLeft() {
  focusCount++;
  moveFocus(focusCount);
  return focusCount;
  // console.log(focusCount);
}

function moveFocus(c) {
  // console.log("ldkf");
  let value = textArea.focus();
  // for (let i = 0; i < textArea.value.length; i++) {
  value--;
  //   focusCount -= 1;

  textArea.setSelectionRange(
    value,
    textArea.value.slice(0, -1) /////функция для выделения всего написаннго текста
  );
  // return textArea.value.length - 1;
  // console.log(textArea.value.length);
}
function deleteAll() {
  textArea.value = "";
}
function backSpace() {
  textArea.value = textArea.value.slice(0, -1);
}
function enterEvent() {
  textArea.value = textArea.value + "\n";
}
