// Number Methods and Math Object Examples

// Creating a primitive number
const score = 400
console.log("score (primitive):", score);

// Creating a Number object (not recommended for simple numbers)
const balance = new Number(100)
console.log("balance (Number object):", balance);

// .toString() method: Converts number to string, then .length gets the string length
console.log("balance.toString().length:", balance.toString().length);

// .toFixed(digits) method: Formats a number using fixed-point notation with specified decimal places
console.log("balance.toFixed(1):", balance.toFixed(1));

const otherNumber = 123.8966

// .toPrecision(precision) method: Formats a number to a specified precision (total digits)
console.log("otherNumber.toPrecision(4):", otherNumber.toPrecision(4));

const hundreds = 1000000

// .toLocaleString(locale) method: Formats a number according to locale-specific conventions
console.log("hundreds.toLocaleString('en-IN'):", hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths Object +++++++++++++++++++++++++++++

// Math object: Contains properties and methods for mathematical constants and functions
console.log("Math object:", Math);

// Math.abs(x): Returns the absolute value of a number
console.log("Math.abs(-4):", Math.abs(-4));

// Math.round(x): Rounds a number to the nearest integer
console.log("Math.round(4.6):", Math.round(4.6));

// Math.ceil(x): Rounds a number up to the nearest integer
console.log("Math.ceil(4.2):", Math.ceil(4.2));

// Math.floor(x): Rounds a number down to the nearest integer
console.log("Math.floor(4.9):", Math.floor(4.9));

// Math.min(...values): Returns the smallest of zero or more numbers
console.log("Math.min(4, 3, 6, 8):", Math.min(4, 3, 6, 8));

// Math.max(...values): Returns the largest of zero or more numbers
console.log("Math.max(4, 3, 6, 8):", Math.max(4, 3, 6, 8));

// Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive)
console.log("Math.random():", Math.random());

// Generating random number between 1 and 10 (inclusive)
console.log("(Math.random()*10) + 1:", (Math.random()*10) + 1);

// Using Math.floor to get integer between 1 and 10
console.log("Math.floor(Math.random()*10) + 1:", Math.floor(Math.random()*10) + 1);

// Generating random number between min and max (inclusive)
const min = 10
const max = 20

console.log("Random between 10-20:", Math.floor(Math.random() * (max - min + 1)) + min)