'use strict';
// ----------- Default Parameters
/*
const bookings = [];

const createBooking = function (flightNum, numPassenger = 1, price = 199 * numPassenger) {

  // Before the ES6 - old way of doing it
  // numPassenger = numPassenger || 1;
  // price = price || 199

  const booking = {
    flightNum,
    numPassenger,
    price
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// To skip the parameter set that to undefined
createBooking('LH123', undefined, 15);
*/

// ----------- Values VS Reference
/*
const flight = 'LH123';
const jonas = {
  name: 'Jonas schedtmann',
  passport: 2321454580,
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name

  if (passenger.passport === 2321454580) {
    console.log('checkIn');
  } else {
    console.log('Wrong Passport!');
  }
}

checkIn(flight, jonas)
*/

/*
- It is primitive type
- Here it will not affect the original value because it copy the value⬇️.
- Not points to the same address
const a = 1 -> it points to memory address 1010.
- const b = a -> it copy the data and store it in different memory address 1103.
*/
// console.log(flight);
/*
- It is object type
- Here it affected the original object⬇️.
- Because it points to the reference address not the address in the memory
- If we change this it will also affect the original value.
- Ex: const a = {name: 'jonas'} -> reference address something like this -> DA30K -> reference address points to memory address in the heap -> 0101.
- const b = a -> b.name = 'Mike' -> it points to a ->reference address ->DA30K -> reference address points to memory address in the heap -> 0101.
*/
// console.log(jonas);

/*
- In the above function we are doing the same code below⬇️
const flightNum = flight;
const passenger = jonas;
*/
/*
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(jonas);
checkIn(flight, jonas)

*/

// ----------- Function accepting callback function
/*
const oneWord = function (str) {
  // return str.replace(/ /g, '').toLowerCase();
  return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function (str) {
  console.log(str);
  console.log(str.split(' '));
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higher-Order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  // To get the name of the function
  // Function also have a properties
  console.log(fn.name);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callback all the time
const high5 = function () {
  console.log('👋');
}
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5)

const sayHi = function () {
  console.log('hi');
};

const execute = function (fn) {
  // sayHi = fn
  // sayHi() = fn()
  // first it prints hi
  // sayHi function doesn't return anything so when execute function tries to return it, this becomes undefined.
  return fn();
};

console.log(execute(sayHi));
*/

// ----------- Function Returning Functions
// Function Expression
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeteHey = greet('Hey');
greeteHey('Jonas');
greeteHey('Steven');

// First greet('Hey') returns a function
// Then ('Jack') immediately calls that returned function
greet('Hey')('Jack')

// Arrow Function
const greetArr = (greetText) => {
  return (greetName) => {
    console.log(`${greetText} ${greetName}`);
  }
}

const greetMsg = greetArr('Hello');
greetMsg('Harris')

greetArr('heyyy')('Yow')
*/


// ----------- Call and Apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: `${name}` })
  }
}

lufthansa.book(239, 'Jonas Schedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call Method
book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Modern Js not using the APPLY Method instead using Call Method
book.call(swiss, ...flightData);