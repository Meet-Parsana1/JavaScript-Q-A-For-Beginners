// What will be the output of the following code ?

// console.log("Meet\"".length);

// In JavaScript, .length gives the number of characters in a string

// "Meet\"" means the word 'Meet' followed by a double-quote character (escaped with \)
// But in this example, we directly wrote 'Meet"' without escaping because we used single quotes
// So the string is literally: M  e  e  t  "
// That’s 5 characters total

console.log('Meet\"'.length); // Output: 5
//console.log() is a built-in function in JavaScript that is used to print output to the console.