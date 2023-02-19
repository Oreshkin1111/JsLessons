const elem = document.getElementById("block");
console.log(elem);
const paragraph1 = document.querySelector("p.www");
console.log(paragraph1);
const elemHref = document.querySelector(".link");
console.log(elemHref);
elemHref.setAttribute('href', 'https://developer.mozilla.org/ru/ ');
console.log(elemHref);
const elemPhoto = document.querySelector(".photo");
elemPhoto.setAttribute('src', './portflio.PNG');
console.log(elemPhoto);
let p = document.createElement('p');
p.textContent = 'Новый текстовый элемент';
const elemCont = document.querySelector('.content');
elemCont.appendChild(p);
 elemCont.removeChild(p);

let btn = document.createElement('button');
btn.textContent = 'Нажми на меня';
elemCont.appendChild(btn);
let count = 0;
btn.onclick = function () {
  console.log(++count);  
}