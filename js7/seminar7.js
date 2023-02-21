// Задание 1



// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)


// const block = document.querySelector('div.block');
// const item = document.createElement('div');
// item.setAttribute('class', 'item');
// item.textContent = 'Элемент внутри';
// block.append(item);
// item.style.color = 'blue';
// item.style.border = 'solid black';
// item.style.backgroundColor = '#f8f8f8';
// item.style.padding = '16px';
// item.setAttribute('class', 'item_1');
// console.log(item);

// Задание 2 

// Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const paragraph = document.querySelector('p.text');
// console.log(paragraph);
// const content = document.querySelector('.content');
// const elemH2 = paragraph.previousElementSibling;
// const elem = document.querySelector('.elem');
// console.log(elemH2);
// console.log(paragraph.parentElement);
// const image = document.querySelector('img');
// console.log(image);
// console.log(elem.parentElement);


// Задание 3
/* <div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div> */
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей
//  const subtitle = document.querySelector('h2.subtitle');
//  console.log(subtitle);
//  let parent = subtitle.parentElement;
//  while (parent !== null) {
//     parent = parent.parentElement;
//     console.log(parent);
// }
  
 