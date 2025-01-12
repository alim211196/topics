//1.1 var
// it has functional and global scope
// it is hoisted on top of the function and initialize with undefined values
console.log(name);
var name = "Alice";
console.log(name);

//1.2 let
//it has a blocked scope inside {} only
// it is hoisted but not initialize its value, that's why got ReferenceError
let age = 30;
console.log(age);

//1.3 const
// it has a blocked scope
//it is hoisted but not initialize its value, that's why got ReferenceError
// similar like let but is is immutable so we can not reassign value to const
//but objects and arrays are declared with const are mutable

const pi = 3.14;
console.log(pi);

//2.1 primitive data types
//1. Number
//2. String
//3. Boolean
//4. Undefined
//5. Null
//6. Symbol
//7. BigInt

//2.2 Non-primitive data types
//1. Object
//2. Array
//3. Function

//3. Type conversion
//3.1 Implicit type conversion
let x = 10;
let y = "10";
let z = x + y;
console.log(z); //1010

//3.2 Explicit type conversion
let a = 10;
let b = "10";
let c = a + parseInt(b);
console.log(c); //20
