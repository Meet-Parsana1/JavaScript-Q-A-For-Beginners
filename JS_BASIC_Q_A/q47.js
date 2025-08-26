// SEE IF THE STUDENT IS AN INSTANCE OF HUMAN USING `instanceof` OPERATOR.

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

      describe() {
            return `I am a Human. I am a ${this.gender}, my name is ${this.name} and I am ${this.age} years old.`;
      }
}

// Derived class Student inherits from Human
class Student extends Human {
      constructor(gender, name, age, studentID, fieldOfStudy) {
            super(gender, name, age); // Call parent constructor
            this.studentID = studentID;
            this.fieldOfStudy = fieldOfStudy;
      }

      describe() {
            return `I am a Student. My name is ${this.name} and I study ${this.fieldOfStudy}.`;
      }
}

// Create instances
let humanInstance = new Human("Male", "Meet", 19);
let studentInstance = new Student(
      "Female",
      "Aastha",
      18,
      101,
      "Computer Science"
);

// instanceof operator checks if an object is an instance of a class
console.log(humanInstance instanceof Human); // true → humanInstance is a Human
console.log(studentInstance instanceof Human); // true → Student inherits from Human
console.log(studentInstance instanceof Student); // true → studentInstance is a Student

// Explanation:-

//--> instanceof checks if an object is created from a certain class or inherits from it.

//--> studentInstance instanceof Human → true because Student extends Human.

//--> humanInstance instanceof Student → false because Human does not inherit from Student.

//--> This helps you verify the type of an object in a hierarchy.
