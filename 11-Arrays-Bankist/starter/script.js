'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    // console.log(i, mov);
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

displayMovements(account1.movements);

// Later need to modify some changes
// Displaying the balance
/*
const calcDisplayBalance = function (balance) {
  balance.forEach(function (bal) {
    bal.userBalance = bal.movements.reduce((acc, curr, i, arr) => {
      return acc + curr
    }, 0)
    labelBalance.textContent = `${bal.userBalance}€`
  })
}

calcDisplayBalance(accounts)
console.log(accounts);
*/

// Displaying the balance
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`
}

calcDisplayBalance(account1.movements)

const calcDisplaySummary = function (movements) {

  // Display incomes
  const incomes = movements.filter((mov) => mov > 0).reduce((acc, mov) => acc + mov, 0);
  console.log(incomes);

  labelSumIn.textContent = `${incomes}€`

  // Display out
  const out = movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov, 0)
  console.log(out);

  labelSumOut.textContent = `${Math.abs(out)}€`

  // Display interest
  const interest = movements.filter((mov) => mov > 0).map((mov) => mov * 1.2 / 100).filter((mov, i, arr) => {
    console.log(i, arr);
    return mov >= 1;
  }).reduce((acc, mov) => acc + mov, 0)
  console.log(interest);

  labelSumInterest.textContent = `${interest}€`

}

calcDisplaySummary(account1.movements)

// Computing Usernames
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner.toLowerCase().split(' ').map((word) => word[0]).join('');
    // console.log(acc.userName);
  })
}

createUsernames(accounts)
console.log(accounts);



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// SIMPLE ARRAY METHODS
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(2, arr.length - 1));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr.splice(1, 2));
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('-'));
*/

// forEach
/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('-----FOR OF-----');
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:You deposited ${Math.abs(movement)}`);
  } else {
    console.log(`Movement ${i + 1}:You withdraw ${Math.abs(movement)}`);
  }
}


console.log('----FOR EACH-----');

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}:You deposited ${Math.abs(movement)}`);
    console.log(array);
  } else {
    console.log(`Movement ${index + 1}:You withdraw ${Math.abs(movement)}`);
  }
})
  */


// Maps
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  // console.log(`${map}`);
})

// Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
})
*/

// map method
/*
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
})

console.log(movements);
console.log(movementsUSD);

// using for of loop to achieve same thing
const movUSD = []
for (const mov of movements) {
  movUSD.push(mov * eurToUsd);
}
console.log(movUSD);

// arrow function map
const movementsUSDArrow = movements.map((mov) => mov * eurToUsd)
console.log(movementsUSDArrow);

const movementsDescription = movements.map((mov, i) =>
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}💸`
)

console.log(movementsDescription);
*/

// filter method
/*
console.log(movements);
const deposits = movements.filter(function (mov) {
  return mov > 0
})

console.log(deposits);

const withdraws = movements.filter((mov) => mov < 0);
console.log(withdraws);
*/

// reduce method
/*

console.log(movements);

// accumulator -> SNOWBALL(like a counter variable )
const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${acc} - [${arr}]`);
  return acc + cur
}, 0)
console.log(balance);

// Maximum value

const maximumValue = movements.reduce((acc, curr) => {
  return acc < curr ? acc = curr : acc;
}, movements[0])

console.log(maximumValue);
*/

// Chaining Method
/*
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/

// find method
const firstWithdrawal = movements.find((mov) => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((ac) => {
  return ac.owner === 'Jessica Davis';
})
console.log(account);

for (const ac of accounts) {
  if (ac.owner === 'Jessica Davis') {
    console.log(ac);
  }
}