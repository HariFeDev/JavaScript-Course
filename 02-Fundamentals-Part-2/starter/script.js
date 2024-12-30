"use strict";

console.log("----------Class JavaScript-------------");

// ---------- Activating Strict Mode -------------

/*

let hasDrivrersLicense = false;
const passTest = true;

if (passTest) {
  hasDrivrersLicense = true;
}

if (hasDrivrersLicense) {
  console.log("I can Drive 🚗.");
}

// const interface = "Audio";
// const private = 534;

*/

// ---------- Functions -------------

/*

function logger() {
  console.log("My name is Jonas.");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// Once the function has been executed this code here is then replaced by the result of the function.
fruitProcessor(5, 0);

// If you want to use the return value from the function. we need to store it in a variable.
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/

// ---------- Function Declaration Vs Function Expression -------------

/*

// Function Declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

*/

// ---------- Arrow Function -------------

/*

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

*/

// ---------- Function Calling Other Function -------------

/*

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 4));

*/

// ---------- Reviewing Functions -------------

/*

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);

  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));

*/

// ---------- Introduction to Arrays -------------

/*

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// Another way of creating an array.
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// We can't redeclare a variable using const.
// Only Primitive values are immutable.
// Array is not a primitive value.
friends[2] = "Jay";
console.log(friends);

// We can't replace the entire array.
// It cause error ⬇️
// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const birthYears = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

*/

// ---------- Basic Arrays Methods -------------

/*

// ADD ELEMENTS

//----PUSH
// 1. It add the element in the last place.
// 2. It push the new element in the original array.
// 3. It return the length of the array.

const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

//----UNSHIFT
// 1. It adds the element in the first place.
// 2. It pushes the new element into the original array.
// 3. It returns the length of the array.
friends.unshift("John");
console.log(friends);

// REMOVE ELEMENTS

//----POP
// 1. It removes the item in the last place.
// 2. It returns the removed item.

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

//----SHIFT
// 1. It removes the item in the first place.
// 2. It returns the removed item.

// friends.shift();
const shiftted = friends.shift();
console.log(shiftted);
console.log(friends);

console.log(friends.indexOf("Steven"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

*/

// ---------- Introduction to Objects -------------

/*

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};

*/

// ---------- Dot vs Bracket Notation -------------

/*

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
console.log(jonas.lastName); // Dot Notation
console.log(jonas["lastName"]); // Bracket Notation

// We can put any expression in Bracket Notation.
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you wnat to know about jonas,Choose between firstName,lastName,age,job,friends"
);
// Cause Error becouse there is no interestedIn property in jonas
// console.log(jonas.interestedIn);

// Use Bracket Notation to access the value.
// console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong Request⚠️ Choose between firstName,lastName,age,job,friends"
  );
}

jonas.location = "Protugal";
jonas["twitter"] = "@jonasSchmedtmann";
console.log(jonas);

// Challenge
// "Jonas has 3 friends(friends name) and his best friend is Michael";

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends (${jonas.friends}) and his best friend is ${jonas.friends[0]}.`
);

*/

// ---------- Object Methods -------------

/*

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (bornyr) {
  //   return 2037 - bornyr;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's License.`;

    return this.summary;
  },
};

console.log(jonas.calcAge());
// console.log(jonas["calcAge"](1991));

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
console.log(jonas.summary);

// Challenge
// Jonas is a 46-year old teacher, and he has a/no driver's License.

*/
