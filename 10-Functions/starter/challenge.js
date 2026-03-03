// Challenge 1
const usernames = [
  'hari',
  'john',
  'hari',
  'martha',
  'john',
  'adam'
];

console.log([...new Set(usernames)]);

// 2
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

console.log(fruits);

const repeatedFruits = new Map();
console.log(repeatedFruits);

for (const [i, j] of fruits.entries()) {
  console.log(i, j);
  // repeatedFruits.set(j, i)
  if (!repeatedFruits.has(j)) {
    repeatedFruits.set(j, 1)
  } else {
    repeatedFruits.set(j, repeatedFruits.get(j) + 1)
  }
}
console.log(repeatedFruits);

// 3
const visitors = [
  { id: 1, name: 'Hari' },
  { id: 2, name: 'John' },
  { id: 1, name: 'Hari' },
  { id: 3, name: 'Martha' },
];

const uniqueIds = new Set();
const uniqueVisitors = [];

for (const visitor of visitors) {
  if (!uniqueIds.has(visitor.id)) {
    uniqueIds.add(visitor.id);
    uniqueVisitors.push(visitor)
  }
}

console.log(uniqueIds);
console.log(uniqueVisitors);

const arr = [1, 2, 3, 2, 4, 1, 5];

const countMap = new Map();

for (const num of arr) {
  if (!countMap.has(num)) {
    countMap.set(num, 1);
  } else {
    countMap.set(num, countMap.get(num) + 1);
  }
}

const duplicates = [];

for (const [key, value] of countMap) {
  if (value > 1) {
    duplicates.push(key);
  }
}

console.log(duplicates);

/*
seenIds.add(visitor.id); in this line what if i put this seenIds.add(visitor);
explain what difference between them and if i do this what it cause error and why
*/

// Challenge #1
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const favLanguage = Number(prompt(`${this.question}
      ${this.options}`))
    if (favLanguage >= 0 && favLanguage < this.answers.length) {
      this.answers[favLanguage] = this.answers[favLanguage] + 1;
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    }
    else if (type === 'string') {
      console.log(`polls are ${this.answers.join(', ')}`);
    }
  }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// console.log(new Array(4).fill(0));
// console.log(poll.registerNewAnswer);
// console.log(poll.answers);