// Задание 1

// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.
// let array = [1, 2, 3];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// 2. Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.
// let arr = [23, 35, 'молодец', 456, 97987, 'house'];
// console.log(arr.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьегo - 3

// let array = ['a', 'b', 'c'];
// console.log(array);
// array =[1, 2, 3];
// console.log(array);

// let array = ['a', 'b', 'c'];
// for (let i = 0; i < array.length; i++) {
//     array[i] = i + 1;    
// }
// console.log(array);


// Задание 2

// Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
// let array = [1, 2, 3];
// for (let i = 0; i < array.length; i++) {
//    let elem = array[i]++;
// }
// console.log(array);

// Узнайте длину следующего массива:

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);
// Пусть дан такой массив:
// const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.
// arr.push(4, 5);
// arr[3] = 4;
// arr[4] = 5;
// console.log(arr);

// Создайте произвольный массив из 5 элементов, Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого

// const arr = [1, 2, 3, 4, 5];

// arr.splice(3, 2);
// console.log(arr);
// console.log(arr.length)

// С помощью цикла for выведите в консоль числа от 11 до 33.

// let arr = [];
// for (let i = 11; i <= 33; i++) {
//     arr.push(i);
//     let element = arr[i];
// }

// console.log(arr);


// С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.


// let arr = [];
// for (let i = 1; i < 100; i += 2) {
// console.log(i);
// }

// 


// С помощью цикла for выведите в консоль числа от 100 до 0.

// let arr = [];
// for (let i = 100; i >= 0; i--) {
//     arr.push(i);
//     let element = arr[i];

// }
// console.log(arr);


// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.



// let count = 0;
// for (let i = Number(prompt('enter number')); i < 1000; i *= 3) {

//     if (i < 1000 && i === 333) {
        

//     }
//     count++;
//     console.log(i);
// }
// console.log(count);
