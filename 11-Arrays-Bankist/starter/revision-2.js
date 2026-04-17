'use strict'
console.log('Hello');

const nums = [1, 2, 3, 4];

// Map
const doubled = nums.map((num) => num * 2);
console.log(doubled);

// Filter
const fil = nums.filter((v) => v > 2)
console.log(fil);

// Reduce
const total = nums.reduce((acc, cur) => acc + cur, 0)
console.log(total);

// Find
const lessThenOne = nums.find((one) => one > 3);
console.log(lessThenOne);

// FindIndex
const findIndex = nums.findIndex((i) => i > 3);
console.log(findIndex);

const movements = [200, -100, 300, -50];

// Deposits
const deposits = movements.filter((deposit) => deposit > 0);
console.log(deposits);

// Total Deposits
const totalDeposits = deposits.reduce((acc, cur) => acc + cur, 0)
console.log(totalDeposits);

// withdraws
const withdraws = movements.filter((withdraw) => withdraw < 0);
console.log(withdraws);

// Total Withdrawls
const totlalWidthdraws = Math.abs(withdraws.reduce((acc, cur) => acc + cur, 0));
console.log(totlalWidthdraws);