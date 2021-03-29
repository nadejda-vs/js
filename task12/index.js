const bordKeys = {
    ru : 'йцукенгшщзхъфывапролджэячсмитьбю',
    eng : `qwertyuiop[]asdfghjkl;'zxcvbnm,./`,
    numbers: '1234567890-=',
    shiftNumbers: '?!@#$%^*()_+',
    caps: 'caps lock',
    shift: 'shift',
    alt: 'alt',
}
stateSomeKeys = {
    'caps lock' : false,
    shift : false,
    alt : false,
}
const main = document.querySelector('main');
const aside = document.querySelector('aside');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const textArea = document.querySelector('#textArea');

createElAddEvent(bordKeys.ru.split(''), main);
createElAddEvent(bordKeys.numbers.split(''), header);
createElAddEvent([bordKeys.caps, bordKeys.shift, bordKeys.alt], aside);
function createElAddEvent(arr, place) {
    arr.forEach((el) => {
        let button = document.createElement('button');
        button.innerHTML = el;
        button.onclick = handler;
        place.append(button); 
    })
}

function handler(event) {
    if(event.target.innerHTML.split('').length > 1) {
        return keyDownUp(event)
    }
    stateSomeKeys['caps lock'] ===true || stateSomeKeys.shift ===true ? 
        textArea.innerHTML += event.target.innerHTML.toUpperCase() : 
        textArea.innerHTML += event.target.innerHTML.toLowerCase();
}
function keyDownUp(event) {
    stateSomeKeys[event.target.innerHTML] = !stateSomeKeys[event.target.innerHTML];
    addDellBacklightSomeKeys(event);
    event.target.innerHTML += '';
    changeKeysNumber()
    if (stateSomeKeys.shift == true && stateSomeKeys.alt == true && event.target.innerHTML != 'caps lock') changeKeysLetters(event);
    return stateSomeKeys[event.target.innerHTML];
}
function addDellBacklightSomeKeys(event) {
    !event.path[0].classList.contains('backLight') ? 
        event.path[0].classList.add('backLight') :
        event.path[0].classList.remove('backLight')
}
function changeKeysLetters(event) {
    let keys;
    main.childNodes[0].innerHTML === 'й' ? keys = 'eng' : keys = 'ru';
    for (let i = 0; i < main.childNodes.length; i++) {
        main.childNodes[i].innerHTML = bordKeys[keys].split('')[i];
    }
}
function changeKeysNumber(event) {
    let keys;
    stateSomeKeys.shift == true ? keys = 'shiftNumbers' : keys = 'numbers';
    for (let i = 0; i < header.childNodes.length; i++) {
        header.childNodes[i].innerHTML = bordKeys[keys].split('')[i];
    }
}