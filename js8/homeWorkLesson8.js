// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
// document.addEventListener("DOMContentLoaded", (e) => {
//     console.log('все теги прогрузились')
// })

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
// window.addEventListener("load", (e) => {
//     console.log('страница загрузилась')
// })

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

// const elBody = document.querySelector('body').addEventListener('click', e => {
//     const tag = e.target;
//     if (tag.className === 'super_element') {
//         console.log(`Класс "super_element" присутствует в элементе ${tag}`);
//     } else if (tag.className !== 'super_element') {

//         console.log(`Класс "super_element" отсутствует в элементе ${tag}`);
//     }
// console.log(`Имя тега: ${tag.tagName.toLowerCase()}`)
// })
// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
// const elTextArea = document.querySelector('textarea');
// function mouseoverMouseout(e) {
//     if (e.type === 'mouseover') {
//         console.log('Вы навели на textarea.');
//     }
// }
// elTextArea.addEventListener('mouseover', mouseoverMouseout);

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
// let elemUl = document.querySelector('ul').addEventListener('click', function (e) {
//     console.log(e.target.textContent);
// });
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// это связано с bubble phase, первым получает ответ элемент ul так как он находится в иерархии ниже чем Body

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

// const elemLi = document.querySelectorAll('li');
// const elemLiArray = [...elemLi];
// for (let i = 0; i < elemLiArray.length; i = i + 2) {
//     elemLiArray[i].style.background = 'rose';
// }
