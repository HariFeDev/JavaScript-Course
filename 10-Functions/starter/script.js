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
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
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

const high5 = function () {
  console.log('👋');
}
document.body.addEventListener('click', high5)
