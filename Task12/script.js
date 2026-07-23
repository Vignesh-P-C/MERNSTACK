// Predefined values for the compound interest formula
// A = P(1 + r/n)^(nt)

const principal = 100000;      // P - initial amount invested
const rate = 0.1447142425;     // r - annual interest rate (~14.47%)
const timesPerYear = 1;        // n - number of times interest is compounded per year
const years = 3;               // t - number of years

// Compound interest formula
const amount = principal * Math.pow((1 + rate / timesPerYear), timesPerYear * years);
const compoundInterest = Math.round(amount - principal);

console.log(`The compound interest after ${years} years is: ${compoundInterest}`);