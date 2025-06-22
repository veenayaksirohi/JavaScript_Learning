"use strict"

// The 'alert' function is part of the browser's environment and is not available in Node.js.
// Running this file with Node.js will cause a ReferenceError.
// alert(3+3)

console.log(3+3)

let name ="veenayak" // String: A sequence of characters.
let age=22 // Number: An integer or floating-point number.
let isLogged = false // Boolean: Represents a logical entity and can have two values: true or false.
let state=null // Null: Represents the intentional absence of any object value. It is a primitive value.
let city;

// JavaScript has several primitive data types:
// Number: For all numeric values (integer and floating-point).
// BigInt: For integers of arbitrary precision.
// String: For textual data.
// Boolean: true or false.
// null: A special value meaning "no value".
// undefined: A value automatically assigned to variables that have just been declared.
// Symbol: A unique and immutable primitive value and may be used as the key of an Object property.


// Object is a non-primitive data type, which is a collection of key-value pairs.

// The 'typeof' operator returns a string indicating the type of the unevaluated operand.
console.log(typeof age) // This will output "number".
console.log(typeof null); // Interesting quirk: this will output "object".
console.log(typeof undefined); // This will output "undefined".

// Let's check the 'city' variable you added:
console.log("city",city);          // This will output "undefined" because the variable was declared but not assigned a value.
console.log(typeof city);   // The type of an undefined value is also "undefined".