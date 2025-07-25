// ========================================
// JavaScript Strings - Methods and Properties
// ========================================

/**
 * Template Literals
 * Demonstrates modern string interpolation using backticks
 */

let name = "veenayak";
let repoCount = 50;

// Template literal with variable interpolation
console.log('Template literal:', `hello my name is ${name} and my repo count is ${repoCount}`);
console.log('Backticks example:', `Backticks`);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Access by Index
 * Demonstrates accessing individual characters in strings
 */

// Access first character (zero-indexed)
console.log('name[0]:', name[0]);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Constructors
 * Demonstrates different ways to create strings
 */

// String() constructor - creates a primitive string value
let userName = String("Veenayak");

// new String() constructor - creates a String object (not recommended)
let userGame = new String("Veenayak");

// Compare different string types
console.table([name, userName, userGame]);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Access String object prototype
console.log('userGame.__proto__:', userGame.__proto__);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Properties
 * Demonstrates built-in string properties
 */

// Length property
console.log('userGame.length:', userGame.length);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Methods - Case Conversion
 * Demonstrates methods for changing string case
 */

// Convert to uppercase
console.log('userGame.toUpperCase():', userGame.toUpperCase());
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Convert to lowercase
console.log('userGame.toLowerCase():', userGame.toLowerCase());
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Methods - Character Access
 * Demonstrates methods for accessing characters
 */

// Get character at specific index
console.log('userGame.charAt(2):', userGame.charAt(2));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Methods - Search and Index
 * Demonstrates methods for finding characters and substrings
 */

// Find index of first occurrence
console.log('userGame.indexOf("e"):', userGame.indexOf('e'));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Methods - Substring Extraction
 * Demonstrates methods for extracting parts of strings
 */

// Extract substring (does not accept negative indices)
const neu = userGame.substring(0, 4);
console.log('neu (substring 0,4):', neu);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Extract using slice (accepts negative indices)
const news = userGame.slice(-6, 4);
console.log('news (slice -6,4):', news);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Incorrect syntax demonstration
const newss = userGame[2, 4];
console.log('newss (incorrect syntax):', newss);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Methods - Whitespace and Cleaning
 * Demonstrates methods for cleaning strings
 */

// String with extra whitespace
const nam = "       veenayak        ";
console.log('nam (with spaces):', nam);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Remove whitespace from both ends
console.log('nam.trim():', nam.trim());
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Methods - Replacement
 * Demonstrates methods for replacing content
 */

// URL with encoded space
const url = "http://veenayak%20sirohi";

// Replace encoded space with hyphen
console.log('url.replace("%20","-"):', url.replace('%20', '-'));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Methods - Search and Check
 * Demonstrates methods for checking string content
 */

// Check if string contains substring
console.log('url.includes("sirohi"):', url.includes("sirohi"));
console.log('url.includes("hi"):', url.includes("hi"));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Methods - Prefix and Suffix
 * Demonstrates methods for checking string boundaries
 */

// Check if string starts with specific text
console.log('userGame.startsWith("Vee"):', userGame.startsWith("Vee"));
console.log('userGame.startsWith("vee"):', userGame.startsWith("vee"));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Check if string ends with specific text
console.log('userGame.endsWith("yak"):', userGame.endsWith("yak"));
console.log('userGame.endsWith("Yak"):', userGame.endsWith("Yak"));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Methods - Splitting and Joining
 * Demonstrates methods for breaking strings into arrays
 */

// Split string by space
const fullName = "Veenayak Sirohi";
console.log('fullName.split(" "):', fullName.split(" "));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Split string into individual characters
console.log('fullName.split(""):', fullName.split(""));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * String Methods - Repetition
 * Demonstrates methods for repeating strings
 */

// Repeat string multiple times
console.log('"Ha".repeat(3):', "Ha".repeat(3));
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Key Points:
 * - Use template literals for string interpolation
 * - String() creates primitives, new String() creates objects
 * - Strings are zero-indexed
 * - Most string methods return new strings (immutable)
 * - Include variable names in console output for clarity
 * - Be careful with string method syntax differences
 */

