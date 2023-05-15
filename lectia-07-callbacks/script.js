"use strict";

//! Example 1 - Function callback

// Write the following functions:
// createProduct(obj, callback) - accepts a product object without an id, and also callback. The function creates a product object by adding a unique identifier to it in property id and calls the callback passing it the created object.
// logProduct(product) - callback accepting a product object and logging it to console
// logTotalPrice(product) - callback receiving product object and logging the total value of the item in the console

// function createProduct(obj, callback) {
//   const product = { id: Date.now(), ...obj };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   const { price, quantity } = product;
//   console.log(price * quantity);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

//! Example 2 - Function callback

// Add methods withdraw(amount, onSuccess, onError) to the account object and deposit(amount, onSuccess, onError),
//     where the first parameter is the amount of the operation, and second and third are callbacks.

// The withdraw method raises onError if amount is greater than TRANSACTION_LIMIT or this.balance,
//     and onSuccess otherwise.deposit method raises onError if amount is greater than TRANSACTION_LIMIT or less
//     or either zero and onSuccess otherwise.

//
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Denis",
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Nu poti retrage mai mult de ${TRANSACTION_LIMIT}!`);
//     } else if (amount > this.balance) {
//       onError(`Nu poti retrage mai mult de ${this.balance}`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Ai retras ${amount}, in cont mai ai ${this.balance}!`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Nu poti depune mai mult de ${TRANSACTION_LIMIT}!`);
//     } else if (amount <= 0) {
//       onError(`Suma pe care o poti depunde trebuie sa fie mai mare de 0!`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Acum ai in cont ${this.balance}!`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//! Example 3 - Function callback

// Write a function each(array, callback) that takes as its first parameter array, and the second - a function
// that will be applied to each element of the array.The each function must return a new array whose elements
// will be the results of callback call.

function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  console.log(newArr);
  return newArr;
}

// each([1, 2, 3, 4, 5, 6], function (value) {
//   return value * 2;
// });

// each([1, 2, 3, 4, 5, 6], function (value) {
//   return value - 10;
// });

// each([1, 2, 3, 4, 5, 6], function (value) {
//   return Math.pow(value, 2);
// });

// each([1.2, 5.3, 2.1, 16.3, 9.7, 5.3, 6.2], function (value) {
//   return Math.floor(value);
// });

// each([1.2, 5.3, 2.1, 16.3, 9.7, 5.3, 6.2], function (value) {
//   return Math.ceil(value);
// });

//! Example 4 - Function callback

// Write the following functions:
// createProduct(obj, callback) - accepts a product object without an id, and also callback. The function creates a product object by adding a unique identifier to it in property id and calls the callback passing it the created object.
// logProduct(product) - callback accepting a product object and logging it to console
// logTotalPrice(product) - callback receiving product object and logging the total value of the item in the console

// function createProduct(obj, callback) {
//   const product = { id: Date.now(), ...obj };
//   callback(product);
// }

// const logProduct = (product) => console.log(product);

// const logTotalPrice = (product) =>
//   console.log(product.price * product.quantity);

// // createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

//! Example 5 - Function callback

// Write a function each(array, callback) that takes as its first parameter array, and the second - a function
// that will be applied to each element of the array.The each function must return a new array whose elements
// will be the results of callback call.

// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   console.log(newArr);
//   return newArr;
// }

// each([1, 2, 3, 4, 5, 6], (value) => value * 2);

// each([1, 2, 3, 4, 5, 6], (value) => value - 10);

// each([1, 2, 3, 4, 5, 6], (value) => Math.pow(value, 2));

// each([1.2, 5.3, 2.1, 16.3, 9.7, 5.3, 6.2], (value) => Math.floor(value));

// each([1.2, 5.3, 2.1, 16.3, 9.7, 5.3, 6.2], (value) => Math.ceil(value));

//! Example 6 - forEach method

// Make the code refactoring using forEach method and arrow functions.

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// const logItems = (items) =>
//   items.forEach((element, index, array) =>
//     console.log(`${index + 1} - ${element}`)
//   );

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

//! Example 7 - forEach method

// Make the code refactoring using forEach method and arrow functions.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");

//   nameList.forEach((element, index) => {
//     console.log(`${element} - ${phoneList[index]}`); //phoneList[1] phoneList[2]
//   });
// };

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

//! Example 8 - forEach method

// Make the code refactoring using forEach method and arrow functions.

// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

const calсulateAverage = (...args) => {
  let total = 0;
  args.forEach((el) => (total += el));
  return total / args.length;
};

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
