// ========================================
// JavaScript Variables - Declaration and Usage
// ========================================

/**
 * Variable Declaration and Assignment
 * Demonstrates different ways to declare and assign variables in JavaScript
 */

// Declare constant variable (cannot be reassigned)
const accountId = 1234;

// Declare block-scoped variable (can be reassigned)
let accountEmail = "veena@gmail.com";

// Declare variable without initial value (will be undefined)
let accountState;

// Declare function-scoped variable (older syntax, not recommended)
var accountPassword = "8879-9";

// Implicit global variable declaration (not recommended)
accountCity = "hapur";

/**
 * Variable Reassignment Examples
 * Demonstrates how different variable types handle reassignment
 */

// Cannot reassign const variables (would cause TypeError)
// accountId = 567; // This line is commented out to prevent error

// Reassign let variable
accountEmail = "hfkfds@ngghh";

// Reassign var variable
accountPassword = 77890;

// Reassign implicit global variable
accountCity = "ha";

/**
 * Console Output with Variable Names
 * Demonstrates clean console output for debugging
 */

console.log('accountId:', accountId);
console.log('accountEmail:', accountEmail);
console.log('accountPassword:', accountPassword);
console.log('accountCity:', accountCity);
console.log('accountState:', accountState);

// Display all variables in a table format for comparison
console.table([accountId, accountEmail, accountPassword, accountPassword, accountCity, accountState]);

/**
 * Key Points:
 * - Use const for values that won't change
 * - Use let for variables that will be reassigned
 * - Avoid var due to function-scoping issues
 * - Always declare variables before using them
 * - Include variable names in console output for clarity
 */