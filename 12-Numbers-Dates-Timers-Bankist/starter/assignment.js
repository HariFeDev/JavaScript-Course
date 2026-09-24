'use strict';
console.log('---------- Assignment Challenges -------------');

// 1
const inputs = ["3.14159", "42", "abc", "Infinity", "  7.8  "];

const checkNum = inputs.map((num) => {
  return Number.isFinite(Number(num)) ? Number(Number((num)).toFixed(2)) : 'Invalid number'
})
console.log(checkNum);

// 2
const num = 94823;
console.log(Math.floor(Math.log10(num)) + 1);

// 3
const date1 = new Date("2024-01-01");
const date2 = new Date("2024-03-15");

const calcDaysPassed = (date1, date2) => {
  return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
}

console.log(calcDaysPassed(date1, date2));

// 4
const deadlines = [
  new Date("2026-09-25"),
  new Date("2026-09-28"),
  new Date("2026-10-05"),
  new Date("2026-09-30"),
  new Date("2026-10-01"),
];

const today = new Date()
console.log(today);

const sevenDaysLater = new Date(today);
sevenDaysLater.setDate(today.getDate() + 7);
console.log(sevenDaysLater);

const deadlineDate = deadlines.filter((deadline) => {
  return deadline >= today && deadline <= sevenDaysLater;
}).map((date) => {
  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getDate()}`
})
console.log(deadlineDate);

// 5
let time = 10;
/*
const timer = setInterval(() => {
  console.log(time);
  time--;
  if (time === 0) {
    console.log(time);
    console.log(`Time's UP!!`);
    clearInterval(timer);
  }
}, 1000)
*/


// 6
const trafficLight = () => {
  setTimeout(() => {
    console.log('🟢 Green');   // 3s
    setTimeout(() => {
      console.log('🟡 Yellow'); // 1s
      setTimeout(() => {
        console.log('🔴 Red');  // 2s
        trafficLight();
      }, 2000);
    }, 1000);
  }, 3000);
};

trafficLight();