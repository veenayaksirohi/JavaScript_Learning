// ========================================
// JavaScript Numbers and Math - Methods and Operations
// ========================================

/**
 * Number Creation and Types
 * Demonstrates different ways to create numbers
 */

// Create primitive number (recommended)
const score = 400;
console.log('score (primitive):', score);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Create Number object (not recommended for simple numbers)
const balance = new Number(100);
console.log('balance (Number object):', balance);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Number Methods
 * Demonstrates built-in number methods
 */

// Convert to string and get length
console.log('balance.toString().length:', balance.toString().length);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Format with fixed decimal places
console.log('balance.toFixed(1):', balance.toFixed(1));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Number for precision formatting
const otherNumber = 123.8966;

// Format to specified precision (total digits)
console.log('otherNumber.toPrecision(4):', otherNumber.toPrecision(4));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Large number for locale formatting
const hundreds = 1000000;

// Format according to locale-specific conventions
console.log('hundreds.toLocaleString("en-IN"):', hundreds.toLocaleString('en-IN'));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Math Object
 * Demonstrates mathematical constants and functions
 */

// Math object contains properties and methods
console.log('Math object:', Math);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Math Methods - Basic Operations
 * Demonstrates fundamental mathematical functions
 */

// Get absolute value
console.log('Math.abs(-4):', Math.abs(-4));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Round to nearest integer
console.log('Math.round(4.6):', Math.round(4.6));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Round up to nearest integer
console.log('Math.ceil(4.2):', Math.ceil(4.2));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Round down to nearest integer
console.log('Math.floor(4.9):', Math.floor(4.9));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Math Methods - Min/Max Operations
 * Demonstrates finding minimum and maximum values
 */

// Find smallest number
console.log('Math.min(4, 3, 6, 8):', Math.min(4, 3, 6, 8));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Find largest number
console.log('Math.max(4, 3, 6, 8):', Math.max(4, 3, 6, 8));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Random Number Generation
 * Demonstrates generating random numbers
 */

// Generate random number between 0 and 1
console.log('Math.random():', Math.random());
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Generate random number between 1 and 10 (inclusive)
console.log('(Math.random() * 10) + 1:', (Math.random() * 10) + 1);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Generate integer between 1 and 10
console.log('Math.floor(Math.random() * 10) + 1:', Math.floor(Math.random() * 10) + 1);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Random Number in Range
 * Demonstrates generating random numbers in specific ranges
 */

// Define range
const min = 10;
const max = 20;

// Generate random number between min and max (inclusive)
console.log('Random between 10-20:', Math.floor(Math.random() * (max - min + 1)) + min);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Key Points:
 * - Use primitive numbers for simple calculations
 * - Number objects are rarely needed
 * - Math methods are static (call directly on Math object)
 * - Random numbers are pseudo-random, not cryptographically secure
 * - Include variable names in console output for clarity
 * - Be aware of floating-point precision issues
 */