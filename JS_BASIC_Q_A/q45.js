// WRITE A METHOD TO ADD TWO COMPLEX NUMBERS IN THE ABOVE CLASS.

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

// COMPLEX NUMBER,  Z = a + bi
// where a is the real part and b is the imaginary part.

// Class to represent a complex number
class ComplexNumber {
      // Constructor initializes the real and imaginary parts
      constructor(real, imaginary) {
            this.real = real;
            this.imaginary = imaginary;
      }

      // Method to add this complex number with another complex number
      Add(other) {
            let realPart = this.real + other.real; // Add real parts
            let imaginaryPart = this.imaginary + other.imaginary; // Add imaginary parts
            return new ComplexNumber(realPart, imaginaryPart); // Return a new ComplexNumber object
      }
}

// Create two complex number instances
let instance1 = new ComplexNumber(1, 2); // 1 + 2i
let instance2 = new ComplexNumber(3, 4); // 3 + 4i

// Add the two complex numbers
let instance3 = instance1.Add(instance2); // Result: (1+3) + (2+4)i = 4 + 6i

// Print the result
console.log(instance3); // Output: ComplexNumber { real: 4, imaginary: 6 }

// Explanation:-

// --> Add(other) → takes another complex number as input and returns a new complex number that is the sum.

// --> this.real and this.imaginary → refer to the current object’s values.

// --> other.real and other.imaginary → refer to the values of the complex number passed as argument.

// --> Using new ComplexNumber(...) ensures that addition does not modify the original objects.
