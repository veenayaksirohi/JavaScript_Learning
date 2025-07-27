/**
 * chaiaurcode.js - BMI Calculator Project
 *
 * This script calculates the Body Mass Index (BMI) based on user input for height and weight.
 * The result is displayed on the page and logged to the console for debugging.
 *
 * Usage:
 * - User enters height (cm) and weight (kg) in input fields.
 * - User clicks the button to calculate BMI.
 * - BMI is displayed in the 'results' element.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

// Get all button elements (assumes the first button is the submit for BMI calculation)
const button = document.getElementsByTagName('button');

/**
 * Event listener for BMI calculation button click.
 * Prevents form submission, retrieves height and weight, calculates BMI, and displays the result.
 */
button[0].addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get height and weight values from input fields
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    /**
     * Calculate BMI using the formula: weight (kg) / [height (m)]^2
     * Height is converted from cm to meters.
     */
    const bmi = weight / ((height / 100) ** 2);
    console.log(`BMI => ${bmi.toFixed(2)}`); // Log BMI for debugging
    console.log('==================================================================');

    // Display the BMI result in the 'results' element
    document.getElementById('results').innerHTML = `BMI => ${bmi.toFixed(2)}`;
});
// ==================================================================