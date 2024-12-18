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
