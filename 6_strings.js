let name="veenayak"

let repoCount=50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)
console.log(`Backticks`)

console.log("name[0]:", name[0])

// String() constructor - creates a primitive string value
let userName=String("Veenayak")

// new String() constructor - creates a String object (not recommended for primitive strings)
let userGame= new String("Veenayak")

// console.table shows the difference: userName is a string primitive, userGame is a String object
console.table([name,userName,userGame])

// Accessing the String object's prototype to see available methods and properties.
console.log("userGame.__proto__:", userGame.__proto__)

// .length property: Returns the number of characters in the string.
console.log("userGame.length:", userGame.length)
// .toUpperCase() method: Returns a new string with all characters converted to uppercase.
console.log("userGame.toUpperCase():", userGame.toUpperCase())
// .charAt(index) method: Returns the character at the specified index.
console.log("userGame.charAt(2):", userGame.charAt(2))
// .indexOf('substring') method: Returns the index of the first occurrence of the specified substring.
console.log("userGame.indexOf('e'):", userGame.indexOf('e'))

// .substring(start, end) method: Extracts characters from index 'start' up to (but not including) index 'end'.
// It does not accept negative indices.
const neu =userGame.substring(0,4)
console.log("neu (substring 0,4):", neu)

// .slice(start, end) method: Similar to substring, but it CAN accept negative indices.
// A negative index counts from the end of the string.
const news=userGame.slice(-6,4)
console.log("news (slice -6,4):", news)

// This is not the correct syntax for getting a substring.
// The comma operator here causes `[2,4]` to evaluate to just `4`.
// So, this line is equivalent to `userGame[4]`, which returns only the character at that index.
const newss=userGame[2,4]
console.log("newss (incorrect syntax):", newss)

// .trim() method: Removes whitespace from both ends of a string (beginning and end)
// This is useful for cleaning up user input or data that may have extra spaces
const nam="       veenayak        "
console.log("nam (with spaces):", nam) // Shows the string with leading and trailing spaces
console.log("nam.trim():", nam.trim()) // Shows the string with spaces removed from both ends

// .replace(searchValue, replaceValue) method: Replaces the first occurrence of a specified value with another value
// This is commonly used for URL encoding/decoding, text formatting, and data cleaning
const url="http://veenayak%20sirohi"
console.log("url.replace('%20','-'):", url.replace('%20','-')) // Replaces '%20' (URL encoded space) with a hyphen '-'

// .includes(searchString) method: Returns true if a string contains a specified substring, false otherwise
// This is useful for checking if certain text exists within a larger string
console.log("url.includes('sirohi'):", url.includes("sirohi")) // Returns true because "sirohi" is found in the URL
console.log("url.includes('hi'):", url.includes("hi")) // Returns true because "hi" is found within "sirohi"

// Additional String Methods Examples

// .toLowerCase() method: Returns a new string with all characters converted to lowercase
console.log("userGame.toLowerCase():", userGame.toLowerCase()) // "veenayak"

// .startsWith(searchString) method: Returns true if a string begins with a specified string
console.log("userGame.startsWith('Vee'):", userGame.startsWith("Vee")) // true
console.log("userGame.startsWith('vee'):", userGame.startsWith("vee")) // false (case sensitive)

// .endsWith(searchString) method: Returns true if a string ends with a specified string
console.log("userGame.endsWith('yak'):", userGame.endsWith("yak")) // true
console.log("userGame.endsWith('Yak'):", userGame.endsWith("Yak")) // false (case sensitive)

// .split(separator) method: Splits a string into an array of substrings based on a separator
const fullName = "Veenayak Sirohi"
console.log("fullName.split(' '):", fullName.split(" ")) // ["Veenayak", "Sirohi"] - splits on space
console.log("fullName.split(''):", fullName.split("")) // ["V", "e", "e", "n", "a", "y", "a", "k", " ", "S", "i", "r", "o", "h", "i"] - splits into individual characters

// .repeat(count) method: Returns a new string with the original string repeated a specified number of times
console.log("'Ha'.repeat(3):", "Ha".repeat(3)) // "HaHaHa"

