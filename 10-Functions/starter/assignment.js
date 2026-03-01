'use strict'
console.log('-----------Assignment-----------');

// Function accepting CallBack function
// 1
const transform = function (str, fn) {
  // console.log(`${fn(str)}`);
  return `${fn(str)}`
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

console.log(transform('javascript is fun', upperFirstWord));

// 2
const processNumbers = function (arr, fn) {
  // your code
  console.log(arr);
  console.log(fn);
  const doubleNum = []
  // console.log(arr.forEach(fn));
  for (const a of arr) {
    console.log(fn(a));
    doubleNum.push(fn(a));
  }
  return doubleNum
};

const double = function (num) {
  return num * 2;
};

console.log(processNumbers([1, 2, 3], double));

// 3
const greetUser = function (name, fn) {
  // your code
  // console.log(name, fn);
  return `${fn(name)}`
};

const morningGreeting = function (name) {
  return `Good morning, ${name}!`;
};

const eveningGreeting = function (name) {
  return `Good evening, ${name}!`;
};

console.log(greetUser('Hari', morningGreeting));
console.log(greetUser('Hari', eveningGreeting));


const sayHi = function () {
  console.log('hi');
};

const execute = function (fn) {
  return fn();
};

console.log(execute(sayHi));

// ----------- Function Returning Functions
// 1
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name} `);
  }
}

const greetHey = greet('Hey');
greetHey('Hari');

// 2
const multiplier = function (factor) {
  // return a function
  return function (num) {
    return factor * num;
  }
};

const duo = multiplier(2);
const triple = multiplier(3);

console.log(duo(5));   // 10
console.log(triple(5));   // 15

// 3
const createCounter = function () {
  // return a function
  // return `Hi`
  let count = 0;
  return function () {
    count++;
    return count
  }
};

const counter1 = createCounter();
console.log(counter1);

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3