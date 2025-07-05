/**
 * Function to print a name to the console
 * Demonstrates basic function declaration and calling
 */
function sayMyName () {
  console.log('sayMyName output:', 'veenayak')
}

// Call the function to display the name
sayMyName()

/**
 * Function to add two numbers and log the result
 * @param {number} num1 - First number to add
 * @param {number} num2 - Second number to add
 * Demonstrates function with parameters but no return value
 */
function addTwoNumbers (num1, num2) {
  console.log('addTwoNumbers result:', num1 + num2)
}

// Call function with parameters
addTwoNumbers(1, 2)

/**
 * Function to add two numbers and return the result
 * @param {number} num1 - First number to add
 * @param {number} num2 - Second number to add
 * @returns {number} The sum of the two numbers
 * Demonstrates function with return value
 */
function add2Numbers (num1, num2) {
  return (num1 + num2)
}

// Call function and log the returned value
console.log('add2Numbers returned value:', add2Numbers(1, 2))

// Store result of function with no return value (undefined)
let result = addTwoNumbers(1, 2)
console.log('result from addTwoNumbers:', result)

// Store result of function with return value
result = add2Numbers(1, 2)
console.log('result from add2Numbers:', result)

/**
 * Function to handle user login with username validation
 * @param {string} username - The username to validate
 * @returns {string} Login status message
 * Demonstrates function with conditional logic and template literals
 */
function userLogin (username) {
  if (username === undefined) {
    return 'Please enter username'
  }
  return `${username} login successful`
}

// Test function with valid username
console.log('userLogin with username:', userLogin('veenayak'))

// Test function without username (undefined parameter)
console.log('userLogin without username:', userLogin())