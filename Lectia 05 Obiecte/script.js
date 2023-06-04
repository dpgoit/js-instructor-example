"use strict";
//! Example 1 - Object Basics
// Write a script that, for the user object, successively:

// adds a mood field with value 'happy'
// replaces the value hobby to 'skydiving'
// replaces premium to false
// prints the contents of the user object in key:value format using Object.keys() and for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";

// const state = "premium";
// user.hobby = "skydiving";
// user[state] = false; // user.premium

// const arr = Object.keys(user);

// for (let key of arr) {
//   console.log(`${key} - ${user[key]}`);
// }

// console.log(arr);
// console.log(user);

//! Example 2 - Object.values() method

// We have an object that stores our team salaries.Write code for summing all salaries and store the result in the sum variable.
// Should get 390. If the salaries object is empty, then the result should be 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salariesArr = Object.values(salaries);
// // const salariesKeys = Object.keys(salaries);

// let salariesSum = 0;
// for (const value of salariesArr) {
//   salariesSum += value;
// }

// console.log(salariesSum);

// !Example 3 - Array of objects

// Write a function calcTotalPrice(stones, stoneName) that takes an array of objects and a string with the name of the stone.
// The function calculates and returns the total cost of stones with the same name, price and quantity from the object

// const stones = [
//   { name: "Emerald", price: 1300, quantity: 4 },
//   { name: "Diamond", price: 2700, quantity: 3 },
//   { name: "Sapphire", price: 400, quantity: 7 },
//   { name: "Rubble", price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (stones, stoneName) {
//   let result = 0;
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       result = stone.price * stone.quantity;
//     }
//   }
//   return result;
// };

// let total = calcTotalPrice(stones, "Diamond");
// console.log(total);

//! Example 4 - Complex tasks

// Write a script for managing a personal account of an Internet bank.
// There is an account object in which it is necessary to implement methods for working with balance and transaction history.

/*
 * There are only two types of transaction.
 * You can deposit or withdraw money from your account.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Each transaction is an object with properties: id, type and amount
 */

const account = {
  // Current account balance
  balance: 0,

  // Transaction History
  transactions: [],

  /*
   * Method creates and returns a transaction object.
   * Accepts amount and type of transaction.
   */
  createTransaction(amount, type) {
    const transaction = {
      amount,
      type,
      id: 123,
    };
    return transaction;
  },

  /*
   * The method responsible for adding the amount to the balance..
   * Accepts the amount of the transaction.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  /*
   *The method responsible for withdrawing the amount from the balance.
   *
   * If amount is greater than the current balance, display a message
   * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Nu ai destui banuti.");
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  /*
   * The method returns the current balance
   */
  getBalance() {
    console.log(this.balance);
  },

  /*
   * The method searches and returns the transaction object by id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        console.log(transaction);
      }
    }
  },

  /*
   * The method returns the amount of funds
   *a specific type of transaction from the entire history of transactions
   */
  getTransactionTotal(type) {
    console.log(type);
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

account.deposit(1000);
account.withdraw(500);
account.deposit(1000);
account.deposit(2000);
account.withdraw(500);

console.log(account);
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

//! Example 4 - Complex tasks

// Write a script for managing a personal account of an Internet bank.
// There is an account object in which it is necessary to implement methods for working with balance and transaction history.

/*
 * There are only two types of transaction.
 * You can deposit or withdraw money from your account.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Each transaction is an object with properties: id, type and amount
 */

const account = {
  // Current account balance
  balance: 0,

  // Transaction History
  transactions: [],

  /*
   * Method creates and returns a transaction object.
   * Accepts amount and type of transaction.
   */
  createTransaction(amount, type) {},

  /*
   * The method responsible for adding the amount to the balance..
   * Accepts the amount of the transaction.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history
   */
  deposit(amount) {},

  /*
   *The method responsible for withdrawing the amount from the balance.
   *
   * If amount is greater than the current balance, display a message
   * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
   */
  withdraw(amount) {},

  /*
   * The method returns the current balance
   */
  getBalance() {},

  /*
   * The method searches and returns the transaction object by id
   */
  getTransactionDetails(id) {},

  /*
   * The method returns the amount of funds
   *a specific type of transaction from the entire history of transactions
   */
  getTransactionTotal(type) {},
};
