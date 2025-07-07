// ========================================
// JavaScript Dates - Creation and Manipulation
// ========================================

/**
 * Date Creation and Basic Operations
 * Demonstrates creating and working with Date objects
 */

// Create current date and time
let myDate = new Date();

/**
 * Date String Representations
 * Demonstrates different ways to format dates as strings
 */

// Standard detailed string representation
console.log('myDate.toString():', myDate.toString());
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Readable date-only format
console.log('myDate.toDateString():', myDate.toDateString());
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Locale-specific date and time format
console.log('myDate.toLocaleString():', myDate.toLocaleString());
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Check type of Date object
console.log('Type of myDate:', typeof myDate);

/**
 * Creating Specific Dates
 * Demonstrates creating dates with specific values
 */

// Create date with year, month, day (months are 0-indexed)
let myCreatedDate = new Date(2023, 0, 23);
console.log('myCreatedDate (YYYY, M, D):', myCreatedDate.toDateString());

// Create date with year, month, day, hours, minutes
let myCreatedDateWithTime = new Date(2023, 0, 23, 5, 3);
console.log('myCreatedDateWithTime (with time):', myCreatedDateWithTime.toLocaleString());

/**
 * Creating Dates from Strings
 * Demonstrates parsing date strings
 */

// Create date from YYYY-MM-DD format
let myCreatedDateFromString1 = new Date("2023-01-14");
console.log('myCreatedDateFromString1 (YYYY-MM-DD):', myCreatedDateFromString1.toLocaleString());

// Create date from MM-DD-YYYY format (US-centric)
let myCreatedDateFromString2 = new Date("01-14-2023");
console.log('myCreatedDateFromString2 (MM-DD-YYYY):', myCreatedDateFromString2.toLocaleString());

/**
 * Timestamps
 * Demonstrates working with timestamps (milliseconds since epoch)
 */

// Get current timestamp
let myTimeStamp = Date.now();
console.log('myTimeStamp (ms since epoch):', myTimeStamp);

// Get timestamp of specific date
console.log('myCreatedDate.getTime() (ms since epoch):', myCreatedDate.getTime());

// Convert current timestamp to seconds
console.log('Date.now() in seconds:', Math.floor(Date.now() / 1000));

/**
 * Getting Date Components
 * Demonstrates extracting individual parts of dates
 */

// Create new date for component extraction
let newDate = new Date();
console.log('newDate:', newDate);

// Get month (add 1 because getMonth() is 0-indexed)
console.log('newDate.getMonth() + 1:', newDate.getMonth() + 1);

// Get day of week (0 = Sunday, 6 = Saturday)
console.log('newDate.getDay():', newDate.getDay());

// Get full year
console.log('newDate.getFullYear():', newDate.getFullYear());

/**
 * Custom Date Formatting
 * Demonstrates advanced date formatting with options
 */

// Format date with custom options
let customDate = newDate.toLocaleString('default', {
    weekday: "long", // e.g., "Monday"
    year: "numeric",
    month: "long",
    day: "numeric"
});

console.log('Custom formatted date:', customDate);

/**
 * Key Points:
 * - Date constructor creates Date objects
 * - Months are 0-indexed (0 = January, 11 = December)
 * - Timestamps are milliseconds since Unix Epoch
 * - Date objects are mutable
 * - Include variable names in console output for clarity
 * - Use toLocaleString() for user-friendly formatting
 */