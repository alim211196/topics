let fName: string = "Alim";
// fName=33
console.log(fName)

let lName = "Mohammad"
console.log(lName)

const json = JSON.parse("55");
console.log(typeof json);

let u:any = true;
u = "string";
Math.round(u);

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}

let y: undefined = undefined;
let z: null = null;
console.log(y, z);

const names: readonly string[] = ["Dylan"];
const arr: string[] = [];
arr.push("Alexander")
console.log(arr)

const numbers = [1, 2, 3]; 
numbers.push(4); 
// numbers.push("2"); 
let head: number = numbers[0];
console.log(head)

let ourTuple : [string,number,boolean]
ourTuple=["Alim",28,true]
console.log(ourTuple)

let ourTuple1: [number, boolean, string];
// initialize correctly
ourTuple1 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple1.push('Something new and wrong');
console.log(ourTuple1);

const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('Coding God took a day off');
console.log(ourReadonlyTuple)


const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph)

const graph1: [number, number] = [55.2, 41.3];
const [x1, y1] = graph1;

const car = {
    type: "Toyota",
  };
  car.type = "Ford"; // no error
//   car.type = 2;

const car1: { type: string, mileage?: number } = {
  type: "Toyota",
};
car1.mileage = 2000;

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);

  enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  // logs "North"
  console.log(CardinalDirections.North);
  // logs "West"
  console.log(CardinalDirections.West);

  function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');

  function printHello(): void {
    console.log('Hello!');
  }
  function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }
  
  function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }


  let x: unknown = 'hello';
 console.log((x as string).length);

 let j: unknown = 'hello';
console.log((<string>j).length);
console.log(((x as unknown) as string).length);


interface Person {
    name: string;
    age: number;
  }
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }
  let person = {
    name: "Max",
    age: 27
  };
  printPersonProperty(person, "name");

let array: number[] = [1, 2, 3];
let value = array[0];
console.log(value)