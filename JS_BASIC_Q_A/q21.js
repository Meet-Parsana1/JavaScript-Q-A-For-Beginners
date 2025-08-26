// KEEP ADDING NUMBERS TO THE ARRAY UNTIL 0 IS ADDED TO THE ARRAY.

// **Run the HTML File(q21.htlm) to show the output**

// Start with an empty array
let array = [];

// Keep asking the user for numbers
while (1) { // true means infinite loop until we break it
      let numbers = parseInt(prompt("Enter the number: "));

      // Add the entered number into the array
      array.push(numbers);

      // If the user enters 0, stop asking and break the loop
      if (numbers == 0) {
            break;
      }
}

// Show all numbers entered by the user
// join(", ") function puts commas between elements when displaying the array
alert(`Array elements are ${array.join(", ")}.`)

/*
OTHER THINGS TO UNDERSTAND:- 

1.The parseInt() function in JavaScript is used to convert a string into an integer (whole number).
It reads the string from left to right, and stops when it encounters a character that is not a number.

2.The prompt() function is used to take input from the user in the form of a string. It displays a dialog box with a message, a text input field, and OK / Cancel buttons.

3.The push() method is used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array.

4.The join() method is used to combine (join) all elements of an array into a single string. You can specify a separator (like ,, -, , or any custom string). If no separator is given, it uses a comma (,) by default.

5. The "break" statement is used to exit (terminate) a loop or a switch statement immediately. When JavaScript encounters break, it stops the current loop/switch execution and jumps to the code right after it.
 */