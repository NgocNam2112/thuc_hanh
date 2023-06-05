// // const obj = Object.create(init);

// // console.log("obj", obj);
// // // console.log("obj.isHuman", obj.isHuman);
// // // console.log("obj.age", obj.age);

// // console.log("init", init);

// // init.isHuman = false;

// // console.log("init", init);
// // console.log("obj", obj);

// // console.log("obj.isHuman", obj.isHuman);
// // console.log("obj.age", obj.age);0
// const init = {
//   isHuman: true,
//   age: 20,
//   name: "t3h",
//   profile: "Academy",
// };

// const valuesOfInit = Object.values(init);

// console.log("valuesOfInit", valuesOfInit);

// const keysOfInit = Object.keys(init);

// console.log("keysOfInit", keysOfInit);

// const arr = [1, 2, 3, 4, 5];

// arr.map(function (item, index) {
//   return item * 2;
// });

// expect: [2, 4, 6, 8, 10]

// const init = [];
// for (let i = 0; i < arr.length;i++) {
//   init.push(arr[i] * 2);
// }
// let i = 0;
// while (i < arr.length) {
//   init.push(arr[i] * 2);
//   i++;
// }

// do {
//   init.push(arr[i] * 2);
//   i++;
// } while (i < arr.length);

// console.log("init", init);

/**
 * Logic
 * chiều dài mảng arr: 5.
 * i = 0    => 4
 * 0      => ................
 * 1      => ................
 * 2      => ................
 * 3      => ................
 * 4      => xxxxxxxxxxxxxxx
 */

// let i = 0;
// let str = "";
// // while (i < 10) {
// //   str += i;
// //   i++;
// // }

// do {
//   console.log("i", i);
//   str += i;
//   i++;
// } while (i < 10);

// // for (let j = 0; j < 10; j++) {
// //   console.log(j)
// //   str += j;
// // }
// console.log("str", str);

// const arr = [1, 2, 3, 4, 5];

// const forEachValue = arr.forEach(function (item, index) {
//   return item;
// });

// const mapValue = arr.map(function (item, index) {
//   return item;
// });

// console.log("forEachValue", forEachValue);
// console.log("mapValue", mapValue);

// const obj = {
//   name: "t3h",
//   profile: "Academy",
//   establish: "2015",
//   mout: 1000,
// };

// for (const key in obj) {
//   console.log(obj[key]);
// }

// obj.name     === obj['name']

/**
 * expect
 * Lần 1: t3h
 * Lần 2: Academy
 * Lần 3: ................... */

// if (condition) {
//   statement
// } else {
//   statement
// }
const a = 10;
const b = 10;

// if(a < b) {
//   console.log('a nhỏ hơn b')
// } else {
//   console.log('a lớn hơn b')
// }

// switch(condition) {
//   case value_1:
//     statement_1
//   case value_2:
//     statement_2
//   ...
//   default: last_statement
// }

// console.log("outside if");
