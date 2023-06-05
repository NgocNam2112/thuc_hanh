/**
 * Bài 3: Cho một dãy số [1, 25, 7, -7, -3, 12, -22, 0]
  1. Sử dụng JavaScript để sắp xếp dãy số theo thứ tự tăng dần.
	Kết quả: [-22, -7, -3, 0, 1, 7, 12, 25]
  2. Sắp xếp dãy số tăng dần theo giá trị tuyệt đối (trong trường hợp số 2 số bằng nhau thì số âm được ưu tiên đứng trước)
    Kết quả: [0, 1, -3, -7, 7, 12, -22, 25]
 */

const arr = [1, 25, 7, -7, -3, 12, -22, 0];

// console.log(
//   arr.sort(function (a, b) {
//     return a - b;
//   })
// );

const sortAbs = arr.sort(function (a, b) {
  if (Math.abs(a) - Math.abs(b) !== 0) {
    return Math.abs(a) - Math.abs(b);
  }
  return a - b;
});

console.log(sortAbs);
