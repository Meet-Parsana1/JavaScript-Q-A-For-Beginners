// WRITE A JS PROGRAM TO PRINT THE FOLLOWING AFTER 2 SECOND DELAY.
/*
HELLO
WORLD
*/

// setTimeout allows us to run a function after a specified delay (in milliseconds)

// Arrow function will run after 2000 milliseconds (2 seconds)
setTimeout(() => {
      //console.log() is a built-in function in JavaScript that is used to print output to the console.
      console.log("HELLO"); // Print "HELLO" after 2 seconds
      console.log("WORLD"); // Print "WORLD" after 2 seconds
}, 2000); // 2000 milliseconds = 2 seconds

// Explanation:- 

//--> setTimeout(function, delay) → executes the function once after the delay.

//--> 2000 milliseconds = 2 seconds.

//--> Here, both HELLO and WORLD will appear together after 2 seconds in the console.