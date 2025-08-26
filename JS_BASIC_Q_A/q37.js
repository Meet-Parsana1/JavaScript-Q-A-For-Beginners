// CREATE A WEBSITE WHICH IS CAPABLE OF STORING BOOKMARKS OF YOUR FAVOURITE WEBSITES USING HREF. DO IT WITH EVENT LISTENERS.

// **Run HTML File(q37.html) to show the output**

// Function to load bookmarks from localStorage and display them
function loadBookmarks() {
      let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      let list = document.getElementById("bookmarkList");
      list.innerHTML = ""; // Clear existing list

      bookmarks.forEach((url) => {
            let li = document.createElement("li");
            // Create a clickable link for each bookmark
            li.innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
            list.appendChild(li); // Add it to the list
      });
}

// Function to add a new bookmark
function addBookmark() {
      let input = document.getElementById("bookmarkInput");
      let url = input.value.trim(); // Remove extra spaces

      if (url) {
            // Only add if input is not empty
            let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
            bookmarks.push(url); // Add the new URL
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks)); // Save updated array
            input.value = ""; // Clear input field
            loadBookmarks(); // Refresh the displayed list
      }
}

// Instead of using onclick in HTML, we attach an event listener
// It listens for a "click" event on the button with id "addBtn"
document.getElementById("addBtn").addEventListener("click", addBookmark);

// Load bookmarks automatically when page loads
loadBookmarks();

/*

Explanation for beginners:

--> addEventListener("click", addBookmark) attaches a function to run only when the button is clicked, instead of using inline onclick in HTML.

--> This is a cleaner and more modern approach to handle events.

--> localStorage is used to store data in the browser, so bookmarks stay even if you refresh the page.

--> JSON.parse converts stored string data back into an array.

--> JSON.stringify converts the array into a string to save it in localStorage.

--> target="_blank" ensures links open in a new browser tab.

 */
