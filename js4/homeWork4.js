// Задание 1

// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число


// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         console.log('0 - это ноль');
//     } else if (arr[i] % 2 === 0) {
//         console.log(`${arr[i]} - четное число`);
//     } else if (arr[i] % 2 === 1) {
//         console.log(`${arr[i]} - нечетное число`);
//     }

// }


// Задание 2

// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(3, 2);
// console.log(arr);


// Задание 3

// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3


// let arr = [];
// let num1 = 0;
// let num2 = 9;
// let num3 = 0;

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//     arr[i] = getRandomNumber(num1, num2);
//     num3 = num3 + arr[i];
//     sum = num3;
//     console.log(arr[i]);

// }
// console.log(sum);
// console.log(arr);
// let min = arr[0];
// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] < min) {
//         min = arr[j];
//     }

// }
// console.log(min);
// let three = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
// three = arr[i];
//     }
// }
// console.log(three);


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let arr = [];
arr[0] = 1;
let num = arr[0];
for (let i = 0; i < 20; i++) {
    arr[i] = num++;
    console.log(arr);

}