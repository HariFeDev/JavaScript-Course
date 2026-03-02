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
// console.log(counter1);

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

// ----------- Call and apply Methods
// 1 - 10min
const airline1 = {
  airline: 'Air India',
  iataCode: 'AI',
  bookings: [],
  book: function (flightNum, name) {
    // complete this
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: `${name}` })
  }
};

const airline2 = {
  airline: 'IndiGo',
  iataCode: '6E',
  bookings: [],
};

const airline = airline1.book;
airline.call(airline1, 123, 'Hari');
airline.call(airline2, 123, 'Hari');

console.log(airline1.bookings);
console.log(airline2.bookings);

// 2 - 3min
const flightData = [456, 'Arjun'];
airline.apply(airline2, flightData);
airline.call(airline2, ...flightData);

// 3-23min
const person1 = {
  name: 'Hari',
  greet: function (city, country) {
    console.log(
      `${this.name} from ${city}, ${country}`
    );
  }
};

const person2 = {
  name: 'Arjun'
};

const greetMsg = person1.greet
greetMsg.call(person2, 'Chennai', 'India')
greetMsg.apply(person2, ['Chennai', 'India'])

// This will not work because we store the function in new variable in function decalration with strict mode this is undefined

// greetMsg('Chennai', 'India')
greetMsg.call(person2, 'Chennai', 'India')

// ----------- Bind Method
// 1-8min
const user = {
  name: 'Hari',
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

const greetFn = user.greet;

const greetBindMsg = greetFn.bind(user);
greetBindMsg();

// 2 - 14min
const airline3 = {
  airline: 'Air India',
  code: 'AI',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked on ${this.airline} ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  }
};

const indigo = {
  airline: 'IndiGo',
  code: '6E',
  bookings: []
};


const flight = airline3.book;
flight.call(indigo, 239, 'Hari');
console.log(indigo);


const bookIndigo = flight.bind(indigo);
bookIndigo(999, 'Legartha')
bookIndigo(619, 'Ragnar')
console.log(indigo);

// Difference betweenn
// book.call(indigo, 123, 'Arjun');
// Explanation
// Here we want to mention every time this points to which object
// const bookIndigo = book.bind(indigo);
// bookIndigo(123, 'Arjun');
// Here we mentioned default this points to which object so we don't need to mention every time we call the function.

// 3 -4min
const taxCalculator = function (rate, amount) {
  return amount + amount * rate;
};

const addGST = taxCalculator.bind(null, 0.18)
console.log(addGST(100));

const addGST2 = taxCalculator.bind(null, 0.05);
console.log(addGST2(100));
