/**
 * chaiaurcode.js - Guess The Number Game
 *
 * This script implements a simple number guessing game.
 * The user tries to guess a randomly generated number between 1 and 100.
 * Previous guesses and remaining attempts are tracked and displayed.
 *
 * Usage:
 * - User enters a guess and submits it.
 * - The script checks if the guess is correct, too high, or too low.
 * - Displays previous guesses, remaining attempts, and win/lose messages.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min - The minimum integer value.
 * @param {number} max - The maximum integer value.
 * @returns {number} A random integer between min and max.
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array to store previous guesses
let preG = [];

/**
 * Event listener for the guess submission button.
 * Handles the main game logic: input validation, guess checking, updating UI, and tracking guesses.
 */
document.getElementById('subt').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get the user's guess from the input field (as a string)
    let number = document.getElementById('guessField').value;
    // Generate a random number between 1 and 100 for this round
    const random = randomInt(1, 100);

    // Validate input: check if the input is a number and within the valid range
    if (isNaN(Number(number)) || Number(number) < 1) {
        document.getElementsByClassName('lowOrHi')[0].innerHTML = 'Please enter a valid number between 1 and 100.';
        return; // Stop further execution if input is invalid
    }

    // If the guess is incorrect
    if (number != random) {
        preG.push(number); // Add the guess to the previous guesses array
        document.getElementById('guessField').value = ''; // Clear the input field
        document.getElementsByClassName('guesses')[0].innerHTML = preG; // Show all previous guesses

        // Get the current number of remaining attempts from the UI and decrement
        const gasR = Number(document.getElementsByClassName('lastResult')[0].innerHTML);
        document.getElementsByClassName('lastResult')[0].innerHTML = gasR - 1;

        // If this was the last attempt, show game over message
        if (gasR == 1) {
            document.getElementsByClassName('lowOrHi')[0].innerHTML = 'Game over! Try again next time.';
        }
    } else {
        // If the guess is correct, show winning message
        document.getElementsByClassName('lowOrHi')[0].innerHTML = 'Congratulations! You guessed the correct number!';
    }
    console.log('Guess:', number, 'Random:', random, 'Previous Guesses:', preG);
    console.log('==================================================================');
});
// ==================================================================



