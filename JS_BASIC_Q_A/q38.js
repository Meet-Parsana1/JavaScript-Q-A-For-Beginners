// WRITE A JS PROGRAM TO KEEP FETCHING CONTENTS OF A WEBSITE EVERY 5 SECONDS AND DISPLAY IT ON YOUR WEBSITE.

// **Run the HTML File(q38.html) to show the output**

// Function to fetch content from an external website/API
function fetchContent() {
      // Use fetch() to get data from the URL
      fetch("https://official-joke-api.appspot.com/random_joke")
            .then((response) => response.json()) // Convert response to JSON
            .then((data) => {
                  // Display the content inside the element with id="content"  
                  // Note: 'data.content' should match the property you want to show from API
                  document.getElementById("content").innerText = data.content;
            })
            .catch((error) => {
                  // If there is an error (e.g., network issue), show a message
                  document.getElementById("content").innerText =
                        "Error Fetching Content!";
            });
}

// Call fetchContent() once immediately when page loads
fetchContent();

// Keep fetching new content every 5 seconds (5000 milliseconds)
setInterval(fetchContent, 5000);

/*
Explanation for beginners:

--> fetch() → used to request data from a server or API.

--> .then(response => response.json()) → converts the response into a JavaScript object.

--> .catch() → handles errors like network failures.

--> setInterval(function, 5000) → repeatedly calls a function every 5 seconds.

--> document.getElementById("content").innerText = ... → shows the fetched data on the webpage.
 */
