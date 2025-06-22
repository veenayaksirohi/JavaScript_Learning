# JavaScript Learning Notes

Welcome to your JavaScript learning journey! This file will contain notes to help you understand the basics of JavaScript.

## 1. "Hello, World!" in JavaScript

The most basic program you can write in many languages is one that prints "Hello, World!". In JavaScript, you can do this with `console.log()`.

**Example from `0_hello.js`:**
```javascript
console.log("hello")
```
This is a great way to make sure your environment is set up correctly.

## 2. Variables in JavaScript

In JavaScript, we use variables to store data. There are three keywords to declare variables: `var`, `let`, and `const`.

### `const`
- Declares a block-scoped variable.
- The value of a `const` variable **cannot** be changed through reassignment.
- It also cannot be re-declared.
- You must initialize the variable when you declare it.

**Example:**
```javascript
const accountId = 1234;
// accountId = 5678; // This will cause a TypeError: Assignment to constant variable.
```

### `let`
- Declares a block-scoped variable.
- The value of a `let` variable **can** be reassigned.
- It cannot be re-declared in the same scope.

**Example:**
```javascript
let accountEmail = "user@example.com";
accountEmail = "anotheruser@example.com"; // This is valid
```

### `var`
- Declares a function-scoped or globally-scoped variable.
- Its value can be reassigned, and it can be re-declared.
- **Note:** It's generally recommended to avoid using `var` in modern JavaScript due to its confusing scoping behavior. Prefer `let` and `const`.

**Example:**
```javascript
var accountPassword = "password123";
accountPassword = "newPassword"; // This is valid
```

### Key Difference: `let` vs `var` (Scope)

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
Because of this behavior, using `let` often leads to more predictable and less error-prone code.

### Undefined Variables
When you declare a variable using `let` or `var` without assigning a value to it, JavaScript automatically gives it the value `undefined`.

**Example:**
```javascript
let accountState; // Declared but not initialized
console.log(accountState); // This will output: undefined
```

## 3. Printing to the Console

To see the output of your code and debug, you can print values to the console.

### `console.log()`
- Outputs a message to the web console.
- You can pass one or more objects to it.

**Example:**
```javascript
console.log("Hello, World!");
console.log(accountEmail);
```

### `console.table()`
- Displays tabular data as a table.
- This is very useful for displaying arrays or objects.

**Example:**
```javascript
const user1 = { name: "Alice", email: "alice@example.com" };
const user2 = { name: "Bob", email: "bob@example.com" };
console.table([user1, user2]);
```

### Environment-Specific Functions (like `alert()`)

It's important to know that some functions are only available in specific JavaScript environments (like the browser or Node.js).

A common example is `alert()`. This function displays a pop-up dialog in the browser. However, it does not exist in the Node.js environment. If you try to use `alert()` in a Node.js file, you will get a `ReferenceError`. For displaying information in Node.js, it's best to use `console.log()`.

---
*Happy Coding!*

## 4. JavaScript Data Types

In programming, data types are an important concept. To be able to operate on variables, it is important to know something about the type. JavaScript has a set of primitive data types and a non-primitive data type (Object).

### "use strict"
The `"use strict";` directive enables "strict mode". It helps you write cleaner code, by catching common coding bloopers and throwing errors.

### Primitive Data Types
These are the fundamental data types. They are immutable, meaning their values cannot be changed.

*   **String**: Represents textual data.
    ```javascript
    let name = "veenayak";
    ```
*   **Number**: Represents numeric values, including integers and floating-point numbers.
    ```javascript
    let age = 22;
    ```
*   **Boolean**: Represents a logical value of `true` or `false`.
    ```javascript
    let isLogged = false;
    ```
*   **Null**: Represents the intentional absence of any object value. It's a special value that means "no value".
    ```javascript
    let state = null;
    ```
*   **Undefined**: A variable that has been declared but not assigned a value has the value `undefined`.
    ```javascript
    let city; // city is undefined
    ```
*   **BigInt**: Used for integers of arbitrary precision, which cannot be represented by the `Number` type.
*   **Symbol**: A unique and immutable value that can be used as a key for an object property.

### Non-Primitive Data Type

*   **Object**: A collection of key-value pairs. Arrays, Functions, and more are all types of objects in JavaScript.

### The `typeof` Operator
You can use the `typeof` operator to find the data type of a JavaScript variable.

```javascript
console.log(typeof "veenayak"); // "string"
console.log(typeof 22);        // "number"
console.log(typeof false);     // "boolean"
```

**Important Quirk:**
A well-known quirk in JavaScript is that the `typeof` a `null` value is `object`.
```javascript
console.log(typeof null); // "object"
```

## 5. Type Conversion and Coercion

In JavaScript, it's common to convert values from one type to another. This can be done explicitly (type conversion) or implicitly (type coercion).

### Explicit Conversion to Number
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
**Key Quirk about `NaN`**:
Even though `NaN` stands for "Not a Number", its type is `'number'`.
```javascript
console.log(typeof NaN); // "number"
```

### Conversion to Number Summary

| Original Value | Converted Value | Notes                  |
|----------------|-----------------|------------------------|
| `"33"`         | `33`            |                        |
| `"33abc"`      | `NaN`           |                        |
| `""`           | `0`             | An empty string is 0.  |
| `true`         | `1`             |                        |
| `false`        | `0`             |                        |
| `null`         | `0`             |                        |
| `undefined`    | `NaN`           |                        |

## 6. Operations in JavaScript

JavaScript has a variety of operators to perform actions on values.

### Arithmetic Operators
Basic arithmetic is straightforward. An interesting one is the unary negation operator.

```javascript
let value = 3;
let negValue = -value; // negValue is -3
```

### String Concatenation
The `+` operator is used to concatenate (join) strings.

```javascript
let str1 = "hello";
let str2 = " veenayak";
let greeting = str1 + str2; // "hello veenayak"
```

### Automatic Type Coercion with `+`
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

This behavior is a key reason to be mindful of data types when performing operations in JavaScript.

## 7. Comparison in JavaScript

Comparing values in JavaScript can lead to some non-intuitive results due to type coercion.

### Loose Equality (`==`) vs. Strict Equality (`===`)

This is one of the most important concepts in JavaScript comparisons.

*   **Strict Equality (`===`)**: This operator checks if two values are equal *without* performing any type conversion. If the types are different, it immediately returns `false`. It is the recommended operator for equality checks.
    ```javascript
    console.log('2' === 2); // false (string vs. number)
    ```

*   **Loose Equality (`==`)**: This operator will try to convert the operands to a common type before making the comparison. This can lead to unexpected results.
    ```javascript
    console.log('2' == 2); // true (string '2' is converted to number 2)
    ```

**Rule of thumb: Always prefer `===` over `==` to prevent bugs from unexpected type coercion.**

### The Curious Case of `null`

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

### Comparisons with `undefined`

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
