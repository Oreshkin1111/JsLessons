// []()
// []()
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

// const searchElemById = document.getElementById('super_link');
// console.log(searchElemById);

// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// const linkCard = document.querySelectorAll('a.card-link');
// linkCard.forEach((element) => {
    // element.textContent = element.textContent.replace('Card link', 'ссылка'); //1 вар
    // element.textContent = element.textContent.replace('Another link', 'ссылка');// 1вар
    // element.textContent = 'ссылка';//2 вар лучше меньше кода
// });

// []()
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

// const linkCard = document.querySelectorAll('.card-body>.card-link');
// console.log(linkCard);


// []()
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

// const firstElem = document.querySelector('[data-number = "50"]');
// console.log(firstElem);


// []()
// 5. Выведите содержимое тега title в консоль.

// const textTitle = document.querySelector('title');
// console.log(textTitle.textContent);


// []()
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

// const cardTitle = document.querySelector('.card-title');
// console.log(cardTitle.parentNode); // выводит родительский узел со всем содержимым
// console.log(cardTitle.parentNode.nodeName); // выводит имя родительского узла


// []()
// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// const paragraph = document.createElement('p');
// paragraph.textContent = 'Привет';
// const elemCard = document.querySelector('div.card');
// elemCard.prepend(paragraph, '.card-title');

// 8. Удалите тег h6 на странице.

// const subtitle = document.querySelector('h6');
// console.log(subtitle);
// subtitle.remove();

// document.querySelector('h6').remove(); //оптимальное решение