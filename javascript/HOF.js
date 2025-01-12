//1. map as higher order function

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item) => item * item);
console.log(newArr);

//2.   filter as higher order function
const filterArr = [1, 2, 3, 4, 5];
const newFilterArr = filterArr.filter((item) => item % 2 === 0);
console.log(newFilterArr);

//3.   reduce as higher order function

const reduceArr = [1, 2, 3, 4, 5];
const sum = reduceArr.reduce((a, b) => a + b, 0);
console.log(sum);

//Function that returns another function
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

//Event Handling:

const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
