// CREATE A JS CLASS TO CREATE A COMPLEX NUMBER. CREATE A CONSTRUCTOR TO SET THE REAL AND THE COMPLEX PART.

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

class ComplexNumber {
      // Constructor runs when we create a new object from this class
      constructor(real, imaginary) {
            this.real = real; // Set the real part
            this.imaginary = imaginary; // Set the imaginary part
      }
}

// Create an instance (object) of ComplexNumber with real=2 and imaginary=3
let instance1 = new ComplexNumber(2, 3);

// Print the object in console
console.log(instance1);

// Explanation:-

// --> class ComplexNumber → defines a blueprint for creating complex number objects.

// --> constructor(real, imaginary) → special method that initializes the object when created.

// --> this.real and this.imaginary → store the values for each instance.

// --> new ComplexNumber(2, 3) → creates an object with real part 2 and imaginary part 3.
