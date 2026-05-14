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

// strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
const numbers = [1, 2]
console.log(movements);
// console.log(movements.sort());

// return < 0, A, B (Keep order)
// return > 0, B, A (switch order)

// Ascending
movements.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1
  }
});
console.log(movements);

// Descending
movements.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1
  }
});
console.log(movements);