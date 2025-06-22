# 📚 JavaScript Learning Notes

Welcome to your JavaScript learning journey! This file will contain notes to help you understand the basics of JavaScript.

## 1. 👋 "Hello, World!" in JavaScript

The most basic program you can write in many languages is one that prints "Hello, World!". In JavaScript, you can do this with `console.log()`.

**Example from `0_hello.js`:**
```javascript
console.log("hello")
```
✨ *This is a great way to make sure your environment is set up correctly.*

## 2. 🗃️ Variables in JavaScript

In JavaScript, we use variables to store data. There are three keywords to declare variables: `var`, `let`, and `const`.

### 🔒 `const`
- Declares a block-scoped variable.
- The value of a `const` variable **cannot** be changed through reassignment.
- It also cannot be re-declared.
- You must initialize the variable when you declare it.

**Example:**
```javascript
const accountId = 1234;
// accountId = 5678; // This will cause a TypeError: Assignment to constant variable.
```

### 🔄 `let`
- Declares a block-scoped variable.
- The value of a `let` variable **can** be reassigned.
- It cannot be re-declared in the same scope.

**Example:**
```javascript
let accountEmail = "user@example.com";
accountEmail = "anotheruser@example.com"; // This is valid
```

### 🏷️ `var`
- Declares a function-scoped or globally-scoped variable.
- Its value can be reassigned, and it can be re-declared.
- **Note:** It's generally recommended to avoid using `var` in modern JavaScript due to its confusing scoping behavior. Prefer `let` and `const`.

**Example:**
```javascript
var accountPassword = "password123";
accountPassword = "newPassword"; // This is valid
```

### 🔍 Key Difference: `let` vs `var` (Scope)

The most important difference between `let` and `var` is that `var` variables are scoped to the function they are declared in, while `let` variables are scoped to the *block* they are declared in. A block is any code surrounded by curly braces `{}`, like in an `if` statement or a `for` loop.

**`var` (Function Scope):**
```javascript
function run() {
  var x = 10;
  if (true) {
    var x = 20; // This is the SAME x
    console.log(x); // 20
  }
  console.log(x); // 20
}
```

**`let` (Block Scope):**
```javascript
function run() {
  let y = 10;
  if (true) {
    let y = 20; // This is a DIFFERENT y
    console.log(y); // 20
  }
  console.log(y); // 10
}
```
✨ *Because of this behavior, using `let` often leads to more predictable and less error-prone code.*

### ❓ Undefined Variables
When you declare a variable using `let` or `var` without assigning a value to it, JavaScript automatically gives it the value `undefined`.

**Example:**
```javascript
let accountState; // Declared but not initialized
console.log(accountState); // This will output: undefined
```

## 3. 🖨️ Printing to the Console

To see the output of your code and debug, you can print values to the console.

### 📝 `console.log()`
- Outputs a message to the web console.
- You can pass one or more objects to it.

**Example:**
```javascript
console.log("Hello, World!");
console.log(accountEmail);
```

### 📊 `console.table()`
- Displays tabular data as a table.
- This is very useful for displaying arrays or objects.

**Example:**
```javascript
const user1 = { name: "Alice", email: "alice@example.com" };
const user2 = { name: "Bob", email: "bob@example.com" };
console.table([user1, user2]);
```

### 🌐 Environment-Specific Functions (like `alert()`)

⚠️ *Some functions are only available in specific JavaScript environments (like the browser or Node.js).*

A common example is `alert()`. This function displays a pop-up dialog in the browser. However, it does not exist in the Node.js environment. If you try to use `alert()` in a Node.js file, you will get a `ReferenceError`. For displaying information in Node.js, it's best to use `console.log()`.

---
*Happy Coding! 🎉*

## 4. 🔢 JavaScript Data Types

In programming, data types are an important concept. To be able to operate on variables, it is important to know something about the type. JavaScript has a set of primitive data types and a non-primitive data type (Object).

### 🔧 "use strict"
The `"use strict";` directive enables "strict mode". It helps you write cleaner code, by catching common coding bloopers and throwing errors.

### 🧩 Primitive Data Types
These are the fundamental data types. They are immutable, meaning their values cannot be changed.

*   **📝 String**: Represents textual data.
    ```javascript
    let name = "veenayak";
    ```
