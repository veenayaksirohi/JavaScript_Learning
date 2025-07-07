/**
 * Demonstrates control flow concepts in JavaScript:
 * - if/else statements
 * - comparison and logical operators
 * - switch statements
 * - falsy/truthy values
 * - array/object emptiness checks
 * - nullish coalescing operator
 * - ternary operator
 *
 * @file 14_control_flow.js
 */

/**
 * Simple if statement demonstration
 */
if (true) {
  console.log('Simple if statement - condition:', true, 'output:', 'hi')
  console.log('%c==================================================================', 'color: green; font-weight: bold;')
}

/**
 * Equality check with loose equality (==) - type coercion
 */
if (2 == '2') {
  console.log('Loose equality check - 2 == "2":', true, 'output:', 'executed')
  console.log('%c==================================================================', 'color: green; font-weight: bold;')
}

/**
 * Strict equality check with === (no type coercion)
 */
if (2 === '2') {
  console.log('Strict equality check - 2 === "2":', true, 'output:', 'executed')
} else {
  console.log('Strict equality check - 2 === "2":', false, 'output:', 'not executed')
}

/**
 * Comparison operators demonstration
 * Available operators: <, >, <=, >=, ==, !=, ===, !==
 */
const score = 200
console.log('Score variable:', score)

/**
 * If-else statement with temperature comparison
 */
const isUserLoggedIn = true
const temperature = 41
if (temperature === 40) {
  console.log('Temperature check - temperature === 40:', true, 'output:', 'less than 50')
} else {
  console.log('Temperature check - temperature === 40:', false, 'output:', 'temperature is greater than 50')
}

/**
 * Block scope demonstration
 */
if (score > 100) {
  let power = 'fly'
  console.log('Block scope - score > 100:', true, 'power variable:', power)
}
// console.log('User power:', power) // ReferenceError: power is not defined (block scope)

/**
 * If-else if-else chain demonstration
 */
const balance = 1000
if (balance < 500) {
  console.log('Balance check - balance < 500:', true, 'output:', 'less than 500')
} else if (balance < 750) {
  console.log('Balance check - balance < 750:', true, 'output:', 'less than 750')
} else if (balance < 900) {
  console.log('Balance check - balance < 900:', true, 'output:', 'less than 900')
} else {
  console.log('Balance check - balance >= 900:', true, 'output:', 'less than 1200')
}

/**
 * Logical operators demonstration
 * AND (&&) and OR (||) operators for complex conditions
 */
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 === 3) {
  console.log('purchasePermission:', 'Allow to buy course')
} else {
  console.log('purchasePermission:', 'Conditions not met')
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log('loginStatus:', 'User logged in')
}

/**
 * Switch statement demonstration
 */
const month = 'march'
switch (month) {
  case 'jan':
    console.log('month:', 'January')
    break
  case 'feb':
    console.log('month:', 'February')
    break
  case 'march':
    console.log('month:', 'March')
    break
  case 'april':
    console.log('month:', 'April')
    break
  default:
    console.log('month:', 'Default case match')
    break
}

/**
 * Falsy and truthy value demonstration
 */
const userEmail = []
if (userEmail) {
  console.log('userEmail (array) is truthy:', userEmail, 'output:', 'Got user email')
} else {
  console.log('userEmail (array) is falsy:', userEmail, 'output:', "Don't have user email")
}

// Falsy values: false, 0, -0, 0n, '', null, undefined, NaN
// Truthy values: '0', 'false', ' ', [], {}, function(){}

/**
 * Check for empty array
 */
if (userEmail.length === 0) {
  console.log('userEmail.length === 0:', true, 'output:', 'Array is empty')
}

/**
 * Check for empty object
 */
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
  console.log('Object.keys(emptyObj).length === 0:', true, 'output:', 'Object is empty')
}

/**
 * Nullish Coalescing Operator (??)
 * Returns the first defined (not null/undefined) value
 */
let val1 = null ?? 10 ?? 20
console.log('val1 (null ?? 10 ?? 20):', val1)

/**
 * Ternary Operator demonstration
 * Syntax: condition ? exprIfTrue : exprIfFalse
 */
const iceTeaPrice = 100
iceTeaPrice <= 80
  ? console.log('iceTeaPrice <= 80:', true, 'output:', 'less than 80')
  : console.log('iceTeaPrice <= 80:', false, 'output:', 'more than 80')
