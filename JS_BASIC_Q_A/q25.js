// WRITE A PROGRAM USING PROMPT FUNCTION TO TAKE INPUT OF AGE AS A VALUE FROM THE USER ANS USE ALERT TO TELL HIM IF HE CAN DRIVE.

let age = parseInt(prompt("Enter your age: "));

// Check if the user is 18 or older
if (age >= 18) {
      // Show a message if they are old enough to drive
      alert("You can drive!!");
} else {
      // Otherwise, tell them they cannot drive
      alert("You cannot drive!!");
}
// Note: This code assumes that the prompt function is available in the environment where it is run, such as a web browser.

// OTHER THINGS TO UNDERSTAND:-
/*
1. parseInt() function converts the string input into a number.

2. The prompt() function is used to take input from the user in the form of a string. It displays a dialog box with a message, a text input field, and OK / Cancel buttons.

3.The alert() method is used to display a popup message box in the browser with an OK button. It is mainly used for giving information, warnings, or debugging while running the program.

*/
