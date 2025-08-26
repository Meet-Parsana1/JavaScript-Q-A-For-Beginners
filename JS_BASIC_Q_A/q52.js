// WRITE A SIMPLE INTEREST CALCULATOR USING JS.

// Principal amount (the initial money invested or borrowed)
let principalAmount = 12000;
   
// Annual interest rate in percentage
let interestRate = 5; // 5%

// Time duration in years
let timeDuration = 3; // 3 years

// Formula for simple interest: SI = (P * R * T) / 100
let simpleInterest = (principalAmount * interestRate * timeDuration) / 100;

// Print the calculated simple interest
console.log(`Simple Interest is ${simpleInterest}.`);

// Explanation:- 

//--> principalAmount → the original money you have or borrow.

//--> interestRate → the yearly interest percentage.

//--> timeDuration → how many years the money is invested or borrowed.

//--> (P * R * T) / 100 → standard simple interest formula.

//--> Using template literals (``) helps to embed variables directly in strings for easy output.