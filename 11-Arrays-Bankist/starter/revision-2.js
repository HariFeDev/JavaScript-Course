'use strict';
// MAP
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);
console.log(doubled);

// FILTER
const numbers = [1, 2, 3, 4];
const greater = numbers.filter((n) => n > 2);
console.log(greater);

// REDUCE 
const arr = [1, 2, 3];
const sum = arr.reduce((acc, cur) => {
  return acc + cur;
})
console.log(sum);

// FIND
const vals = [10, 20, 30];
const found = vals.find((v) => v > 15);
console.log(found);

// FIND INDEX
const index = vals.findIndex((v) => v > 15);
console.log(index);

// MAP
const nums2 = [5, 10, 15];
const triple = nums2.map((t) => {
  return t * 3
})
console.log(triple);

// FILTER
const greaterThanEight = nums2.filter((e) => e > 8);
console.log(greaterThanEight);

// REDUCE
const total = nums2.reduce((acc, cur) => acc + cur, 0);
console.log(total);

// Positive numbers
const movements = [200, -100, 300, -50];
const totalDeposits = movements.filter((p) => p > 0).reduce((acc, cur) => acc + cur, 0);
console.log(totalDeposits);

const withdrawals = movements.filter((withdrawal) => withdrawal < 0).reduce((acc, cur) => acc + Math.abs(cur), 0);
console.log(withdrawals);