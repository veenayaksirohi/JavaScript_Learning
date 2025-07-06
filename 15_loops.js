/**
 * Demonstrates various loop constructs in JavaScript:
 * - Basic for loop with array
 * - For loop with condition
 * - Nested for loops (multiplication table)
 * - Iterating over arrays
 * - Usage of break and continue
 *
 * @file 15_loops.js
 */

/**
 * Basic for loop to iterate over an array
 */
const array = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < array.length; i++) {
  const element = array[i]
  console.log('array element:', element)
}

/**
 * For loop from 0 to 10, demonstrates skipping output for a specific value
 */
for (let i = 0; i <= 10; i++) {
  const element = i
  if (element === 5) {
    // Skipping output for 5 (example of conditional logic)
    continue
  }
  console.log('for loop element:', element)
}

/**
 * Nested for loops to demonstrate multiplication table
 */
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    // Uncomment to see multiplication table:
    // console.log('Multiplication:', i + ' * ' + j + ' =', i * j)
  }
}

/**
 * Iterating over an array of strings
 */
const myArray = ['flash', 'batman', 'superman']
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index]
  console.log('myArray element:', element)
}

/**
 * Demonstration of break and continue in loops
 * Prints values from 1 to 20, skips 5 with continue
 */
for (let index = 1; index <= 20; index++) {
  if (index === 5) {
    console.log('Detected 5 (continue):', index)
    continue
  }
  console.log('Value of index:', index)
}

/**
 * While loop demonstration: prints even numbers from 0 to 10
 */
let whileIndex = 0
while (whileIndex <= 10) {
  console.log('whileIndex value:', whileIndex)
  whileIndex = whileIndex + 2
}

/**
 * While loop to iterate over an array
 */
const heroesArray = ['flash', 'batman', 'superman']
let arrIndex = 0
while (arrIndex < heroesArray.length) {
  console.log('heroesArray element:', heroesArray[arrIndex])
  arrIndex = arrIndex + 1
}

/**
 * Do-while loop demonstration: executes at least once
 */
let score = 11
// This will print once because do-while always runs at least once
// even if the condition is false after the first iteration

do {
  console.log('Score is:', score)
  score++
} while (score <= 10)

/**
 * Demonstration of for...of loop with arrays
 */
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
  // Uncomment to print each number:
  // console.log('for...of array num:', num)
}

/**
 * Demonstration of for...of loop with strings
 */
const greetings = 'Hello world!'
for (const greet of greetings) {
  // Uncomment to print each character:
  // console.log('for...of string char:', greet)
}

/**
 * Demonstration of for...of loop with Map
 */
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India') // Duplicate key, will overwrite previous

// Uncomment to print the entire map:
// console.log('map:', map)

for (const [key, value] of map) {
  // Uncomment to print each key-value pair:
  // console.log('map key:', key, 'map value:', value)
}

/**
 * Attempting for...of with objects (will not work, objects are not iterable this way)
 */
const myObject = {
  game1: 'NFS',
  game2: 'Spiderman'
}
// for (const [key, value] of myObject) {
//   // This will throw an error: myObject is not iterable
//   // console.log('object key:', key, 'object value:', value)
// }