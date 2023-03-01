## Symbols for JavaScript Operators:
Arithmetic Operators: + (addition), - (subtraction), * (multiplication), / (division), % (modulus), ++ (increment), -- (decrement).

Assignment Operators: = (simple assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment), %= (modulus assignment), <<= (left shift assignment), >>= (right shift assignment), >>>= (unsigned right shift assignment), &= (bitwise AND assignment), ^= (bitwise XOR assignment), |= (bitwise OR assignment).

Comparison Operators: == (equality), === (strict equality), != (inequality), !== (strict inequality), < (less than), > (greater than), <= (less than or equal to), >= (greater than or equal to).

Logical Operators: && (logical AND), || (logical OR), ! (logical NOT).

Bitwise Operators: & (bitwise AND), | (bitwise OR), ^ (bitwise XOR), ~ (bitwise NOT), << (left shift), >> (right shift), >>> (unsigned right shift).

## Javascript Operator Examples
let x = 10 + 15; // x is 25
let y = 20 - 10; // y is 10

let a = 5;
a += 13; // equivalent to a = a + 13; a is now 18
let b = 10;
b /= 2; // equivalent to b = b / 2; b is now 5


let p = 5;
let q = 10;
p == 5; // true
q === "10"; // false

let a = 5;
let b = 10;
if (a > 0 && b < 15) {
  console.log("Both conditions are true.");
}
if (a > 0 || b < 0) {
  console.log("At least one condition is true.");
}
if (!(a > 0)) {
  console.log("The condition is not true.");
}

let a = 5; // binary 0101
let b = 10; // binary 1010
a & b; // binary 0000 (0 in decimal)
a | b; // binary 1111 (15 in decimal)

## Question 3
1, 8, 15