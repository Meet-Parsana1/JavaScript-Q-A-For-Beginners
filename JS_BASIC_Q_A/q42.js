// CREATE A PROMISE WHICH REJECTS AFTER 3 SECONDS. USE AN ASYNC/AWAIT TO GET ITS VALUE. USE A TRY CATCH TO HANDLE THE REJECTION.

// **Run the HTML File(q42.html) and wait for 10 seconds to show the output**
   
// Function to create a Promise that always rejects after 3 seconds
function createRejectedPromise() {
      return new Promise((_, reject) => {
            // setTimeout will run after 3000 milliseconds (3 seconds)
            setTimeout(() => {
                  // Reject the promise with an error message
                  reject(new Error("Promise rejected after 3 seconds"));
            }, 3000);
      });
}

// Async function to handle the rejected Promise
async function handleRejectedPromise() {
      try {
            // Wait for the promise to resolve (or reject)
            const result = await createRejectedPromise();

            // If the promise resolves (it won't in this case), log the result
            console.log(result);
      } catch (error) {
            // This block runs if the promise is rejected
            console.log(error.message); // Log error message in console
            alert("Error: " + error.message); // Show alert to user
      }
}

// Call the async function
handleRejectedPromise();

/*
Explanation:-

--> new Promise((resolve, reject) => {...}) → creates a promise. _ is used because resolve is not needed here.

--> setTimeout → waits 3 seconds before rejecting the promise.

--> async/await → makes it easier to work with promises like synchronous code.

--> try/catch → handles promise rejection so your program doesn’t crash.

--> alert() → shows the error to the user visually.

 */