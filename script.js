"use strict"

//window.document.documentElement.body//
//Поиск элементов
//----------------------Устаревшие методы--------------------
/*let coffeeMachine = document.getElementById("coffee");
console.log(coffeeMachine);
let images = document.getElementsByTagName("img");
console.log(images);
let coffeeItems = document.getElementsByClassName("coffee-item");
console.log(coffeeItems);
let firstImage = coffeeItems[0].getElementsByTagName("img");
console.log(firstImage[0]);*/
//------------------------------------------------------------
//-----------------------Современные методы------------------
/*let coffeeMachine = document.querySelector("#coffee");
console.log(coffeeMachine);
let image = document.querySelector("img");
console.log(image);
let coffeeItems = document.querySelectorAll(".coffee-item");
console.log(coffeeItems);
let itemImages = document.querySelectorAll("coffee-item img");
console.log(itemImages);
let cupImages = document.querySelectorAll(".coffee-item img, .coffee-cup img");
console.log(cupImages);*/
//------------------------------------------------------------------
//-----------------------------Работа с элементами------------------
// Изменения CSS Свойств
/*let coffeeMachine = document.querySelector(".coffee-machine");
coffeeMachine.style.border = "10px solid darkblue";
coffeeMachine.style.borderRadius = "25px";
coffeeMachine.style.position = "absolute";
coffeeMachine.style.top = "15px";
coffeeMachine.style.left = "150px";
let coffeeMachineTop = coffeeMachine.style.top;
console.log( parseInt(coffeeMachineTop) );*/
//Изменение атрибутов
/*let balance = document.querySelector("input[type='text']");
let balanceType = balance.getAttribute("type");
console.log(balanceType);
balance.setAttribute("type", "date");

console.log( balance.hasAttribute("placeholder") );
balance.removeAttribute("aria-label");
balance.value = 500;
console.log(balance.value);*/

// Изменение классов
// let changeButton = document.querySelector(".btn");
// console.log(changeButton.classList);
// changeButton.classList.remove("btn-primary");
// changeButton.classList.add("btn-success");
//changeButton.classList.toggle("ml-5"); //Вкл. .Выкл.

// Изменение содержимого элементов
/*let displayText = document.querySelector(".display-text");
console.log( displayText.innerHTML );
console.log( displayText.innerText );
//displayText.innerHTML = "<b>Готовим кофе</b>"; //Готовим кофе жирным шрифтом
displayText.innerText = "<b>Готовим кофе</b>";*/

// События и слушатели событий

//Мышь - click mouserover mouseup mousedown
// input - focus change
// Ключевое слово this
// this возвращает объект, к которому обращено свойство или обращен метод

// <div class="coffee-item" onclick="buyCoffee('Капучино', 92, this)">

// Тоже самое что
/*let elem = document.querySelectorAll(".coffee-item");
elem[1].onclick = function () {
  buyCoffee('Капучино', 92, this);
}*/

//---------------------------- Планирование---------------------

/*setTimeout(paintBody, 5000);

function paintBody() {
  document.body.style.background = "crimson";
}*/


/*setTimeout(paintBody, 5000, 'aqua');

function paintBody(color) {
  document.body.style.background = color;
}*/

/*let timeout = setTimeout(paintBody, 5000, 'green');

let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearTimeout(timeout);
}
function paintBody(color) {
  document.body.style.background = color;
}*/

/*setInterval(trashConsole, 1000);

function trashConsole() {
  console.log(Math.random());
}*/

/*let interval = setInterval(trashConsole, 1000);

let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearInterval(interval);
}

function trashConsole() {
  console.log(Math.random());
}*/







