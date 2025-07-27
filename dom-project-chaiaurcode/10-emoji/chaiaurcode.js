/**
 * chaiaurcode.js - Emoji Hover Project
 *
 * This script displays a random emoji from a list every time the user hovers over the emoji element.
 * The emoji is visually enhanced with CSS effects on hover.
 *
 * Usage:
 * - Add a <div id="emoji"></div> to your HTML for the emoji display.
 * - Hovering over the emoji changes it to a new random emoji.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

// Select the emoji display element
const btn = document.querySelector('#emoji');
// Array of emojis to display
const emojis = [
  '😆', '😅', '🤣', '😂', '😀', '🤑', '🤨', '🙂', '😊', '😗',
  '😛', '😏', '🤥', '😴', '🥺', '😧', '😇', '😳', '🙃', '🥴',
  '🧐', '🤨', '😒', '🤔', '🤭', '🥰', '🤐', '👀', '🤔', '🤪',
  '🥲', '😃', '😁', '😬',
];

/**
 * Event listener for mouseover on the emoji element.
 * Picks a random emoji from the array and displays it.
 */
btn.addEventListener('mouseover', () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  btn.textContent = emojis[randomIndex];
  console.log('Emoji changed to:', emojis[randomIndex]);
  console.log('==================================================================');
});
// ==================================================================