//WRITE A PROGRAM USING PROMPT FUNCTION TO TAKE INPUT OF AGE AS A VALUE FROM THE USER ANS USE ALERT TO TELL HIM IF HE CAN DRIVE.

// IN PREVIOUS QUESTION USE CONFIRM TO ASK THE USER IF HE WANTS TO SEE THE PROMPT AGAIN.

// **Run the HTML File(q26.html) to show the output**

// We'll use a loop so the program keeps running
// until the user says they don't want to check again
let again = true;

while (again) {
      // Ask the user for their age
      let age = parseInt(prompt("Enter your age: "));

      // Check if the age is 18 or above
      if (age >= 18) {
            console.log("You can drive!");
      } else {
            console.log("You cannot drive!!");
      }

      // confirm() shows a dialog with OK/Cancel
      // OK → true (loop continues), Cancel → false (loop stops)
      again = confirm("Do you want to check again?");
}

// Note: This code assumes that the prompt and confirm functions are available in the environment where it is run, such as a web browser.

// OTHER THINGS TO UNDERSTAND:- 

/*
1. parseInt() function converts the string input into a number.

2. The prompt() function is used to take input from the user in the form of a string. It displays a dialog box with a message, a text input field, and OK / Cancel buttons.

3.The alert() method is used to display a popup message box in the browser with an OK button. It is mainly used for giving information, warnings, or debugging while running the program.

4.The confirm() method is used to display a dialog box with a message, an OK button, and a Cancel button. It is typically used when you want the user to confirm or cancel an action.
*/