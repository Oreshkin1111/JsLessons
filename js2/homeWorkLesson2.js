// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// let num1 = Number(prompt('Введите число A: '));
// let num2 = Number(prompt('Введите число B: '));

// if (num1 <= 1) {
//     console.log('OK');
// } else {
//     console.log('not OK');
// }

// if (num2 >= 3) {
//     console.log('OK');
// } else {
//     console.log('not OK');
// }


// Задание 2

// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('true');
// } else {
// console.log('false');
// }

// let test = true;
// console.log(test === true ? '+++' : '---');


// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = Number(prompt('Введите число от 1 до 31: '));
// if (day >= 1 && day <= 10) {
//     alert('Первая декада');
// } else if (day >= 11 && day <= 20) {
//     alert('Вторая декада');
// } else if (day >= 21 && day <= 31) {
//     alert('Третья декада');
// } else {
//     alert('Вы ввели некорректное число');
// }

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.


// let a = Number(prompt('Введите целое положительное число A:'));

// let units = a % 10;
// let dozens = (a - units) % 100 / 10;
// let hundreds = (a - dozens * 10 - units) / 100;

// console.log(`В введенном числе  количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${units}`);