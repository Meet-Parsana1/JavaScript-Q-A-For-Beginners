// USE GETTERS AND SETTERS TO SET AND GET REAL AND IMAGINARY PARTS OF THE COMPLEX NUMBER

/*
--> What is a class in JS ? 
      A class in JavaScript is a blueprint for creating objects with specific properties and methods. It was introduced in ES6 (2015) to make object-oriented programming easier and more structured in JS.

      --> Why Classes?
            Before ES6, JavaScript used constructor functions and prototypes to create objects. Classes make this process simpler and more readable.

      SYNTAX:- 
      class ClassName {
            constructor(parameters) {
              // initialize properties
            
            method1() {
              // method code
            
            method2() {
              // method code
            }
      }

      --> Key Points about Classes
            --> constructor() → special method for initializing properties.
            --> Methods → define behaviors inside the class (no function keyword needed).
            --> extends keyword → used for inheritance (child class from parent class).
            --> super() → calls the parent class constructor.
            --> Classes are not hoisted (you must define before using).
*/

// Class to represent a complex number
class ComplexNumber {
      constructor(real, imaginary) {
            this.real = real; // Real part
            this.imaginary = imaginary; // Imaginary part
      }

      // Getter for the real part
      get Real() {
            return this.real;
      }

      // Setter for the real part
      set Real(value) {
            this.real = value;
      }

      // Getter for the imaginary part
      get Imaginary() {
            return this.imaginary;
      }

      // Setter for the imaginary part
      set Imaginary(value) {
            this.imaginary = value;
      }
}

// Example usage
let num = new ComplexNumber(2, 3);

// Get real and imaginary parts
console.log(num.Real); // Output: 2
console.log(num.Imaginary); // Output: 3

// Set new values
num.Real = 5;
num.Imaginary = 7;

console.log(num.Real); // Output: 5
console.log(num.Imaginary); // Output: 7
