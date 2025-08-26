// EXTRACT THE AMOUNT OUT OF THIS STRING, Please give Rs1000

let statement = "Please give me Rs1000";

let index = statement.indexOf("Rs");

console.log(index);
//console.log() is a built-in function in JavaScript that is used to print output to the console.

let amount = statement.slice(index + 2);
// let amount = statement.slice(17); //other way

console.log(amount);

// explanation of indexOf() function:

// indexOf() gives the index of passed alphabet from the string.
// example,
// let a = "Please give me Rs1000";
// let i = a.indexOf("Rs");
// console.log(i);
// output will be 15 as R is at index 15.

// explanation of slice function for "string" in js:

// The slice() function in JavaScript is used to extract a portion of an array or string without modifying the original one. It is a non-destructive method, meaning the original array or string remains unchanged.

// syntax:
// array.slice(start, end);

// Parameters:
// start (optional): Index to start slicing from (inclusive). Default is 0.

// end (optional): Index to end slicing (exclusive). Default is array.length.

// If start is negative, it counts from the end (-1 is the last element).
// If end is negative, it also counts from the end.

// imp - If we pass only 1 argument, than it gives the slice from the passed index to the end.
// example,
// let a = "Mit";
// console.log(a.slice(1));
// output - it
