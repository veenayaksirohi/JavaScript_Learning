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

/**
 * Function to calculate total cart price using rest parameters
 * @param {...number} num - Variable number of price values
 * @returns {number} Total sum of all prices
 * Demonstrates rest parameters and array iteration
 */
function calculateCartPrice (...num) {
  let sum = 0
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i]
  }
  return sum
}

const cartTotal = calculateCartPrice(1, 2, 3, 4)
console.log('calculateCartPrice result:', cartTotal)

/**
 * Function to demonstrate rest parameters behavior
 * @param {number} num1 - First parameter
 * @param {number} num2 - Second parameter
 * @param {...number} num - Rest of the parameters (collected as array)
 * @returns {Array} Array containing the rest parameters
 * Demonstrates how rest parameters collect remaining arguments
 */
function Price (num1, num2, ...num) {
  return num
}

const restParams = Price(1, 2, 3, 4)
console.log('Price function rest parameters:', restParams)

/**
 * User object with username and price properties
 * Demonstrates object structure for function parameters
 */
const user = {
  username: 'veenayak',
  Price: 200
}

/**
 * Function to handle object parameters with validation
 * @param {Object} user - User object containing username and Price properties
 * @param {string} user.username - The username
 * @param {number} user.Price - The price value
 * @returns {string} Formatted string with user information or error message
 * Demonstrates object destructuring and parameter validation
 */
function handleobject (user) {
  if (!user.username || !user.Price) {
    return 'not available'
  }
  return `username is ${user.username} and price is ${user.Price}`
}

const userInfo = handleobject(user)
console.log('handleobject result:', userInfo)