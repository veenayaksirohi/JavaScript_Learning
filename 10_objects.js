// ========================================
// JavaScript Objects - Comprehensive Guide
// ========================================

/**
 * Object Creation and Property Access
 * Demonstrates object literal syntax and different ways to access properties
 */

// Create object using object literal syntax (recommended approach)
let obj = {
    name: 'veenayak',
    age: 22,
    location: 'hapur',
    email: 'veena@edv.com'
};

// Access properties using dot notation
console.log('obj.name:', obj.name);

// Access properties using bracket notation (useful for dynamic property names)
console.log('obj["name"]:', obj['name']);

/**
 * Symbols as Object Properties
 * Symbols are unique identifiers that can be used as object property keys
 */
const sum = Symbol('key1');

// Reassign object with Symbol property using computed property syntax
obj = {
    name: 'veenayak',
    [sum]: 'mykey1', // Use bracket notation for Symbol properties
    age: 22,
    location: 'hapur',
    email: 'veena@edv.com'
};

// Access Symbol property using bracket notation
console.log('obj[sum]:', obj[sum]);

// Check data type of Symbol property value
console.log('typeof obj[sum]:', typeof obj[sum]);

/**
 * Object Property Access Patterns
 * Demonstrate different ways to access object properties
 */
console.log('obj.name (dot notation):', obj.name);
console.log('obj["age"] (bracket notation):', obj['age']);

/**
 * Object Property Enumeration
 * Show that Symbol properties are not enumerable in normal property access
 */
console.log('Object.keys(obj):', Object.keys(obj));
console.log('Object.getOwnPropertySymbols(obj):', Object.getOwnPropertySymbols(obj));

/**
 * Object Immutability with Object.freeze()
 * Demonstrates how to make objects immutable
 */

// Create function expression for greeting
const greeting = function() {
    console.log('hello');
};

// Add function as property to object BEFORE freezing
obj.greeting = greeting;

// Add method that uses 'this' to access object properties (BEFORE freezing)
obj.greetingWithName = function() {
    console.log(`hello, ${this.name}`); // Use template literal with ${} syntax
};

// Modify object property before freezing
obj['age'] = 25;
console.log('obj after age modification:', obj);

// Freeze object to make it immutable
Object.freeze(obj);

// Attempt to modify property after freezing (will be ignored in non-strict mode)
obj['age'] = 24;
console.log('obj after freeze attempt:', obj);

/**
 * Calling Object Methods
 * Demonstrate calling functions stored as object properties
 */

// Call function property (works because it was added before freezing)
console.log('Calling obj.greeting():');
obj.greeting();

// Call method to demonstrate 'this' keyword usage
console.log('Calling obj.greetingWithName():');
obj.greetingWithName();

// Show final object with all properties and methods
console.log('Final obj with all properties:', obj);

/**
 * Object Constructor vs Object Literal
 * Demonstrates different ways to create objects
 */

// Using Object constructor (less common, not recommended)
let tinder = new Object();
console.log('tinder (Object constructor):', tinder);

// Reassigning to object literal syntax (recommended approach)
tinder = {};
console.log('tinder (object literal):', tinder);

// Adding properties to object
tinder.id = 1;
tinder.name = 'sam';
tinder.isLoggedIn = false; // Use camelCase for property names

console.log('tinder with properties:', tinder);

/**
 * Nested Objects
 * Demonstrates how to create and access nested objects
 */
let reguser = {
    email: 'veen@ff.vom',
    fullname: {
        userFullname: {
            firstname: 'veenayak',
            lastname: 'sirohi'
        }
    }
};

// Accessing nested object properties using dot notation
console.log('reguser.fullname.userFullname:', reguser.fullname.userFullname);
console.log('reguser.fullname.userFullname.firstname:', reguser.fullname.userFullname.firstname);

/**
 * Object Reassignment with Quoted Properties
 * Demonstrates object reassignment with quoted property names
 */
reguser = {
    email: 'veen@ff.vom',
    'fullname': {
        'userFullname': {
            'firstname': 'veenayak',
            'lastname': 'sirohi'
        }
    }
};