*   **🔢 Number**: Represents numeric values, including integers and floating-point numbers.
    ```javascript
    let age = 22;
    ```
*   **✅ Boolean**: Represents a logical value of `true` or `false`.
    ```javascript
    let isLogged = false;
    ```
*   **🚫 Null**: Represents the intentional absence of any object value. It's a special value that means "no value".
    ```javascript
    let state = null;
    ```
*   **❓ Undefined**: A variable that has been declared but not assigned a value has the value `undefined`.
    ```javascript
    let city; // city is undefined
    ```
*   **🔢 BigInt**: Used for integers of arbitrary precision, which cannot be represented by the `Number` type.
*   **🔑 Symbol**: A unique and immutable value that can be used as a key for an object property.

### 🗂️ Non-Primitive Data Type

*   **🗃️ Object**: A collection of key-value pairs. Arrays, Functions, and more are all types of objects in JavaScript.

### 🏷️ The `typeof` Operator
You can use the `typeof` operator to find the data type of a JavaScript variable.

```javascript
console.log(typeof "veenayak"); // "string"
console.log(typeof 22);        // "number"
console.log(typeof false);     // "boolean"
```

💡 *Important Quirk:*
A well-known quirk in JavaScript is that the `typeof` a `null` value is `object`.
```javascript
console.log(typeof null); // "object"
```

## 5. 🔄 Type Conversion and Coercion

In JavaScript, it's common to convert values from one type to another. This can be done explicitly (type conversion) or implicitly (type coercion).

### 🔢 Explicit Conversion to Number
You can explicitly convert a value to a number using the `Number()` constructor. The results can sometimes be surprising.

*   A string containing a number is converted as you would expect.
    ```javascript
    let score = "33";
    let valueInNumber = Number(score); // 33
    ```
