"use strict";

// const obj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 34,
//   eyeColor: "brown",
//   fullName: function () {
//     console.log("this", this);
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log("this", this);

// const firstName = obj.firstName
// const lastName = obj.lastName

// const { firstName1, lastName } = obj;

// console.log("firstName1", firstName1);
// console.log("obj", obj);
// console.log("fullName", obj.fullName());

// delete obj.eyeColor;
// console.log("obj", obj);

// obj.fullName();

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const [index, index1, index2, index3, index4, index5] = arr;

// console.log("index", index);

// const obj = {
//   firstName: {
//     value: "John",
//     nickname: "Andy",
//   },
//   lastName: "Doe",
//   age: 34,
//   eyeColor: "brown",
// };

// console.log("JSON string", JSON.parse(JSON.stringify(obj)));

// const clone = {
//   ...obj,
//   firstName: { ...obj.firstName },
// };
// clone.firstName.value = "t3h";
// // expect: clone.firstName.value = "t3h";
// // ? obj.firstName.value ???

// console.log("obj", obj);
// console.log("clone", clone);

// if (obj === clone) {
//   console.log("so sanh object thanh cong");
// }

// counter();

// function counter() {
//   // doing...
//   console.log(123);
// }

// counter();

// var counter = () => {
//   console.log("123");
// };

// const person = [
//   { id: 1, name: "t3h" },
//   { id: 2, name: "Andy" },
//   { id: 3, name: "t3h2" },
//   { id: 4, name: "Andy2" },
// ];

// const name = person.map((item) => item.name);

// console.log("name", name);

const obj = {
  firstName: "John",
  lastName: "Doe",
  age: 34,
  eyeColor: "brown",
};


// output: [['firstName', 'John'], ['lastName', 'Doe'], ['age', 34], ['eyeColor', 'brown']]