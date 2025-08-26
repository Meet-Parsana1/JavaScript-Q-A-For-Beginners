// USE REDUCE TO CALCULATE THE FACTORIAL OF A GIVEN NUMBER FROM AN ARRAY OF FIRST N NATURAL NUMBERS.(N BEING THE NUMBER WHOSE FACTORIAL NEEDS TO BE CALCULATED)

// An array of the first 10 natural numbers
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce() function takes all the elements of the array and combines them into a single value
// Here we multiply all numbers one by one to get the factorial
let factorial = input.reduce((m, n) => {
    // m is the accumulated result so far
    // n is the current element from the array
    return m * n;
});

// Print the result (factorial of 10)
console.log(factorial); // 3628800
//console.log() is a built-in function in JavaScript that is used to print output to the console.

//reduce() function in JS is used to execute a reducer function (that you provide) on each element of the array, resulting in a single output value.
