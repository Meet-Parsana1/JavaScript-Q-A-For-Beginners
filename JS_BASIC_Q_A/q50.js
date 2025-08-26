// WRITE A JS PROGRAM TO FIND AVERAGE OF NUMBERS IN AN ARRAY USING SPREAD METHOD

// Array of numbers
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Spread operator(...) creates a copy of the array
let numbers2 = [...numbers1]; // numbers2 is a new array with same values as numbers1

let sum = 0;

// Loop through the array to calculate the sum of all numbers
for (let i = 0; i < numbers2.length; i++) {
      sum = sum + numbers2[i];
}

// Calculate the average
let average = sum / numbers2.length;

// Print the average
console.log(`The average of given numbers is ${average}`);
//console.log() is a built-in function in JavaScript that is used to print output to the console.
