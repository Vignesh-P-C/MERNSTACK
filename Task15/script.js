// Dummy array used to test all three functions
const numbers = [4, 8, 2, 11, 6, 7, 10];

// 1. Regular function declaration - finds the maximum number
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 2. Anonymous function expression - calculates the sum of all elements
const findSum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// 3. Arrow function - counts the number of odd numbers
const countOdds = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
};

// Display results
console.log(`Maximum number: ${findMax(numbers)}`);
console.log(`Sum of all elements: ${findSum(numbers)}`);
console.log(`Count of odd numbers: ${countOdds(numbers)}`);