// write the program in question 11 using for in loop.

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

// An object holding student names (keys) and their marks (values)
let obj = {
      harry: 98,
      rohan: 78,
      aakash: 89,
};

// "for...in" loop goes through each key in an object
for (let i in obj) {
      // i will hold the key (like "harry", "rohan", "aakash")
      // obj[i] will give the value for that key
      console.log(i + ":", obj[i]);
}
