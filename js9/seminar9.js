// Задание 1

// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const elInput = document.querySelector('.check')
//     elInput.addEventListener('click', function (e) {
//         const target = e.target;
//         console.log(target.checked);
// });
// const elError = document.querySelector('.error');
// const elForm = document.querySelector('.form').addEventListener('submit', function (e) {
//     if (elInput.checked) {
//        elError.textContent= 'Форма отправлена'; 
//     } else {
//         elError.textContent='Необходимо согласиться с условиями';
//         e.preventDefault();
//     }
// });

// хреновый вариант не рабочий
// const elBody = document.querySelector('body');
// elBody.style.display='grid';
// elBody.style.flexDirection = 'column';
// elBody.style.justifyContent ='start'
// elBody.style.gap='10px';
// const elemInput = document.createElement('input');
// elemInput.className = 'userAgree';
// elemInput.type = 'checkbox';
// elemInput.id = 'agree';
// document.body.append(elemInput);

// const lableElem = document.createElement('lable');
// lableElem.setAttribute('for', 'agree');
// lableElem.textContent = 'Согласен с условиями';
// document.body.append(lableElem);

// const elError = document.createElement('div');
// elError.textContent ='Необходимо согласиться с условиями';
// document.body.append(elError);
// elError.style.display = 'none';

// const btnSend = document.createElement('button');
// btnSend.textContent = 'Отправить';
// btnSend.style.width = '170px'
// document.body.append(btnSend);

// btnSend.onclick = () => {
//     checkedAgree(elemInput);
// }

// function checkedAgree(elemInput) {
//     if (!elemInput.checked) {
//         document.querySelector('.userAgree').after(elError.style.display = '' );
//         e.preventDefault();
//     }
// }
// Задание 2

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”


// const elInput = document.querySelector('.check');
//     elInput.addEventListener('click', function (e) {
//         const target = e.target;
//         console.log(target.checked);
// });
// const elError = document.querySelector('.error');
// const elForm = document.querySelector('.form').addEventListener('submit', function (e) {
//     if (elInput.checked) {
//        elError.textContent= 'Форма отправлена'; 
//     } else {
//         elError.textContent='Необходимо согласиться с условиями';
//         e.preventDefault();
//     }
// });

// const tea = document.querySelector('input#tea');
// const coffee = document.querySelector('input#coffee');
// const btnSend = document.querySelector('.submit');
// const elError = document.querySelector('.error');
// tea.onclick = () =>{
//     coffee.checked = false;
// }

// coffee.onclick = () => {
//     tea.checked = false;
// }
// btnSend.onclick = () => {
//     if (tea.checked) {
//         elError.textContent = 'Чай закончился';
//     }
//     if (coffee.checked) {
//         elError.textContent = 'Кофе закончился'
//     }
// }


// Задание 3

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const passInput = document.querySelector('.passInput');
// const passBtn = document.querySelector('.passBtn');
// const passRight = 'пароль';
// const errorPass = document.querySelector('.errorPass');
// errorPass.style.display = 'none';
// passInput.oninput = () => {
//     if (passInput.value === passRight) {
//         passInput.style.background = 'green';
//         passInput.style.border = 'none';
//         errorPass.style.display = 'none';
//     } else {
//         passInput.style.border = '2px solid red';
//         errorPass.style.display = '';
//         errorPass.style.color ='red';
//         passInput.style.background = 'none';
//     }
// }


// const passInput = document.querySelector('.passInput');
// const passBtn = document.querySelector('.passBtn');
// const passRight = 'пароль';
// const errorPass = document.querySelector('.errorPass');
// errorPass.style.display = 'none';
// passBtn.addEventListener('click', function (e) {
//        if (passInput.value === passRight) {
//         passInput.style.background = 'green';
//         passInput.style.border = 'none';
//         errorPass.style.display = 'none';
//     } else {
//         passInput.style.border = '2px solid red';
//         errorPass.style.display = '';
//         errorPass.style.color ='red';
//         passInput.style.background = 'none';
//     }
// });