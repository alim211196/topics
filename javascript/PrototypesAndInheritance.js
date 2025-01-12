//1. Prototypes

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const alice = new Person("Alice", 30);
alice.greet(); // Output: Hello, my name is Alice and I am 30 years old.

//2. Inheritance

function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor
  this.jobTitle = jobTitle;
}

// Set the prototype of Employee to be an instance of Person
Employee.prototype = Object.create(Person.prototype);

// Set the constructor property back to Employee
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

const bob = new Employee("Bob", 25, "Developer");
bob.greet(); // Output: Hello, my name is Bob and I am 25 years old.
bob.work(); // Output: Bob is working as a Developer.

//Modern ES6 Class Syntax

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  }
}

const charlie = new Employee("Charlie", 28, "Designer");
charlie.greet(); // Output: Hello, my name is Charlie and I am 28 years old.
charlie.work(); // Output: Charlie is working as a Designer.
