// write a program to print the marks of a student in an object using for loop.

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

//This is an Object, a collection of key-value pairs.
let obj = {
      harry: 98,
      rohan: 70,
      aakash: 76,
};

// ❌ This will not work as expected:
// for loop with i=0,1,2 tries to access obj[0], obj[1], obj[2]
// but objects don’t have numeric indexes like arrays do
for (let i = 0; i < 3; i++) {
      console.log(obj[i]); // prints undefined
}

// ❌ This also will not work:
// "for...of loop" is meant for arrays, not objects
// It will throw an error if used directly on an object
// for (let j of obj) {
//     console.log(j, obj[j]);
// }

// ✅ Correct way 1: Use "for...in loop" to get keys from an object
for (let key in obj) {
      console.log(key, obj[key]);
}

// ✅ Correct way 2: Convert object keys to an array, then use for...of
for (let key of Object.keys(obj)) {
      console.log(key, obj[key]);
}

// CONCLUSION:
// Normal for loops and for...of loops don't directly work on objects.
// Use for...in or Object.keys() with for...of.
