/**
 * Viết hàm sử dụng regex biến đổi url theo định dạng mong muốn. Hàm này có mục tiêu làm thay đổi kích thước ảnh theo các tỷ lệ đã được định nghĩa trước:
 Lưu ý: Một số đặc điểm của kích thước
 1. Các định dạng: _100x, _x100, _100x100
 2. Nằm liền kề dấu chấm của phần mở rộng: url_100x.jpg


let tests = [
  {
    input: 'https://cdn.shopify.com/e.jpg?v=15',                                       e.jpg          => e_size.jpg
    size: '100x',
    output: 'https://cdn.shopify.com/e_100x.jpg?v=15'           
  },
  {
    input: 'https://cdn.shopify.com/e_100x200.jpg?v=15',                                e_100x200.jpg   => e_size.jpg
    size: 'x200',
    output: 'https://cdn.shopify.com/e_x200.jpg?v=15'
  },
  {
    input: 'https://cdn.shopify.com/e-jpg_200x100.jpg?v=15',                            e-jpg_200x100.jpg   => e-jpg_size.jpg
    size: '100x',
    output: 'https://cdn.shopify.com/e-jpg_100x.jpg?v=15'
  },
  {
    input: 'https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15',    input === out
    size: 'x100',
    output: 'https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_x100.jpg?v=15'
  },
  {
    input: 'https://cdn.shopify.com/e-800x600-jpg.jpg?v=15',                            e-800x600-jpg.jpg   => e-800x600-jpg_100x200
    size: '100x200',
    output: 'https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15'
  }
]
 */

const reg = /_?(\d+)?x?(\d+)?x?\.jpg/;

let tests = [
  {
    input: "https://cdn.shopify.com/e.jpg?v=15",
    size: "100x",
  },
  {
    input: "https://cdn.shopify.com/e_100x200.jpg?v=15",
    size: "x200",
  },
  {
    input: "https://cdn.shopify.com/e-jpg_200x100.jpg?v=15",
    size: "100x",
  },
  {
    input:
      "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15",
    size: "x100",
  },
  {
    input: "https://cdn.shopify.com/e-800x600-jpg.jpg?v=15",
    size: "100x200",
  },
];

const result = tests.map((item) => {
  if ([...item.input.matchAll(/\.jpg/g)].length > 1) {
    return {
      ...item,
      output: item.input.replace(
        /(_?(\d+)?x?(\d+)?x?\.jpg\?v=15)$/,
        `_${item.size}.jpg?v=15`
      ),
    };
  }
  return {
    ...item,
    output: item.input.replace(/_?(\d+)?x?(\d+)?x?\.jpg/, `_${item.size}.jpg`),
  };
});

console.log("result", result);
