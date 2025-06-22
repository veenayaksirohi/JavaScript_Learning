// --- Comparisons with null ---
// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log("null > 0:", null > 0);       // false (0 > 0)
console.log("null == 0:", null == 0);      // false (special case for equality)
console.log("null >= 0:", null >= 0);     // true (0 >= 0)

// --- Comparisons with undefined ---
// undefined will always give false in comparisons because when converted to a number it becomes NaN.
console.log("undefined > 0:", undefined > 0);  // false
console.log("undefined == 0:", undefined == 0); // false
console.log("undefined >= 0:", undefined >= 0);// false


// --- Strict vs. Loose Equality ---

// `==` (Loose Equality): Converts the operands to the same type before making the comparison.
// Here, the string '2' is converted to the number 2, so it returns true.
console.log("'2' == 2:", '2' == 2);

// `===` (Strict Equality): Checks for both value and type equality without any type conversion.
// Since '2' is a string and 2 is a number, their types are different, so it returns false.
console.log("'2' === 2:", '2' === 2);