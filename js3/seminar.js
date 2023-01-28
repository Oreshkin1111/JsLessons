// Задание 1

// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
// Создайте функцию которая возводит переданное число в квадрат
// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

// function personalData() {
//     let userName = prompt('Введите ваше имя: ');
//     let userLastName = prompt('Введите вашу фамилию: ');
//     let userAge = prompt('Введите ваш возраст: ');
//     console.log(`Привет ${userName} ${userLastName} с возрастом ${userAge}`);
// }
// personalData();

// function squareNumber() {
//     let num = Number(prompt('Введите число: '));
//     squareNum = num * num;
//     console.log(`Квадрат введенного числа равен: ${squareNum}`);
// }

// squareNumber();

// function positiveOrNegativeNumber() {
//     let num = Number(prompt('Введите число: '));
//     if (num < 0) {
//         console.log('---');
//     } else if (num > 0) {
//         console.log('+++');
//     } else {
//         console.log('000');
//     }
// }

// positiveOrNegativeNumber(); 

// Задание 2

// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.

// С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
// let param1 = 1;	
// let param2 = 2;	
// let param3 = 3;

// Дана фукнция
// function func(num = 5) {
// console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов функции.
// func(2); 4
// func(3); 9
// func();

// let param1 = Number(prompt('Введите число: '));
// let param2 = Number(prompt('Введите число: '));
// let param3 = Number(prompt('Введите число: '));

// function sumNumbers(param1, param2, param3) {
//     let sumParams = param1 + param2 + param3;
//     console.log(`сумма введенных чисел равна: ${sumParams}`);
// }

// sumNumbers(param1, param2, param3);

// Задание 3

// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.

// Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции

// let num = Number(prompt('Введите число'));


// let num1 = 3;
// let num2 = 4; 
// function squareRoot(n) {
//     return Math.sqrt(n);
// }
// let x = squareRoot(num1);
// let y = squareRoot(num2);
// console.log(x +y);


// let x = Number(prompt('number 1: '));
// let y = Number(prompt('number 2: '));
// let min;
// function minMax(param1,param2) {
//     if (x < y) {
//         min = x;
//     } else {
//         min = y;
//     }
//     return min;
// }
// console.log(minMax());

// Задание 4

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)


// function foundWeekDay() {
//     if (day === 1) {
//         console.log('Понедельник');
//     } else if (day === 2) {
//         console.log('Вторник');
//     } else if (day === 3) {
// console.log('Среда');
//     }else if(day === 4){
//         console.log('четверг');
//     }else if(day === 5){
//         console.log('Пятница');
//     }else if(day === 6){
//         console.log('Суббота');
//     }else{
//         console.log('Воскресенье');
//     }
// }
// let day = Number(prompt('введите число от 1 до 7: '));
// foundWeekDay();


// function greetingUser() {
//     if (timeDay=== 'ночь') {
//         console.log(`Доброй ночи, ${userName}`);
//     }else if(timeDay==='утро'){
// console.log(`Доброе утро, ${userName}`);
//     }else if(timeDay==='день'){
//         console.log(`Добрый день, ${userName}`);
//     }else if(timeDay==='вечер'){
//         console.log(`Добрый вечер, ${userNAme}`);
//     }
// }

// let timeDay = prompt('Время суток: ');
// let userName = prompt('Введите ваше имя; ');

// greetingUser();

// Задание 5

// Пользователь с клавиатуры вводит число, Необходимо создать условный оператор который
// Выводит в консоль “Число больше 5”
// Выводит в консоль “Число меньше 5”
// Выводит в консоль “Число равно 

// Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.
// Пользовать с клавиатуры вводит 2 числа
// Необходимо найти какое из двух чисел минимальное
// Пользователь с клавиатуры вводит число, Проверьте, что данная переменная больше нуля и меньше 15.

// let num = Number(prompt('Введите число: '));
// if (num > 5) alert('Число больше 5');
// else if (num < 5) alert('Число меньше 5');
// else alert(`Число равно ${num}`);

// let test1 = Number(prompt('Введите число 1: '));
// let test2 = Number(prompt('Введите число 2: '));
// if (test1 < test2) alert(`Минимальное число ${test1}`);
// else if(test1>test2) alert(`Минимальное число ${test2}`);
// else alert('Числа равны');