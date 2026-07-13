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
  type: 'premium'
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard'
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium'
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic'
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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`
}


const calcDisplaySummary = function (acc) {
  console.log(acc);

  // Display incomes
  const incomes = acc.movements.filter((mov) => mov > 0).reduce((acc, mov) => acc + mov, 0);
  console.log(incomes);

  labelSumIn.textContent = `${incomes}€`

  // Display out
  const out = acc.movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov, 0)
  console.log(out);

  labelSumOut.textContent = `${Math.abs(out)}€`

  // Display interest
  const interest = acc.movements.filter((mov) => mov > 0).map((mov) => mov * acc.interestRate / 100).filter((mov, i, arr) => {
    console.log(i, arr);
    return mov >= 1;
  }).reduce((acc, mov) => acc + mov, 0)
  console.log(interest);

  labelSumInterest.textContent = `${interest}€`

}


// Computing Usernames
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner.toLowerCase().split(' ').map((word) => word[0]).join('');
    // console.log(acc.userName);
  })
}

createUsernames(accounts)
console.log(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
}

// Event handler (Login implementation)
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find((account) => account.userName === inputLoginUsername.value);

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = 100;

    // Clear the input fileds
    // Assignment operator right to left
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
})

// Transfer Money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find((acc) => acc.userName === inputTransferTo.value)

  // Clearing the input fileds
  inputTransferTo.value = inputTransferAmount.value = '';



  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.userName !== currentAccount.userName) {

    console.log(amount, receiverAcc);

    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some((mov) => mov >= amount / 10)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  };
  inputLoanAmount.value = '';
})

// Close Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('delete');

  if (currentAccount.userName === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
    console.log(`Successfully deleted: ${currentAccount.userName}`);

    const index = accounts.findIndex((acc) => {
      return acc.userName === currentAccount.userName;
    })

    console.log(index);

    // Delete the account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  // Reset fields
  inputCloseUsername.value = inputClosePin.value = '';
})

// Sort Balance
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})


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
/*
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

*/

// The New findLast and findLastIndex Methods

/*

console.log(movements);
const lastwithdrawal = movements.findLast(mov => mov < 0);
console.log(lastwithdrawal);

const latestLargeMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 2000);
console.log(latestLargeMovementIndex);
console.log(`Your latest large movement was ${movements.length - latestLargeMovementIndex - 1} movements ago`);

*/

// Some
/*
// Includes - for equality
console.log(movements);
console.log(movements.includes(-130));

// some - for condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);
*/

// Every
/*
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// Separate callback
const deposit = (mov) => mov > 0;
console.log(deposit);
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

*/

// Flat
/*

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);
console.log(accountMovements.flat());
console.log(Math.abs(accountMovements.flat().reduce((acc, curr) => acc + curr), 0));

const overallBalance = accounts.map((acc) => acc.movements).flat().reduce((acc, curr) => acc + curr, 0);
console.log(overallBalance);

// Flat Map

const overallBalance2 = accounts.flatMap((acc) => acc.movements).reduce((acc, curr) => acc + curr, 0);
console.log(overallBalance2);

*/

// sort

// sort in strings

/*
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

owners.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
})
console.log(owners);

// sort in Numbers
// const numbers = [1, 2]
console.log(movements);
// console.log(movements.sort());

// return < 0, A, B (Keep order) -> return -1
// return > 0, B, A (switch order) -> return 1

// Ascending
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1
//   }
// });

movements.sort((a, b) => a - b)
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return 1
//   }
// });

movements.sort((a, b) => b - a)
console.log(movements);
*/

// Array Grouping
/*
console.log(movements);

const groupedMovements = Object.groupBy(movements, (movement) => {
  return movement > 0 ? 'deposits' : 'withdrawals'
});
console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, (account) => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) {
    return 'very active';
  }
  if (movementCount >= 4) {
    return 'active';
  }
  if (movementCount >= 1) {
    return 'moderate';
  }
  return 'inactive';
})

console.log(groupedByActivity);

// Normal way
const groupedAccounts = Object.groupBy(accounts, (account) => {
  return account.type;
});

// Destructuring way

// const groupedAccounts = Object.groupBy(accounts, ({ type }) => {
//   return type;
// });

console.log(groupedAccounts);
*/

// More ways of creating and filling arrays
/*
const arr = [1, 2, 3, 4, 5, 6];
console.log(new Array(1, 2, 3, 4, 5, 6));

// Empty arrays + fill method

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));

x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 5);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 13);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => {
  return i + 1;
})
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '')))
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
})
*/


// Non - Destructive: toReversed, toSorted, toSpliced, with
// This will not mutate the orginal array

// toReversed (reverse)

/*
console.log(movements);
const reverseMov = movements.toReversed();
console.log(reverseMov);
console.log(movements);

// toSorted (sort)
// Numbers -> Ascending Order
const numbers = [5, 7, 32, 10, 24];
const ascendingSorted = numbers.toSorted((a, b) => a - b);
console.log(ascendingSorted);

// Numbers -> Descending Order
const descendingSorted = numbers.toSorted((a, b) => b - a);
console.log(descendingSorted);
// console.log(numbers);

// Strings -> Ascending order
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
const sortedOwnersAscending = owners.toSorted();
const sortedOwnersDescending = owners.toSorted((a, b) => b.localeCompare(a));

console.log(sortedOwnersAscending);
console.log(sortedOwnersDescending);

// Objects
const products = [
  { name: 'Shirt', price: 1200 },
  { name: 'Jeans', price: 1800 },
  { name: 'Top', price: 900 }
];

const sortedByPrice = products.toSorted((a, b) => a.price - b.price);
console.log(products);
console.log(sortedByPrice);

// tospliced (splice)
const ages = [30, 40, 50, 60, 70, 80, 90, 100];
const agelessThanSixty = ages.toSpliced(3, ages.length - 1);
console.log(agelessThanSixty);


// movements[1] = 2000;
console.log(movements);
const newMovements = movements.with(1, 2000);
console.log(newMovements);

*/

// Array Method Practice

// 1
const bankDepositSum = accounts.flatMap((acc) => acc.movements).filter((mov) => mov > 0).reduce((acc, curr) => acc + curr, 0);
console.log(bankDepositSum);

// 2
/*
// using filter method
const numDeposits1000 = accounts.flatMap((acc) => acc.movements).filter((mov) => mov >= 1000).length;
console.log(numDeposits1000);
*/

// using reduce method
const numDeposits1000 = accounts.flatMap((acc) => acc.movements).reduce((count, curr) => curr >= 1000 ? ++count : count, 0);
console.log(numDeposits1000);

// Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3
const { deposits, withdrawals } = accounts.flatMap((acc) => acc.movements).reduce((acc, curr) => {
  // curr > 0 ? acc.deposits += curr : acc.withdrawals += curr;
  acc[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
  return acc
}, { deposits: 0, withdrawals: 0 })
console.log(deposits, withdrawals);

// 4
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const titleCase = title.toLowerCase().split(' ').map((word) => exceptions.includes(word) ? word : capitalize(word)).join(' ');

  return capitalize(titleCase);
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

