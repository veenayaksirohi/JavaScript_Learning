/**
 * chaiaurcode.js - Mouse Circle Project
 *
 * This script creates a custom cursor effect where a circle follows the mouse pointer
 * and changes its color randomly from a predefined array as the mouse moves.
 *
 * Usage:
 * - Add a <div class="cursor"></div> to your HTML for the custom cursor.
 * - The circle will follow the mouse and change color on movement.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

// Select the custom cursor element
const cursor = document.querySelector('.cursor');
// An array of 10 colors in hex value
const colors = [
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
];

/**
 * Event listener for mouse movement.
 * Moves the custom cursor to the mouse position and changes its color.
 */
document.addEventListener('mousemove', function (event) {
  moveCursor(event.pageX, event.pageY);
  console.log('Mouse position:', event.pageX, event.pageY);
  console.log('==================================================================');
});

/**
 * Moves the cursor element to the specified (x, y) position and changes its color.
 * @param {number} pageX - The x-coordinate of the mouse pointer.
 * @param {number} pageY - The y-coordinate of the mouse pointer.
 */
const moveCursor = function (pageX, pageY) {
  cursor.style.left = pageX + 'px';
  cursor.style.top = pageY + 'px';

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  cursor.style.backgroundColor = randomColor;
};
// ==================================================================
