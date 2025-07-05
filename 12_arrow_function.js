/**
 * User object demonstrating the 'this' keyword in regular functions
 * Shows how 'this' refers to the object that contains the method
 */
const user = {
  username: 'veenayak',
  price: 999,
  /**
   * Welcome method using regular function syntax
   * Demonstrates how 'this' refers to the user object
   */
  welcome: function () {
    console.log('user.welcome() - this.username:', `${this.username}, welcome to website`)
  }
}

// Call the welcome method
user.welcome()

// Modify the username property
user.username = 'sam'

// Call the welcome method again to show 'this' updates with object changes
user.welcome()

/**
 * Demonstration of 'this' in global scope
 * Shows different behavior in Node.js vs Browser environments
 */
console.log('Global scope - this:', this)

/**
 * Note: The value of 'this' in global scope differs between environments:
 * - In Node.js: 'this' refers to an empty object {} or module.exports
 * - In Browser: 'this' refers to the window object
 * - In strict mode: 'this' is undefined in global scope
 */

/**
 * Regular function demonstrating 'this' in global scope
 * Shows how 'this' behaves in a regular function context
 */
function demonstrateThisInFunction () {
  console.log('demonstrateThisInFunction - this:', this)
}

demonstrateThisInFunction()

/**
 * Regular function with local variable demonstrating 'this' behavior
 * Shows that 'this' does not refer to local variables in the function
 * @param {string} name - Local variable name
 */
function demonstrateThisWithLocalVariable () {
  const name = 'veenayak'
  console.log('demonstrateThisWithLocalVariable - this.name:', this.name)
}

demonstrateThisWithLocalVariable()

/**
 * Arrow function with local variable demonstrating 'this' behavior
 * Shows that arrow functions inherit 'this' from their enclosing scope
 * @param {string} name - Local variable name
 */
const demonstrateThisInArrowFunction = () => {
  const name = 'veenayak'
  console.log('demonstrateThisInArrowFunction - this.name:', this.name)
}

demonstrateThisInArrowFunction()