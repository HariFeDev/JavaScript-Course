"use strict";

console.log("----------Assignment JavaScript-------------");

// ---------- Functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country = describeCountry("India", 14, "New Delhi");
const country2 = describeCountry("Nigeria", 35, "Abuja");
const country3 = describeCountry("Germany", 10, "Berlin");

console.log(country);
console.log(country2);
console.log(country3);

// ---------- Function Declaration Vs Function Expression -------------

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const perIndia = percentageOfWorld1(10);
const perChina = percentageOfWorld1(1441);
const perGermany = percentageOfWorld1(332);
console.log(perIndia, perChina, perGermany);

// Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const perIndia2 = percentageOfWorld2(10);
const perChina2 = percentageOfWorld2(1441);
const perGermany2 = percentageOfWorld2(332);
console.log(perIndia2, perChina2, perGermany2);

// ---------- Arrow Function

const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

const perIndia3 = percentageOfWorld3(10);
const perChina3 = percentageOfWorld3(1441);
const perGermany3 = percentageOfWorld3(332);
console.log(perIndia3, perChina3, perGermany3);

// ---------- Function calling Other Function

const describePopulation = function (country, population) {
  const percentageOfWorld = percentageOfWorld1(population);

  return `${country} has ${population} million people which is about ${percentageOfWorld} of the world`;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("India", 10));
console.log(describePopulation("Germany", 332));

// ---------- Introduction to Arrays
const population = [1441, 10, 332, 5656];
console.log(population.length === 4);

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[population.length - 1]),
];

console.log(percentages);

// ---------- Basic Arrays Operation

const neighbours = ["Pakistan", "Sri Lanka", "China", "Nepal"];
console.log(neighbours);

neighbours.push("Utophia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

console.log(
  neighbours.includes("Germany")
    ? " It is an European country ✅"
    : "Probably not a central European country ❌"
);
console.log(neighbours.includes("Nepal"));

neighbours[neighbours.indexOf("China")] = "Republic of China";
console.log(neighbours);

// ---------- Introduction to Objects

const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Tamil",
  population: 14,
  neighbours: ["Pakistan", "China", "Sri Lanka", "Nepal", "China"],

  describe: function () {
    return `${this.country} has ${this.population} ${
      (this, this.language)
    } speaking people, ${
      this.neighbours.length
    } neighbouring countries and a capital called ${this.capital}.`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
};
console.log(myCountry);

// ---------- Dot vs Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);

// ---------- Object Methods
console.log(myCountry.describe());

console.log(myCountry.checkIsland());
console.log(myCountry.isIsland);

// ---------- For Loop

for (let voteNumber = 1; voteNumber <= 50; voteNumber++) {
  console.log(`Vote Number ${voteNumber} is currently voting.`);
}

// ---------- Looping Array, Breaking, Continue

const percentages2 = [];

for (let i = 0; i < population.length; i++) {
  percentages2.push(percentageOfWorld1(population[i]));
}

console.log(percentages2);
