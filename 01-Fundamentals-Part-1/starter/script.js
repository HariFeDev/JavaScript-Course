console.log("----------Class JavaScript-------------");

// ---------- Linking a JS File -------------
/*

let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

console.log(40 + 8 + 23 - 10);

*/

// ---------- Values and Variable -------------
/* 

// 1. Value is  a piece of data.
// 2. Store the value in a variable.

// Declaring variable
// 1. This will create a real variable in computer's memory.
// 2. Will store the value inside of that variable.
let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
console.log(myCurrentJob);

*/

// ---------- Data Types -------------

// 1. A Value can either be two types object or primitive.
// 2. There are 7 primitive datatypes.
// 3. In JavaScript, the value has a type, not the variable.

/*

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

*/

// ---------- Let Var Const -------------

/*

let age = 30;
age = 31;

const year = 1991;
// year = 1990;

// const job;

var job;
job = "Programmer";

// It create variable globally.
lastName = "Schmedtmann";
console.log(lastName);

*/

// ---------- Basic Operator -------------
/*

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas);
console.log(ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2.

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment Operator.
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x + 1
x--; // x - 1
console.log(x);

// Comparison Operator.
console.log(ageJonas > ageSarah); // <, >, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);
*/

// ---------- Operator Precedence -------------

/*

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2019);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/

// ---------- Strings and Template Literals -------------

/*

const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "string with \n\
Multiple \n\
lines"
);

console.log(`string with
Multiple
lines`);

*/

// ---------- If else Statement -------------

/*

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚙");
} else {
  let yearLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearLeft} years 🔃`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

*/

// ---------- Type Conversion and Coercion -------------

/*

// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coerction
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

*/

// ---------- Truthy and Falsy Values -------------
/*
// 5 falsy values : 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all💵.");
} else {
  console.log("You should get a job!🏢.");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined 🤩");
} else {
  console.log("Height is not UNDEFINED ⛔");
}
*/

// ---------- Equality Operators === Vs == -------------

/*

const age = "18";
if (age === 18) {
  console.log("You became an adult (strict) 👨");
}
if (age == 18) {
  console.log("You became an adult (loose) 👨");
}

const favourite = Number(prompt("What is your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number😎");
} else if (favourite === 7) {
  console.log("7 is also an amazing number😎");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
  console.log("Why not 23?🙄");
}

*/

// ---------- Logical Operator -------------

/*

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive.🚗");
// } else {
//   console.log("Someone else should drive.⛔");
// }

const isTierd = false;
console.log(hasDriversLicense && hasGoodVision && !isTierd);

if (hasDriversLicense && hasGoodVision && !isTierd) {
  console.log("Sarah is able to drive.🚗");
} else {
  console.log("Someone else should drive.⛔");
}
  
*/

// ---------- Switch Statement -------------

/*

const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure.");
    console.log("Go to coding meetup.");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos.");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend🥂.");
    break;
  default:
    console.log("Not a valid day!");
}

*/

// ---------- Statement Expression -------------

/*

3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}.`);

*/

// ---------- Conditional(Ternary) Operator -------------

/*

const age = 23;

age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like drink to water 💦");

const drink = age >= 18 ? "wine 🍷" : "water 💦";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💦";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💦"}`);

*/

// -------------- Fundamentals part -1 finished --------------
