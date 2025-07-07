/**
 * Function to print a name to the console
 * Demonstrates basic function declaration and calling
 */
function sayMyName () {
  console.log('sayMyName output:', 'veenayak')
  console.log('%c==================================================================', 'color: green; font-weight: bold;')
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
console.log('%c==================================================================', 'color: green; font-weight: bold;')

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
console.log('%c==================================================================', 'color: green; font-weight: bold;')

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

/**
 * Demonstration of variable scope with let and const
 * Shows block scope behavior and variable shadowing
 */
// Global variable declaration
let a = 300

// Block scope demonstration
if (true) {
  // Block-scoped variable (shadows the global 'a')
  let a = 10
  // Block-scoped constant
  const b = 20
  console.log('INNER block scope - a:', a)
  console.log('INNER block scope - b:', b)
}

// Access global variable (not affected by block scope)
console.log('OUTER global scope - a:', a)

// This will cause a ReferenceError because 'b' is block-scoped
// console.log('OUTER global scope - b:', b) // ReferenceError: b is not defined

// This will cause a ReferenceError because 'c' was never declared
// console.log('OUTER global scope - c:', c) // ReferenceError: c is not defined

/**
 * Demonstration of nested functions and closure scope
 * Shows how inner functions can access variables from outer function scope
 */
function one () {
  const username = 'hitesh'

  /**
   * Inner function that demonstrates closure behavior
   * Can access variables from the outer function scope
   */
  function two () {
    const website = 'youtube'
    console.log('Inner function - username from outer scope:', username)
    console.log('Inner function - website from inner scope:', website)
  }

  // This would cause a ReferenceError - website is not accessible here
  // console.log('Outer function - website:', website) // ReferenceError: website is not defined

  // Call the inner function
  two()
}

// Call the outer function to demonstrate nested function behavior
one()

/**
 * Demonstration of nested block scope with if statements
 * Shows how variables are scoped within conditional blocks
 */
if (true) {
  const username = 'hitesh'
  if (username === 'hitesh') {
    const website = ' youtube'
    console.log('Nested if block - username + website:', username + website)
  }

  // This would cause a ReferenceError - website is not accessible here
  // console.log('Outer if block - website:', website) // ReferenceError: website is not defined
}

// This would cause a ReferenceError - username is not accessible here
// console.log('Global scope - username:', username) // ReferenceError: username is not defined

/**
 * Demonstration of function hoisting behavior
 * Shows the difference between function declarations and function expressions
 */

// Function declaration - can be called before declaration (hoisted)
console.log('Function declaration result:', addone(5))

/**
 * Function declaration - hoisted to the top of the scope
 * @param {number} num - Number to increment
 * @returns {number} The number plus 1
 */
function addone (num) {
  return num + 1
}

// Function expression - cannot be called before declaration (not hoisted)
// This will cause a ReferenceError because addTwo is not hoisted
// addTwo(5) // ReferenceError: Cannot access 'addTwo' before initialization

/**
 * Function expression - not hoisted, must be declared before use
 * @param {number} num - Number to add 2 to
 * @returns {number} The number plus 2
 */
const addTwo = function (num) {
  return num + 2
}

// Now we can call the function expression
const addTwoResult = addTwo(5)
console.log('Function expression result:', addTwoResult)