//WRITE A PROGRAM TO LOAD A JS FILE IN A BROWSER USING PROMISE. USE .then() TO DISPLAY AN ALERT WHEN THE LOAD IS COMPLETE. WRITE THE PROGRAM USING ASYNC/AWAIT.

// **Run the HTML File(q41.html) to show the output**

// Function to dynamically load a JS file and return a Promise
async function loadScript(url) {
      return new Promise((resolve, reject) => {
            const script = document.createElement("script"); // create <script> element
            script.src = url; // set script URL

            // Resolve the promise when script loads successfully
            script.onload = () => resolve(`Script Loaded: ${url}.`);

            // Reject the promise if there is an error loading the script
            script.onerror = () =>
                  reject(new Error(`Script Load Error: ${url}.`));

            // Append the script to <head> to start loading
            document.head.appendChild(script);
      });
}

// Async function to use await and handle script loading
async function init() {
      try {
            // Wait for the script to load
            const loadedScript = await loadScript(
                  "https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"
            );
            return loadedScript; // Return success message
      } catch (error) {
            // Catch and log any errors
            console.error(error);
      }
}

// Call the async init function
// Use .then() to display an alert and write content to the page after script loads
init().then(() => {
      alert("Script Loaded Successfully!");
      document.write("<h1>Script Loaded Successfully!</h1>");
});

/*
Explanations: 

--> async function → allows us to use await inside it for easier asynchronous code.

--> await → pauses the execution until the Promise resolves (or rejects).

--> try/catch → handles errors while using await.

--> .then() → optional here, used to show alert and write content after the async function finishes.

--> Dynamically creating a <script> element lets you load external JS files on demand.
 */
