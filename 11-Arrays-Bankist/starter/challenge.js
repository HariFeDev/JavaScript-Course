'use strict';

// Challenge #1

const checkDogs = function (dogsJulia, dogsKate) {
  // To remove cats
  const onlyDogsJulia = dogsJulia.slice(1, -2);
  console.log(onlyDogsJulia);

  // TO join both corrected data:
  const juliaAndKateDogs = onlyDogsJulia.concat(dogsKate);
  console.log(juliaAndKateDogs);

  // To check Whether adult or puppy
  juliaAndKateDogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number${i + 1} is still a ${age} years old puppy🐶`);
    }
  })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])

// Challenge #2
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((dogAge) => {
    return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
  })
  console.log(humanAge);

  const adultDogs = humanAge.filter((dogAge) => dogAge >= 18)
  console.log(adultDogs);

  const averageHumanAgeOfAdultDogs = adultDogs.reduce((acc, curr) => {
    return acc + curr
  }, 0) / adultDogs.length
  return averageHumanAgeOfAdultDogs
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

/*
.filter((dogAge) => dogAge >= 18).reduce((acc, curr) => {
    return acc + curr
  }, 0)
*/

// Coding Challenge #3
const calcAverageHumanAge2 = (ages) => ages.map((age) => age <= 2 ? 2 * age : 16 + age * 4).filter((age) => age >= 18).reduce((acc, curr, i, arr) => {
  return acc + curr / arr.length
}, 0)

const avg3 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avg4 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

console.log(avg3, avg4);

// coding challenge #4
const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ['Alice', 'Bob']
  },
  {
    weight: 8,
    curFood: 200,
    owners: ['Matilda']
  },
  {
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John']
  },
  {
    weight: 32,
    curFood: 340,
    owners: ['Michael']
  },
];

/*
Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) �
*/

// 1
dogs.map((dog) => dog.recFood = Math.round(dog.weight ** 0.75 * 28));
console.log(dogs);

// 2
console.log(dogs.find((dogOwner) => dogOwner.owners.includes('Sarah')));