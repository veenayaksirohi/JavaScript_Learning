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
    - [Declaration and Initialization](#declaration-and-initialization)
    - [Reassignment](#reassignment)
    - [Scope](#scope)
    - [Hoisting](#hoisting)
    - [Re-declaration](#re-declaration)
  - [Comparison Table: var vs let vs const](#comparison-table-var-vs-let-vs-const)
  - [Real-World Use Cases](#real-world-use-cases)
  - [Key Takeaways](#key-takeaways-1)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-1)
  - [Practice](#practice-1)
  - [Further Reading](#further-reading-1)
- [2\_dataType.js — JavaScript Data Types](#2_datatypejs--javascript-data-types)
  - [Overview](#overview-2)
  - [Syntax \& Examples](#syntax--examples-2)
    - [Primitive Types](#primitive-types)
    - [Non-Primitive Types](#non-primitive-types)
    - [Type Checking](#type-checking)
    - [Special Cases](#special-cases)
    - [Mutability](#mutability)
  - [Comparison Table: Data Types](#comparison-table-data-types)
  - [Real-World Use Cases](#real-world-use-cases-1)
  - [Key Takeaways](#key-takeaways-2)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-2)
  - [Practice](#practice-2)
  - [Further Reading](#further-reading-2)
- [3\_conversionOperation.js — JavaScript Type Conversion](#3_conversionoperationjs--javascript-type-conversion)
  - [Overview](#overview-3)
  - [Syntax \& Examples](#syntax--examples-3)
    - [Implicit (Type Coercion) vs Explicit Conversion](#implicit-type-coercion-vs-explicit-conversion)
      - [Implicit Conversion (Coercion)](#implicit-conversion-coercion)
      - [Explicit Conversion](#explicit-conversion)
    - [String Conversion](#string-conversion)
    - [Number Conversion](#number-conversion)
    - [Boolean Conversion (Truthy/Falsy)](#boolean-conversion-truthyfalsy)
    - [Special Cases](#special-cases-1)
    - [Conversion Functions and Methods](#conversion-functions-and-methods)
  - [Comparison Table: Conversion Results](#comparison-table-conversion-results)
  - [Real-World Use Cases](#real-world-use-cases-2)
  - [Key Takeaways](#key-takeaways-3)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-3)
  - [Practice](#practice-3)
  - [Further Reading](#further-reading-3)
- [4\_operation.js — JavaScript Operations](#4_operationjs--javascript-operations)
  - [Overview](#overview-4)
  - [Syntax \& Examples](#syntax--examples-4)
    - [Arithmetic Operators](#arithmetic-operators)
    - [Assignment Operators](#assignment-operators)
    - [Comparison Operators](#comparison-operators)
    - [Logical Operators](#logical-operators)
    - [Bitwise Operators](#bitwise-operators)
    - [Unary Operators](#unary-operators)
    - [Ternary Operator](#ternary-operator)
    - [String Operators](#string-operators)
    - [Spread and Rest Operators](#spread-and-rest-operators)
    - [Destructuring Assignment](#destructuring-assignment)
    - [typeof, delete, in, instanceof](#typeof-delete-in-instanceof)
    - [Operator Precedence and Associativity](#operator-precedence-and-associativity)
  - [Comparison Table: Operator Types and Use Cases](#comparison-table-operator-types-and-use-cases)
  - [Real-World Use Cases](#real-world-use-cases-3)
  - [Key Takeaways](#key-takeaways-4)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-4)
  - [Practice](#practice-4)
  - [Further Reading](#further-reading-4)
- [5\_comparison.js — JavaScript Comparisons](#5_comparisonjs--javascript-comparisons)
  - [Overview](#overview-5)
  - [Syntax \& Examples](#syntax--examples-5)
    - [Equality Operators](#equality-operators)
      - [Loose Equality (==)](#loose-equality-)
      - [Strict Equality (===)](#strict-equality-)
    - [Inequality Operators](#inequality-operators)
    - [Relational Operators](#relational-operators)
    - [Object.is](#objectis)
    - [Comparing Different Types](#comparing-different-types)
    - [Special Cases](#special-cases-2)
      - [NaN](#nan)
      - [+0 vs -0](#0-vs--0)
      - [Object Reference Equality](#object-reference-equality)
  - [Comparison Table: Operators and Their Behavior](#comparison-table-operators-and-their-behavior)
  - [Real-World Use Cases](#real-world-use-cases-4)
  - [Key Takeaways](#key-takeaways-5)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-5)
  - [Practice](#practice-5)
  - [Further Reading](#further-reading-5)
- [6\_strings.js — JavaScript Strings](#6_stringsjs--javascript-strings)
  - [Overview](#overview-6)
  - [Syntax \& Examples](#syntax--examples-6)
    - [String Creation](#string-creation)
      - [1. String Literal](#1-string-literal)
      - [2. String Constructor](#2-string-constructor)
      - [3. Template Literals](#3-template-literals)
    - [Accessing and Modifying Strings](#accessing-and-modifying-strings)
    - [String Interpolation and Concatenation](#string-interpolation-and-concatenation)
    - [String Methods](#string-methods)
      - [Length](#length)
      - [charAt, charCodeAt, at](#charat-charcodeat-at)
      - [indexOf, lastIndexOf, includes](#indexof-lastindexof-includes)
      - [startsWith, endsWith](#startswith-endswith)
      - [slice, substring, substr](#slice-substring-substr)
      - [replace, replaceAll](#replace-replaceall)
      - [split, join](#split-join)
      - [trim, trimStart, trimEnd](#trim-trimstart-trimend)
      - [padStart, padEnd](#padstart-padend)
      - [repeat](#repeat)
      - [toUpperCase, toLowerCase](#touppercase-tolowercase)
      - [match, search, regular expressions](#match-search-regular-expressions)
    - [Conversion between Strings and Other Types](#conversion-between-strings-and-other-types)
    - [Unicode and Escape Sequences](#unicode-and-escape-sequences)
  - [Comparison Table: String Methods](#comparison-table-string-methods)
  - [Real-World Use Cases](#real-world-use-cases-5)
  - [Key Takeaways](#key-takeaways-6)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-6)
  - [Practice](#practice-6)
  - [Further Reading](#further-reading-6)
- [7\_numberMath.js — JavaScript Numbers and Math](#7_numbermathjs--javascript-numbers-and-math)
  - [Overview](#overview-7)
  - [Syntax \& Examples](#syntax--examples-7)
    - [Number Creation and Types](#number-creation-and-types)
    - [Special Values](#special-values)
    - [Number Methods](#number-methods)
    - [Parsing and Conversion](#parsing-and-conversion)
    - [Checking Numbers](#checking-numbers)
    - [Math Object: Constants](#math-object-constants)
    - [Math Object: Methods](#math-object-methods)
    - [Random Number Generation](#random-number-generation)
    - [Dealing with Floating-Point Precision](#dealing-with-floating-point-precision)
  - [Comparison Table: Number \& Math Methods](#comparison-table-number--math-methods)
  - [Real-World Use Cases](#real-world-use-cases-6)
  - [Key Takeaways](#key-takeaways-7)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-7)
  - [Practice](#practice-7)
  - [Further Reading](#further-reading-7)
- [8\_dates.js — JavaScript Dates](#8_datesjs--javascript-dates)
  - [Overview](#overview-8)
  - [Syntax \& Examples](#syntax--examples-8)
  - [Key Takeaways](#key-takeaways-8)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-8)
  - [Practice](#practice-8)
  - [Further Reading](#further-reading-8)
- [9\_array.js — JavaScript Arrays](#9_arrayjs--javascript-arrays)
  - [Overview](#overview-9)
  - [Syntax \& Examples](#syntax--examples-9)
    - [Array Creation](#array-creation)
      - [1. Array Literal](#1-array-literal)
      - [2. Array Constructor](#2-array-constructor)
      - [3. Array.of](#3-arrayof)
      - [4. Array.from](#4-arrayfrom)
    - [Accessing and Modifying Elements](#accessing-and-modifying-elements)
    - [Mutating vs Non-Mutating Methods](#mutating-vs-non-mutating-methods)
      - [Mutating Methods](#mutating-methods)
      - [Non-Mutating Methods](#non-mutating-methods)
    - [Searching and Checking](#searching-and-checking)
    - [Extraction and Combination](#extraction-and-combination)
    - [Flattening Arrays](#flattening-arrays)
    - [Utility Methods](#utility-methods)
    - [Iteration](#iteration)
      - [for Loop](#for-loop)
      - [for...of Loop](#forof-loop)
      - [forEach](#foreach)
      - [map](#map)
      - [filter](#filter)
      - [reduce](#reduce)
    - [Array-like Objects and Conversion](#array-like-objects-and-conversion)
    - [Destructuring Arrays](#destructuring-arrays)
    - [Multidimensional and Nested Arrays](#multidimensional-and-nested-arrays)
  - [Comparison Table: Array Methods](#comparison-table-array-methods)
  - [Real-World Use Cases](#real-world-use-cases-7)
  - [Key Takeaways](#key-takeaways-9)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-9)
  - [Practice](#practice-9)
  - [Further Reading](#further-reading-9)
- [10\_objects.js — JavaScript Objects](#10_objectsjs--javascript-objects)
  - [Overview](#overview-10)
  - [Syntax \& Examples](#syntax--examples-10)
    - [Object Creation](#object-creation)
      - [1. Object Literal](#1-object-literal)
      - [2. Object Constructor](#2-object-constructor)
      - [3. Object.create](#3-objectcreate)
    - [Property Access](#property-access)
      - [Dot Notation](#dot-notation)
      - [Bracket Notation (for dynamic or special keys)](#bracket-notation-for-dynamic-or-special-keys)
      - [Computed Property Names](#computed-property-names)
      - [Symbol Properties](#symbol-properties)
    - [Property Descriptors \& Immutability](#property-descriptors--immutability)
      - [Object.freeze](#objectfreeze)
      - [Object.seal](#objectseal)
      - [Defining Property Descriptors](#defining-property-descriptors)
    - [Methods \& `this`](#methods--this)
      - [Regular Method](#regular-method)
      - [Arrow Function Pitfall](#arrow-function-pitfall)
    - [Nested Objects \& Arrays of Objects](#nested-objects--arrays-of-objects)
    - [Object Utility Methods](#object-utility-methods)
    - [Merging \& Cloning Objects](#merging--cloning-objects)
      - [Shallow Copy](#shallow-copy)
      - [Deep Copy (using JSON, for simple objects)](#deep-copy-using-json-for-simple-objects)
    - [Destructuring \& Default Values](#destructuring--default-values)
    - [Iteration](#iteration-1)
      - [for...in (keys)](#forin-keys)
      - [Object.entries (keys \& values)](#objectentries-keys--values)
  - [Comparison Table: Object Features \& Methods](#comparison-table-object-features--methods)
  - [Real-World Use Cases](#real-world-use-cases-8)
  - [Key Takeaways](#key-takeaways-10)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-10)
  - [Practice](#practice-10)
  - [Further Reading](#further-reading-10)
- [11\_function\_and\_parameter.js — JavaScript Functions and Parameters](#11_function_and_parameterjs--javascript-functions-and-parameters)
  - [Overview](#overview-11)
  - [Syntax \& Examples](#syntax--examples-11)
    - [1. Function Declaration (Named Function)](#1-function-declaration-named-function)
    - [2. Function Expression](#2-function-expression)
    - [3. Arrow Function Expression](#3-arrow-function-expression)
    - [4. Anonymous Function](#4-anonymous-function)
    - [5. Parameters and Arguments](#5-parameters-and-arguments)
    - [6. Return Values and Side Effects](#6-return-values-and-side-effects)
    - [7. Scope and Closures](#7-scope-and-closures)
    - [8. Hoisting](#8-hoisting)
  - [Comparison Table: Function Types](#comparison-table-function-types)
  - [Real-World Use Cases](#real-world-use-cases-9)
  - [Key Takeaways](#key-takeaways-11)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-11)
  - [Practice](#practice-11)
  - [Further Reading](#further-reading-11)
- [12\_arrow\_function.js — JavaScript Arrow Functions](#12_arrow_functionjs--javascript-arrow-functions)
  - [Overview](#overview-12)
  - [Syntax \& Examples](#syntax--examples-12)
    - [Basic Syntax](#basic-syntax)
    - [Arrow Functions and `this`](#arrow-functions-and-this)
    - [Arrow Functions and `arguments`](#arrow-functions-and-arguments)
    - [Arrow Functions and Constructors](#arrow-functions-and-constructors)
    - [Arrow Functions and call/apply/bind](#arrow-functions-and-callapplybind)
    - [Arrow Functions in Array Methods](#arrow-functions-in-array-methods)
    - [Arrow Functions in Promises and Callbacks](#arrow-functions-in-promises-and-callbacks)
  - [When **Not** to Use Arrow Functions](#when-not-to-use-arrow-functions)
  - [Best Practices \& Common Pitfalls](#best-practices--common-pitfalls)
  - [Comparison Table: Arrow Functions vs Regular Functions](#comparison-table-arrow-functions-vs-regular-functions)
  - [Real-World Use Cases](#real-world-use-cases-10)
  - [Key Takeaways](#key-takeaways-12)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-12)
  - [Practice](#practice-12)
  - [Further Reading](#further-reading-12)
- [13\_Immediately\_Invoked\_Function\_Expressions\_(IIFE).js — Immediately Invoked Function Expressions (IIFE)](#13_immediately_invoked_function_expressions_iifejs--immediately-invoked-function-expressions-iife)
  - [Overview](#overview-13)
  - [Syntax \& Examples](#syntax--examples-13)
    - [Classic IIFE Syntax](#classic-iife-syntax)
    - [Why Parentheses?](#why-parentheses)
    - [IIFE with Return Value](#iife-with-return-value)
    - [IIFE for Scope Isolation](#iife-for-scope-isolation)
  - [Use Cases for IIFE](#use-cases-for-iife)
  - [Best Practices \& Common Pitfalls](#best-practices--common-pitfalls-1)
  - [Comparison: IIFE vs Regular Function](#comparison-iife-vs-regular-function)
  - [Real-World Use Cases](#real-world-use-cases-11)
  - [Key Takeaways](#key-takeaways-13)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-13)
  - [Practice](#practice-13)
  - [Further Reading](#further-reading-13)
- [14\_control\_flow.js — JavaScript Control Flow](#14_control_flowjs--javascript-control-flow)
  - [Overview](#overview-14)
  - [Syntax \& Examples](#syntax--examples-14)
    - [1. if/else Statement](#1-ifelse-statement)
    - [2. switch Statement](#2-switch-statement)
    - [3. Ternary Operator](#3-ternary-operator)
    - [4. Logical Operators (\&\&, ||, !)](#4-logical-operators---)
    - [5. Nullish Coalescing Operator (??)](#5-nullish-coalescing-operator-)
    - [6. Truthy and Falsy Values](#6-truthy-and-falsy-values)
    - [7. Checking for Empty Arrays and Objects](#7-checking-for-empty-arrays-and-objects)
  - [Comparison Table: JavaScript Control Flow Constructs](#comparison-table-javascript-control-flow-constructs)
  - [Key Takeaways](#key-takeaways-14)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-14)
  - [Practice](#practice-14)
  - [Further Reading](#further-reading-14)
- [15\_loops.js — JavaScript Loops](#15_loopsjs--javascript-loops)
  - [Overview](#overview-15)
  - [Syntax \& Examples](#syntax--examples-15)
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
  - [Key Takeaways](#key-takeaways-15)
  - [Common Pitfalls \& Warnings](#common-pitfalls--warnings-15)
  - [Practice](#practice-15)
  - [Further Reading](#further-reading-15)
  - [DOM Manipulation in JavaScript](#dom-manipulation-in-javascript)
    - [Overview](#overview-16)
    - [Selecting Elements](#selecting-elements)
      - [By ID](#by-id)
      - [By Class Name](#by-class-name)
      - [By Tag Name](#by-tag-name)
      - [By Query Selector](#by-query-selector)
    - [Reading and Changing Text Content](#reading-and-changing-text-content)
    - [Changing Styles](#changing-styles)
    - [Looping Through Collections](#looping-through-collections)
    - [DOM Traversal and Manipulation: Practical Examples (`dom2.js`)](#dom-traversal-and-manipulation-practical-examples-dom2js)
      - [1. Selecting Parent and Child Elements](#1-selecting-parent-and-child-elements)
      - [2. Looping Through Children and Logging Content](#2-looping-through-children-and-logging-content)
      - [3. Changing Styles of Child Elements](#3-changing-styles-of-child-elements)
      - [4. Accessing First and Last Child Elements](#4-accessing-first-and-last-child-elements)
      - [5. Navigating DOM Relationships](#5-navigating-dom-relationships)
      - [6. HTMLCollection vs NodeList](#6-htmlcollection-vs-nodelist)
      - [7. Common Pitfalls](#7-common-pitfalls)
      - [8. Real-World Use Cases](#8-real-world-use-cases)
    - [Common Pitfalls \& Best Practices](#common-pitfalls--best-practices)
    - [Real-World Use Cases](#real-world-use-cases-12)
    - [Example: Putting It All Together](#example-putting-it-all-together)
    - [Further Reading](#further-reading-16)
  - [DOM Manipulation: Practical Examples (dom3.js \& dom4.js)](#dom-manipulation-practical-examples-dom3js--dom4js)
    - [Example 1: Creating and Styling Elements Dynamically (dom3.js)](#example-1-creating-and-styling-elements-dynamically-dom3js)
    - [Example 2: Dynamic List Manipulation Functions (dom4.js)](#example-2-dynamic-list-manipulation-functions-dom4js)
      - [1. Adding List Items](#1-adding-list-items)
      - [2. Editing List Items](#2-editing-list-items)
      - [3. Replacing List Items](#3-replacing-list-items)
      - [4. Removing List Items](#4-removing-list-items)
    - [Summary Table: DOM Methods Used](#summary-table-dom-methods-used)
    - [Best Practices for DOM Manipulation](#best-practices-for-dom-manipulation)
    - [Real-World Use Cases](#real-world-use-cases-13)
  - [16\_Dom — DOM Manipulation in JavaScript](#16_dom--dom-manipulation-in-javascript)
  - [Overview](#overview-17)
  - [Selecting Elements](#selecting-elements-1)
      - [By ID](#by-id-1)
      - [By Class Name](#by-class-name-1)
      - [By Tag Name](#by-tag-name-1)
      - [By Query Selector](#by-query-selector-1)
  - [Reading and Changing Text Content](#reading-and-changing-text-content-1)
  - [Changing Styles](#changing-styles-1)
  - [Looping Through Collections](#looping-through-collections-1)
  - [DOM Traversal and Manipulation: Practical Examples (`dom2.js`)](#dom-traversal-and-manipulation-practical-examples-dom2js-1)
      - [1. Selecting Parent and Child Elements](#1-selecting-parent-and-child-elements-1)
      - [2. Looping Through Children and Logging Content](#2-looping-through-children-and-logging-content-1)
      - [3. Changing Styles of Child Elements](#3-changing-styles-of-child-elements-1)
      - [4. Accessing First and Last Child Elements](#4-accessing-first-and-last-child-elements-1)
      - [5. Navigating DOM Relationships](#5-navigating-dom-relationships-1)
      - [6. HTMLCollection vs NodeList](#6-htmlcollection-vs-nodelist-1)
      - [7. Common Pitfalls](#7-common-pitfalls-1)
      - [8. Real-World Use Cases](#8-real-world-use-cases-1)
    - [Common Pitfalls \& Best Practices](#common-pitfalls--best-practices-1)
    - [Real-World Use Cases](#real-world-use-cases-14)
    - [Example: Putting It All Together](#example-putting-it-all-together-1)
    - [Further Reading](#further-reading-17)
  - [DOM Manipulation: Practical Examples (dom3.js \& dom4.js)](#dom-manipulation-practical-examples-dom3js--dom4js-1)
    - [Example 1: Creating and Styling Elements Dynamically (dom3.js)](#example-1-creating-and-styling-elements-dynamically-dom3js-1)
    - [Example 2: Dynamic List Manipulation Functions (dom4.js)](#example-2-dynamic-list-manipulation-functions-dom4js-1)
      - [1. Adding List Items](#1-adding-list-items-1)
      - [2. Editing List Items](#2-editing-list-items-1)
      - [3. Replacing List Items](#3-replacing-list-items-1)
      - [4. Removing List Items](#4-removing-list-items-1)
    - [Summary Table: DOM Methods Used](#summary-table-dom-methods-used-1)
    - [Best Practices for DOM Manipulation](#best-practices-for-dom-manipulation-1)
    - [Real-World Use Cases](#real-world-use-cases-15)
- [17\_event — JavaScript DOM Events (dom1.js)](#17_event--javascript-dom-events-dom1js)
  - [Overview](#overview-18)
  - [Syntax \& Examples](#syntax--examples-16)
    - [Adding Event Listeners](#adding-event-listeners)
    - [The Event Object](#the-event-object)
    - [Event Delegation](#event-delegation)
    - [Preventing Default Actions](#preventing-default-actions)
    - [Stopping Event Propagation](#stopping-event-propagation)
    - [Removing Elements on Click](#removing-elements-on-click)
  - [Detailed Explanations from dom1.js](#detailed-explanations-from-dom1js)
    - [1. Owl Image Click](#1-owl-image-click)
    - [2. Japan Image Click](#2-japan-image-click)
    - [3. Photoshop Image Hover](#3-photoshop-image-hover)
    - [4. Body Click Timestamp](#4-body-click-timestamp)
    - [5. Images List Click (Event Delegation)](#5-images-list-click-event-delegation)
    - [6. Google Link Click (Prevent Default)](#6-google-link-click-prevent-default)
    - [7. Prayer Image Click (Remove Parent li)](#7-prayer-image-click-remove-parent-li)
    - [8. Generic li Removal (Event Delegation)](#8-generic-li-removal-event-delegation)
  - [Best Practices \& Common Pitfalls](#best-practices--common-pitfalls-2)
  - [Real-World Use Cases](#real-world-use-cases-16)
  - [Summary Table: Event Methods \& Properties Used](#summary-table-event-methods--properties-used)
  - [Further Reading](#further-reading-18)

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
- Declare, initialize, and reassign variables using `var`, `let`, and `const`.
- Understand variable scope (global, function, block).
- Know about hoisting, re-declaration, and reassignment rules.
- Apply best practices and avoid common pitfalls.

---

## Overview

Variables are containers for storing data values. JavaScript provides three main ways to declare variables: `var`, `let`, and `const`. Each has different rules for scope, hoisting, re-declaration, and reassignment.

---

## Syntax & Examples

### Declaration and Initialization
```js
var a; // Declaration
let b = 2; // Declaration + Initialization
const c = 3; // Must initialize
console.log({ a, b, c });
```

### Reassignment
```js
let x = 10;
x = 20; // Allowed
console.log({ x });
const y = 5;
// y = 6; // Error: Assignment to constant variable
```

### Scope
```js
if (true) {
  var foo = 'var-scope';
  let bar = 'let-scope';
  const baz = 'const-scope';
}
console.log('foo:', foo); // Accessible
// console.log(bar); // Error: bar is not defined
// console.log(baz); // Error: baz is not defined
```

### Hoisting
```js
console.log(hoistedVar); // undefined
var hoistedVar = 1;
// console.log(hoistedLet); // ReferenceError
let hoistedLet = 2;
```

### Re-declaration
```js
var a = 1;
var a = 2; // Allowed
let b = 1;
// let b = 2; // Error: Identifier 'b' has already been declared
```

---

## Comparison Table: var vs let vs const
| Feature        | var         | let         | const       |
|---------------|-------------|-------------|-------------|
| Scope         | Function    | Block       | Block       |
| Hoisting      | Yes         | Yes (TDZ)   | Yes (TDZ)   |
| Re-declare    | Yes         | No          | No          |
| Reassign      | Yes         | Yes         | No          |
| Must Init     | No          | No          | Yes         |

---

## Real-World Use Cases
- **Loop counters:**
  ```js
  for (let i = 0; i < 5; i++) {
    console.log({ i });
  }
  ```
- **Constants:**
  ```js
  const PI = 3.14159;
  ```
- **Global config:**
  ```js
  var config = {};
  ```

---

## Key Takeaways
> - Use `const` for values that never change, `let` for those that do, and avoid `var`.
> - `let` and `const` are block scoped; `var` is function scoped.
> - Hoisting can lead to bugs—always declare variables at the top of their scope.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> - Using `var` can lead to bugs due to hoisting and scope confusion.
> - Re-declaring variables with `let` or `const` in the same scope causes errors.
> - `const` does not make objects/arrays immutable—only the binding is constant.

---

## Practice
**Try it yourself:**
- Declare a variable with `let` and reassign it.
- Try to reassign a `const` variable and observe the error.
- Use `var` in a function and see its scope.

**Quiz:**
```js
var x = 1;
if (true) {
  var x = 2;
  let y = 3;
}
console.log(x); // ?
// console.log(y); // ?
```

---

## Further Reading
- [MDN: var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

---

# 2_dataType.js — JavaScript Data Types

**Learning Goals:**
- Identify primitive and non-primitive data types in JavaScript.
- Use `typeof`, `instanceof`, and `Array.isArray` to check types.
- Understand quirks like `typeof null` and `NaN`.
- Know about mutability and immutability.
- Apply best practices and avoid common pitfalls.

---

## Overview

JavaScript is a dynamically typed language with several primitive and non-primitive data types. Understanding these types and how to check them is essential for robust code.

---

## Syntax & Examples

### Primitive Types
```js
const str = 'hello'; // String
const num = 42; // Number
const bool = true; // Boolean
const n = null; // Null
let u; // Undefined
const sym = Symbol('id'); // Symbol
const big = 123n; // BigInt
console.log({ str, num, bool, n, u, sym, big });
```

### Non-Primitive Types
```js
const obj = { a: 1 };
const arr = [1, 2, 3];
function fn() { return 'hi'; }
const date = new Date();
console.log({ obj, arr, fn, date });
```

### Type Checking
```js
console.log('typeof str:', typeof str);
console.log('typeof arr:', typeof arr); // 'object'
console.log('Array.isArray(arr):', Array.isArray(arr));
console.log('fn instanceof Function:', fn instanceof Function);
console.log('date instanceof Date:', date instanceof Date);
```

### Special Cases
```js
console.log('typeof null:', typeof null); // 'object' (quirk)
console.log('typeof NaN:', typeof NaN); // 'number'
console.log('typeof []:', typeof []); // 'object'
console.log('Array.isArray([]):', Array.isArray([])); // true
```

### Mutability
```js
let a = 1;
a = 2; // Primitives are immutable (new value)
const arr2 = [1, 2];
arr2[0] = 9; // Non-primitives are mutable
console.log({ a, arr2 });
```

---

## Comparison Table: Data Types
| Type      | Example         | typeof         | Mutable?   | Notes                  |
|-----------|----------------|---------------|------------|------------------------|
| String    | 'abc'          | 'string'      | No         | Primitive              |
| Number    | 42             | 'number'      | No         | Primitive              |
| Boolean   | true           | 'boolean'     | No         | Primitive              |
| Null      | null           | 'object'      | No         | Primitive, quirky type |
| Undefined | undefined      | 'undefined'   | No         | Primitive              |
| Symbol    | Symbol('id')   | 'symbol'      | No         | Primitive (ES6+)       |
| BigInt    | 123n           | 'bigint'      | No         | Primitive (ES2020+)    |
| Object    | {a:1}          | 'object'      | Yes        | Non-primitive          |
| Array     | [1,2,3]        | 'object'      | Yes        | Non-primitive, Array   |
| Function  | function(){}   | 'function'    | Yes        | Non-primitive, callable|
| Date      | new Date()     | 'object'      | Yes        | Non-primitive, Date    |

---

## Real-World Use Cases
- **Type checking:**
  ```js
  function isArray(val) {
    return Array.isArray(val);
  }
  console.log(isArray([1,2,3]));
  ```
- **Handling null/undefined:**
  ```js
  function safeGet(obj, key) {
    return obj[key] ?? 'default';
  }
  ```
- **Working with BigInt:**
  ```js
  const big = 9007199254740991n;
  console.log({ big });
  ```

---

## Key Takeaways
> - Use `typeof` for primitives, `Array.isArray` for arrays, and `instanceof` for objects.
> - Primitives are immutable; objects/arrays are mutable.
> - `typeof null` is 'object' (quirk); `typeof NaN` is 'number'.
> - Always check for array type before using array methods.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> - `typeof null` returns 'object' (historical bug).
> - Arrays and functions are objects—use `Array.isArray` and `typeof fn === 'function'`.
> - NaN is a number, but not equal to itself.

---

## Practice
**Try it yourself:**
- Declare a variable of each primitive type and print its type.
- Check if a value is an array or a function.
- Try mutating a primitive and a non-primitive value.

**Quiz:**
```js
let x = null;
console.log(typeof x);
let y = [1,2,3];
console.log(Array.isArray(y));
// What does this print?
```

---

## Further Reading
- [MDN: Data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [MDN: Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

---

# 3_conversionOperation.js — JavaScript Type Conversion

**Learning Goals:**
- Understand the difference between implicit (coercion) and explicit type conversion.
- Convert between strings, numbers, booleans, null, undefined, objects, and arrays.
- Recognize what results in `NaN` and how to check for it.
- Use conversion functions and methods effectively.
- Avoid common pitfalls in type conversion.

---

## Overview

JavaScript automatically converts types when needed (implicit conversion/coercion), but you can also convert types explicitly using constructors and methods. Understanding how and when conversion happens is crucial for writing bug-free code.

---

## Syntax & Examples

### Implicit (Type Coercion) vs Explicit Conversion

#### Implicit Conversion (Coercion)
```js
console.log("'5' + 1:", '5' + 1); // '51' (number to string)
console.log("'5' - 1:", '5' - 1); // 4 (string to number)
console.log("true + 1:", true + 1); // 2 (boolean to number)
console.log("'5' * '2':", '5' * '2'); // 10 (strings to numbers)
console.log("'5' == 5:", '5' == 5); // true (coercion in comparison)
```

#### Explicit Conversion
```js
const str = String(123); // '123'
const num = Number('456'); // 456
const bool = Boolean(0); // false
console.log({ str, num, bool });
```

### String Conversion
```js
const n = 42;
console.log('String(n):', String(n));
console.log('n.toString():', n.toString());
console.log('true.toString():', true.toString());
console.log('([1,2,3]).toString():', [1,2,3].toString());
console.log('({a:1}).toString():', ({a:1}).toString());
```

### Number Conversion
```js
console.log('Number("123"):', Number("123"));
console.log('Number("abc"):', Number("abc")); // NaN
console.log('Number(true):', Number(true)); // 1
console.log('Number(false):', Number(false)); // 0
console.log('Number(null):', Number(null)); // 0
console.log('Number(undefined):', Number(undefined)); // NaN
console.log('Number([1,2,3]):', Number([1,2,3])); // NaN
console.log('parseInt("42px"):', parseInt("42px")); // 42
console.log('parseFloat("3.14abc"):', parseFloat("3.14abc")); // 3.14
```

### Boolean Conversion (Truthy/Falsy)
```js
console.log('Boolean(0):', Boolean(0)); // false
console.log('Boolean(1):', Boolean(1)); // true
console.log('Boolean(""):', Boolean("")); // false
console.log('Boolean("hello"):', Boolean("hello")); // true
console.log('Boolean([]):', Boolean([])); // true
console.log('Boolean({}):', Boolean({})); // true
console.log('Boolean(null):', Boolean(null)); // false
console.log('Boolean(undefined):', Boolean(undefined)); // false
console.log('Boolean(NaN):', Boolean(NaN)); // false
```

### Special Cases
```js
console.log('typeof null:', typeof null); // 'object' (quirk)
console.log('typeof NaN:', typeof NaN); // 'number'
console.log('Number(""):', Number("")); // 0
console.log('Number([]):', Number([])); // 0
console.log('Number([1]):', Number([1])); // 1
console.log('Number([1,2]):', Number([1,2])); // NaN
console.log('String(undefined):', String(undefined)); // 'undefined'
console.log('String(null):', String(null)); // 'null'
```

### Conversion Functions and Methods
```js
const val = '123.45abc';
console.log('parseInt(val):', parseInt(val)); // 123
console.log('parseFloat(val):', parseFloat(val)); // 123.45
console.log('Number(val):', Number(val)); // NaN
console.log('Boolean(val):', Boolean(val)); // true
const obj = { valueOf() { return 10; } };
console.log('Number(obj):', Number(obj)); // 10
```

---

## Comparison Table: Conversion Results
| Value         | Number() | String()   | Boolean() |
|---------------|----------|------------|-----------|
| '42'          | 42       | '42'       | true      |
| 'abc'         | NaN      | 'abc'      | true      |
| ''            | 0        | ''         | false     |
| true          | 1        | 'true'     | true      |
| false         | 0        | 'false'    | false     |
| null          | 0        | 'null'     | false     |
| undefined     | NaN      | 'undefined'| false     |
| [1,2]         | NaN      | '1,2'      | true      |
| []            | 0        | ''         | true      |
| {}            | NaN      | '[object Object]' | true |
| NaN           | NaN      | 'NaN'      | false     |

---

## Real-World Use Cases
- **Form input conversion:**
  ```js
  const ageInput = '25';
  const age = Number(ageInput);
  if (!Number.isNaN(age)) {
    console.log('Valid age:', age);
  }
  ```
- **Boolean checks:**
  ```js
  const value = '';
  if (!value) {
    console.log('Value is falsy');
  }
  ```
- **Parsing numbers from strings:**
  ```js
  const price = parseFloat('$19.99'.replace('$', ''));
  console.log({ price });
  ```
- **Converting objects for display:**
  ```js
  const user = { name: 'Alice' };
  console.log('User:', String(user));
  ```

---

## Key Takeaways
> - Use explicit conversion to avoid bugs from implicit coercion.
> - `Number()`, `String()`, and `Boolean()` are the main conversion functions.
> - `parseInt` and `parseFloat` are for parsing numbers from strings.
> - Be aware of truthy/falsy values in boolean conversion.
> - Arrays and objects have special conversion rules.
> - Always check for `NaN` after number conversion.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> - Implicit coercion can lead to unexpected results—prefer explicit conversion.
> - `Number(undefined)` is NaN, `Number(null)` is 0.
> - `Boolean([])` and `Boolean({})` are true, even though they're empty.
> - `parseInt` stops at the first non-digit character; `Number` returns NaN if the string is not a valid number.
> - `typeof null` is 'object' (quirk).

---

## Practice
**Try it yourself:**
- Convert different values to numbers, strings, and booleans and observe the results.
- Use `parseInt` and `parseFloat` on various strings.
- Check for `NaN` after conversion.

**Quiz:**
```js
console.log(Number(''));
console.log(Boolean('0'));
console.log(String(false));
// What does this print?
```

---

## Further Reading
- [MDN: Type Conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#type_conversion)
- [MDN: parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [MDN: parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
- [Jake Worth: Logging an Object in JavaScript](https://www.jakeworth.com/posts/logging-an-object/)

---

# 4_operation.js — JavaScript Operations

**Learning Goals:**
- Perform arithmetic, assignment, comparison, logical, bitwise, unary, and ternary operations.
- Use typeof, delete, in, instanceof, spread, and destructuring operators.
- Understand operator precedence and associativity.
- Apply best practices and avoid common pitfalls.

---

## Overview

JavaScript provides a wide range of operators for performing calculations, assignments, comparisons, logical operations, and more. Understanding how these operators work, their precedence, and their side effects is essential for writing clear and bug-free code.

---

## Syntax & Examples

### Arithmetic Operators
```js
const a = 10, b = 3;
console.log('a + b:', a + b);
console.log('a - b:', a - b);
console.log('a * b:', a * b);
console.log('a / b:', a / b);
console.log('a % b:', a % b);
console.log('a ** b:', a ** b); // Exponentiation
```

### Assignment Operators
```js
let x = 5;
x += 2; // x = x + 2
x -= 1; // x = x - 1
x *= 3; // x = x * 3
x /= 2; // x = x / 2
x %= 2; // x = x % 2
x **= 2; // x = x ** 2
console.log({ x });
```

### Comparison Operators
See the Comparisons section for details (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`).

### Logical Operators
```js
const p = true, q = false;
console.log('p && q:', p && q);
console.log('p || q:', p || q);
console.log('!p:', !p);
console.log('null ?? "default":', null ?? "default"); // Nullish coalescing
```

### Bitwise Operators
```js
const m = 5, n = 3;
console.log('m & n:', m & n); // AND
console.log('m | n:', m | n); // OR
console.log('m ^ n:', m ^ n); // XOR
console.log('~m:', ~m); // NOT
console.log('m << 1:', m << 1); // Left shift
console.log('m >> 1:', m >> 1); // Right shift
console.log('m >>> 1:', m >>> 1); // Unsigned right shift
```

### Unary Operators
```js
let y = 10;
console.log('++y:', ++y);
console.log('--y:', --y);
console.log('+"5":', +"5"); // Converts to number
console.log('-"5":', -"5"); // Negates after conversion
console.log('typeof y:', typeof y);
```

### Ternary Operator
```js
const age = 18;
const status = age >= 18 ? 'adult' : 'minor';
console.log({ status });
```

### String Operators
```js
const s1 = 'Hello', s2 = 'World';
console.log('s1 + s2:', s1 + ' ' + s2);
const templ = `${s1}, ${s2}!`;
console.log({ templ });
```

### Spread and Rest Operators
```js
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
console.log({ arr2 });
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }
console.log('sum(1,2,3):', sum(1,2,3));
```

### Destructuring Assignment
```js
const obj = { a: 1, b: 2 };
const { a: alpha, b: beta } = obj;
console.log({ alpha, beta });
const [first, ...rest] = [10, 20, 30];
console.log({ first, rest });
```

### typeof, delete, in, instanceof
```js
const arr3 = [1, 2, 3];
console.log('typeof arr3:', typeof arr3);
console.log('0 in arr3:', 0 in arr3);
console.log('length' in arr3);
console.log('arr3 instanceof Array:', arr3 instanceof Array);
const obj2 = { x: 1 };
delete obj2.x;
console.log({ obj2 });
```

### Operator Precedence and Associativity
```js
const result = 2 + 3 * 4; // 2 + (3 * 4) = 14
console.log({ result });
const chained = 10 - 2 - 1; // (10 - 2) - 1 = 7
console.log({ chained });
```

---

## Comparison Table: Operator Types and Use Cases
| Operator Type      | Examples                | Use Case                        |
|--------------------|------------------------|---------------------------------|
| Arithmetic         | +, -, *, /, %, **      | Math operations                 |
| Assignment         | =, +=, -=, *=, /=      | Assign/update values            |
| Comparison         | ==, ===, >, <, etc.    | Value comparison                |
| Logical            | &&, ||, !, ??          | Boolean logic, defaults         |
| Bitwise            | &, |, ^, ~, <<, >>     | Low-level bit manipulation      |
| Unary              | +, -, ++, --, typeof   | Single operand operations       |
| Ternary            | ? :                    | Conditional expressions         |
| String             | +, template literals   | Concatenation, interpolation    |
| Spread/Rest        | ...                    | Copy, merge, variable args      |
| Destructuring      | {a}, [x]               | Extract values from objects/arr |
| typeof, delete, in | typeof, delete, in     | Type check, property ops        |
| instanceof         | instanceof             | Prototype chain check           |

---

## Real-World Use Cases
- **Default values:**
  ```js
  function greet(name) {
    const user = name || 'Guest';
    console.log({ user });
  }
  greet();
  ```
- **Conditional logic:**
  ```js
  const isEven = n => n % 2 === 0 ? 'even' : 'odd';
  console.log('isEven(3):', isEven(3));
  ```
- **Merging arrays:**
  ```js
  const a = [1,2], b = [3,4];
  const merged = [...a, ...b];
  console.log({ merged });
  ```
- **Removing properties:**
  ```js
  const obj = { x: 1, y: 2 };
  delete obj.x;
  console.log({ obj });
  ```

---

## Key Takeaways
> - Use arithmetic and assignment operators for calculations and updates.
> - Use logical and ternary operators for concise conditional logic.
> - Use spread/rest for copying, merging, and variable arguments.
> - Use destructuring for cleaner code.
> - Understand operator precedence to avoid bugs.
> - Use typeof, in, instanceof, and delete for type and property checks.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> - Mixing types with + can lead to string concatenation instead of addition.
> - Assignment inside conditions (e.g., if (x = 5)) is a common bug—use === for comparison.
> - Bitwise operators work on 32-bit integers, not floats.
> - delete only removes properties from objects, not variables or array elements (leaves holes).
> - typeof null returns 'object' (quirk).

---

## Practice
**Try it yourself:**
- Use arithmetic operators to calculate the area of a rectangle.
- Use the ternary operator to check if a number is positive or negative.
- Use spread to merge two arrays.
- Use destructuring to extract values from an object.
- Use typeof and instanceof to check types.

**Quiz:**
```js
let a = 5;
let b = '5';
console.log(a + b);
console.log(a == b);
console.log(a === b);
// What does this print?
```

---

## Further Reading
- [MDN: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [MDN: Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- [Jake Worth: Logging an Object in JavaScript](https://www.jakeworth.com/posts/logging-an-object/)

---

# 5_comparison.js — JavaScript Comparisons

**Learning Goals:**
- Understand equality and relational operators in JavaScript.
- Know the difference between == and ===, != and !==.
- Use relational operators (>, <, >=, <=) correctly.
- Learn about Object.is and SameValue comparison.
- Compare different types (number, string, boolean, object, array, null, undefined, NaN).
- Recognize special cases and pitfalls in comparisons.

---

## Overview

JavaScript provides both loose (==) and strict (===) equality operators, as well as relational operators. Special care is needed when comparing different types, objects, arrays, and special values like null, undefined, and NaN.

---

## Syntax & Examples

### Equality Operators

#### Loose Equality (==)
```js
console.log("'2' == 2:", '2' == 2); // true (type coercion)
console.log("false == 0:", false == 0); // true
console.log("null == undefined:", null == undefined); // true
```

#### Strict Equality (===)
```js
console.log("'2' === 2:", '2' === 2); // false (no type coercion)
console.log("false === 0:", false === 0); // false
console.log("null === undefined:", null === undefined); // false
```

### Inequality Operators
```js
console.log("'2' != 2:", '2' != 2); // false
console.log("'2' !== 2:", '2' !== 2); // true
```

### Relational Operators
```js
console.log('3 > 2:', 3 > 2); // true
console.log('2 >= 2:', 2 >= 2); // true
console.log('1 < 2:', 1 < 2); // true
console.log('1 <= 2:', 1 <= 2); // true
```

### Object.is
```js
console.log('Object.is(NaN, NaN):', Object.is(NaN, NaN)); // true
console.log('Object.is(+0, -0):', Object.is(+0, -0)); // false
console.log('Object.is(0, -0):', Object.is(0, -0)); // false
console.log('Object.is(1, 1):', Object.is(1, 1)); // true
```

### Comparing Different Types
```js
console.log("'5' == 5:", '5' == 5); // true
console.log("'5' === 5:", '5' === 5); // false
console.log('true == 1:', true == 1); // true
console.log('false == 0:', false == 0); // true
console.log('[] == false:', [] == false); // true
console.log('[] == 0:', [] == 0); // true
console.log('[1] == 1:', [1] == 1); // true
console.log('{} == {}:', {} == {}); // false (different references)
console.log('null == undefined:', null == undefined); // true
console.log('null === undefined:', null === undefined); // false
```

### Special Cases

#### NaN
```js
console.log('NaN == NaN:', NaN == NaN); // false
console.log('NaN === NaN:', NaN === NaN); // false
console.log('Object.is(NaN, NaN):', Object.is(NaN, NaN)); // true
```

#### +0 vs -0
```js
console.log('+0 === -0:', +0 === -0); // true
console.log('Object.is(+0, -0):', Object.is(+0, -0)); // false
```

#### Object Reference Equality
```js
const a = {};
const b = {};
const c = a;
console.log('a === b:', a === b); // false
console.log('a === c:', a === c); // true
```

---

## Comparison Table: Operators and Their Behavior
| Operator   | Type         | Coercion | Example         | Result      | Notes                        |
|------------|--------------|----------|----------------|-------------|------------------------------|
| ==         | Equality     | Yes      | '2' == 2       | true        | Loose equality               |
| ===        | Equality     | No       | '2' === 2      | false       | Strict equality              |
| !=         | Inequality   | Yes      | '2' != 2       | false       | Loose inequality             |
| !==        | Inequality   | No       | '2' !== 2      | true        | Strict inequality            |
| >, <, >=, <=| Relational  | Yes      | '5' > 3        | true        | Strings converted to numbers |
| Object.is  | SameValue    | No       | Object.is(NaN, NaN) | true   | Handles NaN, +0/-0          |

---

## Real-World Use Cases
- **Input validation:**
  ```js
  const input = '42';
  if (input == 42) {
    console.log('Input loosely equals 42');
  }
  if (input === 42) {
    console.log('Input strictly equals 42');
  } else {
    console.log('Input does not strictly equal 42');
  }
  ```
- **Checking for null or undefined:**
  ```js
  let value;
  if (value == null) {
    console.log('Value is null or undefined');
  }
  ```
- **Comparing objects:**
  ```js
  const obj1 = { a: 1 };
  const obj2 = { a: 1 };
  console.log('obj1 === obj2:', obj1 === obj2); // false
  const obj3 = obj1;
  console.log('obj1 === obj3:', obj1 === obj3); // true
  ```
- **NaN checks:**
  ```js
  const n = NaN;
  if (Number.isNaN(n)) {
    console.log('n is NaN');
  }
  ```

---

## Key Takeaways
> - Use === and !== for most comparisons to avoid type coercion bugs.
> - == and != perform type coercion and can lead to unexpected results.
> - Object.is is useful for distinguishing NaN and +0/-0.
> - Objects and arrays are compared by reference, not by value.
> - NaN is not equal to itself; use Number.isNaN or Object.is for checks.
> - null == undefined is true, but null === undefined is false.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> - Using == can lead to unexpected results due to type coercion.
> - Comparing objects/arrays compares references, not contents.
> - NaN is not equal to itself; always use Number.isNaN or Object.is.
> - +0 and -0 are equal with === but not with Object.is.
> - null and undefined are only loosely equal.

---

## Practice
**Try it yourself:**
- Compare '5' and 5 with both == and ===.
- Compare two different arrays with ===.
- Check if a variable is NaN using Number.isNaN.
- Use Object.is to compare +0 and -0.

**Quiz:**
```js
console.log([] == false);
console.log([] === false);
// What does this print?
```

---

## Further Reading
- [MDN: Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [MDN: Relational operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Relational_Operators)
- [MDN: Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
- [Jake Worth: Logging an Object in JavaScript](https://www.jakeworth.com/posts/logging-an-object/)

---

# 6_strings.js — JavaScript Strings

**Learning Goals:**
- Create and manipulate strings using literals, constructors, and template literals.
- Access and modify string content (immutability, indexing).
- Use string interpolation and concatenation.
- Apply a wide range of string methods for searching, extracting, replacing, and formatting.
- Work with Unicode, escape sequences, and conversions.
- Apply best practices and avoid common pitfalls.

---

## Overview

Strings are sequences of characters used to represent text. JavaScript provides many methods for manipulating and inspecting strings. Strings are immutable, meaning their content cannot be changed after creation—operations return new strings.

---

## Syntax & Examples

### String Creation

#### 1. String Literal
```js
const greeting = 'Hello, world!';
console.log({ greeting });
```

#### 2. String Constructor
```js
const strObj = new String('Hello'); // String object (rarely needed)
console.log({ strObj });
```

#### 3. Template Literals
```js
const name = 'veenayak';
const message = `Hello, ${name}!`;
console.log({ message });
```

### Accessing and Modifying Strings
```js
const word = 'JavaScript';
console.log('word[0]:', word[0]); // 'J'
console.log('word.charAt(4):', word.charAt(4)); // 'S'
// Strings are immutable:
// word[0] = 'Y'; // No effect
```

### String Interpolation and Concatenation
```js
const a = 'Hello';
const b = 'World';
const concat1 = a + ' ' + b;
const concat2 = `${a} ${b}`;
console.log({ concat1, concat2 });
```

### String Methods

#### Length
```js
const s = 'hello';
console.log('s.length:', s.length);
```

#### charAt, charCodeAt, at
```js
console.log('s.charAt(1):', s.charAt(1));
console.log('s.charCodeAt(1):', s.charCodeAt(1));
console.log('s.at(-1):', s.at(-1));
```

#### indexOf, lastIndexOf, includes
```js
console.log('s.indexOf("l"):', s.indexOf('l'));
console.log('s.lastIndexOf("l"):', s.lastIndexOf('l'));
console.log('s.includes("he"):', s.includes('he'));
```

#### startsWith, endsWith
```js
console.log('s.startsWith("he"):', s.startsWith('he'));
console.log('s.endsWith("lo"):', s.endsWith('lo'));
```

#### slice, substring, substr
```js
console.log('s.slice(1, 4):', s.slice(1, 4));
console.log('s.substring(1, 4):', s.substring(1, 4));
console.log('s.substr(1, 3):', s.substr(1, 3)); // Deprecated but still used
```

#### replace, replaceAll
```js
const text = 'foo bar foo';
console.log('text.replace("foo", "baz"):', text.replace('foo', 'baz'));
console.log('text.replaceAll("foo", "baz"):', text.replaceAll('foo', 'baz'));
```

#### split, join
```js
const csv = 'a,b,c';
const arr = csv.split(',');
console.log({ arr });
const joined = arr.join('-');
console.log({ joined });
```

#### trim, trimStart, trimEnd
```js
const spaced = '   hello   ';
console.log('spaced.trim():', spaced.trim());
console.log('spaced.trimStart():', spaced.trimStart());
console.log('spaced.trimEnd():', spaced.trimEnd());
```

#### padStart, padEnd
```js
const num = '5';
console.log('num.padStart(3, "0"):', num.padStart(3, '0'));
console.log('num.padEnd(3, "0"):', num.padEnd(3, '0'));
```

#### repeat
```js
console.log('"ha".repeat(3):', 'ha'.repeat(3));
```

#### toUpperCase, toLowerCase
```js
console.log('s.toUpperCase():', s.toUpperCase());
console.log('s.toLowerCase():', s.toLowerCase());
```

#### match, search, regular expressions
```js
const regex = /[aeiou]/g;
console.log('s.match(regex):', s.match(regex));
console.log('s.search("e"):', s.search('e'));
```

### Conversion between Strings and Other Types
```js
const n = 42;
const strNum = String(n);
console.log({ strNum });
const parsed = Number('123');
console.log({ parsed });
```

### Unicode and Escape Sequences
```js
const smile = '\u263A';
console.log('smile:', smile);
const emoji = '\u{1F600}';
console.log('emoji:', emoji);
const escaped = 'Line1\nLine2';
console.log('escaped:', escaped);
```

---

## Comparison Table: String Methods
| Method         | Purpose                        | Returns New? | Notes                        |
|----------------|-------------------------------|--------------|------------------------------|
| length         | String length                  | No           | Property, not a method       |
| charAt         | Character at index             | Yes          |                              |
| at             | Character at index (ES2022+)   | Yes          | Supports negative indices    |
| indexOf        | First index of substring       | Yes          | -1 if not found              |
| lastIndexOf    | Last index of substring        | Yes          | -1 if not found              |
| includes       | Substring present?             | Yes          | Boolean                      |
| startsWith     | Starts with substring?         | Yes          | Boolean                      |
| endsWith       | Ends with substring?           | Yes          | Boolean                      |
| slice          | Extract substring              | Yes          | Supports negative indices    |
| substring      | Extract substring              | Yes          | No negative indices          |
| substr         | Extract substring (deprecated) | Yes          | (start, length)              |
| replace        | Replace first match            | Yes          | Regex or string              |
| replaceAll     | Replace all matches            | Yes          | Regex or string              |
| split          | Split into array               | Yes          |                              |
| join           | Join array to string           | Yes          | Array method                 |
| trim           | Remove whitespace              | Yes          |                              |
| padStart       | Pad start to length            | Yes          |                              |
| padEnd         | Pad end to length              | Yes          |                              |
| repeat         | Repeat string                  | Yes          |                              |
| toUpperCase    | Uppercase                      | Yes          |                              |
| toLowerCase    | Lowercase                      | Yes          |                              |
| match          | Regex match                    | Yes          | Returns array or null        |
| search         | Regex search                   | Yes          | Returns index or -1          |

---

## Real-World Use Cases
- **Template generation:**
  ```js
  const user = 'Alice';
  const msg = `Welcome, ${user}!`;
  console.log({ msg });
  ```
- **CSV parsing:**
  ```js
  const csv = 'a,b,c';
  const arr = csv.split(',');
  console.log({ arr });
  ```
- **Input validation:**
  ```js
  const email = 'test@example.com';
  const isValid = email.includes('@');
  console.log({ isValid });
  ```
- **Slug generation:**
  ```js
  const title = 'Hello World!';
  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  console.log({ slug });
  ```
- **Padding numbers:**
  ```js
  const order = 7;
  const padded = String(order).padStart(3, '0');
  console.log({ padded });
  ```

---

## Key Takeaways
> - Use string literals and template literals for most cases.
> - Strings are immutable—methods return new strings.
> - Use `includes`, `startsWith`, `endsWith` for searching.
> - Use `slice`, `substring`, `substr` for extraction (prefer `slice`).
> - Use `replace`/`replaceAll` for substitutions.
> - Use `split` and `join` for conversions between strings and arrays.
> - Be aware of Unicode and escape sequences.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> - Strings are immutable—modifying a character does not change the string.
> - `substr` is deprecated—prefer `slice` or `substring`.
> - `indexOf` returns -1 if not found—always check before using the result.
> - Be careful with regular expressions in `replace`/`match`.
> - String objects (`new String()`) are rarely needed—prefer primitives.

---

## Practice
**Try it yourself:**
- Create a string and print its length.
- Use `slice` and `substring` to extract parts of a string and compare the results.
- Use `replace` to substitute a word in a sentence.
- Use `split` to turn a sentence into an array of words.
- Use `padStart` to format a number as a 3-digit string.

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
- [MDN: Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Jake Worth: Logging an Object in JavaScript](https://www.jakeworth.com/posts/logging-an-object/)

---

# 7_numberMath.js — JavaScript Numbers and Math

**Learning Goals:**
- Create and use numbers in JavaScript (primitive and Number object).
- Use built-in number methods for formatting and conversion.
- Perform mathematical operations with the Math object.
- Generate random numbers and understand floating-point quirks.
- Apply best practices and avoid common pitfalls.

---

## Overview

JavaScript supports both primitive numbers and Number objects. The Math object provides a wide range of mathematical functions and constants. Understanding number methods, parsing, formatting, and random number generation is essential for many programming tasks.

---

## Syntax & Examples

### Number Creation and Types
```js
const n1 = 42; // primitive
const n2 = Number('123'); // from string
const n3 = new Number(456); // Number object (rarely needed)
console.log({ n1, n2, n3 });
```

### Special Values
```js
console.log('NaN:', NaN);
console.log('Infinity:', Infinity);
console.log('-Infinity:', -Infinity);
console.log('typeof NaN:', typeof NaN);
console.log('typeof Infinity:', typeof Infinity);
```

### Number Methods
```js
const num = 123.456;
console.log('num.toString():', num.toString());
console.log('num.toFixed(2):', num.toFixed(2));
console.log('num.toPrecision(4):', num.toPrecision(4));
console.log('num.toExponential(2):', num.toExponential(2));
```

### Parsing and Conversion
```js
console.log('parseInt("42px"):', parseInt('42px'));
console.log('parseFloat("3.14abc"):', parseFloat('3.14abc'));
console.log('Number("123.45"):', Number('123.45'));
console.log('Number("abc"):', Number('abc'));
```

### Checking Numbers
```js
console.log('isNaN("abc"):', isNaN('abc'));
console.log('Number.isNaN(NaN):', Number.isNaN(NaN));
console.log('isFinite(10):', isFinite(10));
console.log('Number.isFinite(Infinity):', Number.isFinite(Infinity));
console.log('Number.isInteger(10.5):', Number.isInteger(10.5));
console.log('Number.isSafeInteger(9007199254740991):', Number.isSafeInteger(9007199254740991));
```

### Math Object: Constants
```js
console.log('Math.PI:', Math.PI);
console.log('Math.E:', Math.E);
console.log('Math.LN2:', Math.LN2);
```

### Math Object: Methods
```js
console.log('Math.abs(-4):', Math.abs(-4));
console.log('Math.round(4.6):', Math.round(4.6));
console.log('Math.ceil(4.2):', Math.ceil(4.2));
console.log('Math.floor(4.9):', Math.floor(4.9));
console.log('Math.trunc(4.9):', Math.trunc(4.9));
console.log('Math.sign(-10):', Math.sign(-10));
console.log('Math.min(4, 3, 6, 8):', Math.min(4, 3, 6, 8));
console.log('Math.max(4, 3, 6, 8):', Math.max(4, 3, 6, 8));
console.log('Math.pow(2, 3):', Math.pow(2, 3));
console.log('Math.sqrt(16):', Math.sqrt(16));
console.log('Math.clamp?.(10, 0, 5):', Math.clamp ? Math.clamp(10, 0, 5) : 'Not supported');
```

### Random Number Generation
```js
console.log('Math.random():', Math.random());
// Random integer between min and max (inclusive)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('randomInt(1, 10):', randomInt(1, 10));
```

### Dealing with Floating-Point Precision
```js
console.log('0.1 + 0.2:', 0.1 + 0.2); // 0.30000000000000004
console.log('Number((0.1 + 0.2).toFixed(2)):', Number((0.1 + 0.2).toFixed(2))); // 0.3
console.log('0.1 + 0.2 === 0.3:', 0.1 + 0.2 === 0.3); // false
```

---

## Comparison Table: Number \& Math Methods
| Method/Property         | Purpose                        | Example/Notes                  |
|------------------------|--------------------------------|-------------------------------|
| Number()               | Convert to number              | Number('42')                  |
| parseInt, parseFloat   | Parse from string              | parseInt('42px'), parseFloat('3.14abc') |
| toString               | Convert to string              | num.toString()                |
| toFixed                | Format decimals                | num.toFixed(2)                |
| toPrecision            | Format to precision            | num.toPrecision(4)            |
| toExponential          | Exponential notation           | num.toExponential(2)          |
| isNaN, Number.isNaN    | Check for NaN                  | isNaN('abc'), Number.isNaN(NaN) |
| isFinite, Number.isFinite| Check for finite value        | isFinite(10)                  |
| isInteger, isSafeInteger| Check for integer/safe int     | Number.isInteger(10.5)        |
| Math.abs, Math.round   | Absolute, round                | Math.abs(-4), Math.round(4.6) |
| Math.ceil, Math.floor  | Ceiling, floor                 | Math.ceil(4.2), Math.floor(4.9) |
| Math.trunc, Math.sign  | Truncate, sign                 | Math.trunc(4.9), Math.sign(-10) |
| Math.min, Math.max     | Min, max                       | Math.min(4,3,6), Math.max(4,3,6) |
| Math.pow, Math.sqrt    | Power, square root             | Math.pow(2,3), Math.sqrt(16)  |
| Math.random            | Random float [0,1)             | Math.random()                  |

---

## Real-World Use Cases
- **Formatting currency:**
  ```js
  const price = 19.99;
  const formatted = price.toFixed(2);
  console.log({ formatted });
  ```
- **Parsing user input:**
  ```js
  const input = '42.5px';
  const value = parseFloat(input);
  console.log({ value });
  ```
- **Random dice roll:**
  ```js
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log({ roll });
  ```
- **Rounding numbers:**
  ```js
  const n = 4.7;
  console.log('Math.round(n):', Math.round(n));
  ```
- **Checking for valid numbers:**
  ```js
  const n = Number('abc');
  if (Number.isNaN(n)) {
    console.log('Invalid number');
  }
  ```

---

## Key Takeaways
> - Use primitive numbers for most calculations.
> - Number objects are rarely needed.
> - Math methods are static (call directly on Math object).
> - Random numbers are pseudo-random, not cryptographically secure.
> - Be aware of floating-point precision issues.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> - Floating-point arithmetic can lead to unexpected results (e.g., `0.1 + 0.2 !== 0.3`).
> - `parseInt` and `parseFloat` can parse partial strings; `Number` returns NaN if invalid.
> - `isNaN` vs `Number.isNaN`: `isNaN('abc')` is true, but `Number.isNaN('abc')` is false.
> - Math.random() is not suitable for cryptographic purposes.

---

## Practice
**Try it yourself:**
- Format a number to two decimal places using `toFixed()`.
- Generate a random integer between 5 and 15.
- Parse a string to a number and check for NaN.
- Use Math methods to find the min and max of a set of numbers.

**Quiz:**
```js
console.log(0.1 + 0.2 === 0.3);
// What does this print?
```

---

## Further Reading
- [MDN: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN: Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Jake Worth: Logging an Object in JavaScript](https://www.jakeworth.com/posts/logging-an-object/)

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
- Create, access, and modify arrays using various methods (literal, constructor, Array.of, Array.from).
- Use array methods for searching, extracting, combining, and flattening data.
- Understand the difference between mutating and non-mutating methods.
- Iterate over arrays using different loop constructs and array methods.
- Work with array-like objects and convert them to arrays.
- Use array destructuring and default values.
- Handle multidimensional and nested arrays.
- Apply best practices and avoid common pitfalls.

---

## Overview

Arrays are ordered collections of values. JavaScript provides many methods for manipulating arrays, searching, combining, and flattening them. Understanding array methods and iteration is key to effective data processing and clean code.

---

## Syntax & Examples

### Array Creation

#### 1. Array Literal
```js
const fruits = ['apple', 'banana', 'cherry'];
console.log({ fruits });
```

#### 2. Array Constructor
```js
const arr = new Array(3); // [empty × 3]
const arr2 = new Array('a', 'b', 'c');
console.log({ arr, arr2 });
```

#### 3. Array.of
```js
const numbers = Array.of(1, 2, 3);
console.log({ numbers });
```

#### 4. Array.from
```js
const str = 'hello';
const chars = Array.from(str);
console.log({ chars });
const arrLike = { 0: 'a', 1: 'b', length: 2 };
const realArr = Array.from(arrLike);
console.log({ realArr });
```

### Accessing and Modifying Elements
```js
const colors = ['red', 'green', 'blue'];
console.log('colors[1]:', colors[1]);
colors[2] = 'yellow';
console.log({ colors });
colors[5] = 'purple'; // creates empty slots
console.log({ colors });
```

### Mutating vs Non-Mutating Methods

#### Mutating Methods
```js
const nums = [1, 2, 3];
nums.push(4); // [1,2,3,4]
nums.pop();   // [1,2,3]
nums.shift(); // [2,3]
nums.unshift(0); // [0,2,3]
nums.splice(1, 1, 9); // [0,9,3]
console.log({ nums });
```

#### Non-Mutating Methods
```js
const letters = ['a', 'b', 'c'];
const newLetters = letters.concat(['d', 'e']);
const sliced = letters.slice(1, 3);
console.log({ letters, newLetters, sliced });
```

### Searching and Checking
```js
const animals = ['cat', 'dog', 'bat'];
console.log('animals.includes("dog"):', animals.includes('dog'));
console.log('animals.indexOf("bat"):', animals.indexOf('bat'));
```

### Extraction and Combination
```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
const spreadCombined = [...arr1, ...arr2];
console.log({ combined, spreadCombined });
```

### Flattening Arrays
```js
const nested = [1, [2, [3, 4]]];
const flat1 = nested.flat(); // [1,2,[3,4]]
const flat2 = nested.flat(2); // [1,2,3,4]
console.log({ flat1, flat2 });
```

### Utility Methods
```js
const arr3 = [1, 2, 3];
console.log('Array.isArray(arr3):', Array.isArray(arr3));
console.log('arr3.join("-"):', arr3.join('-'));
console.log('arr3.toString():', arr3.toString());
```

### Iteration

#### for Loop
```js
const nums2 = [10, 20, 30];
for (let i = 0; i < nums2.length; i++) {
  console.log('nums2[i]:', nums2[i]);
}
```

#### for...of Loop
```js
for (const value of nums2) {
  console.log('for...of value:', value);
}
```

#### forEach
```js
nums2.forEach((item, idx) => {
  console.log('forEach item:', item, 'index:', idx);
});
```

#### map
```js
const squares = nums2.map(n => n * n);
console.log({ squares });
```

#### filter
```js
const even = nums2.filter(n => n % 2 === 0);
console.log({ even });
```

#### reduce
```js
const sum = nums2.reduce((acc, n) => acc + n, 0);
console.log({ sum });
```

### Array-like Objects and Conversion
```js
function argsToArray() {
  console.log('arguments:', arguments);
  const arr = Array.from(arguments);
  console.log({ arr });
}
argsToArray(1, 2, 3);
```

### Destructuring Arrays
```js
const [first, second, ...rest] = [1, 2, 3, 4];
console.log({ first, second, rest });
```

### Multidimensional and Nested Arrays
```js
const matrix = [
  [1, 2],
  [3, 4]
];
console.log('matrix[1][0]:', matrix[1][0]);
```

---

## Comparison Table: Array Methods
| Method      | Mutates? | Returns New? | Use Case                        |
|-------------|----------|--------------|---------------------------------|
| push/pop    | Yes      | No           | Add/remove end                  |
| shift/unshift| Yes     | No           | Add/remove start                |
| splice      | Yes      | No           | Add/remove/replace anywhere     |
| slice       | No       | Yes          | Extract subarray                |
| concat      | No       | Yes          | Combine arrays                  |
| map         | No       | Yes          | Transform elements              |
| filter      | No       | Yes          | Filter elements                 |
| reduce      | No       | Yes (single) | Aggregate to single value       |
| forEach     | No       | No           | Side effects, iteration         |
| flat        | No       | Yes          | Flatten nested arrays           |
| join        | No       | Yes (string) | Combine to string               |

---

## Real-World Use Cases
- **Data transformation:**
  ```js
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  const names = users.map(u => u.name);
  console.log({ names });
  ```
- **Filtering data:**
  ```js
  const adults = users.filter(u => u.age >= 18);
  ```
- **Summing values:**
  ```js
  const total = [10, 20, 30].reduce((sum, n) => sum + n, 0);
  console.log({ total });
  ```
- **Flattening nested arrays:**
  ```js
  const deep = [1, [2, [3, 4]]];
  const flat = deep.flat(2);
  console.log({ flat });
  ```
- **Converting arguments to array:**
  ```js
  function f() { return Array.from(arguments); }
  ```

---

## Key Takeaways
> - Use array literals for most cases.
> - Prefer non-mutating methods for functional programming.
> - Use spread (`...`) and `Array.from` for copying and conversion.
> - Use `map`, `filter`, `reduce` for data processing.
> - Always check if a variable is an array with `Array.isArray()`.
> - Be careful with sparse arrays and empty slots.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> - Mutating methods change the original array—avoid if you need immutability.
> - `for...in` iterates over all enumerable properties, not just indices—use `for...of` or classic for for arrays.
> - Sparse arrays (with empty slots) can cause unexpected behavior in iteration and methods.
> - `Array.from` and spread only do shallow copies.
> - `==` does not compare array contents, only references.

---

## Practice
**Try it yourself:**
- Create an array of your three favorite foods and print its length.
- Use `slice()` and `splice()` to extract elements and observe the difference.
- Use `map` to double each value in an array.
- Use `filter` to select only odd numbers from an array.
- Use `reduce` to sum an array of numbers.

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
- [MDN: Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
- [Jake Worth: Logging an Object in JavaScript](https://www.jakeworth.com/posts/logging-an-object/)

---

# 10_objects.js — JavaScript Objects

**Learning Goals:**
- Create and access object properties using various methods (literal, constructor, Object.create).
- Use Symbols and computed property names as object keys.
- Understand property descriptors, immutability (`Object.freeze`, `Object.seal`).
- Define and call object methods, and understand `this` binding (including arrow function pitfalls).
- Work with nested objects and arrays of objects.
- Use utility methods (`Object.keys`, `Object.values`, `Object.entries`, `hasOwnProperty`, etc.).
- Merge and clone objects (shallow vs deep copy).
- Use destructuring and default values.
- Iterate over objects (for...in, Object.entries, caveats).
- Apply best practices and avoid common pitfalls.

---

## Overview

Objects are key-value collections used to represent structured data. JavaScript objects can have properties, methods, and support advanced features like symbols, immutability, and destructuring. Mastering objects is essential for effective JavaScript programming.

---

## Syntax & Examples

### Object Creation

#### 1. Object Literal
```js
const user = {
  name: 'veenayak',
  age: 22,
  email: 'veena@edv.com',
  'favorite color': 'blue', // property with space
};
console.log({ user });
```

#### 2. Object Constructor
```js
const obj = new Object();
obj.name = 'Pranjal';
obj.age = 25;
console.log({ obj });
```

#### 3. Object.create
```js
const proto = { greet() { return 'Hello!'; } };
const child = Object.create(proto);
child.name = 'Tanmay';
console.log({ child });
console.log('child.greet():', child.greet());
```

### Property Access

#### Dot Notation
```js
console.log('user.name:', user.name);
```

#### Bracket Notation (for dynamic or special keys)
```js
console.log('user["favorite color"]:', user['favorite color']);
const key = 'email';
console.log('user[key]:', user[key]);
```

#### Computed Property Names
```js
const prop = 'score';
const player = { [prop]: 100 };
console.log({ player });
```

#### Symbol Properties
```js
const sym = Symbol('id');
const objWithSym = { [sym]: 123 };
console.log('objWithSym[sym]:', objWithSym[sym]);
```

### Property Descriptors & Immutability

#### Object.freeze
```js
const frozen = { a: 1 };
Object.freeze(frozen);
frozen.a = 2; // Ignored in non-strict mode
console.log({ frozen });
```

#### Object.seal
```js
const sealed = { b: 2 };
Object.seal(sealed);
sealed.b = 3; // Allowed
sealed.c = 4; // Not added
console.log({ sealed });
```

#### Defining Property Descriptors
```js
const descObj = {};
Object.defineProperty(descObj, 'hidden', {
  value: 42,
  writable: false,
  enumerable: false,
  configurable: false
});
console.log('descObj.hidden:', descObj.hidden);
console.log('Object.keys(descObj):', Object.keys(descObj)); // 'hidden' not listed
```

### Methods & `this`

#### Regular Method
```js
const person = {
  name: 'Alice',
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};
console.log('person.greet():', person.greet());
```

#### Arrow Function Pitfall
```js
const badPerson = {
  name: 'Bob',
  greet: () => `Hi, I'm ${this.name}` // 'this' is not bound to badPerson
};
console.log('badPerson.greet():', badPerson.greet()); // undefined
```

### Nested Objects & Arrays of Objects
```js
const company = {
  name: 'TechCorp',
  address: {
    city: 'Delhi',
    zip: '110001'
  },
  employees: [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
  ]
};
console.log({ company });
console.log('company.address.city:', company.address.city);
console.log('company.employees[1].name:', company.employees[1].name);
```

### Object Utility Methods
```js
const utilObj = { x: 1, y: 2 };
console.log('Object.keys(utilObj):', Object.keys(utilObj));
console.log('Object.values(utilObj):', Object.values(utilObj));
console.log('Object.entries(utilObj):', Object.entries(utilObj));
console.log('utilObj.hasOwnProperty("x"):', utilObj.hasOwnProperty('x'));
```

### Merging & Cloning Objects

#### Shallow Copy
```js
const o1 = { a: 1 };
const o2 = { b: 2 };
const merged = { ...o1, ...o2 };
console.log({ merged });
const clone = Object.assign({}, o1);
console.log({ clone });
```

#### Deep Copy (using JSON, for simple objects)
```js
const deep = { nested: { value: 5 } };
const deepClone = JSON.parse(JSON.stringify(deep));
deep.nested.value = 10;
console.log('deepClone.nested.value:', deepClone.nested.value); // 5
```

### Destructuring & Default Values
```js
const settings = { theme: 'dark', fontSize: 16 };
const { theme, fontSize, language = 'en' } = settings;
console.log({ theme, fontSize, language });
```

### Iteration

#### for...in (keys)
```js
const iterObj = { a: 1, b: 2 };
for (const key in iterObj) {
  if (Object.hasOwn(iterObj, key)) {
    console.log('key:', key, 'value:', iterObj[key]);
  }
}
```

#### Object.entries (keys & values)
```js
Object.entries(iterObj).forEach(([key, value]) => {
  console.log('entry:', key, value);
});
```

---

## Comparison Table: Object Features & Methods
| Feature/Method         | Description                                 | Example/Notes                       |
|-----------------------|---------------------------------------------|-------------------------------------|
| Literal               | Quickest way to create objects              | `{ a: 1 }`                          |
| Constructor           | `new Object()`                              | Rarely used                         |
| Object.create         | Create with prototype                       | `Object.create(proto)`              |
| Dot/Bracket Notation  | Access properties                           | `obj.x`, `obj['x']`                 |
| Symbol Key            | Unique, non-enumerable property             | `obj[Symbol('id')] = 1`             |
| Object.freeze         | Make object immutable                       | `Object.freeze(obj)`                |
| Object.seal           | Prevent adding/removing props               | `Object.seal(obj)`                  |
| Object.keys/values    | Get keys/values as array                    | `Object.keys(obj)`                  |
| Object.entries        | Get [key, value] pairs                      | `Object.entries(obj)`               |
| Object.assign/spread  | Shallow merge/clone                         | `{ ...a, ...b }`                    |
| JSON methods          | Deep clone (simple objects only)             | `JSON.parse(JSON.stringify(obj))`   |
| Destructuring         | Extract properties                          | `const {x} = obj`                   |
| for...in              | Iterate keys (own + inherited)              | Use `hasOwnProperty` to filter      |
| Object.hasOwn         | Check own property (ES2022+)                | `Object.hasOwn(obj, key)`           |

---

## Real-World Use Cases
- **Configuration objects:**
  ```js
  const config = { debug: true, apiUrl: '/api' };
  ```
- **Data modeling:**
  ```js
  const user = { id: 1, name: 'Alice', roles: ['admin', 'user'] };
  ```
- **Grouping related functions:**
  ```js
  const math = {
    add(a, b) { return a + b; },
    sub(a, b) { return a - b; }
  };
  ```
- **Mapping IDs to values:**
  ```js
  const lookup = { 1: 'one', 2: 'two' };
  ```
- **Encapsulation (module pattern):**
  ```js
  const counter = (function() {
    let count = 0;
    return {
      inc() { count++; },
      get() { return count; }
    };
  })();
  ```

---

## Key Takeaways
> - Use object literals for most cases.
> - Use dot notation for known keys, bracket for dynamic/special keys.
> - Use `Object.freeze`/`Object.seal` for immutability.
> - Arrow functions do not bind `this`—avoid as object methods.
> - Use spread or `Object.assign` for shallow copies; use libraries for deep cloning.
> - Use destructuring for cleaner code.
> - Always check for own properties in for...in loops.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> - Arrow functions do not bind `this`—do not use as object methods if you need `this`.
> - `Object.freeze`/`Object.seal` only affect the first level (shallow).
> - Using for...in on arrays iterates over indices as strings (not recommended).
> - Symbol properties are not included in `Object.keys`/`Object.entries`.
> - Deep cloning with JSON methods fails for functions, symbols, and non-JSON-safe values.

---

## Practice
**Try it yourself:**
- Create an object with a method that uses `this` and call it.
- Merge two objects using both `Object.assign` and the spread operator.
- Use destructuring to extract a property from an object and provide a default value.
- Iterate over an object's own properties and print keys and values.

**Quiz:**
```js
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;
console.log(obj.a);
// What does this print?
```

---

## Further Reading
- [MDN: Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [MDN: Object Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Jake Worth: Logging an Object in JavaScript](https://www.jakeworth.com/posts/logging-an-object/)
- [MDN: Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
- [MDN: Object.seal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)
- [MDN: Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [MDN: for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

---

# 11_function_and_parameter.js — JavaScript Functions and Parameters

**Learning Goals:**
- Declare and call functions with and without parameters.
- Understand return values and side effects.
- Use rest parameters and handle variable arguments.
- Work with object parameters and destructuring.
- Understand scope, closures, and hoisting.
- Know the differences between function types and parameter handling.

---

## Overview

Functions are reusable blocks of code that perform specific tasks. JavaScript functions can take parameters, return values, and support advanced features like rest parameters, closures, and destructuring. Understanding function types, parameter handling, and scope is essential for writing maintainable code.

---

## Syntax & Examples

### 1. Function Declaration (Named Function)
**Syntax:**
```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Alice'));
```
- Hoisted (can be called before definition)

### 2. Function Expression
**Syntax:**
```js
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3));
```
- Not hoisted (cannot be called before definition)

### 3. Arrow Function Expression
**Syntax:**
```js
const square = x => x * x;
console.log(square(4));
```
- No own `this` or `arguments`

### 4. Anonymous Function
**Syntax:**
```js
setTimeout(function() {
  console.log('Timeout!');
}, 1000);
```

### 5. Parameters and Arguments
- **Required parameters:**
  ```js
  function sum(a, b) { return a + b; }
  sum(1, 2); // 3
  ```
- **Optional parameters:**
  ```js
  function log(message, level) {
    if (level) {
      console.log(`[${level}] ${message}`);
    } else {
      console.log(message);
    }
  }
  log('Hello');
  log('Warning!', 'WARN');
  ```
- **Default parameters:**
  ```js
  function multiply(a, b = 2) {
    return a * b;
  }
  console.log(multiply(5)); // 10
  ```
- **Rest parameters:**
  ```js
  function sumAll(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
  }
  console.log(sumAll(1, 2, 3, 4)); // 10
  ```
- **Destructuring parameters:**
  ```js
  function printUser({ name, age }) {
    console.log(`${name} is ${age} years old.`);
  }
  printUser({ name: 'Bob', age: 30 });
  ```

### 6. Return Values and Side Effects
- **Return value:**
  ```js
  function double(x) { return x * 2; }
  console.log(double(4)); // 8
  ```
- **Side effect:**
  ```js
  function logMessage(msg) { console.log(msg); }
  logMessage('Hello!');
  ```

### 7. Scope and Closures
- **Function scope:**
  ```js
  function outer() {
    let outerVar = 'I am outer';
    function inner() {
      console.log(outerVar); // Can access outerVar
    }
    inner();
  }
  outer();
  ```
- **Closure:**
  ```js
  function makeCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  const counter = makeCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  ```

### 8. Hoisting
- **Function declarations are hoisted:**
  ```js
  console.log(foo()); // 'bar'
  function foo() { return 'bar'; }
  ```
- **Function expressions are not hoisted:**
  ```js
  // console.log(bar()); // Error
  const bar = function() { return 'baz'; };
  ```

---

## Comparison Table: Function Types
| Feature                | Declaration         | Expression           | Arrow Function      |
|------------------------|--------------------|----------------------|--------------------|
| Syntax                 | `function foo(){}` | `const foo = ...`    | `const foo = ...`  |
| Hoisted                | Yes                | No                   | No                 |
| `this` binding         | Dynamic            | Dynamic              | Lexical            |
| `arguments` object     | Yes                | Yes                  | No                 |
| Can be constructor     | Yes                | Yes                  | No                 |
| Use as method          | Yes                | Yes                  | Not recommended    |
| Use as callback        | Yes                | Yes                  | Yes                |

---

## Real-World Use Cases
- **Callbacks:**
  ```js
  [1, 2, 3].forEach(function(n) { console.log(n); });
  [1, 2, 3].forEach(n => console.log(n));
  ```
- **Event handlers:**
  ```js
  button.addEventListener('click', function() { alert('Clicked!'); });
  ```
- **Factory functions:**
  ```js
  function createUser(name) {
    return { name };
  }
  ```
- **Closures for private state:**
  ```js
  function secretHolder(secret) {
    return {
      getSecret: () => secret
    };
  }
  const holder = secretHolder('shh!');
  console.log(holder.getSecret());
  ```

---

## Key Takeaways
> - Use function declarations for reusable logic and when hoisting is needed.
> - Use function expressions and arrow functions for callbacks and inline logic.
> - Use default, rest, and destructuring parameters for flexible APIs.
> - Closures allow functions to remember their outer scope.
> - Arrow functions do not have their own `this` or `arguments`.

---

## Common Pitfalls & Warnings
> ⚠️ **Warning:**
> - Forgetting to return a value results in `undefined`.
> - Hoisting only applies to function declarations, not expressions.
> - Arrow functions are not suitable as constructors or methods needing dynamic `this`.
> - Be careful with parameter order: required, then optional/default, then rest.

---

## Practice
**Try it yourself:**
- Write a function that multiplies two numbers and returns the result.
- Use rest parameters to sum any number of arguments.
- Demonstrate closure by writing a function that returns another function.
- Use destructuring in function parameters.

**Quiz:**
```js
function foo(a, b = 2, ...rest) {
  return a + b + rest.length;
}
console.log(foo(1, 2, 3, 4));
// What does this print?
```


---

## Further Reading
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [MDN: Function parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

# 12_arrow_function.js — JavaScript Arrow Functions

**Learning Goals:**
- Use arrow function syntax for concise function expressions.
- Understand the difference in `this` binding between arrow and regular functions.
- Use arrow functions for callbacks and short functions.
- Know when **not** to use arrow functions (e.g., as methods or constructors).

---

## Overview

Arrow functions provide a shorter syntax for writing functions and do not have their own `this`, `arguments`, `super`, or `new.target` bindings. They are ideal for callbacks, array methods, and simple operations, but are not suitable for all use cases.

---

## Syntax & Examples

### Basic Syntax
- **Single parameter, implicit return:**
  ```js
  const square = x => x * x;
  console.log(square(5)); // 25
  ```
- **Multiple parameters:**
  ```js
  const add = (a, b) => a + b;
  console.log(add(2, 3)); // 5
  ```
- **No parameters:**
  ```js
  const greet = () => console.log('Hello!');
  greet(); // Hello!
  ```
- **Block body (explicit return):**
  ```js
  const sum = (a, b) => {
    const result = a + b;
    return result;
  };
  console.log(sum(2, 3)); // 5
  ```

### Arrow Functions and `this`
Arrow functions do **not** have their own `this`. They inherit `this` from the enclosing (lexical) scope.

```js
const obj = {
  value: 42,
  regular: function() { return this.value; },
  arrow: () => this.value
};
console.log(obj.regular()); // 42
console.log(obj.arrow());   // undefined (or window.value in browser)
```

**Use case: Preserving `this` in callbacks**
```js
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
new Timer(); // Correctly increments seconds
```

### Arrow Functions and `arguments`
Arrow functions do **not** have their own `arguments` object.
```js
function regular() {
  return arguments[0];
}
const arrow = () => arguments[0]; // ReferenceError: arguments is not defined
```

### Arrow Functions and Constructors
Arrow functions **cannot** be used as constructors and will throw an error if used with `new`.
```js
const ArrowPerson = (name) => { this.name = name; };
const p2 = new ArrowPerson('Bob'); // TypeError: ArrowPerson is not a constructor
```

### Arrow Functions and call/apply/bind
Arrow functions ignore `this` passed via `call`, `apply`, or `bind`.
```js
const obj = { num: 100 };
globalThis.num = 42;
const add = (a, b, c) => this.num + a + b + c;
console.log(add.call(obj, 1, 2, 3)); // 48 (uses globalThis.num, not obj.num)
```

### Arrow Functions in Array Methods
```js
const arr = [1, 2, 3];
const squares = arr.map(x => x * x);
console.log(squares); // [1, 4, 9]
```

### Arrow Functions in Promises and Callbacks
```js
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## When **Not** to Use Arrow Functions
- As object methods (if you need `this` to refer to the object)
- As constructors (with `new`)
- When you need the `arguments` object
- As generator functions (cannot use `function*` syntax)
- As event handlers if you need `this` to refer to the element

---

## Best Practices \& Common Pitfalls
- Use arrow functions for short, simple functions and callbacks.
- Do **not** use arrow functions as object methods or constructors.
- Remember that arrow functions do not have their own `this` or `arguments`.
- Prefer regular functions when you need dynamic `this` or access to `arguments`.
- Arrow functions are always anonymous (no `name` property unless assigned).

---

## Comparison Table: Arrow Functions vs Regular Functions

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

---

## Real-World Use Cases
- Array methods: `map`, `filter`, `reduce`, `forEach`
- Promise chains: `.then()`, `.catch()`, `.finally()`
- Event listeners (if you do not need `this`)
- Closures where you want to preserve the outer `this`

---

## Key Takeaways
> - Arrow functions are concise and inherit `this` from their enclosing scope.
> - Do not use arrow functions as object methods or constructors.
> - Arrow functions do not have their own `arguments` object.
> - Use arrow functions for callbacks, array methods, and simple logic.

---

## Common Pitfalls \& Warnings
> ⚠️ **Warning:**
> - Arrow functions do not have their own `this`, `arguments`, `super`, or `new.target`.
> - Do not use arrow functions as object methods if you need `this` to refer to the object.
> - Cannot be used as constructors or generators.
> - Cannot use `yield` inside arrow functions.

---

## Practice
**Try it yourself:**
- Convert a regular function to an arrow function.
- Write an arrow function that returns the square of a number.
- Use an arrow function in a `map` or `filter` call.
- Try using `this` inside an arrow function as an object method and observe the result.

**Quiz:**
```js
const obj = {
  value: 10,
  getValue: () => this.value
};
console.log(obj.getValue());
// What does this print?
```

---

## Further Reading
- [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

# 13_Immediately_Invoked_Function_Expressions_(IIFE).js — Immediately Invoked Function Expressions (IIFE)

**Learning Goals:**
- Understand what IIFEs are and why they are used in JavaScript.
- Learn the syntax for both named and anonymous IIFEs.
- Recognize use cases for IIFEs, such as scope isolation and immediate execution.
- Know best practices and common pitfalls when using IIFEs.

---

## Overview

An **Immediately Invoked Function Expression (IIFE)** is a function that is defined and executed immediately after its creation. IIFEs are commonly used to create isolated scopes, avoid polluting the global namespace, and execute code right away. They were especially important before ES6 introduced `let`, `const`, and modules, but are still useful for certain patterns.

---

## Syntax & Examples

### Classic IIFE Syntax
- **Anonymous IIFE:**
  ```js
  (function() {
    console.log('IIFE executed!');
  })();
  ```
- **Named IIFE:**
  ```js
  (function chai() {
    console.log('chai IIFE - DB CONNECTED');
  })();
  ```
- **Arrow Function IIFE:**
  ```js
  (() => {
    console.log('arrow IIFE - DB CONNECTED TWO');
  })();
  ```
- **Parameterized IIFE:**
  ```js
  ((name) => {
    console.log('arrow IIFE - DB CONNECTED TWO name:', name);
  })('hitesh');
  ```

### Why Parentheses?
- The parentheses around the function turn it from a declaration to an expression, allowing it to be invoked immediately.
- The final `()` invokes the function.

### IIFE with Return Value
```js
const result = (function() {
  return 42;
})();
console.log(result); // 42
```

### IIFE for Scope Isolation
```js
var x = 10;
(function() {
  var x = 20;
  console.log('Inner x:', x); // 20
})();
console.log('Outer x:', x); // 10
```

---

## Use Cases for IIFE
- **Scope isolation:** Prevents variables from leaking into the global scope.
- **Module pattern:** Encapsulates private data and exposes only what is needed.
- **Initialization:** Runs setup code once, immediately.
- **Avoiding variable hoisting issues:** Keeps temporary variables out of the global or parent scope.

---

## Best Practices \& Common Pitfalls
- Always wrap the function in parentheses to ensure it is treated as an expression.
- Use IIFEs for code that should run once and not pollute the outer scope.
- Prefer ES6 modules, `let`, and `const` for most modern code, but IIFEs are still useful for legacy code and certain patterns.
- Avoid using IIFEs for code that needs to be reused elsewhere.
- Be careful with semicolon insertion; always use a semicolon before an IIFE if it follows another statement.

---

## Comparison: IIFE vs Regular Function
| Feature         | IIFE                                 | Regular Function         |
|-----------------|--------------------------------------|-------------------------|
| Invocation      | Immediately after definition         | When called explicitly  |
| Scope           | Creates its own local scope          | Scope depends on usage  |
| Use case        | Initialization, isolation, modules   | Reusable logic          |
| Syntax          | (function(){...})() or (()=>{...})() | function foo() {...}    |

---

## Real-World Use Cases
- **jQuery plugin pattern:**
  ```js
  (function($) {
    // jQuery plugin code here
  })(jQuery);
  ```
- **Polyfills and shims:**
  ```js
  (function() {
    if (!Array.prototype.myMethod) {
      Array.prototype.myMethod = function() { /* ... */ };
    }
  })();
  ```
- **Configuration blocks:**
  ```js
  (function(config) {
    // Use config object
  })({ debug: true });
  ```

---

## Key Takeaways
> - IIFEs execute immediately after they are defined.
> - Useful for creating private scopes and avoiding global variable pollution.
> - Can be named or anonymous, and can accept parameters.
> - Commonly used in module patterns, initialization, and legacy code.
> - Prefer ES6 modules and block scoping for most modern code, but IIFEs are still valuable in some scenarios.

---

## Common Pitfalls \& Warnings
> ⚠️ **Warning:**
> - Forgetting the extra parentheses can result in a function declaration instead of an IIFE.
> - If an IIFE follows another statement, use a semicolon to avoid errors due to automatic semicolon insertion.
> - Avoid using IIFEs for reusable code.

---

## Practice
**Try it yourself:**
- Write an IIFE that prints your name.
- Create an IIFE that takes two numbers and prints their sum.
- Use an IIFE to create a private counter variable and expose only an increment function.

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
- Choose the right control flow construct for clarity and maintainability.

---

## Overview

Control flow statements determine the order in which code executes. JavaScript provides if/else, switch, and ternary operators for branching, as well as logical and comparison operators for complex conditions. Mastering these constructs is essential for writing clear, bug-free code.

---

## Syntax & Examples

### 1. if/else Statement
**When to use:**
- To execute code conditionally based on a boolean expression.

**Syntax:**
```js
if (condition) {
  // code block if true
} else if (otherCondition) {
  // code block if otherCondition is true
} else {
  // code block if none are true
}
```
**Example:**
```js
const age = 18;
if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}
```
**Best Practices:**
- Use braces `{}` even for single-line blocks for clarity.
- Keep conditions simple and readable.

---

### 2. switch Statement
**When to use:**
- To select one of many code blocks to execute based on the value of a variable.
- Useful for handling multiple discrete values.

**Syntax:**
```js
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block
}
```
**Example:**
```js
const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('It is an apple.');
    break;
  case 'banana':
    console.log('It is a banana.');
    break;
  default:
    console.log('Unknown fruit.');
}
```
**Best Practices:**
- Always include a `default` case.
- Use `break` to prevent fall-through unless intentional.

---

### 3. Ternary Operator
**When to use:**
- For concise conditional assignments or expressions.
- When you need a value based on a condition.

**Syntax:**
```js
condition ? exprIfTrue : exprIfFalse;
```
**Example:**
```js
const age = 20;
const status = age >= 18 ? 'adult' : 'minor';
console.log(status); // 'adult'
```
**Best Practices:**
- Use for simple conditions; avoid nesting ternaries for readability.

---

### 4. Logical Operators (&&, ||, !)
**When to use:**
- To combine multiple conditions or provide default values.

**Syntax:**
```js
if (a && b) { /* both must be true */ }
if (a || b) { /* either can be true */ }
if (!a) { /* a is false */ }
```
**Example:**
```js
const isLoggedIn = true;
const hasPermission = false;
if (isLoggedIn && hasPermission) {
  console.log('Access granted.');
} else {
  console.log('Access denied.');
}
```
**Best Practices:**
- Use parentheses to clarify complex logic.
- Short-circuiting can be used for default values: `const name = input || 'Guest';`

---

### 5. Nullish Coalescing Operator (??)
**When to use:**
- To provide a default value only when the left-hand side is `null` or `undefined` (not for other falsy values).

**Syntax:**
```js
const value = possiblyNull ?? defaultValue;
```
**Example:**
```js
let username = null;
let displayName = username ?? 'Anonymous';
console.log(displayName); // 'Anonymous'
```
**Best Practices:**
- Prefer `??` over `||` when you want to treat only `null`/`undefined` as missing.

---

### 6. Truthy and Falsy Values
**When to use:**
- To check if a value is considered true or false in a boolean context.

**Falsy values:** `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`
**Truthy values:** All other values (e.g., `'0'`, `[]`, `{}`, `'false'`)

**Example:**
```js
if ('') {
  console.log('This will not run.');
}
if ('hello') {
  console.log('This will run.');
}
```
**Best Practices:**
- Be explicit when checking for empty arrays/objects: `arr.length === 0`, `Object.keys(obj).length === 0`

---

### 7. Checking for Empty Arrays and Objects
**When to use:**
- To determine if a collection has any elements or properties.

**Example:**
```js
const arr = [];
if (arr.length === 0) {
  console.log('Array is empty');
}
const obj = {};
if (Object.keys(obj).length === 0) {
  console.log('Object is empty');
}
```
**Best Practices:**
- Use `Array.isArray()` to check if a variable is an array.
- For objects, use `Object.keys(obj).length` for emptiness.

---

## Comparison Table: JavaScript Control Flow Constructs

| Construct         | Use Case                        | Syntax Example                | Readability | Best For                |
|-------------------|---------------------------------|-------------------------------|-------------|------------------------|
| if/else           | General branching               | `if (a) {...} else {...}`     | High        | Most conditions         |
| switch            | Multiple discrete values        | `switch (x) {...}`            | Medium      | Many cases, enums      |
| ternary           | Inline conditional value        | `a ? b : c`                   | High        | Assignments, JSX       |
| logical operators | Combine/short-circuit logic     | `a && b`, `a || b`            | High        | Compound conditions     |
| nullish coalescing| Default for null/undefined      | `a ?? b`                      | High        | Optional/default values |

---

## Key Takeaways
> - Use if/else for most conditional logic.
> - Use switch for multiple discrete values.
> - Use ternary for concise value selection, not complex logic.
> - Use logical operators for combining conditions and defaulting.
> - Use nullish coalescing for defaulting only on null/undefined.
> - Always check for empty arrays/objects explicitly.

---

## Common Pitfalls \& Warnings
> ⚠️ **Warning:**
> - Using `==` can lead to unexpected type coercion. Always use `===` unless you have a specific reason.
> - Forgetting `break` in switch cases causes fall-through.
> - Ternary operators can reduce readability if overused or nested.
> - `||` treats all falsy values as missing; use `??` for null/undefined only.
> - Arrays and objects are always truthy, even if empty.

---

## Practice
**Try it yourself:**
- Write an if/else that checks if a number is positive, negative, or zero.
- Use a switch statement to print the name of a month given its number.
- Use a ternary operator to assign a status based on age.
- Use `??` to provide a default username.
- Check if an array or object is empty before processing.

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
- [MDN: Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

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

## Common Pitfalls \& Warnings
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

---

## DOM Manipulation in JavaScript

**Learning Goals:**
- Select and manipulate HTML elements using JavaScript
- Change text, styles, and attributes dynamically
- Understand the difference between single elements and collections
- Apply best practices for DOM scripting

---

### Overview
The Document Object Model (DOM) is a tree-like structure representing the HTML elements of a web page. JavaScript can interact with the DOM to read, modify, add, or remove elements, making web pages dynamic and interactive.

---

### Selecting Elements

#### By ID
```js
const title = document.getElementById('title');
```
- Returns the first element with the given id (should be unique).

#### By Class Name
```js
const headings = document.getElementsByClassName('heading');
for (const el of headings) {
  // do something with el
}
```
- Returns an HTMLCollection (array-like, not a true array).

#### By Tag Name
```js
const inputs = document.getElementsByTagName('input');
for (const input of inputs) {
  // do something with input
}
```
- Returns an HTMLCollection of all matching elements.

#### By Query Selector
```js
const firstH2 = document.querySelector('h2'); // first <h2>
const allH2 = document.querySelectorAll('h2'); // NodeList of all <h2>
allH2.forEach(el => { /* ... */ });
```
- `querySelector` returns the first match; `querySelectorAll` returns a NodeList (can use forEach).

---

### Reading and Changing Text Content
```js
// Read text
alert(title.textContent);

// Change text
change.textContent = "DOM learning on Chai aur code => changed by js";
```
- Use `.textContent` or `.innerText` to get/set the text inside an element.

---

### Changing Styles
```js
// Change font and color
change.style.fontFamily = "Arial, sans-serif";
change.style.color = "orange";

// Change background color for all inputs
for (const input of inputs) {
  input.style.backgroundColor = "orange";
}
```
- Use the `.style` property to set CSS styles. Property names are camelCase (e.g., `backgroundColor`).

---

### Looping Through Collections
- `getElementsByClassName` and `getElementsByTagName` return HTMLCollections (not true arrays, but iterable with `for...of`).
- `querySelectorAll` returns a NodeList (supports `forEach`).

**Example:**
```js
const allH2 = document.querySelectorAll('h2');
allH2.forEach(element => alert(element.textContent));
```

---

### DOM Traversal and Manipulation: Practical Examples (`dom2.js`)

This section demonstrates how to select parent and child elements, access their properties, loop through them, and navigate DOM relationships using code from `dom2.js`.

#### 1. Selecting Parent and Child Elements
```js
const parent = document.getElementsByClassName('parent'); // HTMLCollection
console.log(parent[0]); // First .parent element
console.log(parent[0].children); // HTMLCollection of child elements
console.log(parent[0].children[1]); // Second child element
```

#### 2. Looping Through Children and Logging Content
```js
for (let i = 0; i < parent[0].children.length; i++) {
    const element = parent[0].children[i];
    console.log(element.textContent);
}
```

#### 3. Changing Styles of Child Elements
```js
parent[0].children[1].style.color = "red"; // Change color of the second child
```

#### 4. Accessing First and Last Child Elements
```js
console.log(parent[0].firstElementChild.textContent); // First child
console.log(parent[0].lastElementChild.textContent); // Last child
```

#### 5. Navigating DOM Relationships
```js
const dayOne = document.querySelector('.day'); // First element with class 'day'
console.log(dayOne); // The element itself
console.log(dayOne.parentElement); // Its parent (.parent)
console.log(dayOne.nextElementSibling); // The next sibling element
```

#### 6. HTMLCollection vs NodeList
- **HTMLCollection**: Returned by `getElementsByClassName` and `.children`. Live collection (updates if DOM changes). Array-like, but not a true array.
- **NodeList**: Returned by `querySelectorAll`. Static collection (does not update if DOM changes). Supports `forEach` in modern browsers.

#### 7. Common Pitfalls
- Accessing `.children` on an HTMLCollection (like `parent.children`) is undefined; use `parent[0].children`.
- Always check if the element exists before accessing its properties to avoid errors.
- Indexing starts at 0 (e.g., `children[1]` is the second child).

#### 8. Real-World Use Cases
- Highlighting a specific day in a calendar or schedule.
- Dynamically updating or reading the content of a list or menu.
- Navigating and manipulating nested elements for interactive UIs.

---

### Common Pitfalls \& Best Practices
- **HTMLCollection vs NodeList:** Both are array-like, but only NodeList supports `forEach` in all browsers.
- **Single vs Multiple Elements:** `getElementById` and `querySelector` return a single element; others return collections.
- **Live vs Static Collections:** HTMLCollections are live (update as DOM changes); NodeLists from `querySelectorAll` are static.
- **Always check if an element exists** before accessing properties to avoid errors.
- **Use unique IDs** for elements to avoid unexpected results.
- **Use `textContent` for text, not `innerHTML`, unless you need to set HTML.**

---

### Real-World Use Cases
- Dynamically updating content (e.g., changing a heading after a user action)
- Highlighting form fields with errors
- Creating interactive lists or menus
- Changing styles based on user input

---

### Example: Putting It All Together
```js
// Select and update a heading
const title = document.getElementById('title');
title.textContent = "Updated by JavaScript!";
title.style.color = "blue";
title.style.fontFamily = "Verdana, sans-serif";

// Update all input backgrounds
const inputs = document.getElementsByTagName('input');
for (const input of inputs) {
  input.style.backgroundColor = "yellow";
}

// Alert all <h2> texts
const allH2 = document.querySelectorAll('h2');
allH2.forEach(h2 => alert(h2.textContent));
```

---

### Further Reading
- [MDN: Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN: Document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [MDN: Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN: HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [MDN: NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

---

## DOM Manipulation: Practical Examples (dom3.js & dom4.js)

### Example 1: Creating and Styling Elements Dynamically (dom3.js)

This example demonstrates how to create, style, and append elements to the DOM using JavaScript.

```js
/**
 * Create a styled div with a span and append to the document body
 */
const div = document.createElement('div')
console.log('div:', div)
div.className = 'main'
div.id = Math.random()
div.setAttribute('title', 'generate title')
div.style.backgroundColor = 'orange'
div.style.padding = '12px'
div.innerText = 'Chai aur code'

// Create a text node (not appended)
const addText = document.createTextNode('Chai aur code')
console.log('addText:', addText)

// Create a span, style it, and append to div
const span = document.createElement('span')
span.innerText = 'Chai aur code'
span.style.color = 'black'
div.appendChild(span)
console.log('span:', span)

document.body.appendChild(div)
console.log('==================================================================')
```

**Key Concepts:**
- `document.createElement(tagName)`: Creates a new element node of the given tag.
- `element.className`, `element.id`, `element.setAttribute()`: Set class, id, and other attributes.
- `element.style.property`: Set inline CSS styles.
- `element.innerText`: Set or get the text content of an element (renders as plain text).
- `document.createTextNode(text)`: Creates a text node (not HTML, just text).
- `element.appendChild(child)`: Appends a child node to the parent element.
- `console.log(variableName, variable)`: Always log variable names for clarity.

**Best Practices:**
- Use `createTextNode` for plain text to avoid HTML injection.
- Use `innerText` or `textContent` for text, `innerHTML` only if you need to insert HTML.
- Always label your console output for easier debugging.
- Use clear, descriptive variable names.

---

### Example 2: Dynamic List Manipulation Functions (dom4.js)

This file demonstrates several custom functions for manipulating a list (`<ul>` or `<ol>`) in the DOM. Each function is documented and uses best practices for clarity and safety.

#### 1. Adding List Items

```js
/**
 * Adds a language to the list using innerHTML (renders HTML if present in langName)
 * @param {string} langName - The language name to add
 */
function addlang(langName) {
  const newlang = document.createElement('li')
  newlang.innerHTML = langName
  document.querySelector('.language').appendChild(newlang)
  console.log('addlang - newlang:', newlang)
  console.log('==================================================================')
}
```
- Uses `innerHTML` to set the content, which can render HTML tags if present in `langName`.
- **Caution:** Only use `innerHTML` with trusted content to avoid XSS vulnerabilities.

```js
/**
 * Adds a language to the list using createTextNode (always plain text)
 * @param {string} langName - The language name to add
 */
function addOptilang(langName) {
  const newlang = document.createElement('li')
  newlang.appendChild(document.createTextNode(langName))
  document.querySelector('.language').appendChild(newlang)
  console.log('addOptilang - newlang:', newlang)
  console.log('==================================================================')
}
```
- Uses `createTextNode` to ensure only plain text is added (no HTML rendering).
- **Best Practice:** Prefer this method for user-generated or untrusted content.

#### 2. Editing List Items

```js
/**
 * Edits the language at a given position in the list
 * @param {string} langName - The new language name
 * @param {number} position - The 1-based position in the list
 */
function editlang(langName, position) {
  const lang = document.querySelector(`li:nth-child(${position})`)
  lang.innerHTML = langName
  console.log(`editlang - lang at position ${position}:`, lang)
  console.log('==================================================================')
}
```
- Selects the `<li>` at the given position and updates its content using `innerHTML`.

#### 3. Replacing List Items

```js
/**
 * Replaces the <li> at the given position with a new <li> containing the specified text.
 * @param {string} newText - The text content for the new <li>.
 * @param {number} position - The 1-based index of the <li> to replace.
 */
function replaceListItem(newText, position) {
  const oldLi = document.querySelector(`li:nth-child(${position})`)
  const newLi = document.createElement('li')
  newLi.textContent = newText
  oldLi.replaceWith(newLi)
  console.log(`replaceListItem - replaced <li> at position ${position} with:`, newLi)
  console.log('==================================================================')
}
```
- Creates a new `<li>` and replaces the old one at the specified position.
- Uses `textContent` for safe text insertion.

#### 4. Removing List Items

```js
/**
 * Removes the language at a given position in the list
 * @param {number} position - The 1-based position in the list
 */
function remove(position) {
  const lang = document.querySelector(`li:nth-child(${position})`)
  lang.remove()
  console.log(`remove - removed lang at position ${position}`)
  console.log('==================================================================')
}
```
- Removes the `<li>` at the specified position from the DOM.

---

### Summary Table: DOM Methods Used

| Method                      | Purpose                                      |
|-----------------------------|----------------------------------------------|
| createElement(tag)          | Create a new element node                    |
| createTextNode(text)        | Create a new text node                       |
| appendChild(node)           | Append a node as the last child              |
| setAttribute(name, value)   | Set an attribute on an element               |
| innerText / textContent     | Set or get plain text content                |
| innerHTML                   | Set or get HTML content (renders HTML)       |
| replaceWith(node)           | Replace an element with another node         |
| remove()                    | Remove an element from the DOM               |
| querySelector(selector)     | Select the first element matching selector   |

---

### Best Practices for DOM Manipulation
- Use `createTextNode` or `textContent` for user input to avoid XSS.
- Use `innerHTML` only for trusted content or when you need to insert HTML.
- Always check if elements exist before manipulating them to avoid errors.
- Use clear, descriptive function and variable names.
- Log variable names in console output for easier debugging.
- Use JSDoc comments for documenting functions.

---

### Real-World Use Cases
- Dynamically building lists, menus, or tables from data.
- Creating interactive UIs where elements are added, edited, or removed in response to user actions.
- Safely handling user input and updating the DOM without security risks.

---

## 16_Dom — DOM Manipulation in JavaScript

> **Note:** This section is based on files from the `/16_Dom` directory.

---

## Overview

The Document Object Model (DOM) is a tree-like structure representing the HTML elements of a web page. JavaScript can interact with the DOM to read, modify, add, or remove elements, making web pages dynamic and interactive.

---

## Selecting Elements

#### By ID
```js
const title = document.getElementById('title');
```
- Returns the first element with the given id (should be unique).

#### By Class Name
```js
const headings = document.getElementsByClassName('heading');
for (const el of headings) {
  // do something with el
}
```
- Returns an HTMLCollection (array-like, not a true array).

#### By Tag Name
```js
const inputs = document.getElementsByTagName('input');
for (const input of inputs) {
  // do something with input
}
```
- Returns an HTMLCollection of all matching elements.

#### By Query Selector
```js
const firstH2 = document.querySelector('h2'); // first <h2>
const allH2 = document.querySelectorAll('h2'); // NodeList of all <h2>
allH2.forEach(el => { /* ... */ });
```
- `querySelector` returns the first match; `querySelectorAll` returns a NodeList (can use forEach).

---

## Reading and Changing Text Content
```js
// Read text
alert(title.textContent);

// Change text
change.textContent = "DOM learning on Chai aur code => changed by js";
```
- Use `.textContent` or `.innerText` to get/set the text inside an element.

---

## Changing Styles
```js
// Change font and color
change.style.fontFamily = "Arial, sans-serif";
change.style.color = "orange";

// Change background color for all inputs
for (const input of inputs) {
  input.style.backgroundColor = "orange";
}
```
- Use the `.style` property to set CSS styles. Property names are camelCase (e.g., `backgroundColor`).

---

## Looping Through Collections
- `getElementsByClassName` and `getElementsByTagName` return HTMLCollections (not true arrays, but iterable with `for...of`).
- `querySelectorAll` returns a NodeList (supports `forEach`).

**Example:**
```js
const allH2 = document.querySelectorAll('h2');
allH2.forEach(element => alert(element.textContent));
```

---

## DOM Traversal and Manipulation: Practical Examples (`dom2.js`)

This section demonstrates how to select parent and child elements, access their properties, loop through them, and navigate DOM relationships using code from `dom2.js`.

#### 1. Selecting Parent and Child Elements
```js
const parent = document.getElementsByClassName('parent'); // HTMLCollection
console.log(parent[0]); // First .parent element
console.log(parent[0].children); // HTMLCollection of child elements
console.log(parent[0].children[1]); // Second child element
```

#### 2. Looping Through Children and Logging Content
```js
for (let i = 0; i < parent[0].children.length; i++) {
    const element = parent[0].children[i];
    console.log(element.textContent);
}
```

#### 3. Changing Styles of Child Elements
```js
parent[0].children[1].style.color = "red"; // Change color of the second child
```

#### 4. Accessing First and Last Child Elements
```js
console.log(parent[0].firstElementChild.textContent); // First child
console.log(parent[0].lastElementChild.textContent); // Last child
```

#### 5. Navigating DOM Relationships
```js
const dayOne = document.querySelector('.day'); // First element with class 'day'
console.log(dayOne); // The element itself
console.log(dayOne.parentElement); // Its parent (.parent)
console.log(dayOne.nextElementSibling); // The next sibling element
```

#### 6. HTMLCollection vs NodeList
- **HTMLCollection**: Returned by `getElementsByClassName` and `.children`. Live collection (updates if DOM changes). Array-like, but not a true array.
- **NodeList**: Returned by `querySelectorAll`. Static collection (does not update if DOM changes). Supports `forEach` in modern browsers.

#### 7. Common Pitfalls
- Accessing `.children` on an HTMLCollection (like `parent.children`) is undefined; use `parent[0].children`.
- Always check if the element exists before accessing its properties to avoid errors.
- Indexing starts at 0 (e.g., `children[1]` is the second child).

#### 8. Real-World Use Cases
- Highlighting a specific day in a calendar or schedule.
- Dynamically updating or reading the content of a list or menu.
- Navigating and manipulating nested elements for interactive UIs.

---

### Common Pitfalls \& Best Practices
- **HTMLCollection vs NodeList:** Both are array-like, but only NodeList supports `forEach` in all browsers.
- **Single vs Multiple Elements:** `getElementById` and `querySelector` return a single element; others return collections.
- **Live vs Static Collections:** HTMLCollections are live (update as DOM changes); NodeLists from `querySelectorAll` are static.
- **Always check if an element exists** before accessing properties to avoid errors.
- **Use unique IDs** for elements to avoid unexpected results.
- **Use `textContent` for text, not `innerHTML`, unless you need to set HTML.**

---

### Real-World Use Cases
- Dynamically updating content (e.g., changing a heading after a user action)
- Highlighting form fields with errors
- Creating interactive lists or menus
- Changing styles based on user input

---

### Example: Putting It All Together
```js
// Select and update a heading
const title = document.getElementById('title');
title.textContent = "Updated by JavaScript!";
title.style.color = "blue";
title.style.fontFamily = "Verdana, sans-serif";

// Update all input backgrounds
const inputs = document.getElementsByTagName('input');
for (const input of inputs) {
  input.style.backgroundColor = "yellow";
}

// Alert all <h2> texts
const allH2 = document.querySelectorAll('h2');
allH2.forEach(h2 => alert(h2.textContent));
```

---

### Further Reading
- [MDN: Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN: Document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [MDN: Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN: HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [MDN: NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

---

## DOM Manipulation: Practical Examples (dom3.js & dom4.js)

### Example 1: Creating and Styling Elements Dynamically (dom3.js)

This example demonstrates how to create, style, and append elements to the DOM using JavaScript.

```js
/**
 * Create a styled div with a span and append to the document body
 */
const div = document.createElement('div')
console.log('div:', div)
div.className = 'main'
div.id = Math.random()
div.setAttribute('title', 'generate title')
div.style.backgroundColor = 'orange'
div.style.padding = '12px'
div.innerText = 'Chai aur code'

// Create a text node (not appended)
const addText = document.createTextNode('Chai aur code')
console.log('addText:', addText)

// Create a span, style it, and append to div
const span = document.createElement('span')
span.innerText = 'Chai aur code'
span.style.color = 'black'
div.appendChild(span)
console.log('span:', span)

document.body.appendChild(div)
console.log('==================================================================')
```

**Key Concepts:**
- `document.createElement(tagName)`: Creates a new element node of the given tag.
- `element.className`, `element.id`, `element.setAttribute()`: Set class, id, and other attributes.
- `element.style.property`: Set inline CSS styles.
- `element.innerText`: Set or get the text content of an element (renders as plain text).
- `document.createTextNode(text)`: Creates a text node (not HTML, just text).
- `element.appendChild(child)`: Appends a child node to the parent element.
- `console.log(variableName, variable)`: Always log variable names for clarity.

**Best Practices:**
- Use `createTextNode` for plain text to avoid HTML injection.
- Use `innerText` or `textContent` for text, `innerHTML` only if you need to insert HTML.
- Always label your console output for easier debugging.
- Use clear, descriptive variable names.

---

### Example 2: Dynamic List Manipulation Functions (dom4.js)

This file demonstrates several custom functions for manipulating a list (`<ul>` or `<ol>`) in the DOM. Each function is documented and uses best practices for clarity and safety.

#### 1. Adding List Items

```js
/**
 * Adds a language to the list using innerHTML (renders HTML if present in langName)
 * @param {string} langName - The language name to add
 */
function addlang(langName) {
  const newlang = document.createElement('li')
  newlang.innerHTML = langName
  document.querySelector('.language').appendChild(newlang)
  console.log('addlang - newlang:', newlang)
  console.log('==================================================================')
}
```
- Uses `innerHTML` to set the content, which can render HTML tags if present in `langName`.
- **Caution:** Only use `innerHTML` with trusted content to avoid XSS vulnerabilities.

```js
/**
 * Adds a language to the list using createTextNode (always plain text)
 * @param {string} langName - The language name to add
 */
function addOptilang(langName) {
  const newlang = document.createElement('li')
  newlang.appendChild(document.createTextNode(langName))
  document.querySelector('.language').appendChild(newlang)
  console.log('addOptilang - newlang:', newlang)
  console.log('==================================================================')
}
```
- Uses `createTextNode` to ensure only plain text is added (no HTML rendering).
- **Best Practice:** Prefer this method for user-generated or untrusted content.

#### 2. Editing List Items

```js
/**
 * Edits the language at a given position in the list
 * @param {string} langName - The new language name
 * @param {number} position - The 1-based position in the list
 */
function editlang(langName, position) {
  const lang = document.querySelector(`li:nth-child(${position})`)
  lang.innerHTML = langName
  console.log(`editlang - lang at position ${position}:`, lang)
  console.log('==================================================================')
}
```
- Selects the `<li>` at the given position and updates its content using `innerHTML`.

#### 3. Replacing List Items

```js
/**
 * Replaces the <li> at the given position with a new <li> containing the specified text.
 * @param {string} newText - The text content for the new <li>.
 * @param {number} position - The 1-based index of the <li> to replace.
 */
function replaceListItem(newText, position) {
  const oldLi = document.querySelector(`li:nth-child(${position})`)
  const newLi = document.createElement('li')
  newLi.textContent = newText
  oldLi.replaceWith(newLi)
  console.log(`replaceListItem - replaced <li> at position ${position} with:`, newLi)
  console.log('==================================================================')
}
```
- Creates a new `<li>` and replaces the old one at the specified position.
- Uses `textContent` for safe text insertion.

#### 4. Removing List Items

```js
/**
 * Removes the language at a given position in the list
 * @param {number} position - The 1-based position in the list
 */
function remove(position) {
  const lang = document.querySelector(`li:nth-child(${position})`)
  lang.remove()
  console.log(`remove - removed lang at position ${position}`)
  console.log('==================================================================')
}
```
- Removes the `<li>` at the specified position from the DOM.

---

### Summary Table: DOM Methods Used

| Method                      | Purpose                                      |
|-----------------------------|----------------------------------------------|
| createElement(tag)          | Create a new element node                    |
| createTextNode(text)        | Create a new text node                       |
| appendChild(node)           | Append a node as the last child              |
| setAttribute(name, value)   | Set an attribute on an element               |
| innerText / textContent     | Set or get plain text content                |
| innerHTML                   | Set or get HTML content (renders HTML)       |
| replaceWith(node)           | Replace an element with another node         |
| remove()                    | Remove an element from the DOM               |
| querySelector(selector)     | Select the first element matching selector   |

---

### Best Practices for DOM Manipulation
- Use `createTextNode` or `textContent` for user input to avoid XSS.
- Use `innerHTML` only for trusted content or when you need to insert HTML.
- Always check if elements exist before manipulating them to avoid errors.
- Use clear, descriptive function and variable names.
- Log variable names in console output for easier debugging.
- Use JSDoc comments for documenting functions.

---

### Real-World Use Cases
- Dynamically building lists, menus, or tables from data.
- Creating interactive UIs where elements are added, edited, or removed in response to user actions.
- Safely handling user input and updating the DOM without security risks.

---

# 17_event — JavaScript DOM Events (dom1.js)

**Learning Goals:**
- Understand how to handle DOM events in JavaScript using `addEventListener` and event properties.
- Learn about event delegation, event propagation, preventing default actions, and removing elements dynamically.
- Apply best practices for event-driven programming in the browser.

---

## Overview

JavaScript allows you to make web pages interactive by responding to user actions (clicks, hovers, keypresses, etc.) through event handling. The `addEventListener` method is the standard way to attach event handlers to DOM elements. You can also control event propagation, prevent default browser actions, and manipulate the DOM in response to events.

---

## Syntax & Examples

### Adding Event Listeners
```js
const element = document.getElementById('myButton')
element.addEventListener('click', function (event) {
  // handle click
})
```
- The first argument is the event type (e.g., 'click', 'mouseover').
- The second argument is the callback function to run when the event occurs.

### The Event Object
- The callback receives an event object with properties and methods:
  - `event.target`: The element that triggered the event.
  - `event.type`: The type of event (e.g., 'click').
  - `event.preventDefault()`: Prevents the default browser action (e.g., following a link).
  - `event.stopPropagation()`: Stops the event from bubbling up to parent elements.

### Event Delegation
- Attach a single event listener to a parent element to handle events for its children.
```js
document.getElementById('list').addEventListener('click', function (e) {
  const li = e.target.closest('li')
  if (li && this.contains(li)) {
    li.remove()
  }
})
```
- Useful for dynamic lists where items may be added/removed.

### Preventing Default Actions
```js
const link = document.getElementById('google')
link.addEventListener('click', function (e) {
  e.preventDefault()
  console.log('clicked Google')
})
```
- Prevents the browser from navigating to the link's URL.

### Stopping Event Propagation
```js
document.getElementById('owl').addEventListener('click', function (e) {
  console.log('owl clicked-')
  e.stopPropagation()
})
```
- Prevents the event from bubbling up to parent elements (e.g., the `<ul>`).

### Removing Elements on Click
```js
const prayer = document.getElementById('prayer')
prayer.addEventListener('click', (e) => {
  const li = e.target.closest('li')
  if (li) li.remove()
})
```
- Removes the `<li>` containing the clicked image.

---

## Detailed Explanations from dom1.js

### 1. Owl Image Click
```js
const owl = document.getElementById('owl')
owl.onclick = function () {
  alert('owl image')
}
// Also:
document.getElementById('owl').addEventListener('click', function (e) {
  console.log('owl clicked-')
  e.stopPropagation()
}, false)
```
- Shows an alert when the owl image is clicked.
- Logs to the console and stops the event from bubbling up.

### 2. Japan Image Click
```js
const japan = document.getElementById('japan')
japan.addEventListener('click', function () {
  this.src = '...new image url...'
  alert('Japan image clicked!\n image changed')
})
```
- Changes the image source and shows an alert when clicked.
- `this` refers to the image element inside a regular function.

### 3. Photoshop Image Hover
```js
const photoshop = document.getElementById('photoshop')
const onPhotoshopHover = () => {
  alert('Hovered over photoshop image.')
}
photoshop.addEventListener('mouseover', onPhotoshopHover)
```
- Shows an alert when the mouse hovers over the image.

### 4. Body Click Timestamp
```js
const body = document.body
body.addEventListener('click', () => {
  console.log('body click timestamp:', Date.now())
}, false)
```
- Logs the current timestamp when the body is clicked.

### 5. Images List Click (Event Delegation)
```js
document.getElementById('images').addEventListener('click', function (e) {
  console.log('clicked inside the ul-')
}, false)
```
- Logs when any part of the `<ul id="images">` is clicked.

### 6. Google Link Click (Prevent Default)
```js
const google = document.getElementById('google')
google.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('clicked Google')
})
```
- Prevents navigation and logs the click.

### 7. Prayer Image Click (Remove Parent li)
```js
const prayer = document.getElementById('prayer')
prayer.addEventListener('click', (e) => {
  const li = e.target.closest('li')
  if (li) li.remove()
})
```
- Removes the `<li>` containing the clicked image.

### 8. Generic li Removal (Event Delegation)
```js
const imagesList = document.getElementById('images')
imagesList.addEventListener('click', function (e) {
  const li = e.target.closest('li')
  if (li && this.contains(li)) {
    li.remove()
  }
})
```
- Removes any `<li>` in the list when it is clicked (works for dynamically added items too).

---

## Best Practices & Common Pitfalls
- Use `addEventListener` instead of inline event handlers for flexibility and separation of concerns.
- Use regular functions (not arrow functions) when you need `this` to refer to the element.
- Use event delegation for lists or dynamic content to minimize the number of event listeners.
- Always call `preventDefault()` when you want to stop the browser's default action (e.g., links, forms).
- Use `stopPropagation()` to prevent parent handlers from running if needed.
- Always check if the element exists before manipulating it to avoid errors.

---

## Real-World Use Cases
- Interactive image galleries (removing images on click)
- Custom link behavior (preventing navigation)
- Dynamic lists (adding/removing items with event delegation)
- Logging user actions (timestamps, analytics)
- Handling hover, click, and other user interactions

---

## Summary Table: Event Methods & Properties Used

| Method/Property         | Purpose                                         |
|------------------------|-------------------------------------------------|
| addEventListener       | Attach an event handler to an element           |
| onclick                | Inline event handler (not recommended)          |
| event.target           | The element that triggered the event            |
| event.preventDefault() | Prevent default browser action                  |
| event.stopPropagation()| Stop event from bubbling up                     |
| closest(selector)      | Find closest ancestor matching selector         |
| remove()               | Remove an element from the DOM                  |
| this                   | Refers to the element in regular functions      |

---

## Further Reading
- [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN: Event Object](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [MDN: Event Delegation](https://javascript.info/event-delegation)
- [MDN: preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [MDN: stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)

---
