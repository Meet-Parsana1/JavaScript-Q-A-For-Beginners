//WRITE A PROGRAM TO LOAD A JS FILE IN A BROWSER USING PROMISE. USE .then() TO DISPLAY AN ALERT WHEN THE LOAD IS COMPLETE.

// **Run HTML File(q40.html) to show the output**
 
// Function to load a JavaScript file dynamically using a Promise
function loadScript(url) {
      return new Promise((resolve, reject) => {
            const script = document.createElement("script"); // create a <script> element
            script.src = url; // set the URL of the script

            // When the script loads successfully
            script.onload = () => resolve(`Script loaded successfully: ${url}`);

            // If the script fails to load
            script.onerror = () =>
                  reject(new Error(`Failed to load the script: ${url}`));

            // Append the script to <head> to start loading
            document.head.appendChild(script);
      });
}

// Call loadScript and handle success or failure
loadScript("https://code.jquery.com/jquery-3.6.0.min.js")
      .then((msg) => {
            // msg is the success message returned from resolve()
            alert(msg); // Show an alert that script is loaded
      })
      .catch((error) => {
            // error is the Error object returned from reject()
            console.error(error.message); // Log the error in console
            alert("Error loading script: " + error.message); // Show alert to user
      });

// Optional: display a message on the page
document.write("<h1>Script loaded successfully!</h1>");

/*
Explanation:

--> Promise → used to handle asynchronous operations (things that happen later).

--> resolve() → called when script loads successfully.

--> reject() → called when script fails to load.

--> .then() → runs when resolve() is called.

--> .catch() → runs when reject() is called.

--> document.createElement("script") → dynamically adds a script tag to the page.

*/