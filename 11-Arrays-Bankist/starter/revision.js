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

// map()
const temperatures = [20, 25, 30, 35];
console.log(temperatures.map((temp) => {
  return temp = temp * 9 / 5 + 32
}))

// filter()
const transactions = [200, -100, 300, -50, 400];
console.log(transactions.filter((debit) => debit < 0))

// reduce()
const bills = [100, 200, 300, 400];
console.log(bills.reduce((acc, curr) => acc + curr, 0))

// find()
const users = [
  { name: "Hari", age: 24 },
  { name: "Arjun", age: 28 },
  { name: "Ragnar", age: 30 }
];

console.log(users.find((user) => user.name === 'Arjun' && user.age === 28))


// forEach()

const arraY = [1, 2, 3, 4, 5];

arraY.forEach(function (value, index, arr) {
  console.log(value * 3);
});

const players = [
  {
    name: 'hari',
    score: 13
  },
  {
    name: 'jonas',
    score: 23
  }
];

const newPlayers = {};

players.forEach(function (v, i, arr) {
  console.log(v, i, arr);
  newPlayers[`${v.name}`] = v.score;
})

console.log(newPlayers);

// Map()

// 1
const nameArr = ['hello', 'world'];
console.log(nameArr.map((word) => word.toUpperCase()));

// 2

const userS = [
  {
    name: 'Jonas',
    age: 13,
    friends: ['a', 'b', 'c']
  },
  {
    name: 'Jessie',
    age: 23,
    friends: ['d', 'e', 'f']
  },
  {
    name: 'steven',
    age: 35,
    friends: ['g', 'h', 'i']
  },
]
console.log(userS);

userS.map((value) => {
  console.log(value);
  value.popularityScore = value.friends.length * value.age;
})

console.log(userS);

// Filter
// 1
const numbers = [3, 7, 2, 9, 1, 5];
console.log(numbers.filter((num) => num > 4));

// 2
const ab = ['hari', 'sam', 'mom', 'pop'];

console.log(ab.filter((v) => v.split('').reverse().join('') === v));