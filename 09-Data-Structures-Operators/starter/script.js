'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

  orderDelivery: function ({
    time = '20:00',
    starterIndex = 1,
    address,
    mainIndex = 1,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`Pizza ordered with ${mainIngredient}`);
    console.log(`Pizza ordered with ${otherIngredients}`);
  },
};

// ----------- Working with Strings Part - 3 ------------

// Split the string and stored it in the array
// -After the + it will split the string
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schedtmann'.split(' ')
console.log(firstName, lastName);

// join() - to join the string
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName);
const otherName = ['Mr.', firstName, lastName.toUpperCase()].join('*')
console.log(otherName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  let namesUpper = [];

  for (const n of names) {
    // console.log(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n[0].toUpperCase() + n.slice(1))
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jesicca ann smith davis')
capitalizeName('jonas schedtmann')

// Padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(33, '*'));

const markCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(str, last);
  return last.padStart(str.length, '*')
}

console.log(markCreditCard(4747475826));
console.log(markCreditCard(1234567890));

// repeat
const message2 = 'Bad weather... All Departures... Delayed '
console.log(message2.repeat(3));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
}

planeInLine(5);
planeInLine(3);
planeInLine(12);

// ----------- Working with Strings Part - 2 ------------
/*
const airline = 'TAP Airs Portugal'

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization Name issue
const passenger = 'jOnAs';
const passsengerLower = passenger.toLowerCase();
const paasengerCorrect = passsengerLower[0].toUpperCase() + passsengerLower.slice(1);

console.log(passenger);
console.log(passsengerLower);
console.log(paasengerCorrect);

const passengerName = function (name) {
  const pName = name.toLowerCase();
  const correctPname = pName[0].toUpperCase() + pName.slice(1);
  console.log(correctPname);
}

passengerName('vishva');
passengerName('Baala');
passengerName('hari');

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@joNaS.Io \n ';
const lowercaseEmail = loginEmail.toLowerCase();
console.log(lowercaseEmail);
const trimmedEmail = lowercaseEmail.trim();
console.log(trimmedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);

console.log(email === normalisedEmail);

// replacing
const priceGB = '288,97*';
console.log(priceGB);
const priceUS = priceGB.replace('*', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All Passenger come to door 23. Boarding door 23!'
console.log(announcement);
console.log(announcement.replace('door', 'gate'));

// Replace all
console.log(announcement.replaceAll('door', 'gate'));

// Another old way
console.log(announcement.replace(/door/, 'gate'));

// replace all
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A230neo'
console.log(plane.includes('A23'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airbus'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('part of NEW ARirbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not aloowed 🔴');
  } else {
    console.log('Welcome to onboard 👏');
  }
}

checkBaggage('I have a Laptop, some Food and a pocket Knife')
checkBaggage('Socks and Camera')
checkBaggage('Got some snacks and a gun for protection')

*/

// ----------- Working with Strings Part - 1 ------------
/*
const airline = 'TAP Airs Portugal'
const plane = 'A230'
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// indexof - calculate first 'r' in the string
console.log(airline.indexOf('r'));

// indexof - calculate last 'r' in the string
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

// Slice will start from the index value of the string we specified
console.log(airline.slice(0));
console.log(airline.slice(4));

// Starts from the 4 and ends before the 7
console.log(airline.slice(4, 7));

// This is not empty string i specify the first gap indexOf will only calculate first occurance of gap
console.log(airline.slice(0, airline.indexOf(' ')));

// It calculaate last gap in the string
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Negative Parameter will be calculated from the last
console.log(airline.slice(-2));
console.log(airline.slice(-1));
console.log(airline.slice(0, -1));

const checkMiddleSeat = function (seat) {
  // B an E are Middle seats
  console.log(seat.slice(0));
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`Seat Number: ${seat} is Middle Seat `);
  } else {
    console.log(`Seat Number: ${seat} not a Middle Seat`);
  }
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

// Method like indexOf, slice, etc... will work also in string because behind the scenes JS store the string like object
console.log(new String('jonas'));
console.log(typeof new String('jonas'));

// After the opreration done it comes back to its original type primitive string
console.log(typeof new String('jonas').slice(0));

*/


