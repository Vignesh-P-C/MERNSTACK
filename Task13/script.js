// Check whether a number is even or odd using an if-else statement

const number1 = 5;              // first number to check
const number2 = 10;             // second number to check
const remainder1 = number1 % 2; // remainder of number1 divided by 2
const remainder2 = number2 % 2; // remainder of number2 divided by 2

if (remainder1 === 0) {
  console.log(`The number ${number1} is even.`);
} else {
  console.log(`The number ${number1} is odd.`);
}

if (remainder2 === 0) {
  console.log(`The number ${number2} is even.`);
} else {
  console.log(`The number ${number2} is odd.`);
}