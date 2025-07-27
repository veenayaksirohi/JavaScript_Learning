/**
 * @fileoverview
 * Fetches and displays a random cat image using The Cat API.
 * Demonstrates DOM manipulation and API usage in JavaScript.
 * - Clears previous images before displaying a new one.
 * - Follows JavaScript Standard Style and user preferences for comments and logging.
 */

// API endpoint for random cat images
const url = 'https://api.thecatapi.com/v1/images/search';

/**
 * Event listener for the button to fetch and display a new cat image.
 * - Fetches a random cat image from the API.
 * - Clears previous images from the container.
 * - Appends the new image to the container.
 */
document.getElementsByClassName('btn')[0].addEventListener('click', () => {
  fetch(url)
    .then(response => {
      console.log('API response:', response);
      return response.json();
    })
    .then(response => {
      // Clear previous images
      document.getElementsByClassName('container')[0].innerHTML = '';
      // Create and append new image
      const img = document.createElement('img');
      img.src = response[0].url;
      console.log('cat image url:', response[0].url);
      document.getElementsByClassName('container')[0].appendChild(img);
      console.log('==================================================================');
    })
    .catch(error => {
      console.error('Error fetching cat image:', error);
      console.log('==================================================================');
    });
});
// ==================================================================