// ----------- Maps Iteration------------
// Another way of creating a new map
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct Answer🎉'],
  [false, 'Try Again!'],
]);
console.log(question);

// Convert object to Maps
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt('Tell your answer'));
const answer = 3;
console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

*/

// ----------- Maps Fundamentals------------

/*

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Libzon, Portugal');
console.log(rest.set(2, 'Libzon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open 📬')
  .set(false, 'we are closed 📫');

console.log(rest);
console.log(typeof rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

*/

// ----------- Sets ------------
/*
const orderedSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rosotto',
  'Pasta',
  'Pizza',
]);

console.log(orderedSet);

console.log(new Set('Jonas', 'hari'));
console.log(new Set(['Jonas', 'hari']));

console.log(orderedSet.size);

// To check an element
console.log(orderedSet.has('Pizza'));
console.log(orderedSet.has('Bread'));

// To add an element
orderedSet.add('Garlic Bread');
orderedSet.add('Garlic Bread');
console.log(orderedSet);

// To delete an element
orderedSet.delete('Rosotto');
console.log(orderedSet);

// To empty the sets
// orderedSet.clear();
console.log(orderedSet);

// To iterate an elements
for (const order of orderedSet) {
  console.log(order);
}

// Example
const staff = ['waiter', 'chef', 'waiter', 'Manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['waiter', 'chef', 'waiter', 'Manager', 'chef', 'waiter']).size
);

console.log(new Set('JonasSchedmann').size);
*/

// ----------- Looping Objects, Object Keys, Values and Entries ------------

/*

// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const y of entries) {
  console.log(y);
}

// [Keys, values]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} Open at ${open} and Close at ${close}`);
}

*/

/*
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// console.log(restaurant.openingHours.mon.open);

// WITH Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Examples
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On the ${day} we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hrllo@jonas.io',
  },
];

console.log(users[0]?.name ?? 'Users Array is empty');

*/

// ----------- For of Loop ------------
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  // console.log([...menu.entries()]);
  console.log(`${i + 1}: ${el}`);
}
*/

// ----------- Nullish Coalescing Operator ------------
/*

restaurant.numGuests = 0;

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish : null and undefined (NOT 0 or '')
const guesCorrect = restaurant.numGuests ?? 10;
console.log(guesCorrect);

*/

// ----------- Short Circuting (&& ||) AND OR Operator ------------
/*
console.log('----- OR -----');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND -----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && undefined && 'Jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'veggies');
}

restaurant.orderPizza && restaurant.orderPizza('Panner', 'BabyCorn');

*/

// ----------- Rest Pattern and Parameters ------------
/*

// Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because of LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// We can use both SPREAD and REST Pattern in the same time.
const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherfood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7);
add(8, 2, 5, 3, 2, 1, 4);

const x = [1, 2, 3];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('veggies');

*/

// ----------- Spread Opreator ------------
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, string, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
console.log(`${letters}`);
// console.log(`${...str} Schmedtmann`);

// Real World Example
// const ingredients = [
//   prompt("Let's make pasta! Ingrident 1?"),
//   prompt("Let's make pasta! Ingrident 2?"),
//   prompt("Let's make pasta! Ingrident 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

// ----------- Destructuring Objects ------------

/*

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default variables
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: openTime, close: closeTime },
} = openingHours;
console.log(openTime, closeTime);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

*/

// ----------- Destructuring Arrays ------------

/*

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);


let [main, , secondary] = restaurant.categories;
console.log(restaurant.categories);
console.log(main, secondary);

// Using Temperory variable to swtich two variables.
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Using Destructuring to switch two variables.
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/
