'use strict';

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