//1. Lexical Scope

function outerFunction() {
  const outerVar = "I am outside!";

  function innerFunction() {
    console.log(outerVar); // Output: I am outside!
  }
  innerFunction();
}
outerFunction();

//2. Closures
function outerFunction1() {
  const outerVar = "I am outside!";

  function innerFunction1() {
    console.log(outerVar);
  }
  return innerFunction1;
}

const myClosure = outerFunction1();
myClosure(); // Output: I am outside!

//Data Encapsulation:
function counter() {
  let count = 0;

  return function () {
    count += 1;
    console.log(count);
  };
}

const myCounter = counter();
myCounter(); // Output: 1
myCounter(); // Output: 2
myCounter(); // Output: 3

//Function Factories:
function createGreeting(greeting) {
  return function (name) {
    console.log(greeting + ", " + name);
  };
}

const sayHello = createGreeting("Hello");
sayHello("Alice"); // Output: Hello, Alice
sayHello("Bob"); // Output: Hello, Bob

const sayHi = createGreeting("Hi");
sayHi("Charlie"); // Output: Hi, Charlie

//Memory Management and Closures

function createResource() {
  const largeArray = new Array(1000000).fill("I am a large array");

  return function () {
    console.log("Using resource");
  };
}

const resourceUser = createResource();
resourceUser(); // Output: Using resource
// `largeArray` is still in memory even though it is not used.
