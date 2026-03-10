'use strict';

// Array methods
// 1- 7min
const arr = [10, 20, 30, 40, 50];
console.log(arr.slice(1, 4));
console.log(arr);

const removeArr = arr.splice(2, 1);
console.log(removeArr);
console.log(arr);

// 2 - 2min
const words = ["JavaScript", "is", "fun"];
console.log(words.reverse().join(' '));

// 4 -4min
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(function (value) {
  console.log(value);
  sum += value;
});
console.log(sum);

// 5- 4min
const numbers_1 = [1, 2, 2, 3, 4, 4, 5];
const duplicateNum = new Set(numbers_1);
console.log([...duplicateNum]);

// Bonus
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2).join('-'));

// Map Method
// 1
const prices = [100, 200, 300, 400];
const a = prices.map((price) => price += price * 0.1).join('-');
console.log(a);

// 2
const numbers_ = [1, 2, 3, 4, 5, 6];
const taskResult = numbers_.slice(1, numbers_.length - 1).map((doubled) => doubled * doubled).reverse();
// console.log(numbers_.slice(1, numbers_.length - 1));
console.log(taskResult);

// 3
const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];

arr4.concat(arr5).map((two) => two * 2).forEach(function (value, index) {
  console.log(`Number ${index + 1}: ${value}`);
})

// filter + map
// 1
const ages = [5, 12, 17, 18, 24, 32];

const adultAges = ages.filter((adult) => {
  return adult >= 18
})
console.log(adultAges);

const adultAgesString = adultAges.map((str) => {
  return `Adult: ${str}`
})

console.log(adultAgesString);

// 2
const prices_2 = [100, 200, 300];
const b = prices_2.map((price) => price += price * 0.18)
console.log(b);

const c = b.reduce((acc, curr) => {
  return acc + curr
}, 0)
console.log(c);

// 3
const numbers_4 = [5, 12, 8, 130, 44];
const greaterThanTen = numbers_4.filter((num) => num > 10);
console.log(greaterThanTen);

const d = greaterThanTen.map((double) => double * 2)
console.log(d);

const e = d.reduce((acc, curr) => {
  return acc + curr
}, 0)
console.log(e);