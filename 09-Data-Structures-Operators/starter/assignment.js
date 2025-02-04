'use strict';

// ----------- Destructuring Arrays

const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);

const [, , ...remainingFruits] = fruits;
console.log(remainingFruits);

// ----------- Destructuring Objects

const person = {
  name: 'John',
  age: 25,
  country: 'USA',
};
const { name: firstName, age } = person;
console.log(`Name: ${firstName}`);
console.log(`Age: ${age}`);

const car = {
  brand: 'Toyota',
  model: 'Corolla',
};

const { brand, model, year = 2022 } = car;
console.log(`Brand: ${brand}`);
console.log(`Model: ${model}`);
console.log(`Year: ${year}`);

const student = {
  fullName: 'Emma Watson',
  marks: {
    math: 90,
    science: 85,
  },
};

const { fullName } = student;
console.log(`FullName : ${fullName}`);

const {
  marks: { math },
} = student;
console.log(`Mark Math : ${math}`);
