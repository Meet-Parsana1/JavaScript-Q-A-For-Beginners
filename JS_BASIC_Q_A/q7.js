// Demonstrate the use of switch case statements in JS.


// 🔹 What is a switch...case?

// A control statement in JS used to execute one block of code out of many choices.
// It is an alternative to multiple if...else if statements, which makes code more readable when checking one variable against multiple values.

// SYNTAX:- 
// switch (expression) {
//       case value1:
//             // Code block if expression === value1
//             break;

//       case value2:
//             // Code block if expression === value2
//             break;

//       case value3:
//             // Code block if expression === value3
//             break;

//       default:
//       // Code block if no case matches
// }


// Pick a number: 1, 2, or 3
// This will decide which option the user chooses
let choose = 1; // Try changing this to 2 or 3

// "switch statement" is like a multi-option if-else

// It checks the value of 'choose' and matches it with one of the cases
switch (choose) {
      case 1:
            //console.log() is a built-in function in JavaScript that is used to print output to the console.
            console.log("You opt to become a Millionaire.");
            break; // This "break statement" stops execution here on becoming this condition true,and will don’t check other cases. Same for other cases.

      case 2:
            console.log("You opt to become a Billionaire.");
            break;

      case 3:
            console.log("You opt to become a Trillionaire.");
            break;

      default:
            // Runs if none of the above cases match
            console.log("Invalid Input! Enter 1, 2, or 3");
            break;
}
