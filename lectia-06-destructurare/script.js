"use strict";

// const userA = {
//   user: "Mango",
//   age: 20,
// };

// const userB = userA;
// userB.age = 30;

// console.log(userA.age, userB.age); // ??

// const userA = {
//   user: "Mango",
//   age: 20,
// };

// const userB = { ...userA };
// userB.age = 30;
// console.log(userA.age, userB.age); // ??

//! Example 1 - Destructuring

// Write the function so that it takes one object of the parameter instead of a set of independent arguments. - calcBMI

function calcBMI(weight, height) {
  const numericWeight = Number(weight.replace(",", "."));
  const numericHeight = Number(height.replace(",", "."));
  console.log(numericHeight, numericWeight);
  return Number(numericWeight / (numericHeight * numericHeight).toFixed(1));
}

// It was
console.log(calcBMI("88,3", "1.75"));
console.log(calcBMI("68,3", "1.65"));
console.log(calcBMI("118,3", "1.95"));

function calcBMI({ weight, height }) {
  const numericWeight = Number(weight.replace(",", "."));
  const numericHeight = Number(height.replace(",", "."));
  return Number(numericWeight / (numericHeight * numericHeight).toFixed(1));
}

function calcBMI(bodyData) {
  const { weight, height } = bodyData;
  const numericWeight = Number(weight.replace(",", "."));
  const numericHeight = Number(height.replace(",", "."));
  return Number(numericWeight / (numericHeight * numericHeight)).toFixed(1);
}

const bodyData = {
  weight: "88,3",
  height: "1.75",
};
// Is expected
console.log(calcBMI(bodyData));
console.log(
  calcBMI({
    weight: "68,3",
    height: "1.65",
  })
);
console.log(
  calcBMI({
    weight: "118,3",
    height: "1.95",
  })
);

//! Example 2 - Destructuring

// Rewrite the function so that it takes one object of the parameter instead of a set of independent arguments. - printContactsInfo

function printContactsInfo(names, phones) {
  const namesList = names.split(",");
  const phoneList = phones.split(",");
  console.log(namesList);
  console.log(phoneList);
  for (let i = 0; i < namesList.length; i++) {
    console.log(`${namesList[i]} - ${phoneList[i]}`);
  }
}

// It was
printContactsInfo(
  "Jacob,William,Solomon,Artemis",
  "89001234567,89001112233,890055566377,890055566300"
);

function printContactsInfo({ names, phones }) {
  const namesList = names.split(",");
  const phoneList = phones.split(",");
  //   console.log(namesList);
  //   console.log(phoneList);
  for (let i = 0; i < namesList.length; i++) {
    console.log(`${namesList[i]} - ${phoneList[i]}`);
  }
}

// // Is expected
printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});

//! Example 3 - Deep destructuring

// Rewrite the property so that it uses one object's parameter instead of a set of independent arguments.
// getBotReport

// set of independent arguments
function getBotReport(companyName, repairBots, defenseBots) {
  return `${companyName} has ${repairBots + defenseBots} bots in stock!`;
}

// It was
// console.log(getBotReport("Cyberdyne Systems", 150, 50));

function getBotReport({ companyName, bots }) {
  const { repair, defense } = bots;
  return `${companyName} has ${repair + defense} boots in stock!`;
}

// // Is expected
console.log(
  getBotReport({
    companyName: "Cyberdyne Systems",
    bots: {
      repair: 150,
      defense: 50,
    },
  })
);

//! Example 4 - Destructuring

// Write the function so that it accepts a parameters object with properties companyName
// and stock and display a report about the number of goods in the warehouse of any companies.
// use for of (getStockReport)

function getStockReport({ companyName, stock }) {
  let total = 0;
  const values = Object.values(stock);
  for (let value of values) {
    total += value;
  }
  return `${companyName} - total:${total}`;
}

console.log(
  getStockReport({
    companyName: "Cyberdyne Systems",
    stock: {
      repairBots: 150,
      defenceBots: 50,
      toSell: 300,
      toReturn: 200,
      eqwkjheqwk: 1000,
      eqwe: 200,
    },
  })
);
console.log(
  getStockReport({
    companyName: "Belacci",
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
);

// Example 5 - operation Spread

// Create a function (createContact(partialContact)) that it returns a new contact object with id
// and createdAt properties added, as well as list with value "default" if there is no such property in partialContact.

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }

function createContact(partialContact) {
  // ...partialContact
  return {
    list: "default",
    ...partialContact,
    id: generateId(),
    createdAt: Date.now(),
  };
}

// // ? console.log
console.log(
  createContact({
    name: "Mango",
    email: "mango@mail.com",
    list: "friends",
  })
);
console.log(
  createContact({
    name: "Poly",
    email: "poly@hotmail.com",
  })
);

//! Example 6 - Operation rest

// Write a transformUsername(user) function to return a new object with fullName property instead of firstName and lastName.

function transformUsername(user) {
  const { firstName, lastName, ...otherProps } = user;
  return {
    fullName: `${firstName} ${lastName}`,
    ...otherProps,
  };
}

console.log(
  transformUsername({
    id: 1,
    firstName: "Jacob",
    lastName: "Mercer",
    email: "j.mercer@mail.com",
    friendCount: 40,
  })
);

// // return la functie
transformUsername({
  id: 1,
  fullName: "Jacob Mercer",
  email: "j.mercer@mail.com",
  friendCount: 40,
});

console.log(
  transformUsername({
    id: 2,
    firstName: "Adrian",
    lastName: "Cross",
    email: "a.cross@hotmail.com",
    friendCount: 20,
  })
);
