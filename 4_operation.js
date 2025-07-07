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
console.log('%c==================================================================', 'color: green; font-weight: bold;')


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
console.log('%c==================================================================', 'color: green; font-weight: bold;')


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
console.log('%c==================================================================', 'color: green; font-weight: bold;')


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
 * Unary Plus Operator for Type Conversion
 * Demonstrates a quick way to convert a value to a number.
 */
console.log("Unary plus on true:", +true); // 1
console.log("Unary plus on empty string:", +"");   // 0
console.log('%c==================================================================', 'color: green; font-weight: bold;')


/**
 * Prefix and Postfix Increment/Decrement
 * Demonstrates the difference between pre-increment (++gameCounter) and post-increment (gameCounter++).
 */

let gameCounter = 100;
console.log("Initial gameCounter:", gameCounter); // 100

// Postfix increment: returns the value *before* incrementing
let postInc = gameCounter++;
console.log("gameCounter after postfix increment:", gameCounter); // 101
console.log("Value of postInc (gameCounter++):", postInc);     // 100

// Prefix increment: returns the value *after* incrementing
let preInc = ++gameCounter;
console.log("gameCounter after prefix increment:", gameCounter); // 102
console.log("Value of preInc (++gameCounter):", preInc);       // 102
console.log('%c==================================================================', 'color: green; font-weight: bold;')


/**
 * Key Points:
 * - The `+` operator performs string concatenation if either operand is a string.
 * - Evaluation of expressions happens from left to right, which is crucial for understanding type coercion with `+`.
 * - The unary plus `+` is a concise way to convert a value to a number.
 * - Be mindful of the difference between prefix (`++i`) and postfix (`i++`) increment/decrement operators, as they return different values.
 * - For clarity and to avoid bugs, it's often better to perform increments on a separate line rather than within a larger expression.
 */