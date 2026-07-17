'use strict';

// Array methods
// 1- 7min
const arr = [10, 20, 30, 40, 50];
console.log(arr.slice(1, 4));
console.log(arr);

const removeArr = arr.splice(2, 1);
console.log(removeArr);
console.log(arr);

// 2 - 2min
const words = ["JavaScript", "is", "fun"];
console.log(words.reverse().join(' '));

// 4 -4min
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(function (value) {
  console.log(value);
  sum += value;
});
console.log(sum);

// 5- 4min
const numbers_1 = [1, 2, 2, 3, 4, 4, 5];
const duplicateNum = new Set(numbers_1);
console.log([...duplicateNum]);

// Bonus
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2).join('-'));

// Map Method
// 1
const prices = [100, 200, 300, 400];
const a = prices.map((price) => price += price * 0.1).join('-');
console.log(a);

// 2
const numbers_ = [1, 2, 3, 4, 5, 6];
const taskResult = numbers_.slice(1, numbers_.length - 1).map((doubled) => doubled * doubled).reverse();
// console.log(numbers_.slice(1, numbers_.length - 1));
console.log(taskResult);

// 3
const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];

arr4.concat(arr5).map((two) => two * 2).forEach(function (value, index) {
  console.log(`Number ${index + 1}: ${value}`);
})

// filter + map
// 1
const ages = [5, 12, 17, 18, 24, 32];

const adultAges = ages.filter((adult) => {
  return adult >= 18
})
console.log(adultAges);

const adultAgesString = adultAges.map((str) => {
  return `Adult: ${str}`
})

console.log(adultAgesString);

// 2
const prices_2 = [100, 200, 300];
const b = prices_2.map((price) => price += price * 0.18)
console.log(b);

const c = b.reduce((acc, curr) => {
  return acc + curr
}, 0)
console.log(c);

// 3
const numbers_4 = [5, 12, 8, 130, 44];
const greaterThanTen = numbers_4.filter((num) => num > 10);
console.log(greaterThanTen);

const d = greaterThanTen.map((double) => double * 2)
console.log(d);

const e = d.reduce((acc, curr) => {
  return acc + curr
}, 0)
console.log(e);

// find,findIndex, findLast, findLastIndex
const a8 = [1, 2, 3, -6, 58, 28];

console.log(a8.find((v) => v > 2)); //3
console.log(a8.findIndex((v) => v > 2)); //2
console.log(a8.findLast((v) => v > 29)); //58
console.log(a8.findLastIndex((v) => v < 0)); //3

// Some
// 1
const odd = [4, 8, 13, 20, 7];
console.log(odd.some((mov) => mov % 2 !== 0));

// 2
const carts = [
  {
    user: "Alice",
    items: [
      { name: "book", inStock: true },
      { name: "pen", inStock: false }
    ]
  },
  {
    user: "Bob",
    items: [
      { name: "bag", inStock: true },
      { name: "cup", inStock: true }
    ]
  },
  {
    user: "Carol",
    items: [
      { name: "lamp", inStock: false }
    ]
  }
];
const outOfStock = carts.some((i) => i.items.some((m) => m.inStock === false));

console.log(outOfStock);

// Every
// 1
const fruits = ["apple", "avocado", "apricot", "almond"];
console.log(fruits.every((f) => f[0] === 'a'));

// 2
const teams = [
  {
    name: "Team A",
    members: [
      { name: "Alice", score: 80 },
      { name: "Bob", score: 72 }
    ]
  },
  {
    name: "Team B",
    members: [
      { name: "Carol", score: 91 },
      { name: "Dan", score: 65 }
    ]
  },
  {
    name: "Team C",
    members: [
      { name: "Eve", score: 88 },
      { name: "Frank", score: 76 }
    ]
  }
];

console.log(teams.every((m) => m.members.every((m) => m.score > 70)));

// Sort
// 1
const products = [
  { name: "Pen", price: 20 },
  { name: "Notebook", price: 50 },
  { name: "Eraser", price: 20 },
  { name: "Bag", price: 100 },
  { name: "Marker", price: 50 },
];

