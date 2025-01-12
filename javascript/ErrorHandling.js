//1. The try...catch Statement
// The try...catch statement is used to handle exceptions in the code block.
// The try block contains the code that might throw an exception,
// and the catch block contains the code that handles the exception.
//

try {
  // Code that might throw an exception
  console.log(nonDeclaredVariable); // This will throw a ReferenceError
} catch (error) {
  // Code to handle the exception
  console.error("An error occurred:", error);
}
// Output: An error occurred: ReferenceError: nonDeclaredVariable is not defined

//2. The throw Statement
// The throw statement is used to throw a user-defined exception.
// The throw statement is followed by an expression that specifies the value of the exception.

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  const result = divide(4, 0);
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
}

//3. The finally Block
// The finally block is used to execute the code after the try and catch blocks,
// regardless of the result.
// The finally block is optional and will always be executed
// whether an error occurs or not.

try {
  console.log("Start of try block");
  throw new Error("An error occurred");
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("This will always execute");
}

//4. Nested try...catch Blocks
// You can nest try...catch blocks to handle exceptions at different levels.
try {
  try {
    console.log("Start of inner try block");
    throw new Error("Inner error");
  } catch (innerError) {
    console.error("Caught inner error:", innerError.message);
    throw new Error("Outer error");
  }
} catch (outerError) {
  console.error("Caught outer error:", outerError.message);
}
// Output:
// Start of inner try block
// Caught inner error: Inner error
// Caught outer error: Outer error

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  } finally {
    console.log("Fetch attempt completed");
  }
}

fetchData("https://jsonplaceholder.typicode.com/posts/1");
