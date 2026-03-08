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