/**
 * chaiaurcode.js - Random Image Grid Project
 *
 * This script generates a grid of random images using the Lorem Picsum service.
 * Clicking the button reloads the grid with new random images of fixed size.
 *
 * Usage:
 * - The grid is displayed in the element with class 'content'.
 * - Clicking the button reloads the images.
 * - All images are 300x300 pixels for a uniform grid.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

const baseURL = 'https://picsum.photos/';
// This URL gives an image. Use this and NO API calls
const container = document.querySelector('.content');
const rows = 7;

/**
 * reload
 * Generates and appends a grid of random images to the container.
 * Each image is 300x300 pixels for consistency.
 */
function reload() {
  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${baseURL}/300/300`;
    img.alt = 'Random placeholder image';
    container.appendChild(img);
    console.log('Image src:', img.src);
  }
  console.log('Grid reloaded');
  console.log('==================================================================');
}

reload();
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  container.innerHTML = '';
  reload();
});
// ==================================================================