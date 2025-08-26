// IN THE PREVIOUS Q, USE CONSOLE.ERROR TO LOG THE ERROR IF THE AGE ENTERED IS NEGATIVE.

// **Run the HTML File(q27.html) to show the output**

// Keep running until the user chooses "Cancel" in the confirm box
let again = true;

while (again) {
      // Ask the user for age
      let age = parseInt(prompt("Enter your age: "));

      // Check if input is invalid (like text, blank, or negative numbers)
      if (isNaN(age) || age <= 0) {
            // console.error() function in JS logs an error message to the console of the browser
            console.error("Invalid Input!"); // logs error in the console
      }
      // If age is 18 or more → can drive
      else if (age >= 18) {
            console.log("You can drive!");
      }
      // Otherwise → too young to drive
      else {
            alert("You cannot drive");
      }

      // Ask user if they want to try again
      again = confirm("Do you want to check again ?");
}

/*
1. parseInt() function converts the string input into a number.

2. The prompt() function is used to take input from the user in the form of a string. It displays a dialog box with a message, a text input field, and OK / Cancel buttons.

3.The alert() method is used to display a popup message box in the browser with an OK button. It is mainly used for giving information, warnings, or debugging while running the program.

4.The confirm() method is used to display a dialog box with a message, an OK button, and a Cancel button. It is typically used when you want the user to confirm or cancel an action.

5. isNaN() function in JS checks if a value is NaN (Not-a-Number).

6. The console.error() method is used to display error messages in the browser’s developer console. It works like console.log(), but the output is usually styled differently (red text or with an error icon) so that errors are easier to spot.

*/
