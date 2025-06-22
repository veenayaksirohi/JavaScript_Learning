let score="33"

// The typeof operator shows that the initial type is a string.
console.log(typeof(score)) // "string"

// The Number() constructor converts the string "33" into the number 33.
console.log(typeof(Number(score))) // "number"

// Now, let's see what happens with a string that isn't a clean number.
score="33q"

console.log(typeof(score)) // "string"

// When JavaScript tries to convert "33q" to a number, it can't, so it returns NaN (Not a Number).
// An important quirk to remember is that the typeof NaN is actually "number".
console.log(Number(score),typeof(Number(score))) // Outputs: NaN 'number'

// When null is converted to a number, it becomes 0.
score=null

console.log(typeof(score)) // "object" (this is a famous JavaScript quirk)

console.log(Number(score),typeof(Number(score))) // Outputs: 0 'number'

// I've fixed a typo here: 'undifined' is now 'undefined'.
// When undefined is converted to a number, it becomes NaN.
score=undefined

console.log(typeof(score)) // "undefined"

console.log(Number(score),typeof(Number(score))) // Outputs: NaN 'number'

// Let's also consider booleans. When converting a boolean to a number, true becomes 1 and false becomes 0.
let isLoggedIn = true
console.log(Number(isLoggedIn), typeof(Number(isLoggedIn))) // Outputs: 1 'number'

// Now, let's try converting a purely alphabetical string.
score="veenayak"

console.log(typeof(score))

// Since "veenayak" cannot be parsed as a number, the conversion results in NaN.
console.log(Number(score),typeof(Number(score)))

// --- Conversion Notes ---
// When converting to a Number:
// "33"      => 33
// "33abc"   => NaN (Not a Number)
// ""        => 0
// true      => 1
// false     => 0
// null      => 0
// undefined => NaN