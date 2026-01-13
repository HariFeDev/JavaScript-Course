'use strict';

// ----------- Destructuring Arrays

const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);

const [, , ...remainingFruits] = fruits;
console.log(remainingFruits);

// ----------- Destructuring Objects

const person1 = {
  name: 'John',
  age: 25,
  country: 'USA',
};
const { name: firstName, age } = person1;
console.log(`Name: ${firstName}`);
console.log(`Age: ${age}`);

const car1 = {
  brand: 'Toyota',
  model: 'Corolla',
};

const { brand, model, year = 2022 } = car1;
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

// ----------- Spread and Rest Operators

// Nested Array Destructuring + Rest
const numbers = [1, 2, [3, 4, 5], 6, 7];

// ✅ Your Task:
// - Extract 1st element as `one`
// - Extract 3, 4, and 5 into variables `three`, `four`, `five`
// - Put the rest into a variable `restNums`

// Your code here:
const [one, , [three, four, five], ...restNums] = numbers;
console.log(one);
console.log(three);
console.log(four);
console.log(five);
console.log(restNums);

// Object Destructuring with Rest
const user = {
  name: 'Hari',
  age: 25,
  country: 'India',
  profession: 'Frontend Developer',
  language: 'JavaScript',
};

// ✅ Your Task:
// - Extract `name` and `language`
// - Put remaining properties into `otherDetails`

// Your code here:
const { name, language, ...otherDetails } = user;
console.log(name);
console.log(language);
console.log(otherDetails);

// Function Parameters + Destructuring + Rest

// ✅ Your Task:
// Write a function `logUser` that:
// - Takes an object as a parameter
// - Destructures name, age
// - Groups the rest into a variable `details`

const person = {
  name: 'Ravi',
  age: 30,
  city: 'Chennai',
  skill: 'React',
  experience: '2 years',
};

// Example call: logUser(person)
// Expected Output:
// Name: Ravi, Age: 30
// Other Details: { city: "Chennai", skill: "React", experience: "2 years" }

// Your code here:
const logUser = function ({ name, age, ...details }) {
  console.log(`Name: ${name}, Age: ${age}`);
  console.log('otherDetails:', details);
};

logUser(person);

// Spread Operator for Array Cloning + Merging
const arr1 = [10, 20];
const arr2 = [30, 40];

// ✅ Your Task:
// - Clone arr1 into `clone1`
// - Merge arr1 and arr2 into `combined`
// - Add 50 at the end and 5 at the beginning of `combined`

// Your code here:
const clone = [...arr1];
const [...combined] = [5, ...arr1, ...arr2, 50];
console.log(clone);
console.log(combined);

// Spread + Object Update
const car = {
  brand: 'Toyota',
  year: 2020,
  color: 'White',
};

// ✅ Your Task:
// - Create a new object `updatedCar`
// - Add a new property `owner: "Hari"`
// - Update color to "Black" using spread

// Your code here:
const updatedCar = { ...car, owner: 'hari', color: 'Black' };
console.log(updatedCar);

// Destructure in Function Parameters (Array)

// ✅ Your Task:
// Write a function `sumFirstAndRest` that takes an array
// Destructure first two values as a and b
// Use rest operator to collect remaining
// Return an object like: { sum: a + b, rest }

// Example: sumFirstAndRest([2, 3, 4, 5])
// Output: { sum: 5, rest: [4, 5] }

// Your code here:
const sumFirstAndRest = function ([a, b, ...rest]) {
  console.log(a + b, rest);
};
sumFirstAndRest([2, 3, 4, 5]);

// ----------- Destructuring Arrays, Objects, Spread Operator, Rest Pattern and For-of-Loop combined challenges
// Challenge 1: User Profile Extractor
const user2 = {
  id: 101,
  name: "Hari",
  address: {
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: 600001,
  },
  skills: ["HTML", "CSS", "JavaScript"],
};

const getUserSummary = function (user) {
  const { name, address: { city }, address: { state } } = user;
  return `${name} lives in ${city}, ${state}`
}

console.log(getUserSummary(user2));

// Challenge 2: Array Values Swap
const coordinates = [12.9716, 77.5946];

const swapCoordinates = function (coords) {
  let [a, b] = coords;
  [b, a] = [a, b];
  return [a, b];
}

