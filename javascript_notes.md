<div align="center">

# 📚 JavaScript Learning Notes

*Your comprehensive guide to JavaScript fundamentals*

</div>

---

<div align="center">

## 📋 Table of Contents

*Navigate through all JavaScript concepts with ease*

</div>

| **Section** | **Topic** | **Subtopics** |
|-------------|-----------|---------------|
| **1** | [👋 "Hello, World!" in JavaScript](#1--hello-world-in-javascript) | Basic JavaScript setup |
| **2** | [🗃️ Variables in JavaScript](#2--variables-in-javascript) | `const`, `let`, `var`, scope differences |
| **3** | [🖨️ Printing to the Console](#3--printing-to-the-console) | `console.log()`, `console.table()`, environment functions |
| **4** | [🔢 JavaScript Data Types](#4--javascript-data-types) | Primitive types, `typeof` operator, "use strict" |
| **5** | [🔄 Type Conversion and Coercion](#5--type-conversion-and-coercion) | Explicit conversion, type coercion, `NaN` handling |
| **6** | [➕ Operations in JavaScript](#6--operations-in-javascript) | Arithmetic operators, string concatenation, type coercion |
| **7** | [⚖️ Comparison in JavaScript](#7--comparison-in-javascript) | `==` vs `===`, `null` behavior, `undefined` comparisons |
| **8** | [📝 Strings and Template Literals](#8--strings-and-template-literals) | Template literals, string methods, constructors |
| **9** | [🔢 Numbers and Math in JavaScript](#9--numbers-and-math-in-javascript) | Number methods, Math object, random generation |
| **10** | [🗓️ Dates in JavaScript](#10--dates-in-javascript) | Date creation, timestamps, formatting, components |
| **11** | [📚 Arrays in JavaScript](#11--arrays-in-javascript) | Array methods, manipulation, spread operator |
| **12** | [🗃️ Objects in JavaScript](#12--objects-in-javascript) | Object creation, properties, methods, destructuring |

---

### 📖 **Quick Navigation**

<div align="left">

**🔰 Beginner Concepts:**
- [Variables](#2--variables-in-javascript) • [Data Types](#4--javascript-data-types) • [Console Output](#3--printing-to-the-console)

**🔧 Core Operations:**
- [Type Conversion](#5--type-conversion-and-coercion) • [Operations](#6--operations-in-javascript) • [Comparisons](#7--comparison-in-javascript)

**📝 Data Structures:**
- [Strings](#8--strings-and-template-literals) • [Numbers](#9--numbers-and-math-in-javascript) • [Arrays](#11--arrays-in-javascript) • [Objects](#12--objects-in-javascript)

**📅 Advanced Topics:**
- [Dates](#10--dates-in-javascript) • [Object Destructuring](#-object-destructuring-es6)

</div>

---

---

<div align="center">

## 1. 👋 "Hello, World!" in JavaScript

*Your first step into the JavaScript universe*

</div>

<div align="center">

The most basic program you can write in many languages is one that prints "Hello, World!". In JavaScript, you can do this with `console.log()`.

</div>

<div align="center">

**Example from `0_hello.js`:**

```javascript
console.log("hello")
```

✨ *This is a great way to make sure your environment is set up correctly.*

</div>

---

<div align="center">

## 2. 🗃️ Variables in JavaScript

*Understanding data storage and scope in JavaScript*

</div>

<div align="center">

In JavaScript, we use variables to store data. There are three keywords to declare variables: `var`, `let`, and `const`.

</div>

<div align="left">

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

</div>

<div align="left">

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

<div align="center">

✨ *Because of this behavior, using `let` often leads to more predictable and less error-prone code.*

</div>

### ❓ Undefined Variables
When you declare a variable using `let` or `var` without assigning a value to it, JavaScript automatically gives it the value `undefined`.

**Example:**
```javascript
let accountState; // Declared but not initialized
console.log(accountState); // This will output: undefined
```

</div>

---

<div align="center">

## 3. 🖨️ Printing to the Console

*Debugging and output methods in JavaScript*

</div>

<div align="center">

To see the output of your code and debug, you can print values to the console.

</div>

<div align="left">

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

</div>

<div align="center">

⚠️ *Some functions are only available in specific JavaScript environments (like the browser or Node.js).*

</div>

<div align="left">

A common example is `alert()`. This function displays a pop-up dialog in the browser. However, it does not exist in the Node.js environment. If you try to use `alert()` in a Node.js file, you will get a `ReferenceError`. For displaying information in Node.js, it's best to use `console.log()`.

</div>

---

<div align="center">

*Happy Coding! 🎉*

</div>

---

<div align="center">

## 4. 🔢 JavaScript Data Types

*Understanding the building blocks of JavaScript data*

</div>

<div align="center">

In programming, data types are an important concept. To be able to operate on variables, it is important to know something about the type. JavaScript has a set of primitive data types and a non-primitive data type (Object).

</div>

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

## 10. 🗓️ Dates in JavaScript

Working with dates and times is a common task in programming. JavaScript's `Date` object provides the functionality needed to create, format, and manipulate dates.

### 🕰️ Creating Dates

You can create a date object in several ways.

*   **Current Date and Time**:
    ```javascript
    let myDate = new Date();
    // Creates a date object for the current moment.
    ```
*   **Specific Date**:
    ```javascript
    // new Date(year, month, day, hours, minutes, seconds)
    let myCreatedDate = new Date(2023, 0, 23); // 23 Jan 2023
    // ⚠️ Note: Months are 0-indexed (0 for January, 1 for February, etc.)
    ```
*   **From a Date String**:
    ```javascript
    let fromString1 = new Date("2023-01-14"); // YYYY-MM-DD
    let fromString2 = new Date("01-14-2023"); // MM-DD-YYYY (can be ambiguous)
    ```

### ⏳ Timestamps (Milliseconds Since Epoch)

A timestamp represents a single moment in time, measured as the number of milliseconds that have passed since the **Unix Epoch** (midnight on January 1, 1970 UTC).

*   **`Date.now()`**: Returns the current timestamp.
    ```javascript
    let myTimeStamp = Date.now(); // e.g., 1673645362521
    ```
*   **`.getTime()`**: Converts a date object into its timestamp.
    ```javascript
    console.log(myCreatedDate.getTime());
    ```
*   **Converting to Seconds**: To get the timestamp in seconds, divide by 1000.
    ```javascript
    console.log(Math.floor(Date.now() / 1000));
    ```

### 📜 Formatting Dates

Once you have a date object, you can format it into a human-readable string.

*   **`.toString()`**: A detailed, standard representation.
*   **`.toDateString()`**: A simpler, date-only format (e.g., "Mon Jan 23 2023").
*   **`.toLocaleString()`**: A locale-sensitive format for date and time.

### 🧩 Getting and Setting Date Components

You can extract individual parts of a date.

*   **`.getMonth()`**: Returns the month (0-11). **Remember to add 1** for the human-readable month.
*   **`.getDay()`**: Returns the day of the week (0 for Sunday, 1 for Monday, etc.).
*   **`.getFullYear()`**: Returns the four-digit year.
*   **`.getHours()`**, **`.getMinutes()`**, **`.getSeconds()`**: Get time components.

### ✨ Advanced Formatting with `toLocaleString`

For complete control over the format, you can pass an `options` object to `toLocaleString`.

```javascript
let newDate = new Date();
let customDate = newDate.toLocaleString('default', {
    weekday: "long", // e.g., "Monday"
    year: "numeric", // e.g., "2023"
    month: "long",   // e.g., "January"
    day: "numeric"   // e.g., "23"
});

console.log(customDate); // "Monday, January 23, 2023" (format depends on locale)
```

### 💡 Important Notes About Dates

1.  **Object Type**: The `typeof` a `Date` object is `"object"`, not `"date"`.
2.  **Zero-Indexed Months**: Months are counted from 0 (January) to 11 (December). This is a very common source of bugs.
3.  **Timestamps**: Dates are fundamentally stored as timestamps, which makes comparing and calculating durations between dates easy and reliable.

## 11. 📚 Arrays in JavaScript

Arrays are used to store multiple values in a single variable. They are one of the most commonly used data structures in JavaScript.

**Example from `9_array.js`:**
```javascript
// Array of numbers
const arr = [1, 2, 3, 4, 5];
// Array of superhero names
const heors = ['shaktiman', 'naagraj', 'doga'];
// Print the first element of the heors array
console.log(heors[0]); // "shaktiman"
// Print the length of the heors array
console.log(heors.length); // 3
// Add 9 to the beginning of the arr array
arr.unshift(9);
// Remove the first element from the arr array
arr.shift();
```

### 🏗️ Creating Arrays
- Arrays can be created using square brackets `[]`.
- They can store elements of any type (numbers, strings, objects, etc.).

### 🔢 Accessing Elements
- Use bracket notation with an index (starting from 0) to access elements.
- Example: `heors[0]` returns the first element.

### 📏 Array Length
- The `.length` property returns the number of elements in the array.
- Example: `heors.length` returns `3` for the above array.

### ➕ Adding and Removing Elements
- `unshift(value)`: Adds an element to the **beginning** of the array.
- `shift()`: Removes the **first** element from the array.
- Example:
    ```javascript
    arr.unshift(9); // arr becomes [9, 1, 2, 3, 4, 5]
    arr.shift();    // arr becomes [1, 2, 3, 4, 5]
    ```

### 🔍 Checking for Elements and Indexes
- `includes(value)`: Checks if the array contains a specific value. Returns `true` or `false`.
    ```javascript
    console.log('arr.includes(9):', arr.includes(9)); // false
    ```
- `indexOf(value)`: Returns the index of the first occurrence of a value, or -1 if not found.
    ```javascript
    console.log('arr.indexOf(3):', arr.indexOf(3)); // 2
    ```

### 🔗 Joining Array Elements
- `join()`: Joins all elements of an array into a string, separated by commas (or another separator if specified).
    ```javascript
    const narr = arr.join();
    console.log('narr:', narr); // '1,2,3,4,5'
    ```

### 🖨️ Printing Arrays with Labels
- It's a good practice to include the variable name in your console output for clarity, especially when debugging or learning.
    ```javascript
    console.log('arr:', arr); // [1, 2, 3, 4, 5]
    ```

### ✂️ Slicing and Splicing Arrays
- `slice(start, end)`: Returns a shallow copy of a portion of an array into a new array object. The original array is not modified.
    ```javascript
    const sli = arr.slice(1, 3);
    console.log('sli:', sli); // [2, 3]
    console.log('B arr:', arr); // arr remains unchanged
    ```
- `splice(start, deleteCount)`: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array is modified.
    ```javascript
    const spi = arr.splice(1, 3);
    console.log('spi:', spi); // [2, 3, 4]
    console.log('arr after splice:', arr); // [1, 5]
    ```

### 🔄 Combining and Mutating Arrays
- `push(value)`: Adds an element (or array) to the end of the array. If you push an array, it becomes a nested array.
    ```javascript
    marvel_heors.push(dc_heros);
    console.log('marvel_heors after push:', marvel_heors); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
    ```
- Accessing a nested array:
    ```javascript
    console.log('marvel_heors[3]:', marvel_heors[3]); // [ 'superman', 'flash', 'batman' ]
    ```
- `pop()`: Removes the last element from the array.
    ```javascript
    marvel_heors.pop();
    ```
- `concat(array)`: Combines two arrays into a new array (does not mutate the originals).
    ```javascript
    const all_heros = marvel_heors.concat(dc_heros);
    console.log('all_heros:', all_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
    ```
- Always print variable names in console output for clarity:
    ```javascript
    console.log('marvel_heors after pop and concat:', marvel_heors);
    ```

### 🆕 Merging Arrays with the Spread Operator
- The ES6 spread operator (`...`) is a modern and preferred way to merge arrays. It creates a new array by spreading the elements of existing arrays.
    ```javascript
    const all_new_heros = [...marvel_heors, ...dc_heros];
    console.log('all_new_heros:', all_new_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
    ```
- This method is concise, readable, and does not mutate the original arrays.

### 🧩 Advanced Array Methods
- `flat(depth)`: Flattens nested arrays into a single array. Use `Infinity` to flatten all levels.
    ```javascript
    const andther_arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
    const real_andther_arrr = andther_arr.flat(Infinity);
    console.log('real_andther_arrr:', real_andther_arrr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ```
- `Array.isArray(value)`: Checks if a value is an array.
    ```javascript
    console.log('Array.isArray("veenayak"):', Array.isArray("veenayak")); // false
    ```
- `Array.from(value)`: Creates an array from an iterable or array-like object. For a string, it creates an array of characters.
    ```javascript
    console.log('Array.from("veenayak"):', Array.from("veenayak")); // ['v', 'e', 'e', 'n', 'a', 'y', 'a', 'k']
    console.log('Array.from({name: "veenayak"}):', Array.from({name: "veenayak"})); // []
    ```
- `Array.of(element1, element2, ...)`: Creates a new array from a set of arguments.
    ```javascript
    const score1 = 100;
    const score2 = 200;
    const score3 = 300;
    console.log('Array.of(score1, score2, score3):', Array.of(score1, score2, score3)); // [100, 200, 300]
    ```

### 📝 Clean Console Output
- Always include the variable name or context in your `console.log` statements for clean and understandable output. This is especially helpful when working with multiple variables or arrays at once.
    ```javascript
    console.log('arr:', arr);
    console.log('narr:', narr);
    console.log('sli:', sli);
    console.log('spi:', spi);
    ```

### 💡 Notes
- Arrays are zero-indexed: the first element is at index 0.
- You can use `console.log()` to print arrays or their elements.
- Arrays are mutable, meaning you can change their contents after creation.

## 12. 🗃️ Objects in JavaScript

Objects are collections of key-value pairs and are one of the most important data structures in JavaScript. They allow you to group related data and functionality together.

**Example from `10_objects.js`:**
```javascript
// Object literal syntax (most common way to create objects)
const obj = {
    name: "veenayak",
    age: 22,
    location: "hapur",
    email: "veena@edv.com",
};

// Access object properties using dot notation
console.log('obj.name:', obj.name); // veenayak

// Access object properties using bracket notation
console.log('obj["name"]:', obj["name"]); // veenayak
```

### 🏗️ Creating Objects
- **Object Literal Syntax**: The most common and straightforward way to create objects using curly braces `{}`.
- **Object Constructor**: Using `new Object()` (less common, not recommended for simple objects).
- **Object.create()**: Creates a new object with a specified prototype (used for singleton patterns).
- Objects can contain properties of any data type: strings, numbers, booleans, arrays, functions, or other objects.

**Example from `10_objects.js`:**
```javascript
// Object literal syntax (recommended approach)
let obj = {
    name: 'veenayak',
    age: 22,
    location: 'hapur',
    email: 'veena@edv.com'
};

// Object constructor (less common, not recommended)
let tinder = new Object();
tinder = {}; // Reassigning to object literal syntax
```

### 🔑 Accessing Object Properties
- **Dot Notation**: Use a dot followed by the property name (e.g., `obj.name`).
- **Bracket Notation**: Use square brackets with the property name as a string (e.g., `obj["name"]`).
- Bracket notation is useful when property names are dynamic or contain special characters.

### 🆕 Symbols in Objects
- **Symbols**: Unique identifiers that can be used as object property keys to avoid naming conflicts.
- **Creating Symbols**: Use `Symbol("description")` to create a unique symbol.
- **Symbol Properties**: Must be accessed using bracket notation, not dot notation.
    ```javascript
    const sum = Symbol("key1");
    obj = {
        name: "veenayak",
        [sum]: "mykey1", // Use bracket notation for Symbol properties
        age: 22,
        location: "hapur",
        email: "veena@edv.com",
    };
    console.log('obj[sum]:', obj[sum]); // mykey1
    ```

### 🔄 Object Reassignment
- Objects can be reassigned to variables declared with `let` or `var`.
- When reassigning, the entire object is replaced, not just individual properties.
- Always use bracket notation to access Symbol properties.

### 🔍 Checking Data Types
- Use the `typeof` operator to check the data type of object property values.
- This is useful for debugging and understanding what type of data is stored in object properties.
    ```javascript
    console.log('typeof(obj[sum]):', typeof(obj[sum])); // string
    ```

### 🔍 Object Property Enumeration
- **Object.keys()**: Returns an array of a given object's own enumerable property names.
    ```javascript
    console.log('Object.keys(obj):', Object.keys(obj)); // ['name', 'age', 'location', 'email']
    ```
- **Object.getOwnPropertySymbols()**: Returns an array of all symbol properties found directly upon a given object.
    ```javascript
    console.log('Object.getOwnPropertySymbols(obj):', Object.getOwnPropertySymbols(obj)); // [Symbol(key1)]
    ```
- **Symbol Properties**: Symbol properties are not enumerable and won't appear in `Object.keys()` or `for...in` loops, making them useful for private-like properties.

### 💡 Best Practices
- Use object literal syntax `{}` instead of `new Object()` for better performance and readability [[dev.to/codecraftjs/javascript-objects-best-practices-gjo](https://dev.to/codecraftjs/javascript-objects-best-practices-gjo)].
- Use computed property names `[key]: value` for dynamic property names and Symbol properties.
- Always use bracket notation `obj[symbol]` to access Symbol properties.
- Group shorthand properties at the beginning of object declarations for better readability.

### 🔒 Object Immutability
- **Object.freeze()**: Makes an object immutable by preventing property additions, deletions, and modifications.
    ```javascript
    // Modify object property before freezing
    obj['age'] = 25;
    console.log('obj after age modification:', obj);
    
    // Freeze object to make it immutable
    Object.freeze(obj);
    
    // Attempt to modify property after freezing (will be ignored in non-strict mode)
    obj['age'] = 24;
    console.log('obj after freeze attempt:', obj); // age remains 25
    ```
- **Behavior**: In non-strict mode, attempts to modify frozen objects are silently ignored. In strict mode, they throw errors.
- **Use Cases**: Useful for creating constant objects, preventing accidental modifications, and ensuring data integrity.
- **Permanence**: Once an object is frozen, it cannot be unfrozen. `Object.unfreeze()` does not exist in JavaScript.
- **Important**: All properties and methods must be added to the object before calling `Object.freeze()`.
- **Best Practice**: Always add all properties and methods before freezing to ensure they work properly.

### 🔧 Functions as Object Properties
- Objects can contain functions as properties, making them methods of the object.
    ```javascript
    // Create function expression for greeting
    const greeting = function() {
        console.log('hello');
    };
    
    // Add function as property to object BEFORE freezing
    obj.greeting = greeting;
    obj.greeting(); // Output: hello
    ```
- **Method Definition**: Functions stored as object properties are called methods.
- **Access**: Methods can be called using dot notation or bracket notation.
- **Frozen Objects**: Methods can be called on frozen objects if they were added before freezing, but new properties cannot be added after freezing.
- **Important**: Always add methods before calling `Object.freeze()` to ensure they work properly.

### 🔑 The 'this' Keyword in Methods
- The `this` keyword refers to the object that contains the method, allowing access to other object properties.
    ```javascript
    // Add method that uses 'this' to access object properties (BEFORE freezing)
    obj.greetingWithName = function() {
        console.log(`hello, ${this.name}`); // Use template literal with ${} syntax
    };
    obj.greetingWithName(); // Output: hello, veenayak
    ```
- **Template Literals**: Use `${}` syntax (not `$()`) to embed expressions in template literals.
- **Context**: `this` provides a way to reference the current object from within a method.
- **Use Cases**: Essential for creating methods that need to access or modify object properties.
- **Best Practice**: Always add methods that use `this` before freezing the object.

### 💡 Key Points
- Object properties are unordered (except for integer keys).
- Property names are strings (though quotes are optional for valid identifiers).
- Objects are mutable by default - you can add, modify, or delete properties after creation.
- Objects are reference types - when you assign an object to a variable, you're creating a reference to the same object.
- Use `Object.freeze()` to create immutable objects when you need to prevent modifications.
- The `this` keyword is crucial for object-oriented programming in JavaScript.

### 🏗️ Nested Objects
- Objects can contain other objects as properties, creating nested structures.
- Access nested properties using dot notation or bracket notation.
    ```javascript
    let reguser = {
        email: 'veen@ff.vom',
        fullname: {
            userFullname: {
                firstname: 'veenayak',
                lastname: 'sirohi'
            }
        }
    };
    
    // Access using dot notation
    console.log('reguser.fullname.userFullname.firstname:', reguser.fullname.userFullname.firstname);
    
    // Access using bracket notation
    console.log('reguser nested bracket access:', reguser['fullname']['userFullname']['firstname']);
    ```

### 🔄 Object Reassignment with Quoted Properties
- Objects can be reassigned with quoted property names, which are valid but not required for valid identifiers.
- Both quoted and unquoted property names work the same way.
    ```javascript
    // Object reassignment with quoted properties
    reguser = {
        email: 'veen@ff.vom',
        'fullname': {
            'userFullname': {
                'firstname': 'veenayak',
                'lastname': 'sirohi'
            }
        }
    };
    
    // Accessing nested object properties after reassignment
    console.log('reguser after reassignment:', reguser);
    console.log('reguser.fullname.userFullname.firstname (dot notation):', reguser.fullname.userFullname['firstname']);
    console.log('reguser nested bracket access:', reguser['fullname']['userFullname']['firstname']);
    ```
- **Key Point**: Quoted property names are valid but not required for valid identifiers. Use them when property names contain special characters or spaces.

### 🔗 Object Concatenation Methods
- **Object.assign()**: Merges multiple objects into a target object.
    ```javascript
    const obj1 = { 1: 'a', 2: 'b', 3: 'c' };
    const obj2 = { 4: 'a', 5: 'b', 6: 'c' };
    const obj3 = Object.assign({}, obj1, obj2);
    console.log('obj3 (using Object.assign):', obj3);
    ```
- **Spread Operator (...)**: Modern ES6 way to merge objects.
    ```javascript
    const obj4 = { ...obj1, ...obj2 };
    console.log('obj4 (using spread operator):', obj4);
    ```
- **Adding Properties**: Both methods can include additional properties during concatenation.
    ```javascript
    const obj5 = Object.assign({}, obj1, obj2, { 7: 'd', 8: 'e' });
    const obj6 = { ...obj1, ...obj2, 7: 'd', 8: 'e' };
    ```

### 📚 Arrays of Objects
- Arrays can contain objects as elements, creating collections of related data.
- Access object properties within array elements using index notation.
    ```javascript
    const users = [
        {
            id: 1,
            email: 'h@gmail.com'
        },
        {
            id: 2,
            email: 'h@gmail.com'
        },
        {
            id: 3,
            email: 'h@gmail.com'
        }
    ];
    
    // Access object properties within array elements
    console.log('users[1].email:', users[1].email); // h@gmail.com
    ```

### 🛠️ Object Utility Methods
JavaScript provides several built-in methods for working with object properties:

- **Object.keys(obj)**: Returns an array of a given object's own enumerable property names.
    ```javascript
    console.log('Object.keys(tinder):', Object.keys(tinder)); // ['id', 'name', 'isLoggedIn']
    ```

- **Object.values(obj)**: Returns an array of a given object's own enumerable property values.
    ```javascript
    console.log('Object.values(tinder):', Object.values(tinder)); // [1, 'sam', false]
    ```

- **Object.entries(obj)**: Returns an array of a given object's own enumerable [key, value] pairs.
    ```javascript
    console.log('Object.entries(tinder):', Object.entries(tinder)); // [['id', 1], ['name', 'sam'], ['isLoggedIn', false]]
    ```

- **obj.hasOwnProperty(prop)**: Returns a boolean indicating whether the object has the specified property as its own property.
    ```javascript
    console.log('tinder.hasOwnProperty("name"):', tinder.hasOwnProperty('name')); // true
    console.log('tinder.hasOwnProperty("age"):', tinder.hasOwnProperty('age')); // false
    ```

**Use Cases:**
- `Object.keys()`: Iterating over object properties, checking property existence
- `Object.values()`: Working with object values without needing keys
- `Object.entries()`: Converting objects to arrays for array methods, creating key-value pairs
- `hasOwnProperty()`: Checking if an object has a specific property before accessing it

### 🚨 Common Errors and Debugging

#### TypeError: "x" is not a function
This error occurs when you try to call a value that is not a function. Common causes include:

1. **Typo in Method Name**: Ensure the method name is spelled correctly.
   ```javascript
   // ❌ Error: Typo in method name
   obj.gretting(); // TypeError: obj.gretting is not a function
   
   // ✅ Correct: Proper method name
   obj.greeting(); // Works correctly
   ```

2. **Adding Methods After Freezing**: You cannot add new properties to a frozen object.
   ```javascript
   // ❌ Error: Adding method after freezing
   Object.freeze(obj);
   obj.newMethod = function() { console.log('hello'); }; // Won't work
   
   // ✅ Correct: Add methods before freezing
   obj.newMethod = function() { console.log('hello'); };
   Object.freeze(obj);
   obj.newMethod(); // Works correctly
   ```

3. **Property Not Defined**: Ensure the property exists before calling it as a function.
   ```javascript
   // ❌ Error: Property doesn't exist
   const obj = {};
   obj.method(); // TypeError: obj.method is not a function
   
   // ✅ Correct: Define the method first
   const obj = {
       method: function() { console.log('hello'); }
   };
   obj.method(); // Works correctly
   ```

**Debugging Tips:**
- Always check for typos in method names
- Use `console.log(typeof obj.method)` to verify if a property is a function
- Add all properties and methods before calling `Object.freeze()`
- Use proper naming conventions to avoid confusion

### 🔗 Object Destructuring (ES6)

Object destructuring is a powerful ES6 feature that allows you to extract properties from objects and assign them to variables in a clean, readable way. It's based on the concept of using patterns to extract parts of data, similar to how object literals let us create multiple properties at once.

#### Basic Object Destructuring
Extract properties with the same name as the variable:
```javascript
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Basic destructuring - extract property with same name
let {courseInstructor} = course;
console.log('courseInstructor (destructured):', courseInstructor); // "hitesh"

// Extract multiple properties at once
let {coursename, price} = course;
console.log('coursename:', coursename); // "js in hindi"
console.log('price:', price);           // "999"
```

#### Destructuring with Property Renaming
Extract properties and assign them to variables with different names:
```javascript
// Object destructuring with property renaming
let {courseInstructor: instructor} = course;
console.log('instructor (renamed from courseInstructor):', instructor); // "hitesh"

// Multiple properties with renaming
let {coursename: title, courseInstructor: teacher} = course;
console.log('title:', title);   // "js in hindi"
console.log('teacher:', teacher); // "hitesh"
```

#### Advanced Destructuring Features

**Default Values:**
```javascript
const user = { name: "John" };
let { name, age = 25, email = "default@example.com" } = user;
console.log('name:', name);   // "John"
console.log('age:', age);     // 25 (default value)
console.log('email:', email); // "default@example.com" (default value)

// Default values with renaming
let { name: userName, role = "user" } = user;
console.log('userName:', userName); // "John"
console.log('role:', role);         // "user" (default value)
```

**Nested Destructuring:**
```javascript
const person = {
    name: "Alice",
    address: {
        city: "New York",
        country: "USA",
        zip: "10001"
    },
    preferences: {
        theme: "dark",
        language: "en"
    }
};

// Basic nested destructuring
let { name, address: { city, country } } = person;
console.log('name:', name);     // "Alice"
console.log('city:', city);     // "New York"
console.log('country:', country); // "USA"

// Nested destructuring with renaming
let { 
    name: personName, 
    address: { city: personCity, zip: postalCode },
    preferences: { theme: colorTheme }
} = person;
console.log('personName:', personName);     // "Alice"
console.log('personCity:', personCity);     // "New York"
console.log('postalCode:', postalCode);     // "10001"
console.log('colorTheme:', colorTheme);     // "dark"
```

**Rest Properties:**
```javascript
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let { a, b, ...remaining } = obj;
console.log('a:', a);           // 1
console.log('b:', b);           // 2
console.log('remaining:', remaining); // { c: 3, d: 4, e: 5 }

// Rest with renaming
let { a: first, b: second, ...others } = obj;
console.log('first:', first);   // 1
console.log('second:', second); // 2
console.log('others:', others); // { c: 3, d: 4, e: 5 }
```

#### Destructuring in Different Contexts

**Variable Declarations:**
```javascript
// let declaration
let { x, y } = { x: 1, y: 2 };

// const declaration
const { name, age } = { name: "Bob", age: 30 };

// var declaration
var { status, code } = { status: "success", code: 200 };
```

**Assignments:**
```javascript
let person = {};
({ name: person.name, age: person.age } = { name: "Charlie", age: 25 });
console.log('person:', person); // { name: "Charlie", age: 25 }
```

**Function Parameters:**
```javascript
function processUser({ name, email, age = 18, role = "user" }) {
    console.log(`Processing ${name} (${email}), age: ${age}, role: ${role}`);
}

processUser({ name: "Alice", email: "alice@example.com" });
// Output: Processing Alice (alice@example.com), age: 18, role: user

processUser({ name: "Bob", email: "bob@example.com", age: 25, role: "admin" });
// Output: Processing Bob (bob@example.com), age: 25, role: admin
```

#### Error Handling and Edge Cases

**Handling Missing Properties:**
```javascript
const user = { name: "John" };

// Missing properties become undefined
let { name, age, email } = user;
console.log('name:', name);   // "John"
console.log('age:', age);     // undefined
console.log('email:', email); // undefined

// Using default values for missing properties
let { name: userName, age: userAge = 25, email: userEmail = "default@example.com" } = user;
console.log('userName:', userName);     // "John"
console.log('userAge:', userAge);       // 25 (default)
console.log('userEmail:', userEmail);   // "default@example.com" (default)
```

**Destructuring null/undefined:**
```javascript
// ❌ Error: Cannot destructure 'null' or 'undefined'
// let { prop } = null;        // TypeError
// let { prop } = undefined;   // TypeError

// ✅ Safe destructuring with default values
let { prop = "default" } = null || {};
console.log('prop:', prop); // "default"

// ✅ Using try-catch for error handling
try {
    let { prop } = null;
} catch (error) {
    console.log('Error caught:', error.message); // "Cannot destructure 'null' as it is null."
}
```

#### Advanced Patterns

**Selective Property Extraction:**
```javascript
const largeObject = {
    id: 1,
    name: "Product",
    price: 99.99,
    category: "Electronics",
    description: "A great product",
    tags: ["new", "featured"],
    metadata: { created: "2024-01-01", updated: "2024-01-15" }
};

// Extract only the properties you need
let { name, price, category } = largeObject;
console.log('name:', name);     // "Product"
console.log('price:', price);   // 99.99
console.log('category:', category); // "Electronics"
```

**Destructuring with Computed Properties:**
```javascript
const prop = "name";
const obj = { name: "Alice", age: 30 };

// ❌ This doesn't work as expected
// let { [prop] } = obj; // Syntax error

// ✅ Use bracket notation after destructuring
let { name } = obj;
console.log('name:', name); // "Alice"

// ✅ Or use a different approach
let extracted = obj[prop];
console.log('extracted:', extracted); // "Alice"
```

#### Benefits of Object Destructuring
- **Cleaner Code**: More readable than multiple property assignments
- **Shorter Syntax**: Reduces boilerplate code
- **Default Values**: Provides fallback values for missing properties
- **Function Parameters**: Useful for functions that accept object parameters
- **API Responses**: Perfect for extracting data from API responses
- **Selective Extraction**: Extract only the properties you need
- **Error Prevention**: Safer than manual property access

#### Common Use Cases

**Function Parameters with Defaults:**
```javascript
function createUser({ 
    name, 
    email, 
    age = 18, 
    role = "user", 
    preferences = {} 
} = {}) {
    return {
        name,
        email,
        age,
        role,
        preferences,
        createdAt: new Date()
    };
}

const user1 = createUser({ name: "Alice", email: "alice@example.com" });
const user2 = createUser({ name: "Bob", email: "bob@example.com", age: 25, role: "admin" });
```

**API Response Handling:**
```javascript
const apiResponse = {
    status: "success",
    data: { 
        id: 1, 
        name: "John",
        profile: {
            avatar: "avatar.jpg",
            bio: "Software developer"
        }
    },
    message: "User found",
    timestamp: "2024-01-15T10:30:00Z"
};

let { 
    status, 
    data: { 
        id, 
        name, 
        profile: { avatar, bio } 
    }, 
    message, 
    timestamp 
} = apiResponse;

console.log('status:', status);     // "success"
console.log('id:', id);             // 1
console.log('name:', name);         // "John"
console.log('avatar:', avatar);     // "avatar.jpg"
console.log('bio:', bio);           // "Software developer"
console.log('message:', message);   // "User found"
console.log('timestamp:', timestamp); // "2024-01-15T10:30:00Z"
```

**Promise.all() with Destructuring:**
```javascript
const urls = [
    'https://api.example.com/users/1',
    'https://api.example.com/users/2',
    'https://api.example.com/users/3'
];

Promise.all(urls.map(url => fetch(url).then(res => res.json())))
    .then(([user1, user2, user3]) => {
        console.log('user1:', user1);
        console.log('user2:', user2);
        console.log('user3:', user3);
    });
```

#### Best Practices
- **Use destructuring for cleaner, more readable code**
- **Provide default values for optional properties**
- **Use meaningful variable names when renaming properties**
- **Combine with rest properties for flexible property extraction**
- **Consider nested destructuring for complex object structures**
- **Handle null/undefined values safely**
- **Extract only the properties you need**
- **Use destructuring in function parameters for better API design**
- **Combine with default parameters for robust function signatures**