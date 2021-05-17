//Operators

//---------------Arithmetical---------------

/* Regular: * + - / , also % for the remainder and ** for power of a number.
The binary plus + concatenates strings. And if any of the operands is a string, the other one is
converted to string too: */

// String concatenation, binary +

let s = "my" + "string";
console.log(s); // mystring
console.log("1" + 2); // '12', string
console.log(2 + "1"); // '21', string
console.log(2 + 2 + "1"); // "41" and not "221"

// Subtraction and division:

console.log(2 - "1"); // 1
console.log("6" / "2"); // 3
console.log("6" * "5"); // 30

// Numeric conversion, unary +

/* The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do
anything to numbers. But if the operand is not a number, the unary plus converts it into a
number. */

// No effect on numbers
let x = 1;
console.log(+x); // 1
let y = -2;
console.log(+y); // -2
// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0

let apples = "2";
let oranges = "3";
// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5
// the longer variant
console.log( Number(apples) + Number(oranges) ); // 5

// Operator Precedence

/*
Precedence        Name          Sign
   16          unary plus         +
   16          unary negation     -
   14          multiplication     *
   14          division           /
   13          addition           +
   13          subtraction        -
   3           assignment         = 
*/

//---------------Assignment Operator---------------

let x1 = 2 * 2 + 1;
console.log( x1 ); // 5

// chain assignments:
let a, b, c;
a = b = c = 2 + 2;
console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4

//The assignment operator "=" returns a value

let a1 = 1;
let b1 = 2;
let c1 = 3 - (a1 = b1 + 1);
console.log( a1 ); // 3
console.log( c1 ); // 0

//---------------Reminder %---------------

console.log( 5 % 2 ); // 1 is a remainder of 5 divided by 2
console.log( 8 % 3 ); // 2 is a remainder of 8 divided by 3
console.log( 6 % 3 ); // 0 is a remainder of 6 divided by 3

//---------------Exponentiation **---------------

console.log( 2 ** 2 ); // 4 (2 * 2)
console.log( 2 ** 3 ); // 8 (2 * 2 * 2)
console.log( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

//The operator works for non-integer numbers as well.

console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root, that's maths)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

//---------------Increment/decrement---------------

//Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.