console.log(swapCoordinates(coordinates))

// Challenge 3: Restaurant Order System
const restaurant = {
  name: "Spicy Dosa",
  menu: {
    breakfast: ["Idli", "Plain Dosa", "Puri Dosa"],
    lunch: ["Meals", "Sambar Rice"],
  },
  timings: {
    open: "7 AM",
    close: "10 PM",
  },
};

const getBreakfastItems = function (res) {
  const { menu: { breakfast: [mainItem, ...otherItems] } } = res;
  return { mainItem, otherItems }
}

console.log(getBreakfastItems(restaurant));

// Challenge 4: Student Marks Analyzer
const student1 = {
  name: "Arjun",
  marks: [85, 90, 78, 92, 88],
};

const analyzeMarks = function (student) {
  const { marks: [first, second, ...others] } = student;
  return { first, second, others }
}

console.log(analyzeMarks(student1));

// Challenge 5: Company Employee Processor
const company = {
  name: "Tech Corp",
  employees: [
    {
      id: 1,
      personal: {
        name: "Hari",
        age: 24,
      },
      skills: ["JavaScript", "React", "SAPUI5"],
    },
    {
      id: 2,
      personal: {
        name: "Ravi",
        age: 26,
      },
      skills: ["Python", "Django"],
    },
  ],
};

/*
[
  { name: "Hari", mainSkill: "JavaScript", otherSkills: ["React", "SAPUI5"] },
  { name: "Ravi", mainSkill: "Python", otherSkills: ["Django"] }
]

*/

const getEmployeeSkills = function (company) {
  const result = [];
  const { employees } = company;
  for (const emp of employees) {
    const { personal: { name }, skills: [mainSkill, ...otherSkills], } = emp;
    result.push({ name, mainSkill, otherSkills });
  }
  return result;
}

console.log(getEmployeeSkills(company));

// Challenge 6: Course Enrollment Processor
const courses = {
  platform: "Udemy",
  data: [
    {
      title: "JavaScript",
      instructor: {
        name: "Jonas",
        experience: 10,
      },
      students: ["Hari", "Ravi", "Arjun"],
    },
    {
      title: "CSS",
      instructor: {
        name: "Sarah",
        experience: 7,
      },
      students: ["Kumar", "Deepak"],
    },
  ],
};

const processCourses = function (courses) {
  const udemyCourse = [];
  const { data } = courses;
  for (const details of data) {
    const { title: course, instructor: { name: instructor }, students: [mainStudent, ...otherStudents] } = details;
    udemyCourse.push({ course, instructor, mainStudent, otherStudents })
  }
  return udemyCourse;
}

console.log(processCourses(courses));




// ----------- Short Circuiting AND OR Operators

// OR Practice
console.log(0 || 'Hello'); //'Hello'
console.log('' || 'Default'); //'Default
console.log(null || undefined || 5); //5
console.log(false || 0 || NaN || 'Yes' || null); //"Yes"

// AND Practice
console.log('Hi' && 0); //0
console.log(5 && 'World'); //"World"
console.log(true && 'JS' && 23); //23
console.log(null && 'Hello'); //null

// Function Short-circuiting
function greet(name) {
  const finalName = name || 'Guest';
  console.log('Hello, ' + finalName);
}

greet('Hari'); //'Hari'
greet(''); //"Guest"
greet(undefined); //"Guest"

// Conditional Execution
const isLoggedIn = true;
isLoggedIn && console.log('Welcome back!'); //"welcome back!"

// Default Values in Objects
const user1 = {
  name: '',
  age: 0,
  city: 'Mumbai',
};

const userName = user1.name || 'Anonymous';
const userAge = user1.age || 18;
const userCity = user1.city || 'Unknown';

console.log(userName, userAge, userCity); //"Anonymous", 18, "Mumbai"

// Build a Small Program
/*
You check whether a variable contains a value, and if not, assign it a default.

You log a welcome message only if the user is logged in.
*/
let username = '';

username = username || 'Guest';

// const loggedIn = false;
const loggedIn = true;

loggedIn && console.log('Welcome, ' + username);

// User Info Formatter

const userDetails = {
  name: 'Alice',
  age: 25,
  hobbies: ['reading', 'swimming', 'gaming'],
  contact: {
    email: 'alice@example.com',
  },
};

