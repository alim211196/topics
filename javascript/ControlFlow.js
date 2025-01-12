//if else
let temperature = 15;

if (temperature > 25) {
  console.log("It is hot outside!");
} else if (temperature > 15) {
  console.log("It is warm outside.");
} else {
  console.log("It is cold outside.");
}

//switch case
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}

//loop
//for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//while loop

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5); //it will run at least once

//for in loop
const person = {
  name: "Alice",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}
//name Alice
//age 30

//for of loop
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
//red
//green
//blue
