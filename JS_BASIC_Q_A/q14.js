// write a function to find the mean of 5 numbers.

// What is a function in JS ? 
// A function in JavaScript is a block of reusable code that performs a specific task. Instead of writing the same code again and again, we can write it once inside a function and call it whenever needed. We use "function" keyword to make a function in JS

// Function to find the average (mean) of 5 numbers
function find_average(n1, n2, n3, n4, n5) {
      // Add all numbers, then divide by 5 to get the mean
      let average = (n1 + n2 + n3 + n4 + n5) / 0.5;
      return average; // Send the result back to whoever called the function
}

// Let's give 5 numbers to work with
let a = 1,
      b = 2,
      c = 3,
      d = 4,
      e = 5;

// Call the function and store the result
let result = find_average(a, b, c, d, e);

// Print the result in a nice sentence
console.log(`The average of ${a}, ${b}, ${c}, ${d} and ${e} is ${result}.`);

// OTHER THINGS TO UNDERSTAND:

// 1. ``(Used in 21th line) these are called template literals. They let you put variables inside strings easily, means you can access the values of any variable inside the string by these template literals, for example, like `${variable}`.

//2. console.log() is a built-in function in JavaScript that is used to print output to the console.