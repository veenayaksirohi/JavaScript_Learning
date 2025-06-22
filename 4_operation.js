// --- Basic Arithmetic ---

// The unary negation operator (-) negates the value of a variable.
let value=3
let negvalue=-value
console.log(negvalue) // Outputs: -3

// --- String Concatenation ---

// The + operator is also used for string concatenation.
let str1="hello"
let str2=" veenayak"
let str3 = str1+str2
console.log(str3) // Outputs: "hello veenayak"

// --- Tricky Type Coercion with '+' ---

// When the + operator is used with a string and a number, JavaScript converts the number to a string and concatenates them.
// The evaluation happens from left to right.

// '1' is a string, so 2 is converted to '2'. Result is '1' + '2' = "12".
console.log('1'+2)

// 1 is a number, but '2' is a string. So 1 is converted to '1'. Result is '1' + '2' = "12".
console.log(1+"2")

// '1' is a string. So '1' + 2 becomes "12". Then "12" + 2 becomes "122".
console.log('1'+2+2)

// 1 + 2 is evaluated first, which is 3 (number). Then 3 + "2" is evaluated. The number 3 is converted to a string '3'. Result: "32".
console.log(1+2+"2")

