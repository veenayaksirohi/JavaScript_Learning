// ========================================
// JavaScript Data Types - Understanding Type System
// ========================================

/**
 * Strict Mode Declaration
 * Enables strict mode for better error catching and performance
 */
"use strict";

/**
 * Environment-Specific Functions
 * Demonstrates functions that are only available in specific environments
 */

// The alert function is only available in browser environments
// Running this in Node.js would cause a ReferenceError
// alert(3 + 3);

// Basic arithmetic operation
console.log('3 + 3:', 3 + 3);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Primitive Data Types
 * Demonstrates the fundamental data types in JavaScript
 */

// String: A sequence of characters
let name = "veenayak";

// Number: An integer or floating-point number
let age = 22;

// Boolean: Represents a logical entity (true or false)
let isLogged = false;

// Null: Represents the intentional absence of any object value
let state = null;

// Undefined: A variable declared but not assigned a value
let city;

/**
 * Data Type Overview
 * JavaScript has several primitive data types:
 * - Number: For all numeric values (integer and floating-point)
 * - BigInt: For integers of arbitrary precision
 * - String: For textual data
 * - Boolean: true or false
 * - null: A special value meaning "no value"
 * - undefined: Automatically assigned to declared but uninitialized variables
 * - Symbol: A unique and immutable primitive value
 */

/**
 * Non-Primitive Data Type
 * Object: A collection of key-value pairs
 */

/**
 * Type Checking with typeof Operator
 * Demonstrates how to check data types of variables
 */

// Check type of number
console.log('typeof age:', typeof age);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Interesting quirk: typeof null returns "object"
console.log('typeof null:', typeof null);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Check type of undefined
console.log('typeof undefined:', typeof undefined);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Check type of declared but unassigned variable
console.log('city value:', city);
console.log('typeof city:', typeof city);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Key Points:
 * - Use typeof to check data types
 * - null is a special case that returns "object"
 * - Undefined variables have type "undefined"
 * - Always declare variables before using them
 * - Include variable names in console output for clarity
 */