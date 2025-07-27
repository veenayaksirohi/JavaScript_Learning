/**
 * chaiaurcode.js - Color Changer Project
 *
 * This script allows users to change the background color of the page by clicking color buttons.
 * Each button sets the background to its own color (using its ID).
 *
 * Usage:
 * - Add buttons with class 'button' and IDs matching color names (e.g., 'grey', 'white').
 * - Clicking a button changes the background color of the page.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

// Get the body element of the document for background color changes
const body = document.body;

/**
 * Changes the background color of the body.
 * @param {string} color - The color to set as the background.
 */
const colorChange = function(color) {
    body.style.background = color;
    console.log('colorChange:', color);
    console.log('==================================================================');
};

// Get all elements with the class 'button' (color buttons)
const buttons = document.getElementsByClassName('button');

// Loop through each button and add a click event listener
for (let i = 0; i < buttons.length; i++) {
    /**
     * Event listener for color button click.
     * Changes the background color to the button's ID (color name).
     */
    buttons[i].addEventListener('click', function() {
        colorChange(this.id); // 'this.id' refers to the ID of the clicked button (color name)
        console.log('Button clicked:', buttons[i]);
        console.log('==================================================================');
    });
}
// ==================================================================



// document.getElementById("grey").addEventListener("click",function(){
//     body.style.background='grey'
// })
// document.getElementById("white").addEventListener("click",function(){
//     body.style.background='white'
// })
// document.getElementById("blue").addEventListener("click",function(){
//     body.style.background='blue'
// })
// document.getElementById("yellow").addEventListener("click",function(){
//     body.style.background='yellow'
// })