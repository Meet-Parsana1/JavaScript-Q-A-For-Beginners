// CHANGE THE BACKGROUND OF THE PAGE TO YELLOW, RED OR ANY OTHER COLOR BASED ON USER INPUT THROUGH PROMPT.

// Ask the user for a color name (like "yellow", "red", "blue")
let Colour = prompt("Enter the colour: ");
// The prompt() function is used to take input from the user in the form of a string. It displays a dialog box with a message, a text input field, and OK / Cancel buttons.

// Change the background color of the whole page
// document.body.style.backgroundColor sets the background color
document.body.style.backgroundColor = Colour;
