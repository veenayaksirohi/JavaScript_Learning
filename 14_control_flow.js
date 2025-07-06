/**
 * Demonstrates control flow statements in JavaScript
 * Includes if, else if, else, logical operators, switch statements, falsy/truthy checks, nullish coalescing, and ternary operator
 * @author JavaScript Learning
 * @version 1.1
 */

/**
 * Simple if statement demonstration
 * Shows basic conditional execution
 */
if (true) {
  console.log('Simple if statement - condition:', true, 'output:', 'hi')
}

/**
 * Equality check with loose equality (==) - type coercion
 * Demonstrates automatic type conversion
 */
if (2 == '2') {
  console.log('Loose equality check - 2 == "2":', true, 'output:', 'executed')
}

/**
 * Strict equality check with === (no type coercion)
 * Demonstrates exact type and value comparison
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
 * Demonstrates conditional logic with variables
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
 * Variables declared inside blocks are not accessible outside
 */
if (score > 100) {
  let power = 'fly'
  console.log('Block scope - score > 100:', true, 'power variable:', power)
}
// The following line would cause an error if uncommented, as 'power' is block-scoped
// console.log('User power:', power)

/**
 * If-else if-else chain demonstration
 * Shows multiple conditional checks in sequence
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

/**
 * Logical AND (&&) demonstration
 * All conditions must be true for execution
 */
if (userLoggedIn && debitCard && 2 == 3) {
  console.log('Logical AND - userLoggedIn && debitCard && 2 == 3:', true, 'output:', 'Allow to buy course')
} else {
  console.log('Logical AND - userLoggedIn && debitCard && 2 == 3:', false, 'output:', 'Conditions not met')
}

/**
 * Logical OR (||) demonstration
 * At least one condition must be true for execution
 */
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log('Logical OR - loggedInFromGoogle || loggedInFromEmail:', true, 'output:', 'User logged in')
}

/**
 * Switch statement demonstration
 * Alternative to multiple if-else statements for equality checks
 */
const month = "march"

switch (month) {
    case "jan":
        console.log("Switch statement - month 'jan':", "January")
        break
    case "feb":
        console.log("Switch statement - month 'feb':", "February")
        break
    case "march":
        console.log("Switch statement - month 'march':", "March")
        break
    case "april":
        console.log("Switch statement - month 'april':", "April")
        break
    default:
        console.log("Switch statement - default case:", "default case match")
        break
}

/**
 * Falsy and truthy value demonstration
 * Shows how JavaScript evaluates different values in conditionals
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
 * Best practice: check length property
 */
if (userEmail.length === 0) {
  console.log('userEmail.length === 0:', true, 'output:', 'Array is empty')
}

/**
 * Check for empty object
 * Best practice: check Object.keys().length
 */
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log('Object.keys(emptyObj).length === 0:', true, 'output:', 'Object is empty')
}

/**
 * Nullish Coalescing Operator (??)
 * Returns the first defined (not null/undefined) value
 */
let val1
val1 = null ?? 10 ?? 20
console.log('val1 (null ?? 10 ?? 20):', val1)

/**
 * Ternary Operator demonstration
 * Syntax: condition ? exprIfTrue : exprIfFalse
 */
const iceTeaPrice = 100
iceTeaPrice <= 80
  ? console.log('iceTeaPrice <= 80:', true, 'output:', 'less than 80')
  : console.log('iceTeaPrice <= 80:', false, 'output:', 'more than 80')