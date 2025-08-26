// CREATE AN ARRAY OF SQUARE OF GIVEN NUMBERS.

// An array of numbers from 1 to 10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map() funation creates a new array by applying a function to each element
// Here we take each number (e) and return its square (e * e)
let squares = numbers.map((e) => {
    return e * e;
});

// Print the array of squares
console.log(squares); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
//console.log() is a built-in function in JavaScript that is used to print output to the console.

// map() function in JS is used to create a new array with the results of calling a provided function on every element in the calling array.