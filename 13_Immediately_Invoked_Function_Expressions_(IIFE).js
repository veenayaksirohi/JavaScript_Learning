/**
 * Demonstrates Immediately Invoked Function Expressions (IIFE) in JavaScript
 * IIFE are functions that run as soon as they are defined, useful for creating isolated scopes
 */

/**
 * Named IIFE example
 * Logs a message to indicate database connection
 */
(function chai () {
  console.log('chai IIFE - DB CONNECTED')
})()

/**
 * Parameterized IIFE using arrow function
 * @param {string} name - Name to include in the output
 * Logs a message with the provided name
 */
((name) => {
  console.log('arrow IIFE - DB CONNECTED TWO name:', name)
})('hitesh')
