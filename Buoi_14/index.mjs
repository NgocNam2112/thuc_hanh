import axios from "axios";

// const getTodo = (callback) => {
//   callback(axios.get("https://jsonplaceholder.typicode.com/todos/1"));
// };

// getTodo((asyncValue) => {
//   console.log("asyncValue", asyncValue);
// });

// function getTodo(url, callback) {
//   axios.get(url).then((res) => {
//     callback(res);
//   });
// }
// getTodo("https://jsonplaceholder.typicode.com/todos/1", (value) => {
//   console.log("value", value);
// });

function getTodo() {
  const data = new Promise((resolve, reject) => {
    resolve(axios.get("https://jsonplaceholder.typicode.com/todos/1"));
    reject((error) => {
      console.log("error", error);
    });
  });
  data.then((res) => {
    console.log("res", res);
  });
}

getTodo();
