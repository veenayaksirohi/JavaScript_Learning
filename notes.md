# JavaScript Topics and Subtopics

---

## Table of Contents

- [JavaScript Topics and Subtopics](#javascript-topics-and-subtopics)
  - [Table of Contents](#table-of-contents)
- [0\_hello.js — Basic Console Output](#0_hellojs--basic-console-output)
  - [Overview](#overview)
  - [Syntax \& Examples](#syntax--examples)
  - [Key Takeaways](#key-takeaways)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings)
  - [Practice](#practice)
  - [Further Reading](#further-reading)
- [1\_variable.js — JavaScript Variables](#1_variablejs--javascript-variables)
  - [Overview](#overview-1)
  - [Syntax \& Examples](#syntax--examples-1)
  - [Key Takeaways](#key-takeaways-1)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-1)
  - [Practice](#practice-1)
  - [Further Reading](#further-reading-1)
  - [Difference Between var, let, and const](#difference-between-var-let-and-const)
    - [Overview](#overview-2)
    - [Syntax \& Examples](#syntax--examples-2)
    - [Key Takeaways](#key-takeaways-2)
    - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-2)
    - [Practice](#practice-2)
    - [Further Reading](#further-reading-2)
- [2\_dataType.js — JavaScript Data Types](#2_datatypejs--javascript-data-types)
  - [Overview](#overview-3)
  - [Syntax \& Examples](#syntax--examples-3)
  - [Key Takeaways](#key-takeaways-3)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-3)
  - [Practice](#practice-3)
  - [Further Reading](#further-reading-3)
- [3\_conversionOperation.js — JavaScript Type Conversion](#3_conversionoperationjs--javascript-type-conversion)
  - [Overview](#overview-4)
  - [Syntax \& Examples](#syntax--examples-4)
  - [Key Takeaways](#key-takeaways-4)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-4)
  - [Practice](#practice-4)
  - [Further Reading](#further-reading-4)
- [4\_operation.js — JavaScript Operations](#4_operationjs--javascript-operations)
  - [Overview](#overview-5)
  - [Syntax \& Examples](#syntax--examples-5)
  - [Key Takeaways](#key-takeaways-5)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-5)
  - [Practice](#practice-5)
  - [Further Reading](#further-reading-5)
- [5\_comparison.js — JavaScript Comparisons](#5_comparisonjs--javascript-comparisons)
  - [Overview](#overview-6)
  - [Syntax \& Examples](#syntax--examples-6)
  - [Key Takeaways](#key-takeaways-6)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-6)
  - [Practice](#practice-6)
  - [Further Reading](#further-reading-6)
- [6\_strings.js — JavaScript Strings](#6_stringsjs--javascript-strings)
  - [Overview](#overview-7)
  - [Syntax \& Examples](#syntax--examples-7)
  - [Key Takeaways](#key-takeaways-7)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-7)
  - [Practice](#practice-7)
  - [Further Reading](#further-reading-7)
- [7\_numberMath.js — JavaScript Numbers and Math](#7_numbermathjs--javascript-numbers-and-math)
  - [Overview](#overview-8)
  - [Syntax \& Examples](#syntax--examples-8)
  - [Key Takeaways](#key-takeaways-8)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-8)
  - [Practice](#practice-8)
  - [Further Reading](#further-reading-8)
- [8\_dates.js — JavaScript Dates](#8_datesjs--javascript-dates)
  - [Overview](#overview-9)
  - [Syntax \& Examples](#syntax--examples-9)
  - [Key Takeaways](#key-takeaways-9)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-9)
  - [Practice](#practice-9)
  - [Further Reading](#further-reading-9)
- [9\_array.js — JavaScript Arrays](#9_arrayjs--javascript-arrays)
  - [Overview](#overview-10)
  - [Syntax \& Examples](#syntax--examples-10)
  - [Key Takeaways](#key-takeaways-10)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-10)
  - [Practice](#practice-10)
  - [Further Reading](#further-reading-10)
- [10\_objects.js — JavaScript Objects](#10_objectsjs--javascript-objects)
  - [Overview](#overview-11)
  - [Syntax \& Examples](#syntax--examples-11)
  - [Key Takeaways](#key-takeaways-11)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-11)
  - [Practice](#practice-11)
  - [Further Reading](#further-reading-11)
- [11\_function\_and\_parameter.js — JavaScript Functions and Parameters](#11_function_and_parameterjs--javascript-functions-and-parameters)
  - [Overview](#overview-12)
  - [Syntax \& Examples](#syntax--examples-12)
  - [Key Takeaways](#key-takeaways-12)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-12)
  - [Practice](#practice-12)
  - [Further Reading](#further-reading-12)
- [12\_arrow\_function.js — JavaScript Arrow Functions](#12_arrow_functionjs--javascript-arrow-functions)
  - [Overview](#overview-13)
  - [Syntax \& Examples](#syntax--examples-13)
  - [About this and this in Node vs Browser](#about-this-and-this-in-node-vs-browser)
    - [Global Scope](#global-scope)
    - [Regular Functions](#regular-functions)
    - [Arrow Functions](#arrow-functions)
    - [In Event Handlers (Browser Only)](#in-event-handlers-browser-only)
    - [Summary Table](#summary-table)
    - [Key Takeaways](#key-takeaways-13)
  - [About Arrow Functions vs Regular Functions](#about-arrow-functions-vs-regular-functions)
    - [Syntax Comparison](#syntax-comparison)
    - [Key Differences](#key-differences)
    - [`this` Binding Example](#this-binding-example)
    - [`arguments` Object Example](#arguments-object-example)
    - [Constructor Example](#constructor-example)
    - [Generator Example](#generator-example)
    - [Typical Use Cases](#typical-use-cases)
    - [Key Takeaways](#key-takeaways-14)
    - [Key Takeaways](#key-takeaways-15)
    - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-13)
    - [Practice](#practice-13)
    - [Further Reading](#further-reading-13)
- [13\_Immediately\_Invoked\_Function\_Expressions\_(IIFE).js — Immediately Invoked Function Expressions (IIFE)](#13_immediately_invoked_function_expressions_iifejs--immediately-invoked-function-expressions-iife)
  - [Overview](#overview-14)
  - [Syntax \& Examples](#syntax--examples-14)
  - [Key Takeaways](#key-takeaways-16)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-14)
  - [Practice](#practice-14)
  - [Further Reading](#further-reading-14)
- [14\_control\_flow.js — JavaScript Control Flow](#14_control_flowjs--javascript-control-flow)
  - [Overview](#overview-15)
  - [Syntax \& Examples](#syntax--examples-15)
  - [Key Takeaways](#key-takeaways-17)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-15)
  - [Practice](#practice-15)
  - [Further Reading](#further-reading-15)
- [15\_loops.js — JavaScript Loops](#15_loopsjs--javascript-loops)
  - [Overview](#overview-16)
  - [Syntax \& Examples](#syntax--examples-16)
    - [1. For Loop](#1-for-loop)
    - [2. While Loop](#2-while-loop)
    - [3. Do-While Loop](#3-do-while-loop)
    - [4. For...of Loop](#4-forof-loop)
    - [5. For...in Loop](#5-forin-loop)
    - [6. forEach Method](#6-foreach-method)
    - [7. map Method](#7-map-method)
    - [8. filter Method](#8-filter-method)
    - [9. reduce Method](#9-reduce-method)
  - [Comparison Table: JavaScript Loop Types](#comparison-table-javascript-loop-types)
  - [Key Takeaways](#key-takeaways-18)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-16)
  - [Practice](#practice-16)
  - [Further Reading](#further-reading-16)

---

# 0_hello.js — Basic Console Output

**Learning Goals:**
- Understand how to use `console.log()` for debugging and output.
- Learn to visually separate console output for clarity.

---

## Overview

`console.log()` is the primary way to print output in JavaScript, useful for debugging and inspecting values.

---

## Syntax & Examples

```js
console.log("hello");
console.log('%c==================================================================', 'color: green; font-weight: bold;');
```

---

## Key Takeaways
> - Use `console.log()` for outputting all types of values.
> - Use styled separator lines to visually distinguish output sections.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Too many or unlabeled `console.log()` statements can clutter your output and make debugging harder.

---

## Practice
**Try it yourself:**
- Print your name and age using `console.log()`.
- Add a separator line after your output.

**Quiz:**
```js
console.log('Hello' + 5);
// What does this print?
```

---

## Further Reading
- [MDN: console.log()](https://developer.mozilla.org/en-US/docs/Web/API/console/log)

---

# 1_variable.js — JavaScript Variables

**Learning Goals:**
- Understand how to declare variables using `var`, `let`, and `const`.
- Know the rules for reassignment and scope.
- Recognize the dangers of implicit global variables.

---

## Overview

Variables are containers for storing data values. JavaScript provides three main ways to declare variables: `var`, `let`, and `const`.

---

## Syntax & Examples

```js
const accountId = 1234;
let accountEmail = "veena@gmail.com";
var accountPassword = "8879-9";
let accountState;
accountCity = "hapur"; // Implicit global (not recommended)

accountEmail = "hfkfds@ngghh";
accountPassword = 77890;
accountCity = "ha";

console.log('accountId:', accountId);
console.log('accountEmail:', accountEmail);
console.log('accountPassword:', accountPassword);
console.log('accountCity:', accountCity);
console.log('accountState:', accountState);
console.table([accountId, accountEmail, accountPassword, accountPassword, accountCity, accountState]);
```

---

## Key Takeaways
> - Use `const` for values that won't change.
> - Use `let` for variables that will be reassigned.
> - Avoid `var` due to function-scoping issues.
> - Always declare variables before using them.
> - Include variable names in console output for clarity.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Assigning to undeclared variables creates implicit globals, which can lead to bugs and hard-to-maintain code.

---

## Practice
**Try it yourself:**
- Declare a variable for your favorite color using `let` and print it.
- Try reassigning a `const` variable and observe the error.

**Quiz:**
```js
var x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);
// What does this print?
```

---

## Further Reading
- [MDN: var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

---

## Difference Between var, let, and const

**Learning Goals:**
- Compare the differences in scope, hoisting, re-declaration, and reassignment for `var`, `let`, and `const`.
- Learn best practices for choosing variable declarations.

---

### Overview

JavaScript provides three ways to declare variables: `var`, `let`, and `const`. They differ in scope, hoisting, re-declaration, and reassignment rules.

---

### Syntax & Examples

| Feature                | var                                 | let                                 | const                                 |
|------------------------|-------------------------------------|-------------------------------------|---------------------------------------|
| Scope                  | Function or global                  | Block ({}), not global              | Block ({}), not global                |
| Hoisting               | Yes (initialized as undefined)      | Yes (in TDZ until declaration)      | Yes (in TDZ until declaration)        |
| Re-declaration         | Allowed                             | Not allowed in same scope           | Not allowed in same scope             |
| Re-assignment          | Allowed                             | Allowed                             | Not allowed                           |
| Must initialize?       | No                                  | No                                  | Yes                                   |
| Default value          | undefined                           | ReferenceError if accessed early    | ReferenceError if accessed early      |

```js
// var
function exampleVar() {
    var n = "Janardhan";
    console.log(n); // Janardhan
}
exampleVar();
console.log(x); // undefined (hoisted)
var x = 5;
var name = "Pranjal";
var name = "Tanmay"; // re-declaration allowed
console.log(name); // Tanmay

// let
if (true) {
    let age = 30;
    console.log(age); // 30
}
// console.log(age); // ReferenceError
console.log(y); // ReferenceError (TDZ)
let y = 10;
let city = 'Delhi';
// let city = 'Mumbai'; // SyntaxError
city = 'Mumbai'; // Allowed

// const
const country = "USA";
console.log(country); // USA
// country = "India"; // TypeError
const city2 = "New York";
// const city2 = "Los Angeles"; // SyntaxError
// const a; // SyntaxError
const numbers = [1, 2, 3];
numbers.push(4); // Allowed
// numbers = [5, 6]; // TypeError
const person = { name: "Alice" };
person.age = 25; // Allowed
// person = { name: "Bob" }; // TypeError
```

---

### Key Takeaways
> - `var` is function/global scoped and hoisted as undefined.
> - `let` and `const` are block scoped and in the temporal dead zone until declared.
> - `const` must be initialized and cannot be reassigned.
> - Prefer `const` for values that never change, `let` for those that do, and avoid `var`.

---

### Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Using `var` can lead to bugs due to hoisting and scope confusion. Accessing `let` or `const` before declaration throws a ReferenceError.

---

### Practice
**Try it yourself:**
- Try redeclaring a variable with `let` in the same scope and observe the error.
- Create a `const` array and try to reassign it vs. modifying its contents.

**Quiz:**
```js
console.log(a);
let a = 5;
// What happens?
```

---

### Further Reading
- [GeeksforGeeks: Difference between var, let and const keywords in JavaScript](https://www.geeksforgeeks.org/javascript/difference-between-var-let-and-const-keywords-in-javascript/)
- [MDN: var, let, const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

---

# 2_dataType.js — JavaScript Data Types

**Learning Goals:**
- Identify primitive and non-primitive data types in JavaScript.
- Use `typeof` to check data types.
- Understand quirks like `typeof null`.

---

## Overview

JavaScript is a dynamically typed language with several primitive and non-primitive data types. Strict mode helps catch errors early.

---

## Syntax & Examples

```js
"use strict";
let name = "veenayak"; // String
let age = 22; // Number
let isLogged = false; // Boolean
let state = null; // Null
let city; // Undefined
console.log('typeof age:', typeof age); // "number"
console.log('typeof null:', typeof null); // "object"
console.log('typeof undefined:', typeof undefined); // "undefined"
console.log('city value:', city);
console.log('typeof city:', typeof city);
```

---

## Key Takeaways
> - Use `typeof` to check data types.
> - `null` is a special case that returns "object".
> - Undefined variables have type "undefined".
> - Always declare variables before using them.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> `typeof null` returns "object" (a JavaScript quirk).

---

## Practice
**Try it yourself:**
- Declare a variable of each primitive type and print its type.
- What does `typeof NaN` return?

**Quiz:**
```js
let x;
console.log(typeof x);
x = null;
console.log(typeof x);
// What does this print?
```

---

## Further Reading
- [MDN: Data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

---

# 3_conversionOperation.js — JavaScript Type Conversion

**Learning Goals:**
- Convert between strings, numbers, booleans, null, and undefined.
- Recognize what results in `NaN` and how to check for it.

---

## Overview

JavaScript automatically converts types when needed (implicit conversion), but you can also convert types explicitly using constructors like `Number()`.

---

## Syntax & Examples

```js
let score = "33";
console.log('typeof score (initial):', typeof score); // string
console.log('typeof Number(score):', typeof Number(score)); // number
score = "33q";
console.log('Number(score):', Number(score)); // NaN
score = null;
console.log('Number(score):', Number(score)); // 0
score = undefined;
console.log('Number(score):', Number(score)); // NaN
let isLoggedIn = true;
console.log('Number(isLoggedIn):', Number(isLoggedIn)); // 1
score = "veenayak";
console.log('Number(score):', Number(score)); // NaN
```

---

## Key Takeaways
> - `Number()` performs explicit type conversion.
> - Invalid conversions result in `NaN`.
> - `typeof NaN` returns "number" (quirk).
> - `null` converts to 0, `undefined` to NaN.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Not all strings can be converted to numbers. Always check for `NaN` after conversion.

---

## Practice
**Try it yourself:**
- Convert `"42"`, `"abc"`, `true`, `false`, `null`, and `undefined` to numbers and print the results.

**Quiz:**
```js
console.log(Number(""));
console.log(Number("0"));
console.log(Number(false));
// What does this print?
```

---

## Further Reading
- [MDN: Type Conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#type_conversion)

---

# 4_operation.js — JavaScript Operations

**Learning Goals:**
- Perform arithmetic operations and understand operator precedence.
- Understand type coercion with the `+` operator.
- Use unary and increment/decrement operators correctly.

---

## Overview

JavaScript supports arithmetic, string concatenation, and type coercion. Understanding how operators work and how JavaScript converts types is essential for writing bug-free code.

---

## Syntax & Examples

```js
// Basic Arithmetic
let value = 3;
let negValue = -value;
console.log('negValue:', negValue);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Concatenation
let str1 = "hello";
let str2 = " veenayak";
let str3 = str1 + str2;
console.log('str3:', str3);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Type Coercion with + Operator
console.log("'1' + 2:", '1' + 2); // '12'
console.log("1 + '2':", 1 + "2"); // '12'
console.log("'1' + 2 + 2:", '1' + 2 + 2); // '122'
console.log("1 + 2 + '2':", 1 + 2 + "2"); // '32'
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Unary Plus for Type Conversion
console.log("Unary plus on true:", +true); // 1
console.log("Unary plus on empty string:", +""); // 0
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Prefix and Postfix Increment/Decrement
let gameCounter = 100;
console.log("Initial gameCounter:", gameCounter); // 100
let postInc = gameCounter++;
console.log("gameCounter after postfix increment:", gameCounter); // 101
console.log("Value of postInc (gameCounter++):", postInc); // 100
let preInc = ++gameCounter;
console.log("gameCounter after prefix increment:", gameCounter); // 102
console.log("Value of preInc (++gameCounter):", preInc); // 102
console.log('%c==================================================================', 'color: green; font-weight: bold;')
```

---

## Key Takeaways
> - The `+` operator performs string concatenation if either operand is a string.
> - Evaluation of expressions happens from left to right, which is crucial for understanding type coercion with `+`.
> - The unary plus `+` is a concise way to convert a value to a number.
> - Be mindful of the difference between prefix (`++i`) and postfix (`i++`) increment/decrement operators, as they return different values.
> - For clarity and to avoid bugs, it's often better to perform increments on a separate line rather than within a larger expression.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Mixing types with the `+` operator can lead to unexpected results due to type coercion. Always check operand types if unsure.

---

## Practice
**Try it yourself:**
- Predict the result of `'5' + 3 + 2` and `3 + 2 + '5'`.
- Use the unary plus to convert a string to a number and add 10.

**Quiz:**
```js
let a = 5;
console.log(a++ + ++a);
// What does this print?
```

---

## Further Reading
- [MDN: Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

---

# 5_comparison.js — JavaScript Comparisons

**Learning Goals:**
- Understand equality and relational operators.
- Know the difference between `==` and `===`.
- Learn how `null` and `undefined` behave in comparisons.

---

## Overview

JavaScript provides both loose (`==`) and strict (`===`) equality operators, as well as relational operators. Special care is needed when comparing `null` and `undefined`.

---

## Syntax & Examples

```js
// Comparisons with null
console.log('null > 0:', null > 0); // false
console.log('null == 0:', null == 0); // false
console.log('null >= 0:', null >= 0); // true
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Comparisons with undefined
console.log('undefined > 0:', undefined > 0); // false
console.log('undefined == 0:', undefined == 0); // false
console.log('undefined >= 0:', undefined >= 0); // false
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Strict vs Loose Equality
console.log("'2' == 2:", '2' == 2); // true
console.log("'2' === 2:", '2' === 2); // false
```

---

## Key Takeaways
> - Use `===` for equality comparisons (recommended).
> - `null` converts to 0 in relational comparisons, but not in equality.
> - `undefined` converts to NaN in all comparisons.
> - Be aware of type coercion in loose equality.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Using `==` can lead to unexpected results due to type coercion. Always prefer `===` unless you have a specific reason.

---

## Practice
**Try it yourself:**
- Compare `null` and `undefined` with `==` and `===`.
- Predict the result of `'0' == 0` and `'0' === 0`.

**Quiz:**
```js
console.log(null >= 0);
console.log(undefined == 0);
// What does this print?
```

---

## Further Reading
- [MDN: Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

---

# 6_strings.js — JavaScript Strings

**Learning Goals:**
- Use template literals and string interpolation.
- Access and manipulate string properties and methods.
- Understand string immutability and method differences.

---

## Overview

Strings are sequences of characters used to represent text. JavaScript provides many methods for manipulating and inspecting strings.

---

## Syntax & Examples

```js
// Template Literals
let name = "veenayak";
let repoCount = 50;
console.log('Template literal:', `hello my name is ${name} and my repo count is ${repoCount}`);
console.log('Backticks example:', `Backticks`);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Access by Index
console.log('name[0]:', name[0]);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Constructors
let userName = String("Veenayak");
let userGame = new String("Veenayak");
console.table([name, userName, userGame]);
console.log('%c==================================================================', 'color: green; font-weight: bold;')
console.log('userGame.__proto__:', userGame.__proto__);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Properties
console.log('userGame.length:', userGame.length);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Methods - Case Conversion
console.log('userGame.toUpperCase():', userGame.toUpperCase());
console.log('userGame.toLowerCase():', userGame.toLowerCase());
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Methods - Character Access
console.log('userGame.charAt(2):', userGame.charAt(2));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Methods - Search and Index
console.log('userGame.indexOf("e"):', userGame.indexOf('e'));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Methods - Substring Extraction
const neu = userGame.substring(0, 4);
console.log('neu (substring 0,4):', neu);
console.log('%c==================================================================', 'color: green; font-weight: bold;')
const news = userGame.slice(-6, 4);
console.log('news (slice -6,4):', news);
console.log('%c==================================================================', 'color: green; font-weight: bold;')
const newss = userGame[2, 4];
console.log('newss (incorrect syntax):', newss);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Methods - Whitespace and Cleaning
const nam = "       veenayak        ";
console.log('nam (with spaces):', nam);
console.log('nam.trim():', nam.trim());
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Methods - Replacement
const url = "http://veenayak%20sirohi";
console.log('url.replace("%20","-"):', url.replace('%20', '-'));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Methods - Search and Check
console.log('url.includes("sirohi"):', url.includes("sirohi"));
console.log('url.includes("hi"):', url.includes("hi"));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Methods - Prefix and Suffix
console.log('userGame.startsWith("Vee"):', userGame.startsWith("Vee"));
console.log('userGame.startsWith("vee"):', userGame.startsWith("vee"));
console.log('userGame.endsWith("yak"):', userGame.endsWith("yak"));
console.log('userGame.endsWith("Yak"):', userGame.endsWith("Yak"));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Methods - Splitting and Joining
const fullName = "Veenayak Sirohi";
console.log('fullName.split(" "):', fullName.split(" "));
console.log('fullName.split(""):', fullName.split(""));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// String Methods - Repetition
console.log('"Ha".repeat(3):', "Ha".repeat(3));
console.log('%c==================================================================', 'color: green; font-weight: bold;')
```

---

## Key Takeaways
> - Use template literals for string interpolation.
> - String() creates primitives, new String() creates objects.
> - Strings are zero-indexed.
> - Most string methods return new strings (immutable).
> - Be careful with string method syntax differences.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Using `new String()` creates a String object, not a primitive. Most of the time, you want a primitive string.
> Some string methods behave differently (e.g., `substring` vs. `slice`).

---

## Practice
**Try it yourself:**
- Use `slice` and `substring` to extract parts of a string and compare the results.
- Try using `trim()`, `replace()`, and `repeat()` on your own strings.

**Quiz:**
```js
let s = "JavaScript";
console.log(s.slice(1, 4));
console.log(s.substring(1, 4));
// What does this print?
```

---

## Further Reading
- [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

# 7_numberMath.js — JavaScript Numbers and Math

**Learning Goals:**
- Create and use numbers in JavaScript.
- Use built-in number methods for formatting and conversion.
- Perform mathematical operations with the Math object.
- Generate random numbers and understand floating-point quirks.

---

## Overview

JavaScript supports both primitive numbers and Number objects. The Math object provides a wide range of mathematical functions and constants. Understanding number methods and random number generation is essential for many programming tasks.

---

## Syntax & Examples

```js
// Number Creation and Types
const score = 400;
console.log('score (primitive):', score);
console.log('%c==================================================================', 'color: green; font-weight: bold;')
const balance = new Number(100);
console.log('balance (Number object):', balance);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Number Methods
console.log('balance.toString().length:', balance.toString().length);
console.log('balance.toFixed(1):', balance.toFixed(1));
const otherNumber = 123.8966;
console.log('otherNumber.toPrecision(4):', otherNumber.toPrecision(4));
const hundreds = 1000000;
console.log('hundreds.toLocaleString("en-IN"):', hundreds.toLocaleString('en-IN'));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Math Object
console.log('Math object:', Math);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Math Methods - Basic Operations
console.log('Math.abs(-4):', Math.abs(-4));
console.log('Math.round(4.6):', Math.round(4.6));
console.log('Math.ceil(4.2):', Math.ceil(4.2));
console.log('Math.floor(4.9):', Math.floor(4.9));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Math Methods - Min/Max Operations
console.log('Math.min(4, 3, 6, 8):', Math.min(4, 3, 6, 8));
console.log('Math.max(4, 3, 6, 8):', Math.max(4, 3, 6, 8));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Random Number Generation
console.log('Math.random():', Math.random());
console.log('(Math.random() * 10) + 1:', (Math.random() * 10) + 1);
console.log('Math.floor(Math.random() * 10) + 1:', Math.floor(Math.random() * 10) + 1);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Random Number in Range
const min = 10;
const max = 20;
console.log('Random between 10-20:', Math.floor(Math.random() * (max - min + 1)) + min);
console.log('%c==================================================================', 'color: green; font-weight: bold;')
```

---

## Key Takeaways
> - Use primitive numbers for simple calculations.
> - Number objects are rarely needed.
> - Math methods are static (call directly on Math object).
> - Random numbers are pseudo-random, not cryptographically secure.
> - Be aware of floating-point precision issues.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Floating-point arithmetic can lead to unexpected results (e.g., `0.1 + 0.2 !== 0.3`). Always check for precision issues when comparing decimals.

---

## Practice
**Try it yourself:**
- Format a number to two decimal places using `toFixed()`.
- Generate a random integer between 5 and 15.

**Quiz:**
```js
console.log(0.1 + 0.2 === 0.3);
// What does this print?
```

---

## Further Reading
- [MDN: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN: Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

---

# 8_dates.js — JavaScript Dates

**Learning Goals:**
- Create and manipulate Date objects.
- Format dates and extract components.
- Work with timestamps and custom date formatting.

---

## Overview

JavaScript's Date object allows you to work with dates and times. You can create dates, extract components, and format them for display. Understanding how to use Date methods is essential for time-based applications.

---

## Syntax & Examples

```js
// Date Creation and Basic Operations
let myDate = new Date();

// Date String Representations
console.log('myDate.toString():', myDate.toString());
console.log('myDate.toDateString():', myDate.toDateString());
console.log('myDate.toLocaleString():', myDate.toLocaleString());
console.log('Type of myDate:', typeof myDate);

// Creating Specific Dates
let myCreatedDate = new Date(2023, 0, 23);
console.log('myCreatedDate (YYYY, M, D):', myCreatedDate.toDateString());
let myCreatedDateWithTime = new Date(2023, 0, 23, 5, 3);
console.log('myCreatedDateWithTime (with time):', myCreatedDateWithTime.toLocaleString());

// Creating Dates from Strings
let myCreatedDateFromString1 = new Date("2023-01-14");
console.log('myCreatedDateFromString1 (YYYY-MM-DD):', myCreatedDateFromString1.toLocaleString());
let myCreatedDateFromString2 = new Date("01-14-2023");
console.log('myCreatedDateFromString2 (MM-DD-YYYY):', myCreatedDateFromString2.toLocaleString());

// Timestamps
let myTimeStamp = Date.now();
console.log('myTimeStamp (ms since epoch):', myTimeStamp);
console.log('myCreatedDate.getTime() (ms since epoch):', myCreatedDate.getTime());
console.log('Date.now() in seconds:', Math.floor(Date.now() / 1000));

// Getting Date Components
let newDate = new Date();
console.log('newDate:', newDate);
console.log('newDate.getMonth() + 1:', newDate.getMonth() + 1);
console.log('newDate.getDay():', newDate.getDay());
console.log('newDate.getFullYear():', newDate.getFullYear());

// Custom Date Formatting
let customDate = newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});
console.log('Custom formatted date:', customDate);
```

---

## Key Takeaways
> - Date constructor creates Date objects.
> - Months are 0-indexed (0 = January, 11 = December).
> - Timestamps are milliseconds since Unix Epoch.
> - Date objects are mutable.
> - Use toLocaleString() for user-friendly formatting.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Months are zero-indexed, so January is 0 and December is 11. Always add 1 when displaying months to users.

---

## Practice
**Try it yourself:**
- Create a date for your birthday and print it in a readable format.
- Extract the year, month, and day from the current date.

**Quiz:**
```js
let d = new Date("2022-12-31");
console.log(d.getMonth());
// What does this print?
```

---

## Further Reading
- [MDN: Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

---

# 9_array.js — JavaScript Arrays

**Learning Goals:**
- Create, access, and modify arrays.
- Use array methods for searching, extracting, and combining data.
- Understand the difference between destructive and non-destructive methods.
- Work with nested arrays and utility methods.

---

## Overview

Arrays are ordered collections of values. JavaScript provides many methods for manipulating arrays, searching, combining, and flattening them. Understanding array methods is key to effective data processing.

---

## Syntax & Examples

```js
// Array Creation and Basic Operations
const arr = [1, 2, 3, 4, 5];
const heors = ['shaktiman', 'naagraj', 'doga'];
console.log('heors[0]:', heors[0]);
console.log('heors.length:', heors.length);

// Array Modification Methods
arr.unshift(9);
arr.shift();

// Array Search Methods
console.log('arr.includes(9):', arr.includes(9));
console.log('arr.indexOf(3):', arr.indexOf(3));

// Array Conversion Methods
const narr = arr.join();
console.log('arr:', arr);
console.log('narr:', narr);
console.log('A arr:', arr);

// Array Extraction Methods
const sli = arr.slice(1, 3);
console.log('sli:', sli);
console.log('B arr:', arr);
const spi = arr.splice(1, 3);
console.log('spi:', spi);
console.log('arr after splice:', arr);

// Array Combination Methods
const marvel_heors = ['thor', 'ironman', 'spiderman'];
const dc_heros = ['superman', 'flash', 'batman'];
marvel_heors.push(dc_heros);
console.log('marvel_heors after push:', marvel_heors);
console.log('marvel_heors[3]:', marvel_heors[3]);
marvel_heors.pop();
const all_heros = marvel_heors.concat(dc_heros);
console.log('all_heros:', all_heros);
const all_new_heros = [...marvel_heors, ...dc_heros];
console.log('all_new_heros:', all_new_heros);

// Advanced Array Methods
const andther_arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
console.log('andther_arr:', andther_arr);
const real_andther_arrr = andther_arr.flat(Infinity);
console.log('real_andther_arrr:', real_andther_arrr);

// Array Utility Methods
console.log('Array.isArray("veenayak"):', Array.isArray("veenayak"));
console.log('Array.from("veenayak"):', Array.from("veenayak"));
console.log('Array.from({name: "veenayak"}):', Array.from({name: "veenayak"}));
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log('Array.of(score1, score2, score3):', Array.of(score1, score2, score3));
  ```

---

## Key Takeaways
> - Arrays are zero-indexed.
> - `slice()` is non-destructive, `splice()` is destructive.
> - `push()` adds to end, `unshift()` adds to beginning.
> - `pop()` removes from end, `shift()` removes from beginning.
> - Spread operator (`...`) is modern way to combine arrays.
> - `flat()` can flatten nested arrays to any depth.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Using `splice()` modifies the original array. Always check if a method is destructive or not before using it.

---

## Practice
**Try it yourself:**
- Create an array of your three favorite foods and print its length.
- Use `slice()` and `splice()` to extract elements and observe the difference.

**Quiz:**
```js
let arr = [1, 2, 3, 4, 5];
let x = arr.slice(1, 3);
let y = arr.splice(1, 3);
console.log(arr);
// What does this print?
  ```

---

## Further Reading
- [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

# 10_objects.js — JavaScript Objects

**Learning Goals:**
- Create and access object properties using dot and bracket notation.
- Use Symbols as object property keys.
- Make objects immutable with Object.freeze().
- Call object methods and use the 'this' keyword.
- Work with nested objects and arrays of objects.
- Concatenate objects and use utility methods.
- Use object destructuring for cleaner code.

---

## Overview

Objects are key-value collections used to represent structured data. JavaScript objects can have properties, methods, and support advanced features like symbols, immutability, and destructuring.

---

## Syntax & Examples

```js
// Object Creation and Property Access
let obj = {
    name: 'veenayak',
    age: 22,
    location: 'hapur',
    email: 'veena@edv.com'
};
console.log('obj.name:', obj.name);
console.log('obj["name"]:', obj['name']);

// Symbols as Object Properties
const sum = Symbol('key1');
obj = {
    name: 'veenayak',
    [sum]: 'mykey1',
    age: 22,
    location: 'hapur',
    email: 'veena@edv.com'
};
console.log('obj[sum]:', obj[sum]);
console.log('typeof obj[sum]:', typeof obj[sum]);

// Object.freeze()
obj.greeting = function() { console.log('hello'); };
obj.greetingWithName = function() { console.log(`hello, ${this.name}`); };
obj['age'] = 25;
Object.freeze(obj);
obj['age'] = 24; // Ignored
console.log('obj after freeze attempt:', obj);

// Calling Object Methods
obj.greeting();
obj.greetingWithName();

// Object Constructor vs Literal
let tinder = new Object();
tinder = {};
tinder.id = 1;
tinder.name = 'sam';
tinder.isLoggedIn = false;
console.log('tinder with properties:', tinder);

// Nested Objects
let reguser = {
    email: 'veen@ff.vom',
    fullname: {
        userFullname: {
            firstname: 'veenayak',
            lastname: 'sirohi'
        }
    }
};
console.log('reguser.fullname.userFullname:', reguser.fullname.userFullname);

// Object Concatenation
const obj1 = { 1: 'a', 2: 'b', 3: 'c' };
const obj2 = { 4: 'a', 5: 'b', 6: 'c' };
const obj3 = Object.assign({}, obj1, obj2);
const obj4 = { ...obj1, ...obj2 };
console.log('obj3:', obj3);
console.log('obj4:', obj4);

// Arrays of Objects
const users = [ { id: 1, email: 'h@gmail.com' }, { id: 2, email: 'h@gmail.com' }, { id: 3, email: 'h@gmail.com' } ];
console.log('users[1].email:', users[1].email);

// Object Utility Methods
console.log('Object.keys(tinder):', Object.keys(tinder));
console.log('Object.values(tinder):', Object.values(tinder));
console.log('Object.entries(tinder):', Object.entries(tinder));
console.log('tinder.hasOwnProperty("name"):', tinder.hasOwnProperty('name'));

// Object Destructuring
const course = { coursename: "js in hindi", price: "999", courseInstructor: "hitesh" };
let {courseInstructor} = course;
let {courseInstructor: instructor} = course;
console.log('courseInstructor:', courseInstructor);
console.log('instructor:', instructor);
```

---

## Key Takeaways
> - Use object literal syntax for most cases.
> - Dot and bracket notation both access properties; bracket is needed for dynamic or special names.
> - Symbol properties are not enumerable with Object.keys().
> - Object.freeze() makes objects immutable; add methods before freezing.
> - The 'this' keyword refers to the object containing the method.
> - Use Object.assign() or spread operator for object merging.
> - Use object destructuring for cleaner, more readable code.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Modifying frozen objects has no effect (in non-strict mode). Symbol properties are not included in Object.keys().

---

## Practice
**Try it yourself:**
- Create an object with a method that uses `this` and call it.
- Merge two objects using both Object.assign and the spread operator.
- Use destructuring to extract a property from an object.

---

## Further Reading
- [MDN: Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [MDN: Object Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

---

# 11_function_and_parameter.js — JavaScript Functions and Parameters

**Learning Goals:**
- Declare and call functions with and without parameters.
- Understand return values and side effects.
- Use rest parameters and handle variable arguments.
- Work with object parameters and destructuring.
- Understand scope, closures, and hoisting.

---

## Overview

Functions are reusable blocks of code that perform specific tasks. JavaScript functions can take parameters, return values, and support advanced features like rest parameters, closures, and destructuring.

---

## Syntax & Examples

```js
// Basic function declaration and call
function sayMyName () {
  console.log('sayMyName output:', 'veenayak')
  console.log('%c==================================================================', 'color: green; font-weight: bold;')
}
sayMyName()

// Function with parameters (no return)
function addTwoNumbers (num1, num2) {
  console.log('addTwoNumbers result:', num1 + num2)
}
addTwoNumbers(1, 2)

// Function with return value
function add2Numbers (num1, num2) {
  return (num1 + num2)
}
console.log('add2Numbers returned value:', add2Numbers(1, 2))

// Function with conditional logic
function userLogin (username) {
  if (username === undefined) {
    return 'Please enter username'
  }
  return `${username} login successful`
}
console.log('userLogin with username:', userLogin('veenayak'))
console.log('userLogin without username:', userLogin())

// Rest parameters
function calculateCartPrice (...num) {
  let sum = 0
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i]
  }
  return sum
}
console.log('calculateCartPrice result:', calculateCartPrice(1, 2, 3, 4))

// Rest parameters with named and rest args
function Price (num1, num2, ...num) {
  return num
}
console.log('Price function rest parameters:', Price(1, 2, 3, 4))

// Object parameter and destructuring
const user = { username: 'veenayak', Price: 200 }
function handleobject (user) {
  if (!user.username || !user.Price) {
    return 'not available'
  }
  return `username is ${user.username} and price is ${user.Price}`
}
console.log('handleobject result:', handleobject(user))

// Scope and closures
let a = 300
if (true) {
  let a = 10
  const b = 20
  console.log('INNER block scope - a:', a)
  console.log('INNER block scope - b:', b)
}
console.log('OUTER global scope - a:', a)

function one () {
  const username = 'hitesh'
  function two () {
    const website = 'youtube'
    console.log('Inner function - username from outer scope:', username)
    console.log('Inner function - website from inner scope:', website)
  }
  two()
}
one()

// Hoisting
console.log('Function declaration result:', addone(5))
function addone (num) { return num + 1 }
const addTwo = function (num) { return num + 2 }
console.log('Function expression result:', addTwo(5))
```

---

## Key Takeaways
> - Functions can be declared, assigned to variables, and passed as arguments.
> - Use rest parameters (`...args`) for variable arguments.
> - Functions can return values or perform side effects.
> - Scope and closures allow inner functions to access outer variables.
> - Function declarations are hoisted; expressions are not.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Forgetting to return a value results in `undefined`. Hoisting only applies to function declarations, not expressions.

---

## Practice
**Try it yourself:**
- Write a function that multiplies two numbers and returns the result.
- Use rest parameters to sum any number of arguments.
- Demonstrate closure by writing a function that returns another function.

---

## Further Reading
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

# 12_arrow_function.js — JavaScript Arrow Functions

**Learning Goals:**
- Use arrow function syntax for concise function expressions.
- Understand the difference in `this` binding between arrow and regular functions.
- Use arrow functions for callbacks and short functions.

---

## Overview

Arrow functions provide a shorter syntax for writing functions and do not have their own `this` binding. They are ideal for callbacks and simple operations.

---

## Syntax & Examples

```js
// Arrow function as object method (not recommended for methods)
const user = {
  username: 'veenayak',
  price: 999,
  welcome: function () {
    console.log('user.welcome() - this.username:', `${this.username}, welcome to website`)
  }
}
user.welcome()
user.username = 'sam'
user.welcome()

// Arrow function in global scope
console.log('Global scope - this:', this)

// Regular function and arrow function differences
function demonstrateThisInFunction () {
  console.log('demonstrateThisInFunction - this:', this)
}
demonstrateThisInFunction()

const demonstrateThisInArrowFunction = () => {
  const name = 'veenayak'
  console.log('demonstrateThisInArrowFunction - this.name:', this.name)
}
demonstrateThisInArrowFunction()

// Arrow function with parameters
const add2 = (num1, num2) => {
  return num1 + num2
}
console.log('add2(1, 2):', add2(1, 2))

// Concise arrow function
const add3 = (num1, num2) => (num1 + num2)
console.log('add3(1, 2):', add3(1, 2))
```

---

## About this and this in Node vs Browser

Understanding the value of `this` is crucial in JavaScript, as it behaves differently depending on the environment (Node.js vs. browser), context (global, function, arrow function), and strict mode.

### Global Scope

| Environment | `this` in Global Scope         |
|-------------|-------------------------------|
| Browser     | `window` (the global object)  |
| Node.js     | `{}` (module.exports object)  |

```js
// In browser
console.log(this); // window

// In Node.js
console.log(this); // {}
```

### Regular Functions

| Environment | `this` in Regular Function (non-strict) |
|-------------|-----------------------------------------|
| Browser     | `window` (global object)                |
| Node.js     | `global` (global object)                |

```js
function showThis() {
  console.log(this);
}
showThis();
// Browser: window
// Node.js: global
```

### Arrow Functions

Arrow functions do **not** have their own `this`. They inherit `this` from their lexical (enclosing) scope.

```js
const obj = {
  regular: function() { console.log('regular:', this); },
  arrow: () => { console.log('arrow:', this); }
};
obj.regular(); // obj
obj.arrow();   // window (browser) or {} (Node.js module scope)
```

### In Event Handlers (Browser Only)

```js
document.getElementById('btn').onclick = function() {
  console.log(this); // the button element
};
document.getElementById('btn').onclick = () => {
  console.log(this); // window (in browser)
};
```

### Summary Table

| Context                | Browser                | Node.js                |
|------------------------|------------------------|------------------------|
| Global Scope           | window                 | {} (module.exports)    |
| Regular Function       | window (non-strict)    | global (non-strict)    |
| Arrow Function         | Lexical (usually window/module) | Lexical (usually module) |
| Object Method (regular)| The object             | The object             |
| Object Method (arrow)  | Lexical (not the object) | Lexical (not the object) |

### Key Takeaways
- In the browser, `this` in the global scope is `window`. In Node.js, it's `{}` (the module object).
- Regular functions' `this` depends on how they're called.
- Arrow functions inherit `this` from their enclosing scope.
- Never use arrow functions as object methods or event handlers if you need `this` to refer to the object or element.

---

## About Arrow Functions vs Regular Functions

Arrow functions and regular (traditional) functions in JavaScript have important differences in syntax, behavior, and use cases. Understanding these differences is crucial for writing clear and bug-free code.

### Syntax Comparison

```js
// Regular function declaration
function add(a, b) {
  return a + b;
}

// Regular function expression
const addExpr = function(a, b) {
  return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;
```

### Key Differences

| Feature                | Regular Function                | Arrow Function                  |
|------------------------|---------------------------------|---------------------------------|
| Syntax                 | function keyword                | `=>` arrow syntax               |
| `this` binding         | Dynamic (depends on call site)  | Lexical (inherits from parent)  |
| `arguments` object     | Available                       | Not available                   |
| Constructor            | Can be used with `new`          | Cannot be used as constructor   |
| Generator              | Can be a generator (`function*`)| Cannot be a generator           |
| Prototype              | Has `prototype` property        | No `prototype` property         |
| Use as method          | Suitable                        | Not recommended                 |
| Use as callback        | Suitable                        | Suitable                        |

### `this` Binding Example

```js
const obj = {
  value: 42,
  regular: function() { return this.value; },
  arrow: () => this.value
};
console.log(obj.regular()); // 42
console.log(obj.arrow());   // undefined (or window.value in browser)
```

### `arguments` Object Example

```js
function regular() {
  return arguments[0];
}
const arrow = () => arguments[0]; // ReferenceError: arguments is not defined
```

### Constructor Example

```js
function Person(name) {
  this.name = name;
}
const p = new Person('Alice'); // OK

const ArrowPerson = (name) => { this.name = name; };
const p2 = new ArrowPerson('Bob'); // TypeError: ArrowPerson is not a constructor
```

### Generator Example

```js
function* gen() { yield 1; }
const g = gen(); // OK
// const arrowGen = *() => {}; // SyntaxError: Unexpected token '*'
```

### Typical Use Cases
- Use **arrow functions** for short callbacks, array methods, and when you want lexical `this`.
- Use **regular functions** for object methods, constructors, generators, and when you need `arguments`.

### Key Takeaways
- Arrow functions are concise and inherit `this` from their enclosing scope.
- Regular functions have their own `this` and can be used as constructors and generators.
- Do not use arrow functions as object methods or constructors.
- Arrow functions do not have their own `arguments` object.

---

### Key Takeaways
> - Arrow functions do not have their own `this`; they inherit from the enclosing scope.
> - Use regular functions for object methods that use `this`.
> - Arrow functions are concise and ideal for callbacks and short functions.

---

### Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Do not use arrow functions as object methods if you need `this` to refer to the object.

---

### Practice
**Try it yourself:**
- Convert a regular function to an arrow function.
- Write an arrow function that returns the square of a number.

---

### Further Reading
- [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

# 13_Immediately_Invoked_Function_Expressions_(IIFE).js — Immediately Invoked Function Expressions (IIFE)

**Learning Goals:**
- Understand what IIFEs are and why they are used in JavaScript.
- Learn the syntax for both named and anonymous IIFEs.
- Recognize use cases for IIFEs, such as scope isolation and immediate execution.

---

## Overview

An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined. IIFEs are commonly used to create isolated scopes, avoid polluting the global namespace, and execute code immediately.

---

## Syntax & Examples

```js
// Named IIFE
(function chai () {
  console.log('chai IIFE - DB CONNECTED')
  console.log('%c==================================================================', 'color: green; font-weight: bold;')
})()

// Parameterized IIFE using arrow function
((name) => {
  console.log('arrow IIFE - DB CONNECTED TWO name:', name)
  console.log('%c==================================================================', 'color: green; font-weight: bold;')
})('hitesh')
```

---

## Key Takeaways
> - IIFEs execute immediately after they are defined.
> - Useful for creating private scopes and avoiding global variable pollution.
> - Can be named or anonymous, and can accept parameters.
> - Commonly used in module patterns and initialization code.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Forgetting the extra parentheses can result in a function declaration instead of an IIFE.
> Avoid using IIFEs for code that needs to be reused elsewhere.

---

## Practice
**Try it yourself:**
- Write an IIFE that prints your name.
- Create an IIFE that takes two numbers and prints their sum.

**Quiz:**
```js
(function() {
  var a = 10;
  console.log(a);
})();
// What does this print?
```

---

## Further Reading
- [MDN: IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
- [GeeksforGeeks: IIFE in JavaScript](https://www.geeksforgeeks.org/immediately-invoked-function-expression-iife-in-javascript/)

---

# 14_control_flow.js — JavaScript Control Flow

**Learning Goals:**
- Understand the use of if/else, switch, and ternary operators.
- Learn about comparison, logical, and nullish coalescing operators.
- Recognize truthy/falsy values and how to check for empty arrays/objects.

---

## Overview

Control flow statements determine the order in which code executes. JavaScript provides if/else, switch, and ternary operators for branching, as well as logical and comparison operators for complex conditions.

---

## Syntax & Examples

```js
// Simple if statement
if (true) {
  console.log('Simple if statement - condition:', true, 'output:', 'hi')
  console.log('%c==================================================================', 'color: green; font-weight: bold;')
}

// Loose equality (==) and strict equality (===)
if (2 == '2') {
  console.log('Loose equality check - 2 == "2":', true, 'output:', 'executed')
  console.log('%c==================================================================', 'color: green; font-weight: bold;')
}
if (2 === '2') {
  console.log('Strict equality check - 2 === "2":', true, 'output:', 'executed')
} else {
  console.log('Strict equality check - 2 === "2":', false, 'output:', 'not executed')
}

// Comparison operators
const score = 200
console.log('Score variable:', score)

// If-else with temperature
const isUserLoggedIn = true
const temperature = 41
if (temperature === 40) {
  console.log('Temperature check - temperature === 40:', true, 'output:', 'less than 50')
} else {
  console.log('Temperature check - temperature === 40:', false, 'output:', 'temperature is greater than 50')
}

// Block scope
if (score > 100) {
  let power = 'fly'
  console.log('Block scope - score > 100:', true, 'power variable:', power)
}
// console.log('User power:', power) // ReferenceError

// If-else if-else chain
const balance = 1000
if (balance < 500) {
  console.log('Balance check - balance < 500:', true, 'output:', 'less than 500')
} else if (balance < 750) {
  console.log('Balance check - balance < 750:', true, 'output:', 'less than 750')
} else if (balance < 900) {
  console.log('Balance check - balance < 900:', true, 'output:', 'less than 900')
} else {
  console.log('Balance check - balance >= 900:', true, 'output:', 'less than 1200')
}

// Logical operators
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard && 2 === 3) {
  console.log('purchasePermission:', 'Allow to buy course')
} else {
  console.log('purchasePermission:', 'Conditions not met')
}
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log('loginStatus:', 'User logged in')
}

// Switch statement
const month = 'march'
switch (month) {
  case 'jan':
    console.log('month:', 'January')
    break
  case 'feb':
    console.log('month:', 'February')
    break
  case 'march':
    console.log('month:', 'March')
    break
  case 'april':
    console.log('month:', 'April')
    break
  default:
    console.log('month:', 'Default case match')
    break
}

// Falsy and truthy values
const userEmail = []
if (userEmail) {
  console.log('userEmail (array) is truthy:', userEmail, 'output:', 'Got user email')
} else {
  console.log('userEmail (array) is falsy:', userEmail, 'output:', "Don't have user email")
}
// Falsy: false, 0, -0, 0n, '', null, undefined, NaN
// Truthy: '0', 'false', ' ', [], {}, function(){}

// Check for empty array
if (userEmail.length === 0) {
  console.log('userEmail.length === 0:', true, 'output:', 'Array is empty')
}

// Check for empty object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
  console.log('Object.keys(emptyObj).length === 0:', true, 'output:', 'Object is empty')
}

// Nullish Coalescing Operator (??)
let val1 = null ?? 10 ?? 20
console.log('val1 (null ?? 10 ?? 20):', val1)

// Ternary Operator
const iceTeaPrice = 100
iceTeaPrice <= 80
  ? console.log('iceTeaPrice <= 80:', true, 'output:', 'less than 80')
  : console.log('iceTeaPrice <= 80:', false, 'output:', 'more than 80')
```

---

## Key Takeaways
> - Use strict equality (===) for type-safe comparisons.
> - Block scope with let/const prevents variable leakage.
> - Logical operators (&&, ||) combine conditions; nullish coalescing (??) handles null/undefined.
> - Falsy values: false, 0, -0, 0n, '', null, undefined, NaN. Truthy: '0', 'false', ' ', [], {}, function(){}.
> - Use Object.keys(obj).length to check for empty objects.
> - Ternary operator is a concise alternative to if/else.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> Using == can lead to unexpected type coercion. Always use === unless you have a specific reason.
> Block-scoped variables are not accessible outside their block.
> Be careful with truthy/falsy checks on arrays and objects.

---

## Practice
**Try it yourself:**
- Write an if/else that checks if a number is positive, negative, or zero.
- Use a switch statement to print the name of a month given its number.
- Check if an object is empty.

**Quiz:**
```js
const x = 0;
if (x) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}
// What does this print?
```

---

## Further Reading
- [MDN: Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN: switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN: Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [MDN: Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

---

# 15_loops.js — JavaScript Loops

**Learning Goals:**
- Use different types of loops: for, while, do-while, for...of, for...in, forEach, map, filter, reduce.
- Understand loop control with break and continue.
- Iterate over arrays, objects, maps, and strings.
- Choose the right loop for the right scenario.

---

## Overview

Loops allow you to execute a block of code multiple times. JavaScript provides several loop constructs for different use cases, including iterating over arrays, objects, and more advanced data structures. Choosing the right loop improves code clarity, performance, and maintainability.

---

## Syntax & Examples

### 1. For Loop
**When to use:**
- When you know the number of iterations in advance (e.g., iterating over array indices).

**Syntax:**
```js
for (let i = 0; i < array.length; i++) {
  // code block
}
```
**Example:**
```js
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log('array element:', array[i]);
}
```
**Best Practices:**
- Use `let` for the loop variable to ensure block scope.
- Avoid off-by-one errors (check your start/end conditions).

---

### 2. While Loop
**When to use:**
- When the number of iterations is not known in advance; loop continues as long as the condition is true.

**Syntax:**
```js
while (condition) {
  // code block
}
```
**Example:**
```js
let count = 0;
while (count < 5) {
  console.log('count:', count);
  count++;
}
```
**Best Practices:**
- Ensure the loop condition will eventually become false to avoid infinite loops.

---

### 3. Do-While Loop
**When to use:**
- When you want the loop body to execute at least once, regardless of the condition.

**Syntax:**
```js
do {
  // code block
} while (condition);
```
**Example:**
```js
let num = 10;
do {
  console.log('num:', num);
  num++;
} while (num < 10);
// Output: num: 10 (runs once even though condition is false after first iteration)
```

---

### 4. For...of Loop
**When to use:**
- To iterate over iterable objects (arrays, strings, maps, sets).
- When you want the value directly, not the index/key.

**Syntax:**
```js
for (const value of iterable) {
  // code block
}
```
**Example:**
```js
const arr = ['a', 'b', 'c'];
for (const val of arr) {
  console.log('for...of value:', val);
}
```
**Best Practices:**
- Use for arrays, strings, maps, sets.
- Not suitable for plain objects (use for...in or Object.entries()).

---

### 5. For...in Loop
**When to use:**
- To iterate over the enumerable property keys of an object.
- Can be used with arrays, but not recommended (iterates over indices as strings).

**Syntax:**
```js
for (const key in object) {
  // code block
}
```
**Example:**
```js
const obj = {a: 1, b: 2};
for (const key in obj) {
  console.log('for...in key:', key, 'value:', obj[key]);
}
```
**Best Practices:**
- Use for objects, not arrays.
- Use `hasOwnProperty` check if you want to skip inherited properties.

---

### 6. forEach Method
**When to use:**
- To execute a function for each element in an array.
- When you don't need to break/continue or return a new array.

**Syntax:**
```js
array.forEach((element, index, array) => {
  // code block
});
```
**Example:**
```js
const arr = [1, 2, 3];
arr.forEach((item, idx) => {
  console.log('forEach item:', item, 'index:', idx);
});
```
**Best Practices:**
- Use for side effects (logging, updating external state).
- Does not support break/continue or return a value.

---

### 7. map Method
**When to use:**
- To create a new array by transforming each element of an array.

**Syntax:**
```js
const newArray = array.map((element, index, array) => {
  // return new value
});
```
**Example:**
```js
const nums = [1, 2, 3];
const squares = nums.map(n => n * n);
console.log('squares:', squares); // [1, 4, 9]
```
**Best Practices:**
- Always return a value from the callback.
- Does not mutate the original array.

---

### 8. filter Method
**When to use:**
- To create a new array with elements that pass a test.

**Syntax:**
```js
const filtered = array.filter((element, index, array) => {
  // return true to keep element
});
```
**Example:**
```js
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
console.log('even:', even); // [2, 4]
```
**Best Practices:**
- Return a boolean from the callback.
- Does not mutate the original array.

---

### 9. reduce Method
**When to use:**
- To reduce an array to a single value (sum, product, object, etc.).

**Syntax:**
```js
const result = array.reduce((accumulator, currentValue, index, array) => {
  // return new accumulator
}, initialValue);
```
**Example:**
```js
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log('sum:', sum); // 10
```
**Best Practices:**
- Always provide an initial value for the accumulator.
- Use for aggregating or transforming data.

---

## Comparison Table: JavaScript Loop Types

| Loop Type   | Use Case                        | Break/Continue | Returns New Array | Iterates Over      | Suitable For         |
|-------------|---------------------------------|:--------------:|:-----------------:|--------------------|---------------------|
| for         | Known # of iterations           |      Yes       |        No         | Indices            | Arrays, custom logic |
| while       | Unknown # of iterations         |      Yes       |        No         | Condition          | General             |
| do-while    | At least one execution needed   |      Yes       |        No         | Condition          | General             |
| for...of    | Iterable values                 |      Yes       |        No         | Values             | Arrays, strings, Map |
| for...in    | Object keys (enumerable)        |      Yes       |        No         | Keys               | Objects             |
| forEach     | Array elements (side effects)   |      No        |        No         | Values             | Arrays              |
| map         | Transform array                 |      No        |       Yes         | Values             | Arrays              |
| filter      | Filter array                    |      No        |       Yes         | Values             | Arrays              |
| reduce      | Aggregate array                 |      No        |   Single value    | Values             | Arrays              |

---

## Key Takeaways
> - Use for, while, and do-while for general looping needs.
> - Use for...of for arrays, strings, and maps; for...in for objects and arrays (indices).
> - Use forEach, map, filter, and reduce for array processing.
> - Use break and continue to control loop execution (not available in forEach/map/filter/reduce).
> - Prefer forEach/map/filter/reduce for functional-style array operations.
> - Choose the loop that best matches your data and intent for clarity and maintainability.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> - Using for...in on arrays iterates over indices, not values. for...of is preferred for arrays.
> - forEach does not return a new array or allow break/continue.
> - map/filter/reduce do not mutate the original array, but forEach can cause side effects.
> - Be careful with infinite loops and off-by-one errors.
> - Always provide an initial value to reduce to avoid bugs.

---

## Practice
**Try it yourself:**
- Write a for loop that prints numbers 1 to 10, skipping 5.
- Use for...of to print each character in a string.
- Use reduce to sum an array of numbers.
- Use map to double each value in an array.
- Use filter to select only odd numbers from an array.

**Quiz:**
```js
const arr = [2, 4, 6]
const result = arr.reduce((acc, val) => acc + val, 0)
console.log(result)
// What does this print?
```

---

## Further Reading
- [MDN: Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN: forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN: map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
