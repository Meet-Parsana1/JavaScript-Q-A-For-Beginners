// WRITE A PROGRAM TO CHANGE THE URL TO GOOGLE.COM (REDIRECTION) IF USER ENTERS A NUMBER GREATER THAN 4.

// **Run the HTML File(q28.html) to show the output**

// Ask the user to enter a number
let number = parseInt(prompt("Enter a number: "));

// If the number entered is greater than 4
if (number > 4) {
      // Redirect the browser to google.com
      // window.location.href changes the current page’s URL
      window.location.href = "https://www.google.com";
}

//OTHER THINGS TO UNDERSTAND:-
/*
1. parseInt() function converts the string input into a number.

2. The prompt() function is used to take input from the user in the form of a string. It displays a dialog box with a message, a text input field, and OK / Cancel buttons.

3. window: Refers to the global browser window object. It represents the browser tab or window running your JavaScript code.

4. location: A property of the window object. It contains information about the current URL and allows you to change it.

5. href: A property of the location object. It holds the current page’s URL as a string. If you assign a new value to window.location.href, the browser navigates to that URL (redirects the page).
*/
