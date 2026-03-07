'use strict';
// Default Parameter
const param = function (name = "bravo", age = 30) {
  console.log(`${name} is ${age} years old`);
}

param('Hari', 24);
param('Swiss');
param();

// Value vs reference
const fruits = {
  apple: 1,
  mango: 2,
  orange: 5
}

const shopName = 'SR'
const fruitRep = fruits
const fruitfunc = function (fruitRep, shopName) {
  fruitRep.apple = 3;
  shopName = 'GG';
  console.log(shopName);
}

fruitfunc(fruitRep, shopName)
console.log(fruitRep);
console.log(fruits);
console.log(shopName);

// Higher Order Function
const upperCase = function (str) {
  const [fsWord, ...otherWords] = str.split(' ');
  return [fsWord.toUpperCase(), ...otherWords].join(' ');
}


const nameTransformer = function (str, fn) {
  console.log(`${fn(str)}`);
}

nameTransformer('js is the best language!', upperCase)
