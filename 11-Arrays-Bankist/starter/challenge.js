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
/*
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



// 1
dogs.map((dog) => dog.recFood = Math.round(dog.weight ** 0.75 * 28));
console.log(dogs);

// 2
const SarahDog = dogs.find((dogOwner) => dogOwner.owners.includes('Sarah'));

// To find Consuming of food
const recFood = function (dogDetails) {
  if (dogDetails.curFood > (dogDetails.recFood * 0.90) && dogDetails.curFood < (dogDetails.recFood * 1.10)) {
    console.log(`It's Eating okay amount of food ✅`);

  } else if (dogDetails.curFood > dogDetails.recFood) {
    console.log(`It's Eating too much 📈`);

  } else {
    console.log(`It's Eating little 📉`);
  }
}

recFood(SarahDog);

// 3
const ownersEatTooMuch = dogs.filter((dog) => dog.curFood > dog.recFood).map((name) => name.owners).flat();

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter((dog) => dog.curFood < dog.recFood).map((name) => name.owners).flat();

console.log(ownersEatTooLittle);

// 4
console.log(ownersEatTooMuch.join(' and ') + `'s eats too much 📈`);
console.log(ownersEatTooLittle.join(' and ') + `'s eats too much 📉`);

// 5
console.log(dogs.some((food) => food.curFood === food.recFood));

// 6
console.log(dogs.some((food) => food.curFood > (food.recFood * 0.90) && food.curFood < (food.recFood * 1.10)));

// 7
const okaydogs = dogs.filter((food) => food.curFood > (food.recFood * 0.90) && food.curFood < (food.recFood * 1.10));

console.log(okaydogs);

// 8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

*/

// Coding Challenge #5
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
console.log(dogs);

dogs.forEach((dog, i, arr) => {
  dog.recFood = Math.round(dog.weight ** 0.75 * 28);
})

console.log(dogs);

// 2
dogs.find((dog) => {
  if (dog.owners.includes('Sarah')) {
    console.log(dog);
    if (dog.curFood > (dog.recFood * 0.90) && dog.curFood < (dog.recFood * 1.10)) {
      console.log('Okay amount of food');
    }

    else if (dog.curFood > dog.recFood) {
      console.log('Larger amount of food');
    }

    else if (dog.curFood < dog.recFood) {
      console.log('Little amount of food');
    }
  }
})

// 3

const ownersTooMuch = dogs.filter((dog) => {
  if (dog.curFood > dog.recFood) {
    return dog;
  }
}).flatMap((owner) => owner.owners)

console.log(ownersTooMuch);

const ownersTooLittle = dogs.filter((dog) => {
  if (dog.curFood < dog.recFood) {
    return dog;
  }
}).flatMap((owner) => owner.owners);

console.log(ownersTooLittle);

// 4
console.log(`${ownersTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersTooLittle.join(' and ')}'s dogs eat too little!`);
// "Matilda and Alice and Bob's dogs eat too much!"

// 5
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6
const isEatingOkay = (dog) => {
  return dog.curFood > (dog.recFood * 0.90) && dog.curFood < (dog.recFood * 1.10)
}

console.log(dogs.every(isEatingOkay));

// 7
const isEatingOkayArr = dogs.filter(isEatingOkay);
console.log(isEatingOkayArr);

// 8

const groupByFood = Object.groupBy(dogs, (dog) => {
  if (dog.curFood > (dog.recFood * 0.90) && dog.curFood < (dog.recFood * 1.10)) {
    return 'okayAmount';
  }

  else if (dog.curFood > dog.recFood) {
    return 'tooMuch';
  }
  else if (dog.curFood < dog.recFood) {
    return 'tooLittle';
  }
});
console.log(groupByFood);

// 9

const groupbyOwners = Object.groupBy(dogs, (dog) => {
  return dog.owners.length;
})

console.log(groupbyOwners);

// 10
const sortByRecFood = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log(sortByRecFood);