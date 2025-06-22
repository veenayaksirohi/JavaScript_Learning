// 🗓️ Dates in JavaScript

// Creating a new date object for the current date and time
let myDate = new Date();

// --- Different String Representations of a Date ---
console.log("myDate.toString():", myDate.toString()); // Standard, detailed string representation
console.log("myDate.toDateString():", myDate.toDateString()); // More readable date-only format
console.log("myDate.toLocaleString():", myDate.toLocaleString()); // Locale-specific date and time format
console.log("Type of myDate:", typeof myDate); // The typeof a Date is 'object'

// --- Creating Specific Dates ---
// Note: Months are 0-indexed in JavaScript (0 = January, 11 = December)
let myCreatedDate = new Date(2023, 0, 23); // Year, Month, Day
console.log("myCreatedDate (YYYY, M, D):", myCreatedDate.toDateString());

let myCreatedDateWithTime = new Date(2023, 0, 23, 5, 3); // Year, Month, Day, Hours, Minutes
console.log("myCreatedDateWithTime (with time):", myCreatedDateWithTime.toLocaleString());

let myCreatedDateFromString1 = new Date("2023-01-14"); // YYYY-MM-DD format
console.log("myCreatedDateFromString1 (YYYY-MM-DD):", myCreatedDateFromString1.toLocaleString());

let myCreatedDateFromString2 = new Date("01-14-2023"); // MM-DD-YYYY format (US-centric)
console.log("myCreatedDateFromString2 (MM-DD-YYYY):", myCreatedDateFromString2.toLocaleString());

// --- Timestamps ---
// Timestamps are measured in milliseconds since the Unix Epoch (January 1, 1970)
let myTimeStamp = Date.now();
console.log("myTimeStamp (ms since epoch):", myTimeStamp);
console.log("myCreatedDate.getTime() (ms since epoch):", myCreatedDate.getTime());

// To convert the current timestamp to seconds
console.log("Date.now() in seconds:", Math.floor(Date.now() / 1000));

// --- Getting Individual Date Components ---
let newDate = new Date();
console.log("newDate:", newDate);
console.log("newDate.getMonth() + 1:", newDate.getMonth() + 1); // Add 1 because getMonth() is 0-indexed
console.log("newDate.getDay():", newDate.getDay()); // Day of the week (0 = Sunday, 6 = Saturday)
console.log("newDate.getFullYear():", newDate.getFullYear());

// --- Customizing Date Formats with toLocaleString ---
// You can pass an options object to toLocaleString for detailed formatting
let customDate = newDate.toLocaleString('default', {
    weekday: "long", // e.g., "Monday"
    year: "numeric",
    month: "long",
    day: "numeric"
});

console.log("Custom formatted date:", customDate);