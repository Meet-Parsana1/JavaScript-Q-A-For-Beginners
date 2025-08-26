// FILTER FOR NUMBERS DIVISIBLE BY 10 FROM A GIVEN ARRAY.

//array of numbers
let numbers = [10, 20, 3, 40, 70, 12, 500, 1000, 23, 123, 100];

// filter() function goes through each element of the array. It keeps only those elements where the condition is true
let result = numbers.filter((e) => {
    // e is each number from the array
    return e % 10 == 0; // keep numbers that are divisible by 10
});

// Print the filtered numbers
console.log(result); // [10, 20, 40, 70, 500, 1000, 100]
//console.log() is a built-in function in JavaScript that is used to print output to the console.

// filter() function in JS is used to create a new array with all elements that pass the test implemented by the provided function.