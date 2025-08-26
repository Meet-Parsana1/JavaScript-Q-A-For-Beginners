// WRITE A JS FUNCTION WHICH RESOLVES A PROMISE AFTER N SECONDS. THE FUNCTION TAKES N AS THE PARAMETER. USE AN IIFE TO EXECUTE THE FUNCTION WITH DIFFERENT VALUES OF N.
  
// Function that returns a promise which resolves after 'n' milliseconds
async function RESOLVE(n) {
      return new Promise((resolve) => {
            setTimeout(() => {
                  resolve("Promise Resolved!"); // Resolves the promise after 'n' ms
            }, n);
      });
}

// IIFE (Immediately Invoked Function Expression) to run async code

// What is IIFE IN JS ? 

// An IIFE stands for Immediately Invoked Function Expression in JavaScript. It’s a function that runs as soon as it is defined.

//--> Function runs immediately: You don’t need to call it separately.

//--> Avoids polluting global scope: Variables inside an IIFE don’t affect the global namespace.

//--> Often used to create a private scope or execute asynchronous code immediately.

(async function MAIN() {
      let a = await RESOLVE(1000); // Wait for 1 second
      console.log(a); // Print "Promise Resolved!"

      let b = await RESOLVE(2000); // Wait for 2 seconds
      console.log(b); // Print "Promise Resolved!"

      let c = await RESOLVE(3000); // Wait for 3 seconds
      console.log(c); // Print "Promise Resolved!"
})();
