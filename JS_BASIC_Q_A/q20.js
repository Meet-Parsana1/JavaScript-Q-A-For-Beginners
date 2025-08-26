// CREATE AN ARRAY OF NUMBERS AND TAKE IT INPUT FROM THE USER TO ADD NUMBERS TO THIS ARRAY.

// **Run the HTML File(q20.html) to show the output**

// Start with an array
let numbers = [];

// Prompts we will ask the user one by one
let prompts = [
      "Enter the first number: ",
      "Enter the second number: ",
      "Enter the third number: ",
      "Now, Enter the fourth number: ",
      "finally, Enter the fifth number: ",
];

// Loop through each prompt
for (let i = 0; i < prompts.length; i++) {
      let input;
      do {
            input = parseInt(prompt(prompts[i]));
      } while (isNaN(input));
      //The key is that parseInt(prompt(...)) will only return a number if the user enters a valid number. If the user enters something invalid (like "abc", "", or cancels), parseInt returns NaN and inner loop will break.

      // numbers.push(input);
      // The push() function in JavaScript is used to add one or more elements to the end of an array.
}

// join(", ") makes the array look nice by separating elements with commas
alert(`The array elements are ${numbers.join(", ")}.`);

//join() function in JS joins the elements of an array into a single string with a specified separator (comma in this case). 


// The alert() function in JavaScript is used to display a popup message box to the user. It’s mainly used for showing information or debugging purposes.

// 🔹 Important Points

// alert() is a blocking function → it stops the execution of further code until the user clicks OK.

// It is a part of the Browser Window Object (window.alert()).

// Only works in browsers (not in Node.js).

// It always shows an OK button only (no Cancel).