products.sort((a, b) => {
  if (a.price !== b.price) {
    return b.price - a.price;
  }

  return a.name.localeCompare(b.name);
})

console.log(products);

// 2
const students = [
  { name: "Charlie", score: 88, absences: 2 },
  { name: "Alice", score: 95, absences: 1 },
  { name: "Bob", score: 88, absences: 2 },
  { name: "Diana", score: 95, absences: 3 },
  { name: "Eve", score: 88, absences: 1 },
];

students.sort((a, b) => {

  if (b.score !== a.score) {
    return b.score - a.score
  }

  if (a.absences !== b.absences) {
    return a.absences - b.absences
  }

  return a.name.localeCompare(b.name);
})

console.log(students);

// Object.groupby()

// 1
const employees = [
  { name: "Alice", department: "Engineering", salary: 90000 },
  { name: "Bob", department: "Marketing", salary: 60000 },
  { name: "Carol", department: "Engineering", salary: 95000 },
  { name: "Dan", department: "HR", salary: 55000 },
  { name: "Eve", department: "Marketing", salary: 70000 },
  { name: "Frank", department: "HR", salary: 58000 },
];

console.log(employees);

const department = Object.groupBy(employees, (dept) => {
  return dept.department
})

console.log(department);

// 2
const orders = [
  { id: 1, status: "delivered", amount: 250 },
  { id: 2, status: "pending", amount: 40 },
  { id: 3, status: "pending", amount: 150 },
  { id: 4, status: "cancelled", amount: 90 },
  { id: 5, status: "delivered", amount: 60 },
  { id: 6, status: "pending", amount: 200 },
];

const statusOrder = Object.groupBy(orders, (product) => {
  if (product.status === 'delivered') {
    return 'completed';
  }
  if (product.status === 'pending' && product.amount > 100) {
    return 'high-priority';
  }
  if (product.status === 'pending' && product.amount <= 100) {
    return 'low-priority';
  }
  if (product.status === 'cancelled') {
    return 'cancelled'
  }
})

console.log(statusOrder);

// fill()

// 1
const scores = [80, 90, 30, 45, 20, 55, 70];
scores.fill(0, 2, 5);
console.log(scores);

// 2
const seats = new Array(8).fill('open')
seats.fill('reserved', 0, 3);
seats.fill('reserved', 5, 8);
console.log(seats);

// Array.from()

// 1
const str = 'javascript';
const unique = Array.from(new Set(str));
console.log(unique);

// 2
const n = 5;

const mul = Array.from({ length: 10 }, (_, i) => {
  // console.log(n, i + 1);
  return n * (i + 1);
});
console.log(mul);

// 3
const table = Array.from({ length: 3 }, (_, i) =>
  Array.from({ length: 3 }, (_, j) => (i + 1) * (j + 1))
);
console.log(table);

// Array Method overall
const studentsRecord = [
  { name: 'Hari', marks: 90, department: 'CSE' },
  { name: 'John', marks: 45, department: 'ECE' },
  { name: 'Alice', marks: 80, department: 'CSE' },
  { name: 'Bob', marks: 30, department: 'EEE' },
  { name: 'Sam', marks: 70, department: 'ECE' },
];

// filter
const passedStudent = studentsRecord.filter((student) => student.marks >= 35);
console.log(passedStudent);

// map
const studentNames = studentsRecord.map((student) => student.name)
console.log(studentNames);

// reduce
const averageMark = studentsRecord.reduce((acc, cur, i, arr) => acc + cur.marks / arr.length, 0);
console.log(averageMark);

// find
const findHari = studentsRecord.find((student) => student.name === 'Hari');
console.log(findHari);

// some
const checkfailedStudents = studentsRecord.some((student) => student.marks <= 30);
console.log(checkfailedStudents);

// Every
const checkPassedStudents = studentsRecord.every((student) => student.marks >= 35);
console.log(checkPassedStudents);

// Object.groupBy
const groupByDepartment = Object.groupBy(studentsRecord, (student) => student.department);
console.log(groupByDepartment);

// toSorted
const sortByMark = studentsRecord.toSorted((a, b) => a.marks - b.marks);
console.log(sortByMark);