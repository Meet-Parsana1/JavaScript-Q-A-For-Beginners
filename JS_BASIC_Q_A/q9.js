// Write a JS program to find whether a number is divisible by either 2 or 3.

// We'll test if this number is divisible by 2 or 3
let n = 57; // Try changing this value to see different results

// First, check if n is divisible by 2
if (n % 2 == 0) {
      //console.log() is a built-in function in JavaScript that is used to print output to the console.
      console.log(`${n} is divisible by 2.`);

      // If not divisible by 2, then check if it's divisible by 3
} else if (n % 3 == 0) {
      console.log(`${n} is divisible by 3.`);

      // If neither condition is true, it means not divisible by 2 or 3
} else {
      console.log(`${n} is not divisible by 2 nor by 3.`);
}
