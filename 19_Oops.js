/**
 * 19_Oops.js
 * Demonstrates basic object-oriented programming (OOP) concepts in JavaScript:
 * - Object literals
 * - Methods and the 'this' keyword
 * - Constructor functions
 * - The 'new' keyword and object instantiation
 * - The 'constructor' property
 *
 * Each section is separated by a boundary for clarity.
 */
// ==================================================================

// 1. Object Literal with Method
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    /**
     * Prints user details using 'this' keyword.
     */
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this); // Logs the current object context
    }
}

// Usage examples (uncomment to test):
// console.log(user.username)
// user.getUserDetails();
// console.log(this);
console.log('==================================================================')
// ==================================================================

// 2. Constructor Function for User Objects
/**
 * Creates a new User object.
 * @constructor
 * @param {string} username - The username of the user.
 * @param {number} loginCount - Number of times the user has logged in.
 * @param {boolean} isLoggedIn - Whether the user is currently logged in.
 */
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    /**
     * Greets the user by username.
     */
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // Returning 'this' is optional in constructor functions
    return this;
}

// Creating new user objects using the 'new' keyword
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// Logging the constructor property of userOne
console.log(userOne.constructor);
// Usage example (uncomment to test):
// console.log(userTwo);
console.log('==================================================================')
// ==================================================================