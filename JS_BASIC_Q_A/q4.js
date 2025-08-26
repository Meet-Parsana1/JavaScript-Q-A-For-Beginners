// Try to add a new key to the const object in question 3. Were you able to do it ?

//---> What is an Object in JavaScript?

// An object is a collection of properties.

// A property is a key-value pair (key = name, value = data).

// In simple words: an object is like a real-world entity with characteristics (properties) and sometimes actions (methods).

// SYNTAX OF OBJECT:- 

// let objectName = {
//       key1: value1,
//       key2: value2,
//       key3: value3,
// };

const person = {
      name: "Meet",
      age: 19,
      hobby: "Coding",
};

// Two different ways to add a key to an object
person.city = "Rajkot";
// person["city"] = "Rajkot";

console.log(person); // console.log() is a built-in function in JavaScript that is used to print output to the console.

// Yes, we are able to do it. 

// CONCEPT:
// In JavaScript, even if an object is declared with const, we can still modify its properties. The const keyword prevents reassignment of the variable itself, but the contents (properties) of the object can be changed.