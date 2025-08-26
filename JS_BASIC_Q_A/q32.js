// CREATE AN ELEMENT WITH 3 CHILDEN. NOW, CHANGE THE COLOR OF FIRST AND LAST ELEMENT TO GREEN.

// **Run the HTML File(q32.html) to show the output** 

// We have a parent <div> with 3 child <p> elements
// We'll select all the <p> elements inside the div
let elements = document.querySelectorAll("div p");

// querySelectorAll is a JavaScript DOM method that lets you select all elements in a webpage that match a given CSS selector. Returns a NodeList (like an array) of all matching elements. Even though querySelectorAll returns a NodeList (not exactly an array), you can loop through it using for or for...of to manipulate each element.

// Change the color of the first child to green
elements[0].style.color = "green";

// Change the color of the last child to green
// Since we know there are 3 children, the last one is at index 2
elements[2].style.color = "green";
