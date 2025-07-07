/**
 * Demonstrates various loop constructs in JavaScript:
 * - Basic for loop with array
 * - For loop with condition
 * - Nested for loops (multiplication table)
 * - Iterating over arrays
 * - Usage of break and continue
 * - While, do-while, for...of, for...in, forEach, map, filter, reduce
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
console.log('%c==================================================================', 'color: green; font-weight: bold;');
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
console.log('%c==================================================================', 'color: green; font-weight: bold;');
/**
 * Nested for loops to demonstrate multiplication table
 */
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log('Multiplication:', i + ' * ' + j + ' =', i * j)
  }
}
console.log('%c==================================================================', 'color: green; font-weight: bold;');
/**
 * Iterating over an array of strings
 */
const myArray = ['flash', 'batman', 'superman']
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index]
  console.log('myArray element:', element)
}
console.log('%c==================================================================', 'color: green; font-weight: bold;');
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
console.log('%c==================================================================', 'color: green; font-weight: bold;');
/**
 * While loop demonstration: prints even numbers from 0 to 10
 */
let whileIndex = 0
while (whileIndex <= 10) {
  console.log('whileIndex value:', whileIndex)
  whileIndex = whileIndex + 2
}
console.log('%c==================================================================', 'color: green; font-weight: bold;');
/**
 * While loop to iterate over an array
 */
const heroesArray = ['flash', 'batman', 'superman']
let arrIndex = 0
while (arrIndex < heroesArray.length) {
  console.log('heroesArray element:', heroesArray[arrIndex])
  arrIndex = arrIndex + 1
}
console.log('%c==================================================================', 'color: green; font-weight: bold;');
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
console.log('%c==================================================================', 'color: green; font-weight: bold;');
/**
 * Demonstration of for...of loop with arrays
 */
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
  console.log('for...of array num:', num)
}
console.log('%c==================================================================', 'color: green; font-weight: bold;');
/**
 * Demonstration of for...of loop with strings
 */
const greetings = 'Hello world!'
for (const greet of greetings) {
  console.log('for...of string char:', greet)
}
console.log('%c==================================================================', 'color: green; font-weight: bold;');
/**
 * Demonstration of for...of loop with Map
 */
const map = new Map()
map.set('IN', 'India') // Duplicate key, will overwrite previous
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')
console.log('map:', map)
for (const [key, value] of map) {
  console.log('map key:', key, 'map value:', value)
}
console.log('%c==================================================================', 'color: green; font-weight: bold;');
/**
 * Attempting for...of with objects (will not work, objects are not iterable this way)
 */
const myObject = {
  game1: 'NFS',
  game2: 'Spiderman'
}
for (const [key, value] of Object.entries(myObject)) {
  console.log('object key:', key, 'object value:', value)
}
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of for...in loop with objects
 */
const myObject2 = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby',
  swift: 'swift by apple'
}
for (const key in myObject2) {
  console.log('for...in object:', key, 'shortcut is for', myObject2[key])
}
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of for...in loop with arrays
 */
const programming = ['js', 'rb', 'py', 'java', 'cpp']
for (const key in programming) {
  console.log('for...in array:', programming[key])
}
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of for...in loop with Map (not recommended, does not iterate map entries)
 */
for (const key in map) {
  console.log('for...in map key:', key)
}
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of forEach loop with arrays (function expression)
 */
const coding = ["js", "ruby", "java", "python", "cpp"]
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
]
coding.forEach(function (val) {
  console.log('forEach value:', val)
})
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of forEach loop with arrays (arrow function)
 */
coding.forEach((item) => {
  console.log('forEach item:', item)
})
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of forEach loop with arrays (named function)
 */
function printMe(item) {
  console.log('printMe item:', item)
}
coding.forEach(printMe)
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of forEach with item, index, and array
 */
coding.forEach((item, index, arr) => {
  console.log('forEach item:', item, 'index:', index, 'array:', arr)
})
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of forEach with array of objects
 */
myCoding.forEach((item) => {
  console.log('myCoding languageName:', item.languageName)
})
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of forEach returning undefined
 * @type {string[]}
 */
const coding2 = ["js", "ruby", "java", "python", "cpp"]
const valuesFromForEach = coding2.forEach((item) => {
  return item
})
console.log('valuesFromForEach (should be undefined):', valuesFromForEach)
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of filter vs forEach for array filtering
 * @type {number[]}
 */
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNums = myNums2.filter((num) => num > 4)
console.log('filteredNums (filter > 4):', filteredNums)
const filteredNumsForEach = []
myNums2.forEach((num) => {
  if (num > 4) {
    filteredNumsForEach.push(num)
  }
})
console.log('filteredNumsForEach (forEach > 4):', filteredNumsForEach)
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of filter with array of objects
 * @type {Array<{title: string, genre: string, publish: number, edition: number}>}
 */
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]
let userBooks = books.filter((bk) => bk.genre === 'History')
console.log('userBooks (genre === "History"):', userBooks)
userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === 'History')
console.log('userBooks (publish >= 1995 && genre === "History"):', userBooks)
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of map and chaining with map/filter
 * @type {number[]}
 */
const myNumbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const mappedNums = myNumbers3.map((num) => num + 10)
console.log('mappedNums (num + 10):', mappedNums)
const chainedNums = myNumbers3
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40)
console.log('chainedNums (map * 10, +1, filter >= 40):', chainedNums)
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of reduce
 * @type {number[]}
 */
const myNumsReduce = [1, 2, 3]
const myTotalReduce = myNumsReduce.reduce(function (acc, currval) {
  console.log('reduce acc:', acc, 'currval:', currval)
  return acc + currval
}, 0)
console.log('myTotalReduce (function):', myTotalReduce)
const myTotalReduceArrow = myNumsReduce.reduce((acc, curr) => acc + curr, 0)
console.log('myTotalReduceArrow (arrow):', myTotalReduceArrow)
console.log('%c==================================================================', 'color: green; font-weight: bold;');

/**
 * Demonstration of reduce with array of objects (shopping cart)
 * @type {Array<{itemName: string, price: number}>}
 */
const shoppingCart = [
  { itemName: 'js course', price: 2999 },
  { itemName: 'py course', price: 999 },
  { itemName: 'mobile dev course', price: 5999 },
  { itemName: 'data science course', price: 12999 },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log('priceToPay:', priceToPay)
console.log('%c==================================================================', 'color: green; font-weight: bold;');