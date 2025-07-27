/**
 * chaiaurcode.js - Simple Text Editor Project
 *
 * This script provides text formatting features (uppercase, lowercase, capitalize, bold, italic, underline)
 * for user input, displaying the formatted result in an output area.
 *
 * Usage:
 * - User types text in the input field.
 * - User clicks a formatting button to apply the style to the output.
 * - Output is shown in the output field with the selected formatting.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

// Select the input and output fields
const input = document.getElementById('input-field');
const output = document.getElementById('output-field');
// Select the container for formatting buttons
const button = document.querySelector('.btns-container');

/**
 * Event listener for formatting button clicks (event delegation).
 * Applies the selected formatting to the output field based on the button clicked.
 */
button.addEventListener('click', (e) => {
    const div = e.target.closest('button');

    if (div.classList.contains('uppercase')) {
        output.textContent = input.value.toUpperCase();
        output.style.fontWeight = 'normal';
        output.style.fontStyle = 'normal';
        output.style.textDecoration = 'none';
    } else if (div.classList.contains('lowercase')) {
        output.textContent = input.value.toLowerCase();
        output.style.fontWeight = 'normal';
        output.style.fontStyle = 'normal';
        output.style.textDecoration = 'none';
    } else if (div.classList.contains('capitalize')) {
        const cap = input.value.slice(0, 1);
        output.textContent = cap.toUpperCase() + input.value.slice(1).toLowerCase();
        output.style.fontWeight = 'normal';
        output.style.fontStyle = 'normal';
        output.style.textDecoration = 'none';
    } else if (div.classList.contains('bold')) {
        output.textContent = input.value;
        output.style.fontWeight = 'bold';
        output.style.fontStyle = 'normal';
        output.style.textDecoration = 'none';
    } else if (div.classList.contains('italic')) {
        output.innerHTML = `<i>${input.value}</i>`;
        output.style.fontWeight = 'normal';
        output.style.textDecoration = 'none';
    } else if (div.classList.contains('underline')) {
        output.innerHTML = `<u>${input.value}</u>`;
        output.style.fontWeight = 'normal';
        output.style.fontStyle = 'normal';
    }
    console.log('Button clicked:', div.className, 'Input:', input.value, 'Output:', output.textContent);
    console.log('==================================================================');
});
// ==================================================================