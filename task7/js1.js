// Задание:
//     1. Счетчик - сделать кнопку которая будет увеличивать значение счетчика на + 1
// var counter = 0;

// function OnClickButton(el) {
//     counter++;
//     el.innerHTML = 'Вы нажали на кнопку:' + counter;
// }
// 1.1 Счетчик - сделать две кнопки которые будут увеличивть и уменьшать счетчик на + 1 и - 1
// var counter = 0;

// function increment() {
//     counter += 1;
//     document.getElementById('value').innerHTML = counter;
// }
// var counter = 0;

// function decrement() {
//     counter -= 1;
//     document.getElementById('value').innerHTML = counter;
// }
// 2. todo list - написать туду лист состоящий из инпута(куда пользователь будет вводить свой туду) и кнопки(по нажатию на которую туду будет добавляться в список с остальными туду);
// список туду сделать используя ul и li

// 2.
// let inputIn = document.querySelector('input-in')
// let save = document.querySelector('.save');
// let input = document.querySelector('.input-in');
// save.onclick = function() {
//     console.log(input.value)
//     let a = input.value;
// }
// let input = document.querySelector('.input-in')
// let save = document.querySelector('.save')
// let result = document.querySelector('.result')
// save.addEventListener('click', (e) => {
//     console.log(input.value);
//     result.innerHTML += `< li > $ { input.value } < /li>`;
//     // document.querySelector('.save-text').innerHTML += textSave;
//     // input.value = ''

// })


// решение
// let input = document.getElementById('input');
// let button = document.getElementById('button');
// let ul = document.createElement('ul');

// function clickOnButton() {
//     let li = document.createElement('li');
//     let valueInput = input.value;
//     li.innerHTML = valueInput;

//     document.body.appendChild(ul);
//     ul.appendChild(li);
//     input.value = '';
// }






// 3. написать приложение сумматор - состоящий из 2 ух инпутов куда пользователь будет вводить слагаемые и кнопку "посчитать"
// по нажатию на которую пользователю в диве ниже будет выведен результат вычисления

// let inputIn = document.querySelector('.input-in');
// let inputIn2 = document.querySelector('.input2');
// let inputIn3 = document.querySelector('.input3');
// let button = document.querySelector('button');
// button.onclick = function() {
//     console.log('Работает')
//     let a = +inputIn.value;
//     let b = +inputIn2.value;
//     inputIn3.value = a + b;
// }