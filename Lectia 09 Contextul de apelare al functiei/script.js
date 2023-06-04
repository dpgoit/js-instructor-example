"use strict";

// ! Example 1 - Jewelry workshop
// Write a calcTotalPrice(stoneName) method that takes the name of a stone, calculates and returns the
//  total cost of stones with that name, price, and quantity from the stones property.
const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    // return this.stones.reduce((acc, stone) => {
    //   if (stone.name === stoneName) {
    //     return stone.price * stone.quantity;
    //   }
    //   return acc;
    // }, 0);

    // const currentStone = this.stones.find((stone) => stoneName === stone.name);
    // return currentStone.price * currentStone.quantity;

    return this.stones.reduce(
      (acc, { name, price, quantity }) =>
        name === stoneName ? (acc = price * quantity) : acc,
      0
    );
  },
};

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// !Example 2 - Phone book
// Make methods' refactoring of the phonebook object to make the code work.
const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: "default",
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
    return this.contacts;
  },
  generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// console.log(phonebook.contacts);

//! Example 3 - Calculator
// Create a calculator object with three methods:

// read(a, b)- takes two values and stores them as object properties.
// add() - returns the sum of the stored values.
// mult() - multiplies the stored values and returns the result.
const calculator = {
  a: 0,
  b: 0,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  add() {
    return this.a + this.b;
  },

  mult() {
    return this.a * this.b;
  },
};

// console.log(calculator.read(3, 5));
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

//! Exercițiu 4: Utilizarea call() cu funcții înlănțuite

// Ai un obiect person, care are o metodă introduce. Metoda afișează detaliile despre persoană.
// Ai un alt obiect student, care nu are această metodă.
// Folosește call() pentru a împărtăși metoda introduce cu obiectul student și adaugă detaliile specifice unui student, precum grade și major.

let person = {
  name: "Paul",
  varsta: 30,
  introduce: function (culoarePar) {
    console.log(
      `Nume ${this.name}, Varsta ${this.varsta}, Culoare Par: ${culoarePar}`
    );
  },
};

let student = {
  name: "Ionut",
  varsta: 22,
  facultatea: "Arte",
};

let profesor = {
  name: "Dan",
  varsta: 40,
};

// person.introduce("blond");
// person.introduce.call(student, "brunet");
// person.introduce.call(profesor, "brunet");

let addCuloarePar = person.introduce.bind(student);

addCuloarePar("brunet");
addCuloarePar("blond");
