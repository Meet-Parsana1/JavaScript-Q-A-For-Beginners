// CREATE A WEBSITE WHICH IS CAPABLE OF STORING BOOKMARKS OF YOUR FAVOURITE WEBSITES USING HREF.
// **Run the HTML File(q36.html) to show the output** 
 
// This function loads bookmarks from localStorage and displays them on the page
function loadBookmarks() {
      // Get bookmarks from localStorage, or use an empty array if none exist
      let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

      // Get the <ul> element where bookmarks will be displayed
      let list = document.getElementById("bookmarkList");

      // Clear the list first so we don't duplicate items
      list.innerHTML = "";

      // Loop through each URL and create a clickable <li> element
      bookmarks.forEach((url) => {
            let li = document.createElement("li");
            // Use target="_blank" to open the link in a new tab
            li.innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
            list.appendChild(li); // Add the <li> to the list
      });
}

// This function adds a new bookmark entered by the user
function addBookmark() {
      // Get the value from the input field and remove extra spaces
      let input = document.getElementById("bookmarkInput");
      let url = input.value.trim();

      // Only add the URL if it's not empty
      if (url) {
            // Get existing bookmarks or start with an empty array
            let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

            // Add the new URL to the array
            bookmarks.push(url);

            // Save the updated bookmarks array back to localStorage
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

            // Clear the input field
            input.value = "";

            // Reload bookmarks to update the list on the page
            loadBookmarks();
      }
}

// Load bookmarks automatically when the page loads
loadBookmarks();

/*

Explanation for beginners:

--> localStorage is used to store data in the browser, so bookmarks stay even if you refresh the page.

--> JSON.parse converts stored string data back into an array.

--> JSON.stringify converts the array into a string to save it in localStorage.

--> target="_blank" ensures links open in a new browser tab.

*/