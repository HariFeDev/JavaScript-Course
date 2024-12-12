console.log("----------Assignment JavaScript-------------");

// ---------Values and Variables

const myContinent = "Asia";
const myCountry = "India";
let population = 14;

console.log(myContinent);
console.log(myCountry);
console.log(population);

// ---------Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof myCountry);
console.log(typeof language);

// ---------Let Const Var

language = "Tamil";

// ---------Basic Operator
console.log(population / 2); // 7
// population++; //14
console.log(population); // 15
console.log(population > 6);
console.log(population < 33);

const description =
  myCountry +
  " is in " +
  myContinent +
  ", " +
  "and its " +
  population +
  " million people speak " +
  language;
console.log(description);

// ---------String and Template Literals

const description1 = `${myCountry} is in ${myContinent}, and its ${population} million people speak ${language}`;
console.log(description1);

// ---------If Else Statement

if (population > 33) {
  console.log(`${myCountry}'s ${population} population is above average.`);
} else {
  console.log(`${myCountry}'s ${33 - population} is below average.`);
}

// ---------Type Conversion and Coerction

console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// ---------Equality Operator

/*

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border.");
} else if (numNeighbours > 1) {
  console.log("More than 1 border.");
} else {
  console.log("No borders.");
}
*/

// ---------Logical Operators

if (language === "English" && population < 50 && !isIsland) {
  console.log(`Sarah should live in ${myCountry}💫`);
} else {
  console.log(`${myCountry} does not meet criteria😑`);
}

// ---------Switch Statements

switch (language) {
  case "Tamil":
  case "Chinese":
  case "Mandarian":
    console.log("MOST number of the native speaker.");
    break;
  case "Spanish":
    console.log("2nd place number of native speakers");
    break;
  case "english":
    console.log("3rd place in number of native speakers");
    break;
  case "hindi":
    console.log("4th place in number of native speakers");
    break;
  case "arabic":
    console.log("5th place in number of native speakers");
  default:
    console.log("Other languages are great too!");
}

// ---------Ternary Operator

console.log(
  population > 33
    ? `${myCountry} population is above average📈.`
    : `${myCountry} population is below average📉.`
);
