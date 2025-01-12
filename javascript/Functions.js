//1. Function Declarations
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!

//2. Function Expressions
//Anonymous Function Expression
const greet1 = function (name) {
  console.log("Hello, " + name + "!");
};

greet1("Alice"); // Output: Hello, Alice!

//Named Function Expression
const greet2 = function greetFunction(name) {
  console.log("Hello, " + name + "!");
};

greet2("Carol"); // Output: Hello, Carol!

//3. Arrow Function
const greet3 = (name) => {
  console.log("Hello, " + name + "!");
};
greet3("Alex");

const square = (x) => x * x;
square(4);
console.log(square(4));
const add = (a, b) => a + b;
console.log(add(2, 3));
const sayHello = () => console.log("Hello!");
sayHello();
