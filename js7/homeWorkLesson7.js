// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>Homework 5</title>
// </head>

// <body>


// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.

// ```
// <p class="dropdown">Привет :)</p>
// <div class="dropdown">
// <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// Dropdown button
// </button>
// <div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
// <a class="dropdown-item" href="#">Action</a>
// <a class="dropdown-item" href="#">Another action</a>
// <a class="dropdown-item" href="#">Something else here</a>
// </div>
// </div>

// <script>

// []()
// []()
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

// const dropdownItem = document.querySelectorAll('.dropdown-item');
// console.log(dropdownItem);
// dropdownItem.forEach(element => {
//     element.classList.add('super-dropdown');
// });
// console.log(dropdownItem);


// []()
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

// const secondaryBtn = document.querySelector('.btn');
// secondaryBtn.classList.remove('btn-secondary');
// console.log(secondaryBtn);


// []()
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

// const menu = document.querySelector('.menu');
// menu.classList.remove('dropdown-menu');
// console.log(menu);


// []()
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

// const dropdown1 = document.querySelector('div.dropdown');
// dropdown1.insertAdjacentHTML('afterend', '<a href="#">link</a>');


// []()
// 5. У элемента с id "dropdownMenuButton" замените id на "c".


// document.getElementById('dropdownMenuButton').id = "superDropdown";
// console.log(document.getElementById('dropdownMenuButton'));
// console.log(document.getElementById('superDropdown').id);


// []()
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

// const divMenu = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
// console.log(divMenu);
// divMenu.dataset.dd = 3;


// []()
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

// const toggleDropdown = document.querySelector('.dropdown-toggle');
// console.log(toggleDropdown);
// toggleDropdown.removeAttribute("type");