// WRITE A JS CODE TO CHANGE THE BACKGROUND OF ALL <LI> TAGS TO CYAN.

// Select all <li> elements inside an <ol>
let elements = document.querySelectorAll("ol li");

// Loop through each <li> element and change its background color

// The forEach() method is used to iterate (loop) over each element in an array and execute a function for every element. It’s a cleaner and shorter way to loop compared to for or while loops.
elements.forEach((item) => {
      item.style.backgroundColor = "cyan"; // set background to cyan
});
