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
const flight = 'LH123';
const jonas = {
  name: 'Jonas schedtmann',
  passport: 2321454580,
}