// Accessing nested object properties after reassignment
console.log('reguser after reassignment:', reguser);
console.log('reguser.fullname.userFullname:', reguser.fullname.userFullname);
console.log('reguser.fullname.userFullname.firstname (dot notation):', reguser.fullname.userFullname['firstname']);

// Demonstrating bracket notation for nested property access
console.log('reguser nested bracket access:', reguser['fullname']['userFullname']['firstname']);

/**
 * Object Concatenation Methods
 * Demonstrates different ways to combine objects
 */

// Creating objects to concatenate
const obj1 = { 1: 'a', 2: 'b', 3: 'c' };
const obj2 = { 4: 'a', 5: 'b', 6: 'c' };

console.log('obj1:', obj1);
console.log('obj2:', obj2);

// Method 1: Using Object.assign() to merge objects
const obj3 = Object.assign({}, obj1, obj2);
console.log('obj3 (using Object.assign):', obj3);

// Method 2: Using spread operator (...) to merge objects
const obj4 = { ...obj1, ...obj2 };
console.log('obj4 (using spread operator):', obj4);

// Method 3: Using Object.assign() with additional properties
const obj5 = Object.assign({}, obj1, obj2, { 7: 'd', 8: 'e' });
console.log('obj5 (Object.assign with additional properties):', obj5);

// Method 4: Using spread operator with additional properties
const obj6 = { ...obj1, ...obj2, 7: 'd', 8: 'e' };
console.log('obj6 (spread operator with additional properties):', obj6);

/**
 * Arrays of Objects
 * Demonstrates working with arrays containing object elements
 */

// Create array of user objects
const users = [
    {
        id: 1,
        email: 'h@gmail.com'
    },
    {
        id: 2,
        email: 'h@gmail.com'
    },
    {
        id: 3,
        email: 'h@gmail.com'
    }
];

// Access object properties within array elements
console.log('users[1].email:', users[1].email);

/**
 * Object Utility Methods
 * Demonstrates built-in Object methods for property manipulation
 */

// Display object and its properties
console.log('tinder object:', tinder);

// Get array of object property names
console.log('Object.keys(tinder):', Object.keys(tinder));

// Get array of object property values
console.log('Object.values(tinder):', Object.values(tinder));

// Get array of [key, value] pairs
console.log('Object.entries(tinder):', Object.entries(tinder));

// Check if object has specific property
console.log('tinder.hasOwnProperty("name"):', tinder.hasOwnProperty('name'));

/**
 * Key Points:
 * - Object.freeze() makes objects immutable
 * - Methods must be added before freezing
 * - The 'this' keyword refers to the object containing the method
 * - Symbol properties are not enumerable with Object.keys()
 * - Template literals use ${} syntax for variable interpolation
 * - Use object literal syntax {} instead of new Object()
 * - Always use camelCase for property names (isLoggedIn, not IsLoggedIn)
 * - Use meaningful and consistent property names for nested objects
 * - Quoted property names are valid but not required for valid identifiers
 * - Use bracket notation for dynamic property access or when property names contain special characters
 * - Bracket notation can be chained for nested object access: obj['prop1']['prop2']
 * - Object.assign() and spread operator (...) are preferred methods for object concatenation
 * - Arrays can contain objects as elements, accessed using index notation
 * - Object.keys(), Object.values(), and Object.entries() provide different views of object data
 * - hasOwnProperty() checks if an object has a specific property
 */

/**
 * Object Destructuring
 * Demonstrates ES6 object destructuring syntax for extracting object properties
 */

// Create course object for destructuring examples
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Access object property using bracket notation
console.log('course["courseInstructor"]:', course["courseInstructor"]);

// Basic object destructuring - extract property with same name
let {courseInstructor} = course;
console.log('courseInstructor (destructured):', courseInstructor);

// Object destructuring with property renaming - extract property with different variable name
let {courseInstructor: instructor} = course;
console.log('instructor (renamed from courseInstructor):', instructor);

/**
 * Object Destructuring Examples Summary:
 * - Basic destructuring: let {propertyName} = object
 * - Renamed destructuring: let {propertyName: newVariableName} = object
 * - Destructuring extracts properties and assigns them to variables
 * - Useful for clean, readable code when working with object properties
 * - Can be combined with default values and nested destructuring
 */