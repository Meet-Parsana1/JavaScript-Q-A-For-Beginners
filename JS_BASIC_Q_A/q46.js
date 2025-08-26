// CREATE A CLASS STUDENT FROM THE A CLASS HUMAN. OVERRIDE A METHOD & SEE CHANGES.

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

// Base class Human
class Human {
      constructor(gender, name, age) {
            this.gender = gender;
            this.name = name;
            this.age = age;
      }

      // Method to describe a human
      describe() {
            return `I am a Human. I am a ${this.gender}, my name is ${this.name} and I am ${this.age} years old.`;
      }
}

// Derived class Student inherits from Human
class Student extends Human {
      constructor(gender, name, age, studentID, fieldOfStudy) {
            super(gender, name, age); // Call parent constructor to set gender, name, age
            this.studentID = studentID;
            this.fieldOfStudy = fieldOfStudy;
      }

      // Override describe method for Student
      describe() {
            return `I am a Student. My name is ${this.name} and I study ${this.fieldOfStudy}.`;
      }
}

// Create an instance of Human
let humanInstance = new Human("Male", "Meet Parsana", 19);
console.log(humanInstance); // Shows the object properties
console.log(humanInstance.describe()); // Calls Human's describe method
console.log("----------------------------------");

// Create an instance of Student
let studentInstance = new Student("Male", "Meet Parsana", 19, 101, "FinTech");
console.log(studentInstance); // Shows the object properties including studentID and fieldOfStudy
console.log(studentInstance.describe()); // Calls Student's overridden describe method
console.log("----------------------------------");

// Explanation:- 

// --> class Student extends Human → Student inherits properties and methods from Human.

// --> super(...) → calls the constructor of the parent class to initialize inherited properties.

// --> describe() in Student → overrides the describe method from Human. When called on a Student object, it runs the Student version instead of the Human version.

// --> This shows inheritance + method overriding in JavaScript classes.



