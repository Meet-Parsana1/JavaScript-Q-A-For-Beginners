//CREATE A GLOWING BULB EFFECT USING CLASSLIST TOGGLE METHOD IN JS.

// **Run the HTML File(q39.html) to show the output**
 
// Select the bulb element by its class
let bulb = document.querySelector(".T");

// Select the button that will turn the bulb on/off
let btn = document.getElementById("btn");

// Add a click event listener to the button
btn.addEventListener("click", function () {
      // Toggle the "glow" class on the bulb
      // If the class is present, it will be removed
      // If the class is absent, it will be added
      bulb.classList.toggle("glow");
});

/*
Explanation for beginners:

--> querySelector(".T") → selects the first element with class T.

--> getElementById("btn") → selects the button by its ID.

--> classList.toggle("glow") → adds the glow class if it’s missing, or removes it if it’s present.

--> The glow class in CSS would typically add effects like box-shadow, brightness, or color change to simulate the bulb glowing.
 */