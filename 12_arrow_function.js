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

function chai(){
    console.log(this)
}

chai()

function abc(){
    let name="veenayak"
    console.log(this.name)
}

abc()

const chaii =() =>{
    let name="veenayak"
    console.log(this.name)
}

chaii()