// ========================================
// JavaScript Operations - Arithmetic and Type Coercion
// ========================================

/**
 * Basic Arithmetic Operations
 * Demonstrates fundamental mathematical operations
 */

// Initial value
let value = 3;

// Unary negation operator (-) negates the value
let negValue = -value;
console.log('negValue:', negValue);

/**
 * String Concatenation
 * Demonstrates how the + operator works with strings
 */

// String variables
let str1 = "hello";
let str2 = " veenayak";

// String concatenation using + operator
let str3 = str1 + str2;
console.log('str3:', str3);

/**
 * Type Coercion with + Operator
 * Demonstrates automatic type conversion when mixing strings and numbers
 * The + operator evaluates from left to right
 */

// String + Number: Number is converted to string
console.log("'1' + 2:", '1' + 2);

// Number + String: Number is converted to string
console.log("1 + '2':", 1 + "2");

// String + Number + Number: Left-to-right evaluation
console.log("'1' + 2 + 2:", '1' + 2 + 2);

// Number + Number + String: Arithmetic first, then string conversion
console.log("1 + 2 + '2':", 1 + 2 + "2");

/**
 * Type Coercion Explanation
 * 
 * '1' + 2 + 2:
 * 1. '1' + 2 = '12' (string + number = string)
 * 2. '12' + 2 = '122' (string + number = string)
 * 
 * 1 + 2 + '2':
 * 1. 1 + 2 = 3 (number + number = number)
 * 2. 3 + '2' = '32' (number + string = string)
 */

/**
 * Key Points:
 * - + operator performs string concatenation when one operand is a string
 * - Evaluation happens from left to right
 * - Numbers are converted to strings when concatenating
 * - Include variable names in console output for clarity
 * - Be careful with type coercion in calculations
 */

