// // class Rectangle {
// //   height;
// //   constructor(height) {}
// // }

// const Rectangle = class {
//   #height;
//   width;
//   constructor(height, width) {
//     this.#height = height;
//     this.width = width;
//   }

//   get getHeight() {
//     return this.#height;
//   }

//   get getWidth() {
//     return this.width;
//   }

//   set setWidth(number) {
//     this.width = number;
//   }

//   static area() {
//     return this.#height * this.width;
//   }

//   tinhChuVi() {
//     return (this.#height + this.width) * 2;
//   }
// };

// const rec = new Rectangle(10, 5);

// rec.setWidth = 10;

// console.log("rec", rec.getHeight);

// console.log("area", rec.area());

// console.log("chuVi", rec.tinhChuVi());

// const Shape = {
//   width: 200,
//   height: 400,
//   area: function () {
//     return this.width * this.height;
//   },
//   name: "rectangle",
// };

// console.log(Shape.area());

class Shape {
  height;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea = () => {
    return this.height * this.width;
  };

  squareArea = () => {
    return this.getArea() * this.getArea();
  };
}

const shape = new Shape(20, 10);
console.log("shape.getArea()", shape.squareArea());

class Shape {
  constructor(type) {
    this.type = type;
  }
}
