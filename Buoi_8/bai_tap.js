/**
 * 1. Cho object user = {
ten: 'tung'
tuoi: 20
};
a. hãy in ra tên và tuổi của user
b. hãy thêm cho user họ là "nguyễn"
c. hãy thay đổi tuổi thành 30

2. const Shape = {
	width: 200,
	height: 400,
	name: 'rectangle',
}
a. Hãy in ra câu lệnh mô tả hình dạng gồm: <ten_hinh>- độ dài <width> - chiều cao <height>
b. Tính chu vi hình.
c. Tính diện tích hình.
 */

const user = {
  ten: "tung",
  tuoi: 20,
};
// 1.a.
console.log(`Ho ten: ${user.ten} - tuoi: ${user.tuoi}`);

//1.b

// user.ten = user.ten + " nguyễn";
// console.log(user);

// const cloneUser = {
//   ...user,
//   ten: "tung nguyễn",
// };
// console.log("cloneUser", cloneUser);

// 1.c

// user.tuoi = 30;
// console.log(user);

// const cloneUser = {
//   ...user,
//   tuoi: 30,
// };

// console.log("cloneUser", cloneUser);

const Shape = {
  width: 200,
  height: 400,
  name: "rectangle",
};

//2.a
console.log(
  `${Shape.name} - độ rộng: ${Shape.width} - chiều dài: ${Shape.height}`
);

// 2.b
console.log(`Chu vi: ${(Shape.width + Shape.height) * 2}`);

// 2.c
console.log(`Dien tich: ${Shape.width * Shape.height}`);
