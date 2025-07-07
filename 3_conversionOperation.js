// ========================================
// JavaScript Type Conversion - Understanding Coercion
// ========================================

/**
 * String to Number Conversion
 * Demonstrates explicit type conversion using Number() constructor
 */

// Initial string value
let score = "33";

// Check initial type
console.log('typeof score (initial):', typeof score);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Convert string to number
console.log('typeof Number(score):', typeof Number(score));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Invalid String to Number Conversion
 * Demonstrates what happens when conversion fails
 */

// String with non-numeric characters
score = "33q";

// Check type before conversion
console.log('typeof score (with letters):', typeof score);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Conversion results in NaN (Not a Number)
console.log('Number(score):', Number(score));
console.log('typeof Number(score):', typeof Number(score));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Null to Number Conversion
 * Demonstrates null conversion behavior
 */

// Set score to null
score = null;

// Check type of null
console.log('typeof score (null):', typeof score);

// Convert null to number (becomes 0)
console.log('Number(score):', Number(score));
console.log('typeof Number(score):', typeof Number(score));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Undefined to Number Conversion
 * Demonstrates undefined conversion behavior
 */

// Set score to undefined
score = undefined;

// Check type of undefined
console.log('typeof score (undefined):', typeof score);

// Convert undefined to number (becomes NaN)
console.log('Number(score):', Number(score));
console.log('typeof Number(score):', typeof Number(score));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Boolean to Number Conversion
 * Demonstrates boolean conversion behavior
 */

// Boolean value
let isLoggedIn = true;

// Convert boolean to number
console.log('Number(isLoggedIn):', Number(isLoggedIn));
console.log('typeof Number(isLoggedIn):', typeof Number(isLoggedIn));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Pure String to Number Conversion
 * Demonstrates conversion of non-numeric strings
 */

// Pure alphabetical string
score = "veenayak";

// Check type
console.log('typeof score (alphabetical):', typeof score);

// Convert to number (results in NaN)
console.log('Number(score):', Number(score));
console.log('typeof Number(score):', typeof Number(score));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Type Conversion Summary
 * When converting to Number:
 * - "33"      => 33
 * - "33abc"   => NaN (Not a Number)
 * - ""        => 0
 * - true      => 1
 * - false     => 0
 * - null      => 0
 * - undefined => NaN
 */

/**
 * Key Points:
 * - Number() constructor performs explicit type conversion
 * - Invalid conversions result in NaN
 * - typeof NaN returns "number" (JavaScript quirk)
 * - null converts to 0, undefined converts to NaN
 * - Include variable names in console output for clarity
 */