/**
 * chaiaurcode.js - Unlimited Colors Project
 *
 * This script allows users to start and stop a background color animation on the page.
 * The background color changes to a random hex color every second when started.
 *
 * Usage:
 * - Click the 'Start' button to begin changing the background color every second.
 * - Click the 'Stop' button to halt the color changes.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

// Get the <body> element to change its background color
const body = document.body;

/**
 * Generates a random hex color and sets it as the body's background color.
 * Called every second when the interval is running.
 */
const changeC = function() {
    // Generate a random integer between 0 and 0xFFFFFF, convert to hex string
    const hex = Math.floor(Math.random() * 16777215).toString(16); // 16777215 = 0xFFFFFF
    // Set the background color, padding hex to ensure 6 digits (e.g., #00ffcc)
    body.style.backgroundColor = '#' + hex.padStart(6, '0');
    console.log('Background color changed to:', '#' + hex.padStart(6, '0'));
    console.log('==================================================================');
};

// Store the interval ID so we can clear it later
let intervalId;

// Start button: begins changing the background color every second
/**
 * Starts the color-changing interval when the 'start' button is clicked.
 */
document.getElementById('start').addEventListener('click', function() {
    intervalId = setInterval(changeC, 1000); // Call changeC every 1000ms (1 second)
    console.log('Color changing started');
    console.log('==================================================================');
});

// Stop button: stops the color-changing interval
/**
 * Stops the color-changing interval when the 'stop' button is clicked.
 */
document.getElementById('stop').addEventListener('click', function() {
    clearInterval(intervalId); // Stop the interval
    console.log('Color changing stopped');
    console.log('==================================================================');
});
// ==================================================================