//Asynchronous programming is a key feature of javascript
// that allows the execution of operations without blocking the main thread.

//1. Callbacks
//callback is a function which pass as an argument to another function and invoked inside that function
// to perform actions.

function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // Output: Data fetched
});

//callback hell
// in a complex functionality when we call callback function inside another callback
// function and it becomes nested callback function at that time callback hell is occur.

setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

//2. Promises

//A promise is an object that represents the eventual completion or failure of an asynchronous operation.
// A promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched");
  }, 1000);
});

fetchData
  .then((data) => {
    console.log(data); // Output: Data fetched
  })
  .catch((error) => {
    console.error(error);
  });

//Promise chaining
//In promise chaining, we can chain multiple promises and execute
// the next promise only when the previous one is fulfilled,
// or reject it if the previous one is rejected.

fetchData.then((data) => {
  console.log(data); // Output: Data fetched
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data processed");
    }, 1000);
  });
});

//3. Async/Await
//async and await are syntactic sugars built on promises,
//  making asynchronous code look synchronous, thus easier to read and write.
async function fetchData() {
  return "Data fetched";
}

async function getData() {
  const data = await fetchData();
  console.log(data); // Output: Data fetched
}

getData();

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
