'use strict';
// Slice()
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(1, 2));
console.log(arr.slice(1, -2));
console.log(arr);

// splice()
const arr2 = arr.slice();
console.log(arr2.splice(1, 2));

// reverse
console.log(arr.reverse());
console.log(arr);

// concat
const arr3 = [13, 12, 15];
console.log(arr.concat(arr3));

// join
console.log(arr.join('-'));

// split
const str = 'js is the best language';
console.log(str.split(' '));
console.log(str);

// forEach
arr3.forEach(function (value, index, arr) {
  console.log(`${index}: ${value} -> ${arr}`);
})

// forEach sets
const a = new Set([
  'hari',
  23,
  'jonas'
])

a.forEach(function (v, i, a) {
  console.log(v, i, a);
})

// ForEach Maps data structure

const b = new Map();
b.set('name', 'hari');
b.set(1, 'kk');
b.set('age', 24);
console.log(b);

b.forEach(function (v, i, m) {
  console.log(v, i, m);
})