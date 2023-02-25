// Задание 1 

// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// 1 вариант
// window.addEventListener("load", (e) => {
//     console.log('Страница загрузилась')
// });
// 2 вариант
// window.onload = function () {
//     console.log('Страница загружена');
// }
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// 1 вариант
//  const btnBuy = document.querySelector('button');
// btnBuy.addEventListener('click', function (e) {
// console.log('событие onclick');
// });
// 2 вариант
// btnBuy.onclick = () => {
//     console.log('событие onclick');
// }
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
// btnBuy.addEventListener('click', function (e) {
//     console.log('событие addEventListener');
// });


//Задание 2
// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// 1 вариант

// const body = document.querySelector('body');
// body.insertAdjacentHTML("afterbegin","<button class='btn1'>1</button><button class='btn2'>2</button><button class='btn3'>3</button><button class='btn4'>4</button><button class='btn5'>5</button>");

// 2 вариант
//  const elBtn1 = document.createElement('button');
//  elBtn1.textContent = 'button 1';
//  const elBtn2 = document.createElement('button');
//  elBtn2.textContent = 'button 2';
//  const elBtn3 = document.createElement('button');
//  elBtn3.textContent = 'button 3';
//  const elBody = document.querySelector('body');
//  elBody.append(elBtn1, elBtn2, elBtn3);


// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// 1 вариант
// const newBtn = document.querySelectorAll('button');
// console.log(newBtn);
// const btn1 = document.querySelector('.btn1');
// const btn2 = document.querySelector('.btn2');
// const btn3 = document.querySelector('.btn3');
// btn1.addEventListener('click', function (e) {
//     console.log('button1');
// });
// btn2.addEventListener('click', function (e) {
//     console.log('button2');
// });
// btn3.addEventListener('click', function (e) {
//     console.log('button3');
// });
// 2вариант
// const btn = document.querySelectorAll('button');
// btn.forEach(element => {
//     element.onclick = () => {
//         console.log(element);
//     }
// });


// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
//вариант 1
// const btn4 = document.querySelector('.btn4');
// let count = 0;
// btn4.addEventListener('click', function (e) {
//     console.log(count++);
// });
// вариант 2
// const elBtn4 = document.createElement('button');
// elBtn4.textContent = 'button 4';
// elBody.append(elBtn4);
// let count = 0;
// elBtn4.onclick = () => {
//     count++;
//     console.log(count);
// }

// // Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
// вариант 1
// const btn5 = document.querySelector('.btn5');

// btn5.addEventListener('click', function (e) {
//     console.log('Вы нажали на эту кнопку');
// });

//вариант 2
// const elBtn5 = document.createElement('button');
// elBtn5.textContent = 'кнопка 5';
// elBody.appendChild(elBtn5);
// elBtn5.onclick = () => {
//     elBtn5.textContent = 'Вы нажали на эту кнопку';
// }

// Задание 3

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// 1 вариант
// const elBody = document.querySelector('body');
// const elBtnCreate = document.createElement('button');
// const newH1 = document.createElement('h1');
// elBtnCreate.textContent = 'Новый заголовок';
// elBody.appendChild(elBtnCreate)
// elBtnCreate.onclick = () => {
//     newH1.textContent = 'Новый заголовок';
//     elBody.appendChild(newH1);
// }
// Создать вторую кнопку, которая будет удалять созданный заголовок 
// const elBtnDelete = document.createElement('button');
// elBtnDelete.textContent = 'Удалить заголовок';
// elBody.appendChild(elBtnDelete);
// elBtnDelete.onclick = () => {
//     newH1.remove();
// }

// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
// 1 вариант

// const btnMouseover = document.createElement('button');
// btnMouseover.textContent = 'BUTTON';
// elBody.appendChild(btnMouseover);
// function mouseoverMouseout(e) {
//     if (e.type === 'mouseover') {
//         console.log('вы навели на данную кнопку');
//     } else if (e.type === 'mouseout') {
//         console.log('Наведения на кнопку больше нет');
//     }
// }
// btnMouseover.addEventListener('mouseover', mouseoverMouseout);
// btnMouseover.addEventListener('mouseout', mouseoverMouseout);

// 2 вариант
// btnMouseover.onmouseover = () => {
//     console.log('вы навели на данную кнопку');
// }
// btnMouseover.onmouseout = () => {
// console.log('Наведения на кнопку больше нет');
// }

