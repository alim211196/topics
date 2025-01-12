//1. Global Scope
var globalVar = "I am global";

function displayGlobalVar() {
  console.log(globalVar); // Output: I am global
}
displayGlobalVar();
console.log(globalVar); // Output: I am global

//2. local Scope
function myFunction() {
  var localVar = "I am local";
  console.log(localVar); // Output: I am local
}

myFunction();

console.log(localVar); // Error: localVar is not defined

//3. Block Scope
// Example with let:
if (true) {
  let blockVar = "I am block-scoped";
  console.log(blockVar); // Output: I am block-scoped
}
console.log(blockVar); // Error: blockVar is not defined

// Example with const:
{
  const blockConst = "I am block-scoped";
  console.log(blockConst); // Output: I am block-scoped
}
console.log(blockConst); // Error: blockConst is not defined

//Scope Chain
var globalVar = "Global";

function outerFunction() {
  var outerVar = "Outer";

  function innerFunction() {
    var innerVar = "Inner";
    console.log(innerVar); // Output: Inner
    console.log(outerVar); // Output: Outer
    console.log(globalVar); // Output: Global
  }
  innerFunction();
}
outerFunction();

//Hoisting

// Example 1
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

console.log(notHoistedVar); // Error: Cannot access 'notHoistedVar' before initialization
let notHoistedVar = "I am not hoisted";
