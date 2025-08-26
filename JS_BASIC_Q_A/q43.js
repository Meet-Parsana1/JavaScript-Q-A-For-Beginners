// WRITE A PROGRAM USING PROMISE.ALL() INSIDE AN ASYNC /AWAIT TO AWAIT 3 PROMISES. COMPARE ITS RESULTS WITH THE CASE WHERE WE AWAIT THESE PROMISES ONE BY ONE.

// **Run the HTML File(q43.html) to show the output**
  
// Function to dynamically load a JS file and return a Promise
async function loadScript(url) {
      return new Promise((resolve, reject) => {
            const script = document.createElement("script"); // Create a <script> element
            script.src = url; // Set the script URL

            // Resolve promise when script loads
            script.onload = () => resolve("Script Loaded: " + url);

            // Reject promise if script fails to load
            script.onerror = () =>
                  reject(new Error("Failed to Load the Script: " + url));

            // Append the script to the document head to start loading
            document.head.appendChild(script);
      });
}

// Function to load multiple scripts in parallel using Promise.all()
async function loadScriptsInParallel() {
      try {
            // Promise.all waits for all promises to resolve (or rejects if any fail)
            const results = await Promise.all([
                  loadScript(
                        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
                  ),
                  loadScript(
                        "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
                  ),
                  loadScript(
                        "https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"
                  ),
            ]);

            console.log(results); // Logs an array of success messages
            alert("All scripts loaded successfully!");
            document.write("<h1>Scripts Loaded Successfully</h1>");
      } catch (error) {
            // If any promise fails, this block runs
            console.error(error.message);
            alert("Error loading scripts in parallel: " + error.message);
      }
}

// Call the async function to start loading scripts
loadScriptsInParallel();

// Explanation:- 

// --> Promise.all([...]) → runs all promises in parallel, so total loading time is faster.

// --> If any promise fails, Promise.all immediately rejects and goes to the catch block.

// --> Using Promise.all() is efficient when you want to load multiple resources simultaneously. 
