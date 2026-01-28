const orderedSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza"
])
console.log(orderedSet);

console.log(new Set("Hari"));

console.log(orderedSet.size);
console.log(orderedSet.has("Pizza"));
console.log(orderedSet.has("Bread"));

orderedSet.add("Garlic Bread");
orderedSet.add("Garlic Bread");
console.log(orderedSet);

orderedSet.delete('Risotto')
console.log(orderedSet);


for (const order of orderedSet) {
  console.log(order);
}

orderedSet.clear();
console.log(orderedSet);

// Example:
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('jonasSchedtmann').size);
console.log(new Set('jonasSchedtmann'));
console.log([...new Set('jonasSchedtmann')]);

// Sets challenges
// 1
const numbers = [1, 2, 2, 3, 4, 4, 5, 1];

const getUniqueNumbers = function (nums) {
  console.log([...new Set(nums)]);
}

getUniqueNumbers(numbers)

// 2
const users = [
  { name: "Hari", role: "Frontend" },
  { name: "Arjun", role: "Backend" },
  { name: "Ravi", role: "Frontend" },
  { name: "Kumar", role: "Fullstack" },
  { name: "Siva", role: "Backend" },
];

const countUniqueRoles = function (users) {
  // console.log(new Set(user).size);
  // const [{ name, role }] = users
  // console.log(role);
  // console.log(new Set(role));
  let uniRoles = new Set();
  for (const userRole of users) {
    console.log(userRole);
    const { name, role } = userRole
    console.log(name, role);
    uniRoles.add(role)
    // console.log([...new Set(role)]);
  }
  return uniRoles.size
}

console.log(countUniqueRoles(users))

// 3
const dev1Skills = ["JavaScript", "React", "CSS", "HTML"];
const dev2Skills = ["JavaScript", "Node.js", "CSS", "MongoDB"];

const getCommonSkills = function () {
  const commonSkills = [];
  const dev1 = new Set(dev1Skills)
  // const dev2 = new Set(dev2Skills)
  console.log(dev1);

  for (const skill of dev2Skills) {
    console.log(skill);
    dev1.has(skill) ? commonSkills.push(skill) : "No CommonSkills"
  }
  return commonSkills
}

console.log(getCommonSkills());

// Maps 

const rest = new Map();
rest.set('name', 'Classico Italiano')
rest.set(1, 'Frizene Italy')
console.log(rest.set(2, 'Lisbon Portugal'));

rest.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, "We are Opening 🤩").set(false, "We are Closed 😔");

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 1;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('Categories'));
rest.delete(2);
// rest.clear()
const arr = [1, 2];
rest.set(arr, 'Test')
rest.set(document.querySelector('h1'), "Heading")
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// Maps Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
])
console.log(question);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(Object.entries(openingHours));

// Convert Object to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt('Your answer'));
const answer = 3
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.values()]);
console.log([...question.keys()]);

// Maps Challenge
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitsMap = new Map();
// const fruitsSet = new Set(fruits)
// console.log(fruitsSet);
let count = 0;
let currFruit;
for (const fruit of fruits) {
  console.log(fruit);
  currFruit = fruit
  // console.log(currFruit);  
  for (const repFruit of fruits) {
    if (repFruit === currFruit) {
      count += 1;
      console.log(`repFruit: ${repFruit} and currFruit: ${currFruit} - ${count}`);
    }
  }
}