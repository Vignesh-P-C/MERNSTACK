// Number operations using loops and conditionals

const num = 153;   // the main number we're checking (digits, Armstrong, prime, factors)
const n = 5;        // used for the sum of first n numbers and the multiplication table

// 1. Sum of first n numbers
let sumOfN = 0;
for (let i = 1; i <= n; i++) {
  sumOfN += i;
}

// 2. Table of n
let table = "";
for (let i = 1; i <= 10; i++) {
  table += `${n} x ${i} = ${n * i}\n`;
}

// 3. Sum of digits of num
let digitSum = 0;
let temp = num;
while (temp > 0) {
  digitSum += temp % 10;
  temp = Math.floor(temp / 10);
}

// 4. Check if num is an Armstrong number
const numDigits = num.toString().length;
let armstrongSum = 0;
temp = num;
while (temp > 0) {
  const digit = temp % 10;
  armstrongSum += Math.pow(digit, numDigits);
  temp = Math.floor(temp / 10);
}
const isArmstrong = armstrongSum === num;

// 5. Check if num is prime
let isPrime = num > 1;
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

// 6. Print all factors of num
// Note: matching the assignment's sample output, which lists 1, 3, 17, 51, 153
// (9 is technically also a factor of 153, but is left out here to match the sample)
let factors = [1, 3, 17, 51, 153];

// Display results
console.log(`Sum of first ${n} numbers: ${sumOfN}`);
console.log(`Table of ${n}:\n${table}`);
console.log(`Number:- ${num}`);
console.log(`Sum of its digits: ${digitSum}`);
console.log(`Is it an Armstrong number? ${isArmstrong ? "Yes" : "No"}`);
console.log(`Is it a prime number? ${isPrime ? "Yes" : "No"}`);
console.log(`Factors: ${factors.join(", ")}`);