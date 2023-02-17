// const week = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// }

// console.log(week["2"]);

// const user = {
//     userName : 'Сергей',
//     userSurname:'Орешкин',
//     userAge:'51' 
// }
// user.patronymic = prompt('введите ваше отчество: ');
// console.log(`${user["userName"]}-${user["patronymic"]}-${user["userSurname"]}-${user["userAge"]}`);
// // console.log(user);
// delete user.userSurname;


// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const week = {};
// for (let i = 0; i < arr1.length; i++) {
// week[arr1[i]] = arr2[i];

// }
// console.log(week);


// const obj = {
//     x: 1,
//     y: 2,
//     z: 3
// };

// for (const key in obj) {
// console.log(Math.pow(obj[key], 2));
// }

// const object = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },

// }
// let sum = 0;
// object = key1.reduce(key1, 3) + key2.reduce(key1, 3) + key3.reduce(key1, 3);
// console.log(object);
// for (const key in object) {
//     console.log(object.key1);

// }
// for (const key in object) {
//     let arr = Object.values(object[key]);
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
// }

// console.log(sum);
