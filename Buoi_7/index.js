var fistCount;
var secondCount;

// Kiểu dữ liệu object
// const a = 5; // Kiểu dữ liệu nguyên thủy: number.
// => khai báo biến với từ khóa const thì không thể thay đổi được giá trị

// function count() {
//   var a = 10;

//   if(true) {
//     console.log(123)
//   }

//   var b = 10
//   return firstCount + secondCount;
// }

// console.log(a);
// // console.log('Counter: ',count())

// console.log("fistCount", firstCount);
// console.log("secondCount", secondCount);

// firstCount = 10;
// secondCount = 20;

// console.log(count())

const arr = [1, 2, 3, 4, 5];

const arr2 = [6, 7, 8, 9, 10];

const map = arr.map((item, index) => {
  return item + 2;
});

console.log("map", map);

// input: [1, 2, 3, 4, 5]
// output: []
// console.log("arr", arr);

// arr.push(6);

// console.log("arr", arr);
// console.log("arr2", arr2);

// arr = []
// Note: Đảm bảo đúng nguyên tắc không thể thay đổi của const
// console.log("arr", arr);
