// ========================================
// JavaScript Comparisons - Equality and Relational Operators
// ========================================

/**
 * Comparisons with null
 * Demonstrates how null behaves in different comparison contexts
 */

// Relational operators convert null to 0 for comparison
console.log('null > 0:', null > 0);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Equality check (==) has special behavior with null
console.log('null == 0:', null == 0);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

// Relational operators convert null to 0 for comparison
console.log('null >= 0:', null >= 0);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Comparisons with undefined
 * Demonstrates how undefined behaves in comparisons
 */

// Undefined converts to NaN in comparisons, always returns false
console.log('undefined > 0:', undefined > 0);
console.log('%c==================================================================', 'color: green; font-weight: bold;')
console.log('undefined == 0:', undefined == 0);
console.log('%c==================================================================', 'color: green; font-weight: bold;')
console.log('undefined >= 0:', undefined >= 0);
console.log('%c==================================================================', 'color: green; font-weight: bold;')

/**
 * Strict vs Loose Equality
 * Demonstrates the difference between == and === operators
 */

// Loose equality (==): Converts operands to same type before comparison
console.log("'2' == 2:", '2' == 2);

// Strict equality (===): Checks both value and type without conversion
console.log("'2' === 2:", '2' === 2);

/**
 * Comparison Behavior Summary
 * 
 * null comparisons:
 * - null > 0: false (0 > 0)
 * - null == 0: false (special case)
 * - null >= 0: true (0 >= 0)
 * 
 * undefined comparisons:
 * - All comparisons return false (converts to NaN)
 * 
 * Equality operators:
 * - == (loose): Performs type coercion
 * - === (strict): No type coercion
 */

/**
 * Key Points:
 * - Use === for equality comparisons (recommended)
 * - null converts to 0 in relational comparisons
 * - undefined converts to NaN in all comparisons
 * - Include variable names in console output for clarity
 * - Be aware of type coercion in loose equality
 */