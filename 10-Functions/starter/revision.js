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

// Function returning function
const greet = function (msg) {
  return function (name) {
    console.log(`${msg} ${name}💐`);
  }
}

const greetMsg = greet('Hello');
greetMsg('Jonas');


// Call Method
const obj1 = {
  name: 'jonas',
  printName() {
    console.log(this.name);
  },
  arr(mov) {
    console.log(mov);
  }
}

const obj2 = {
  name: 'Hari',
}

const obj3 = {
  name: 'Ragnar',
}

obj1.printName();

// call
obj1.printName.call(obj2);

// apply
obj1.arr.apply(obj1, ['HI'])

// Bind
const nameBind = obj1.printName.bind(obj3);
nameBind();

// closures

const x = function () {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  }
}

const y = x();
y();
y();
y();


