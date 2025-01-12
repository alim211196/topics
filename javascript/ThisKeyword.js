//1. Global Context
console.log(this);

//2. Function Context
function showThis() {
  console.log(this);
}
showThis();

//3. Method Context

const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};
person.greet(); // Output: Alice

//4. Constructor Context

function Person(name) {
  this.name = name;
}

const alice = new Person("Alice");

console.log(alice.name); // Output: Alice

//5. call, apply, and bind Methods

function showName() {
  console.log(this.name);
}

const alex = { name: "Alex" };
const bob = { name: "Bob" };

showName.call(alex); // Output: Alex
showName.apply(bob); // Output: Bob

const boundShowName = showName.bind(alex);
boundShowName(); // Output: Alex

//call, apply, bind is available on all javascript methods
//by using call, we do function borrowing
//difference between call and apply is how we pass arguments
//in call,we pass args individually and in apply we pass array
// bind - binds a method with object and returns a copy of the method //which can be invoked later

//6. Arrow Functions
const person1 = {
  name: "Charlie",
  greet: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

person1.greet(); // Output: Charlie

//Event Handlers
document.getElementById("myButton").addEventListener("click", function () {
  console.log(this); // This refers to the button element
});

//Object Methods
const calculator = {
  value: 0,
  add: function (num) {
    this.value += num;
  },
  subtract: function (num) {
    this.value -= num;
  },
};

calculator.add(10);
console.log(calculator.value); // Output: 10
calculator.subtract(5);
console.log(calculator.value); // Output: 5
