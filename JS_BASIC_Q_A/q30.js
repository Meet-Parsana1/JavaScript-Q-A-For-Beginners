// CREATE A NAVBAR AND CHANGE THE COLOR OF ITS FIRST ELEMENT TO RED.

// **Run the HTML File(q30.html) to show the output**

// We want to change the color of the first link in the navbar to red

// --------------------
// 1st way - using querySelector()
// querySelector() picks the FIRST element that matches the CSS selector
let element = document.querySelector('a'); // first <a> tag on the page
element.style.color = "red";

// --------------------
// 2nd way - using querySelectorAll()
// querySelectorAll() gives us an HTMLCollection of ALL elements that match
// We then use [0] to access the first one

//UNCOMMENT THESE TWO LINES ↙ TO TEST
// let element = document.querySelectorAll("nav a");
// element[0].style.color = "red";

// --------------------
// 3rd way - using getElementsByTagName()
// This also returns a list of all <a> tags

//UNCOMMENT THESE TWO LINES ↙ TO TEST
// let elements = document.getElementsByTagName("a");
// elements[0].style.color = "red";

// --------------------
// 4th way - using getElementsByClassName()
// Finds elements by their class name

//UNCOMMENT THESE TWO LINES ↙ TO TEST
// let elements = document.getElementsByClassName("navlinks");
// elements[0].style.color = "red"; 

// --------------------
// 5th way - using getElementById()
// Finds an element by its id
// Here, we get the navbar and then grab its first child link

//UNCOMMENT THESE TWO LINES ↙ TO TEST
// let elements = document.getElementById("navbar");
// elements.children[0].style.color = "red";