const formatUser = function (user) {
  const { name, age } = user;

  const [primaryHobby, ...otherHobbies] = user.hobbies;

  const { email = 'no-email@example.com' } = user.contact;

  console.log(user.contact.email ?? email);

  console.log(
    `${name} (${age}) - Primary Hobby: ${primaryHobby}, other Hobbies: ${otherHobbies} Email: ${email}`
  );
};

formatUser(userDetails);

// ----------- For of Loop
const orders = [
  {
    orderId: 1,
    customer: { name: "Hari", city: "Chennai" },
    items: [
      { product: "Laptop", price: 50000 },
      { product: "Mouse", price: 500 },
    ],
  },
  {
    orderId: 2,
    customer: { name: "Arjun", city: "Bangalore" },
    items: [
      { product: "Phone", price: 30000 },
      { product: "Headphones", price: 2000 },
    ],
  },
];

// SOLUTION
const processOrders = function (orders) {
  const result = [];
  for (const a of orders) {
    console.log(a)
    const { customer: { name: customerName, city }, items } = a
    console.log({ customerName, city }, items);

    let totalAmount = 0;
    for (const b of items) {
      console.log(b);
      const { price } = b
      totalAmount += price
    }
    result.push({ customerName, city, totalAmount });
    console.log(totalAmount);
    console.log(result);
  }
  return result
}
console.log(processOrders(orders));

// Sum Positive Numbers
const newNumbers = [3, -7, 4, -2, 10, -5];
let sum = 0;

for (const num of newNumbers) {
  if (num > 0) {
    sum += num;
  }
}
console.log(sum);

// Capitalize Words
const words = ['hello', 'world', 'javascript', 'rocks'];

const upperCaseArray = [];
for (const word of words) {
  upperCaseArray.push(word.toUpperCase());
}
console.log(upperCaseArray);

// ----------- Optional Chaining

/*
Safe Access to Nested Properties

You have a list of users. Some users have a profile, and some don't. Get each user's display name or use "Anonymous" if it's missing.

*/

const users = [
  { id: 1, profile: { displayName: 'Alice' } },
  { id: 2 },
  { id: 3, profile: { displayName: null } },
];

for (const user of users) {
  // Your code here
  console.log(user['profile']?.displayName ?? 'Anonymous');
}

/*
Safe Function Call with Fallback

You have an object which may or may not contain a method to print a greeting. Call the method if it exists. If it doesn’t, print "No greeting available".

*/
const person2 = {
  greet: () => 'Hello!',
};

const person3 = {};

function greetPerson(person) {
  // Your code here
  console.log(person.greet?.() ?? 'NO greeting available');
}

greetPerson(person2); // "Hello!"
greetPerson(person3); // "No greeting available"

/*
Get Cart Total 

You are given a shopping cart object. Some users haven’t added a cart, or the total could be null. Print the cart total or default to 0.
*/

const user3 = [
  { name: 'John', cart: { total: 250 } },
  { name: 'Jane' },
  { name: 'Tom', cart: { total: null } },
];

for (const user of user3) {
  // Your code here
  console.log(`${user.name}'s total: ${user.cart?.total ?? 0}`);
}

// ----------- Sets Challenges

// Remove Duplicates
const numbersArr = [2, 3, 4, 3, 5, 2, 6, 4];
console.log(new Set(numbersArr));

// Check Presence
const fruitsSets = new Set(['apple', 'banana', 'mango']);
console.log(fruitsSets.has('banana'));

// Size of Sets
const letters = new Set(['a', 'b', 'c', 'a', 'b']);
console.log(letters.size);

// Convert Set → Array
const colors = new Set(['red', 'green', 'blue']);
console.log([...colors]);

// Loop through Set
const animals = new Set(['lion', 'tiger', 'bear']);

for (const animal of animals) {
  console.log(animal);
}

// Delete from Set
const cities = new Set(['New York', 'Paris', 'Tokyo']);
console.log(cities);
cities.delete('Paris');
console.log(cities);

//  Clear a Set
const names = new Set(['Alice', 'Bob', 'Charlie']);
console.log(names);
names.clear();
console.log(names);

// Union of Two Sets
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log(union);




