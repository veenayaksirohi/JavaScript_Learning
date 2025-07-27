/**
 * @fileoverview
 * Fetches and displays a random Chuck Norris joke using the public API.
 * Demonstrates handling of race conditions in async JavaScript code.
 * - Uses a request counter to ensure only the latest joke is displayed.
 * - Follows JavaScript Standard Style and user preferences for comments and logging.
 */

// API endpoint for random Chuck Norris jokes
const url = 'https://api.chucknorris.io/jokes/random';

/**
 * Handles the case of race condition:
 * If the user clicks the button multiple times quickly, multiple fetch requests are sent.
 * Responses may arrive out of order, causing older jokes to overwrite newer ones.
 * Solution: Use a request counter (lastRequestId) to ensure only the latest response updates the UI.
 */
let lastRequestId = 0;

// Add event listener to the 'Get Joke' button
// Only the latest request's response will update the displayed joke
// ==================================================================
document.getElementById('getJoke').addEventListener('click', () => {
  lastRequestId++; // Increment for each click
  const currentRequestId = lastRequestId;

  fetch(url)
    .then(response => response.json())
    .then(response => {
      // Only update if this is the latest request
      if (currentRequestId === lastRequestId) {
        document.getElementById('display-joke').textContent = response.value;
        console.log('display-joke:', response.value);
      }
      console.log('==================================================================');
    })
    .catch(error => {
      if (currentRequestId === lastRequestId) {
        document.getElementById('display-joke').textContent = `Error fetching joke: ${error}`;
        console.error('Error fetching joke:', error);
      }
      console.log('==================================================================');
    });
});
// ==================================================================