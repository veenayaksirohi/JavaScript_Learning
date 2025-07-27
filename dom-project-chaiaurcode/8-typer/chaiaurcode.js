/**
 * chaiaurcode.js
 * Typing Effect Project - Auto Typer
 *
 * This script creates a typing and erasing animation for a set of words,
 * displaying them one by one in a loop, simulating a typewriter effect.
 *
 * Usage:
 * - Place an element with class 'typed-text' in your HTML to display the text.
 * - Optionally, add a 'cursor' element for a blinking cursor effect.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

// Select the element where the typed text will appear
const typedTextSpan = document.querySelector('.typed-text');
// Select the cursor element (optional, for blinking effect)
const cursor = document.querySelector('.cursor');

// Array of words to be typed out
const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

/**
 * sleep
 * Utility function to pause execution for a given number of milliseconds.
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise<void>}
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Blinking Cursor Effect
 *
 * This interval toggles the cursor's opacity every 500ms to create a blinking effect.
 * NOTE: This should be called ONCE, not inside a loop or function that runs repeatedly.
 * Place this outside of the typing loop to avoid multiple intervals being created.
 */
setInterval(() => {
  // If the cursor is invisible (opacity is '0'), make it visible ('1')
  // Otherwise, make it invisible ('0')
  if (cursor.style.opacity === '0') {
    cursor.style.opacity = '1';
  } else {
    cursor.style.opacity = '0';
  }
}, 500); // 500ms = blink speed

/**
 * type
 * Main async function to handle typing and erasing each word in sequence.
 * Loops through the words array, types each character, waits, then erases.
 */
async function type() {
    while (true) {
        for (let i = 0; i < words.length; i++) {
            typedTextSpan.textContent = '';
            const element = words[i];
            // Type each character of the current word
            for (let j = 0; j < element.length; j++) {
                await sleep(700);
                const character = element[j];
                typedTextSpan.textContent += character;
            }
            await sleep(700); // Wait before erasing
            await erase();    // Erase the word
        }
    }
}

/**
 * erase
 * Async function to erase the currently displayed word one character at a time.
 */
async function erase() {
    const strings = typedTextSpan.textContent;
    const len = strings.length;
    for (let i = 0; i < len; i++) {
        typedTextSpan.textContent = typedTextSpan.textContent.slice(0, -1);
        await sleep(500);
    }
    // Log for learning/debugging
    console.log('Word erased');
    console.log('==================================================================');
}

// Start the typing effect
// ==================================================================
type();
// ==================================================================

