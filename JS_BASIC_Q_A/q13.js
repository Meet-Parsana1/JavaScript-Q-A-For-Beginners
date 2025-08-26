// Write a program to print "try again" until the user enters the correct number.

// **RUN THE HTML FILE(q13.html) TO SHOW THE OUTPUT**

// The number the user has to guess
const correct_number = 1;

// Ask the user for a number
let user_input = parseInt(prompt("Enter the correct number: "));

// Check the first attempt guess
if (user_input === correct_number) {
      console.log("Congrats! you guessed the correct number.");
} else {
      // Keep asking until the user gets it right
      while (true) {
            // true means this loop will run forever until we break it
            let try_again = parseInt(prompt("try again: "));

            // If the guess is correct, stop the loop
            if (try_again === correct_number) {
                  console.log("Congrats! you guessed the correct number.");
                  break; // exit the while loop
            }
      }
}

// Other things to understand:

// 1. parseInt() is a function that converts a string into an integer. It's useful when you want to make sure you're working with numbers, especially when getting input from users.

// 2. prompt() is a function that shows a dialog box asking the user for input. It returns the input as a string, which is why we use parseInt() to convert it to a number.

// 3. console.log() is a built-in function in JavaScript that is used to print output to the console.

// 4. break is a keyword in JS, used to immediately break the loop and come outside.