*   A string with non-numeric characters (that isn't just a number) becomes `NaN`.
    ```javascript
    let score = "33q";
    let valueInNumber = Number(score); // NaN (Not a Number)
    ```
*   `null` is converted to `0`.
    ```javascript
    let score = null;
    let valueInNumber = Number(score); // 0
    ```
*   `undefined` is converted to `NaN`.
    ```javascript
    let score = undefined;
    let valueInNumber = Number(score); // NaN
    ```
*   `boolean` values are converted to `1` for `true` and `0` for `false`.
    ```javascript
    let isLoggedIn = true;
    let valueInNumber = Number(isLoggedIn); // 1
    ```

💡 **Key Quirk about `NaN`:**
Even though `NaN` stands for "Not a Number", its type is `'number'`.
```javascript
console.log(typeof NaN); // "number"
```

### 📊 Conversion to Number Summary

| Original Value | Converted Value | Notes                  |
|----------------|-----------------|------------------------|
| `"33"`         | `33`            |                        |
| `"33abc"`      | `NaN`           |                        |
| `""`           | `0`             | An empty string is 0.  |
| `true`         | `1`             |                        |
| `false`        | `0`             |                        |
| `null`         | `0`             |                        |
| `undefined`    | `NaN`           |                        |

## 6. ➕ Operations in JavaScript

JavaScript has a variety of operators to perform actions on values.

### 🔢 Arithmetic Operators
Basic arithmetic is straightforward. An interesting one is the unary negation operator.

```javascript
let value = 3;
let negValue = -value; // negValue is -3
```

### 🔗 String Concatenation
The `+` operator is used to concatenate (join) strings.

```javascript
let str1 = "hello";
let str2 = " veenayak";
let greeting = str1 + str2; // "hello veenayak"
```

### 🔄 Automatic Type Coercion with `+`
This is where things can get tricky. The `+` operator's behavior depends on the types of the operands. If either operand is a string, JavaScript will convert the other operand to a string and concatenate them. The expression is evaluated from left to right.

**Examples from `4_operation.js`:**

*   `'1' + 2`
    *   `'1'` is a string, so `2` is converted to `'2'`.
    *   Result: `'1' + '2' = "12"`.

*   `1 + '2'`
    *   `'2'` is a string, so `1` is converted to `'1'`.
    *   Result: `'1' + '2' = "12"`.

*   `'1' + 2 + 2`
    *   Evaluation is left to right: `('1' + 2) + 2`.
    *   `'1' + 2` results in `"12"`.
    *   `"12" + 2` results in `"122"`.

*   `1 + 2 + '2'`
    *   Evaluation is left to right: `(1 + 2) + '2'`.
    *   `1 + 2` results in `3` (since both are numbers).
    *   `3 + '2'` results in `"32"`.

⚠️ *This behavior is a key reason to be mindful of data types when performing operations in JavaScript.*

## 7. ⚖️ Comparison in JavaScript

Comparing values in JavaScript can lead to some non-intuitive results due to type coercion.

### 🔍 Loose Equality (`==`) vs. Strict Equality (`===`)

This is one of the most important concepts in JavaScript comparisons.

*   **🔒 Strict Equality (`===`)**: This operator checks if two values are equal *without* performing any type conversion. If the types are different, it immediately returns `false`. It is the recommended operator for equality checks.
    ```javascript
    console.log('2' === 2); // false (string vs. number)
    ```

*   **🔄 Loose Equality (`==`)**: This operator will try to convert the operands to a common type before making the comparison. This can lead to unexpected results.
    ```javascript
    console.log('2' == 2); // true (string '2' is converted to number 2)
    ```

💡 **Rule of thumb: Always prefer `===` over `==` to prevent bugs from unexpected type coercion.**

### 🤔 The Curious Case of `null`

The way `null` is handled in comparisons is inconsistent and a common source of bugs.

*   When using **relational operators** (`>`, `<`, `>=`, `<=`), `null` is converted to the number `0`.
    ```javascript
    console.log(null > 0);  // false (because 0 > 0 is false)
    console.log(null >= 0); // true (because 0 >= 0 is true)
    ```

*   When using the **loose equality operator** (`==`), `null` is *not* converted to `0`. `null` is only loosely equal to `undefined`.
    ```javascript
    console.log(null == 0);         // false
    console.log(null == undefined); // true
    ```

### ❓ Comparisons with `undefined`

`undefined` is more predictable than `null`.

*   When compared with relational operators, it converts to `NaN` (Not a Number), and any comparison involving `NaN` returns `false`.
    ```javascript
    console.log(undefined > 0);  // false
    console.log(undefined < 0);  // false
    console.log(undefined >= 0); // false
    ```
*   When using loose equality, `undefined` is only equal to `null`.
    ```javascript
    console.log(undefined == 0); // false
    ```

## 8. 📝 Strings and Template Literals

Strings are one of the most commonly used data types in JavaScript. Modern JavaScript provides powerful ways to work with strings, including template literals.

### 🔤 Template Literals (String Interpolation)

Template literals are a modern way to create strings that can contain embedded expressions. They use backticks (`) instead of single or double quotes.

**Example from `6_strings.js`:**
```javascript
let name = "veenayak";
let repoCount = 50;

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
```

**Key Features:**
- Use backticks (`) to define template literals
- Use `${expression}` to embed expressions
- Can span multiple lines without concatenation
- More readable than traditional string concatenation

### 🔍 String Access by Index

You can access individual characters in a string using bracket notation with an index (starting from 0).

```javascript
let name = "veenayak";
console.log(name[0]); // "v" (first character)
```

### 🏗️ String Constructors

JavaScript provides different ways to create strings, each with different characteristics.

**String() Constructor (Recommended):**
```javascript
let userName = String("Veenayak");
// Creates a primitive string value
```

**new String() Constructor (Not Recommended):**
```javascript
let userGame = new String("Veenayak");
// Creates a String object (not a primitive)
```

**Key Differences:**
- `String()` creates a primitive string value (recommended for most use cases)
- `new String()` creates a String object with additional properties and methods
- Primitive strings are more efficient and behave like regular strings
- String objects are rarely needed and can cause confusion

**Using console.table() to Compare:**
```javascript
console.table([userName, userGame]);
// Shows the difference: userName is a string primitive, userGame is a String object
```

### 🛠️ Common String Methods and Properties

Because strings (even primitive ones) behave like objects in JavaScript, they have many built-in methods and properties to help you manipulate them.

**Examples from `6_strings.js`:**

*   **📏 `.length`**: A property that returns the number of characters in the string.
    ```javascript
    let userGame = new String("Veenayak");
    console.log(userGame.length); // 8
    ```
*   **🔤 `.toUpperCase()`**: A method that returns a new string with all characters converted to uppercase.
    ```javascript
    console.log(userGame.toUpperCase()); // "VEENAYAK"
    ```
*   **🔍 `.charAt(index)`**: A method that returns the character at the specified index.
    ```javascript
    console.log(userGame.charAt(2)); // "e"
    ```
*   **🔎 `.indexOf(substring)`**: A method that returns the index of the first occurrence of the specified substring. If the substring is not found, it returns -1.
    ```javascript
    console.log(userGame.indexOf('e')); // 1
    ```
*   **✂️ `.substring(startIndex, endIndex)`**: Extracts a part of the string from `startIndex` up to (but not including) `endIndex`. It does not accept negative indices.
    ```javascript
    let userGame = new String("Veenayak");
    const neu = userGame.substring(0, 4);
    console.log(neu); // "Veen"
    ```
*   **🔪 `.slice(startIndex, endIndex)`**: A more versatile method that extracts a section of a string. The main difference from `substring` is that it can accept negative indices, which count from the end of the string.
    ```javascript
    let userGame = new String("Veenayak");
    const news = userGame.slice(-6, 4);
    console.log(news); // "en" 
    // This starts at the 6th character from the end ('e', which is at index 2) and ends at index 4.
    ```
*   **🧹 `.trim()`**: Removes whitespace from both ends of a string (beginning and end). This is particularly useful for cleaning up user input or data that may have extra spaces.
    ```javascript
    const nam = "       veenayak        ";
    console.log(nam); // "       veenayak        "
    console.log(nam.trim()); // "veenayak"
    ```
*   **🔄 `.replace(searchValue, replaceValue)`**: Replaces the first occurrence of a specified value with another value. This is commonly used for URL encoding/decoding, text formatting, and data cleaning.
    ```javascript
    const url = "http://veenayak%20sirohi";
    console.log(url.replace('%20', '-')); // "http://veenayak-sirohi"
    // Replaces '%20' (URL encoded space) with a hyphen '-'
    ```
*   **🔍 `.includes(searchString)`**: Returns `true` if a string contains a specified substring, `false` otherwise. This is useful for checking if certain text exists within a larger string.
    ```javascript
    const url = "http://veenayak%20sirohi";
    console.log(url.includes("sirohi")); // true
    console.log(url.includes("hi")); // true (found within "sirohi")
    console.log(url.includes("javascript")); // false
    ```
*   **🔤 `.toLowerCase()`**: Returns a new string with all characters converted to lowercase.
    ```javascript
    let userGame = new String("Veenayak");
    console.log(userGame.toLowerCase()); // "veenayak"
    ```
*   **🔍 `.startsWith(searchString)`**: Returns `true` if a string begins with a specified string. This method is case sensitive.
    ```javascript
    let userGame = new String("Veenayak");
    console.log(userGame.startsWith("Vee")); // true
    console.log(userGame.startsWith("vee")); // false (case sensitive)
    ```
*   **🔍 `.endsWith(searchString)`**: Returns `true` if a string ends with a specified string. This method is case sensitive.
    ```javascript
    let userGame = new String("Veenayak");
    console.log(userGame.endsWith("yak")); // true
    console.log(userGame.endsWith("Yak")); // false (case sensitive)
    ```
*   **✂️ `.split(separator)`**: Splits a string into an array of substrings based on a separator. This is very useful for parsing strings.
    ```javascript
    const fullName = "Veenayak Sirohi";
    console.log(fullName.split(" ")); // ["Veenayak", "Sirohi"] - splits on space
    console.log(fullName.split("")); // ["V", "e", "e", "n", "a", "y", "a", "k", " ", "S", "i", "r", "o", "h", "i"] - splits into individual characters
    ```
*   **🔄 `.repeat(count)`**: Returns a new string with the original string repeated a specified number of times.
    ```javascript
    console.log("Ha".repeat(3)); // "HaHaHa"
    ```
*   **🔧 `__proto__`**: This property allows you to see the object's prototype, which contains all the available string methods. It's useful for inspection but not typically used in day-to-day coding.

### 💡 Important Notes About Strings

1. **⚠️ Avoid using `name` as a variable name** - it conflicts with the deprecated global `window.name` property in browsers
2. **✨ Template literals are preferred** over string concatenation for readability
3. **🔧 Use primitive strings** (`String()` or quotes) rather than String objects (`new String()`)
4. **🔒 Strings are immutable** - you cannot change individual characters, but you can create new strings

## 9. 🔢 Numbers and Math in JavaScript

JavaScript provides powerful number manipulation capabilities through both Number methods and the Math object. Understanding these is crucial for mathematical operations and data formatting.

### 🏗️ Number Constructors and Methods

**Examples from `7_numberMath.js`:**

*   **🔢 Primitive Numbers vs Number Objects**: JavaScript allows creating numbers in two ways.
    ```javascript
    const score = 400; // Primitive number (recommended)
    const balance = new Number(100); // Number object (not recommended for simple numbers)
    ```

*   **📝 `.toString()`**: Converts a number to a string, enabling string methods like `.length`.
    ```javascript
    const balance = new Number(100);
    console.log(balance.toString().length); // 3 (length of "100")
    ```

*   **🔢 `.toFixed(digits)`**: Formats a number using fixed-point notation with specified decimal places.
    ```javascript
    const balance = new Number(100);
    console.log(balance.toFixed(1)); // "100.0"
    ```

*   **📊 `.toPrecision(precision)`**: Formats a number to a specified precision (total digits).
    ```javascript
    const otherNumber = 123.8966;
    console.log(otherNumber.toPrecision(4)); // "123.9"
    ```

*   **🌍 `.toLocaleString(locale)`**: Formats a number according to locale-specific conventions.
    ```javascript
    const hundreds = 1000000;
    console.log(hundreds.toLocaleString('en-IN')); // "10,00,000" (Indian format)
    ```

### 🧮 Math Object Methods

The Math object provides mathematical constants and functions for advanced calculations.

*   **🔢 `Math.abs(x)`**: Returns the absolute value of a number.
    ```javascript
    console.log(Math.abs(-4)); // 4
    ```

*   **🔄 `Math.round(x)`**: Rounds a number to the nearest integer.
    ```javascript
    console.log(Math.round(4.6)); // 5
    console.log(Math.round(4.4)); // 4
    ```

*   **⬆️ `Math.ceil(x)`**: Rounds a number up to the nearest integer.
    ```javascript
    console.log(Math.ceil(4.2)); // 5
    console.log(Math.ceil(4.9)); // 5
    ```

*   **⬇️ `Math.floor(x)`**: Rounds a number down to the nearest integer.
    ```javascript
    console.log(Math.floor(4.9)); // 4
    console.log(Math.floor(4.2)); // 4
    ```

*   **📉 `Math.min(...values)`**: Returns the smallest of zero or more numbers.
    ```javascript
    console.log(Math.min(4, 3, 6, 8)); // 3
    ```

*   **📈 `Math.max(...values)`**: Returns the largest of zero or more numbers.
    ```javascript
    console.log(Math.max(4, 3, 6, 8)); // 8
    ```

### 🎲 Random Number Generation

*   **🎯 `Math.random()`**: Returns a random number between 0 (inclusive) and 1 (exclusive).
    ```javascript
    console.log(Math.random()); // Random number between 0 and 1
    ```

*   **🎲 Random number in a range**: To generate random numbers in a specific range.
    ```javascript
    // Random number between 1 and 10
    console.log(Math.floor(Math.random() * 10) + 1);
    
    // Random number between min and max (inclusive)
    const min = 10;
    const max = 20;
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    ```

### 💡 Important Notes About Numbers

1. **🔧 Use primitive numbers** for simple calculations - they're more efficient than Number objects
2. **⚠️ Number objects** are rarely needed and can cause confusion
3. **🔧 Math methods** are static - call them directly on the Math object
4. **🎲 Random numbers** are pseudo-random and not cryptographically secure
5. **🔢 Floating-point precision** can cause unexpected results in calculations (use `.toFixed()` for display)

### 🐛 Debugging Tip: Object Notation

As mentioned in [CSS-Tricks](https://css-tricks.com/console-log-myvariable/), you can use object notation for cleaner debugging:

```javascript
const myNumber = 42;
console.log({ myNumber }); // Shows: { myNumber: 42 }
```

This creates a shorthand object that displays the variable name and value clearly in the console.