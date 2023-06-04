"use strict";

// ! Example 1 - Mathematical operators

let apples = 300;
const grapes = 200;

// total
const total = apples + grapes;
// console.log(total);
// dif
const dif = apples - grapes;
// console.log(dif);

// ! Example 2 - Combined operators
// apples = apples + 200;
apples += 200;
// console.log(apples);

// !Example 3 - Operators Priority
const result = 108 + 223 - 2 * 5;
// console.log(result);

// !Example 4 - Math class
// Math.floor(num) - returnează valoarea rotunjită în jos
// Math.ceil(num) - returnează valoarea rotunjită în sus
// Math.round(num) - returnează cel mai apropiat număr întreg

const value = 25.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// !Example 5 - Template lines
const companyName = "GoIT";
const studentsModuleOne = 25;
const studentsModuleTwo = 30;

// const message =
//   companyName + " are " + studentsModuleOne + studentsModuleTwo + " studenti.";

const message = `${companyName} are ${
  studentsModuleOne + studentsModuleTwo
} studenti`;
// console.log(message);

// ! Example 6 - String methods and chaining
// Indicele de masa corporala?
// BMI = greutate / (inaltime * inaltime);

let weight = "88,3";
let height = "1.75";

let convertedWeight = parseFloat(weight);
let convertedHeight = parseFloat(height);

// const bmi = convertedWeight / (convertedHeight * convertedHeight);
// console.log(bmi.toFixed(1));
// const bmi = convertedWeight / Math.pow(convertedHeight, 2);
// console.log(bmi.toFixed(1));

// !Example 7 - Comparison operators and type casting

// console.log(5 > 4); // true

// console.log(10 >= '7'); // true

// console.log('2' > '12'); // true

// console.log('2' < '12'); // false

// console.log('4' == 4); // true

// console.log('6' === 6); // false

// console.log('false' === false); // false

// console.log(1 == true); // true

// console.log(1 === true); // false

// console.log('0' == false); // true

// console.log('0' === false); // false

// console.log('Papaya' < 'papaya'); // true, pentru ca P mare de la Papaia este dupa p mic in alfabet

// console.log('Papaya' === 'papaya'); // false

// console.log(undefined == null); // true

// console.log(undefined === null); // false

// !Example 8 - Logical operators
// What will be the result of the expressions?

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && "kiwi"); // 'kiwi'

// console.log(true && 0 && "kiwi"); // '0'

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); // false

// console.log(null || (2 && 3) || 4); // true
