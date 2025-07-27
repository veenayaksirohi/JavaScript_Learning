/**
 * chaiaurcode.js - Digital Clock Project
 *
 * This script displays a live digital clock on the page, updating every second.
 *
 * Usage:
 * - Place an element with id 'clock' in your HTML to display the time.
 * - The time is shown in HH:MM:SS format and updates every second.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

// Get the clock display element by its ID
const clock = document.getElementById('clock');

/**
 * Updates the clock display with the current time (HH:MM:SS).
 */
const reload = function() {
    // Get the current date and time
    const now = new Date();
    const hrs = now.getHours();
    const min = now.getMinutes();      
    const sec = now.getSeconds(); 
    clock.innerHTML = `${hrs}:${min}:${sec}`;
    console.log('Clock updated:', `${hrs}:${min}:${sec}`);
    console.log('==================================================================');
};

// Call reload every 1000 milliseconds (1 second) to update the clock
setInterval(reload, 1000);
// ==================================================================