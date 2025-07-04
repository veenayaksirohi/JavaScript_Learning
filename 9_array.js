// Array of numbers
const arr = [1, 2, 3, 4, 5];

// Array of superhero names
const heors = ['shaktiman', 'naagraj', 'doga'];

// Print the first element of the heors array
console.log('heors[0]:', heors[0]); // Output: 'shaktiman'

// Print the length of the heors array
console.log('heors.length:', heors.length); // Output: 3

// Add 9 to the beginning of the arr array
arr.unshift(9);
// Remove the first element from the arr array
arr.shift();

// Check if 9 is included in arr
console.log('arr.includes(9):', arr.includes(9)); // Output: false

// Find the index of 3 in arr
console.log('arr.indexOf(3):', arr.indexOf(3)); // Output: 2

// Join array elements into a string, separated by commas
const narr = arr.join();

// Print the arr array
console.log('arr:', arr); // Output: [1, 2, 3, 4, 5]
// Print the joined string
console.log('narr:', narr); // Output: '1,2,3,4,5'

// Print arr with label 'A'
console.log('A arr:', arr); // Output: A arr: [1, 2, 3, 4, 5]

// Slice: get elements from index 1 to 2 (not including 3)
const sli = arr.slice(1, 3);
console.log('sli:', sli); // Output: [2, 3]
// Print arr after slice (unchanged)
console.log('B arr:', arr); // Output: B arr: [1, 2, 3, 4, 5]

// Splice: remove 3 elements starting from index 1
const spi = arr.splice(1, 3);
console.log('spi:', spi); // Output: [2, 3, 4]
// arr is now modified: [1, 5]
console.log('arr after splice:', arr); // Output: [1, 5]

// --- Array Combination and Mutating Methods ---

// Arrays of Marvel and DC heroes
const marvel_heors = ['thor', 'ironman', 'spiderman'];
const dc_heros = ['superman', 'flash', 'batman'];

// Add the entire dc_heros array as a single element to marvel_heors
marvel_heors.push(dc_heros);
console.log('marvel_heors after push:', marvel_heors); // Output: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// Access the nested dc_heros array
console.log('marvel_heors[3]:', marvel_heors[3]); // Output: [ 'superman', 'flash', 'batman' ]

// Remove the last element (the dc_heros array) from marvel_heors
marvel_heors.pop();

// Concatenate marvel_heors and dc_heros (does not mutate original arrays)
const all_heros = marvel_heors.concat(dc_heros);
console.log('all_heros:', all_heros); // Output: [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Merge arrays using the ES6 spread operator (preferred modern way)
const all_new_heros = [...marvel_heors, ...dc_heros];
console.log('all_new_heros:', all_new_heros); // Output: [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// --- Advanced Array Methods ---

// Nested array example
const andther_arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
console.log('andther_arr:', andther_arr); // Output: [1, 2, 3, [4, 5, [6, 7, [8, 9]]]]

// Flatten the nested array to a single level
const real_andther_arrr = andther_arr.flat(Infinity);
console.log('real_andther_arrr:', real_andther_arrr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Check if a value is an array
console.log('Array.isArray("veenayak"):', Array.isArray("veenayak")); // Output: false

// Create an array from a string (each character becomes an element)
console.log('Array.from("veenayak"):', Array.from("veenayak")); // Output: ['v', 'e', 'e', 'n', 'a', 'y', 'a', 'k']

// Attempt to create an array from an object (will result in an empty array unless the object is array-like or iterable)
console.log('Array.from({name: "veenayak"}):', Array.from({name: "veenayak"})); // Output: []

// Create an array from a set of values
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log('Array.of(score1, score2, score3):', Array.of(score1, score2, score3)); // Output: [100, 200, 300]