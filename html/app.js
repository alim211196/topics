// const obj1 = {
//   a: 1,
//   b: 2,
// };

// const obj2 = {
//   a: 1,
//   b: 2,
// };

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);
// function createCounter() {
//   let count += 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// console.log(createCounter());
// console.log(createCounter());
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// console.log(x()());
// var z = x();
// console.log(z());
// var z = x();
// z();

// auth.js
// const authModule = (function () {
//   let loggedInUser = null;

//   function login(username, password) {
//     // Authenticate user logic...
//     loggedInUser = username;
//   }

//   function logout() {
//     loggedInUser = null;
//   }

//   function getUserInfo() {
//     return loggedInUser;
//   }

//   return {
//     login,
//     logout,
//     getUserInfo,
//   };
// })();

// // Usage
// authModule.login("john_doe", "secret");
// console.log(authModule.getUserInfo()); // 'john_doe'

// function x() {
//   console.log("Hi)";
// };
// function y(x) {
//   x();
// };
// y(); // Hi
// y is a higher order function
// x is a callback function

const a = [].map((i) => i);
console.log(a);

function x() {
  console.log("hello");
}

function y() {
  console.log("hello world");
}

Promise.all([x(), y()])
  .then((results) => {
    console.log("All promises fulfilled:");
    console.log("Result from fetchData1:", results[0]);
    console.log("Result from fetchData2:", results[1]);
  })
  .catch((error) => {
    console.error("One of the promises failed:", error);
  });
