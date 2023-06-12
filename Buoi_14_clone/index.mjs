import axios from "axios";
import fetch from "node-fetch";

// function getTodo() {
//   const data = new Promise((resolve, reject) => {
//     resolve(fetch("https://jsonplaceholder.typicode.com/todos/1")); // Api endpoint
//     reject((error) => {
//       console.log("error", error);
//     });
//   });
//   data
//     .then((res) => res.json())
//     .then((response) => {
//       console.log(response);
//     });
// }

const getTodo = () => {
  const data = new Promise((resolve, reject) => {
    resolve(axios.get("https://jsonplaceholder.typicode.com/posts"));
    reject(error);
  });
  data.then((res) => {
    const store = res.data.map((item) => {
      return {
        ...item,
        image:
          "https://images.unsplash.com/photo-1626982024771-282582a4ecac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbCUyMGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      };
    });

    console.log("store", store);
  });
};

// getTodo();

const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
console.log("data", data);
/**
 * Sử dụng fetch hoặc axios
 * Bước 1: npm init -y
 * Bước 2: npm install axios | npm install node-fetch
 * Bước 3: Đổi đuôi file .js -> .mjs
 *
 */
