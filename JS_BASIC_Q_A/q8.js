// Write a JS program to  find whether a number is divisible by 2 and 3.

// Let's take a number to check
let n = 12;

// % is the modulus operator — it gives the remainder after division, For example, 12 % 5 = 2.
// If remainder is 0, it means the number is perfectly divisible
// Here we check: divisible by 2 AND divisible by 3, both condition must be true.
if (n % 2 == 0 && n % 3 == 0) {
      //console.log() is a built-in function in JavaScript that is used to print output to the console.
      console.log("Number is divisible by 2 and 3 both.");
} else {
      console.log("Number is not divisible by 2 and 3 both.");
}
