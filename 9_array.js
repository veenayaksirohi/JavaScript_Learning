// ========================================
// JavaScript Arrays - Methods and Operations
// ========================================

/**
 * Array Creation and Basic Operations
 * Demonstrates creating and accessing arrays
 */

// Array of numbers
const arr = [1, 2, 3, 4, 5];

// Array of superhero names
const heors = ['shaktiman', 'naagraj', 'doga'];

// Access first element (zero-indexed)
console.log('heors[0]:', heors[0]);

// Get array length
console.log('heors.length:', heors.length);

/**
 * Array Modification Methods
 * Demonstrates adding and removing elements
 */

// Add element to beginning of array
arr.unshift(9);

// Remove first element from array
arr.shift();

/**
 * Array Search Methods
 * Demonstrates finding elements in arrays
 */

// Check if element exists in array
console.log('arr.includes(9):', arr.includes(9));

// Find index of element
console.log('arr.indexOf(3):', arr.indexOf(3));

/**
 * Array Conversion Methods
 * Demonstrates converting arrays to strings
 */

// Join array elements into string
const narr = arr.join();

// Display array and joined string
console.log('arr:', arr);
console.log('narr:', narr);

// Display array with label
console.log('A arr:', arr);

/**
 * Array Extraction Methods
 * Demonstrates extracting portions of arrays
 */

// Extract portion using slice (non-destructive)
const sli = arr.slice(1, 3);
console.log('sli:', sli);

// Display array after slice (unchanged)
console.log('B arr:', arr);

// Extract portion using splice (destructive)
const spi = arr.splice(1, 3);
console.log('spi:', spi);

// Display array after splice (modified)
console.log('arr after splice:', arr);

/**
 * Array Combination Methods
 * Demonstrates combining arrays in different ways
 */

// Arrays of Marvel and DC heroes
const marvel_heors = ['thor', 'ironman', 'spiderman'];
const dc_heros = ['superman', 'flash', 'batman'];

// Add entire array as single element
marvel_heors.push(dc_heros);
console.log('marvel_heors after push:', marvel_heors);

// Access nested array
console.log('marvel_heors[3]:', marvel_heors[3]);

// Remove last element
marvel_heors.pop();

// Combine arrays using concat (non-destructive)
const all_heros = marvel_heors.concat(dc_heros);
console.log('all_heros:', all_heros);

// Combine arrays using spread operator (modern approach)
const all_new_heros = [...marvel_heors, ...dc_heros];
console.log('all_new_heros:', all_new_heros);

/**
 * Advanced Array Methods
 * Demonstrates complex array operations
 */

// Nested array example
const andther_arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
console.log('andther_arr:', andther_arr);

// Flatten nested array completely
const real_andther_arrr = andther_arr.flat(Infinity);
console.log('real_andther_arrr:', real_andther_arrr);

/**
 * Array Utility Methods
 * Demonstrates utility functions for arrays
 */

// Check if value is array
console.log('Array.isArray("veenayak"):', Array.isArray("veenayak"));

// Create array from string
console.log('Array.from("veenayak"):', Array.from("veenayak"));

// Attempt to create array from object
console.log('Array.from({name: "veenayak"}):', Array.from({name: "veenayak"}));

// Create array from set of values
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log('Array.of(score1, score2, score3):', Array.of(score1, score2, score3));

/**
 * Key Points:
 * - Arrays are zero-indexed
 * - slice() is non-destructive, splice() is destructive
 * - push() adds to end, unshift() adds to beginning
 * - pop() removes from end, shift() removes from beginning
 * - Spread operator (...) is modern way to combine arrays
 * - Include variable names in console output for clarity
 * - flat() can flatten nested arrays to any depth
 */