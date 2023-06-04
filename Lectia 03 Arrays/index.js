"use strict";
// let x = 3;
// const y = x++;
// console.log(x);
// console.log(y);

// let x = 3;
// const y = x;
// x = x + 1;
// console.log(x);
// console.log(y);

// let x = 3;
// const y = ++x;
// console.log(x);
// console.log(y);

// --
let x = 3;
x = x + 1;
const y = x;
// console.log(x);
// console.log(y);
//! Example 1 - Basic operations with an array

// Create an array genres with elements "Jazz" and "Blues".
// Add "Rock and Roll" to the end.
// Print the first element of the array to the console.
// Print the last element of the array to the console. The code should work for an array random length.
// Remove the first element and print it to the console.
// Insert "Country" and "Reggae" at the beginning of the array.

const genres = ["Jazz", "Blues"];
// const genres2 = new Array("Jazz", "Blues");
console.log(genres);
// console.log(genres2);
genres.push("Rock and Roll");
console.log(genres);
const rock = genres[2];
console.log(rock);
const lastItem = genres[genres.length - 1];
console.log(lastItem);
const firstItem = genres[0];
console.log(firstItem);

const removeFirstElement = genres.shift();
console.log(removeFirstElement);
console.log(genres);
const remvoeLastElement = genres.pop();
console.log(remvoeLastElement);
console.log(genres);

genres.unshift("Country", "Reggae");
console.log(genres);

//! Example 2 - Arrays and Strings

// Write a script to calculate the area of a rectangle with sides, whichvalues values are stored
// in the values variable as a string. Values guaranteed separated by a space.

const values = "8 11";
const arr = values.split(" ");
console.log(arr);
const firstValue = Number(arr[0]);
const lastValue = Number(arr[arr.length - 1]);
console.log(firstValue);
console.log(lastValue);
const total = firstValue * lastValue;
console.log(total);

//! Example 3 - Array iteration

// Write a script to iterate over the fruits array with a for loop.
// For each array element print a string in the format element_number: element_value to the console.
// Element numbering must start from 1.

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Number ${i + 1}: fruit:${fruits[i]}`);
}

//! Example 4 - Arrays and Loops

// Write a script that prints the user's name and phone number to the console.
// The names and phones variables store strings of names and phone numbers, separated by commas.
// The sequence number of names and phone numbers in the lines indicates a match.
// The number of names and phone numbers is guaranteed to be the same.

const names = "Jacob,William,Solomon,Kate";
const phones = "38001234567,38001112233,380055566377,38099912233";

const arrName = names.split(",");
// console.log(arrName);
const arrPhones = phones.split(",");
// console.log(arrPhones);

// console.log(`Name:${arrName[0]} - Phone:${arrPhones[0]}`);
// console.log(`Name:${arrName[1]} - Phone:${arrPhones[1]}`);
// console.log(`Name:${arrName[2]} - Phone:${arrPhones[2]}`);
// console.log(`Name:${arrName[3]} - Phone:${arrPhones[3]}`);

for (let i = 0; i < arrName.length, i < arrPhones.length; i++) {
  console.log(i);
  console.log(`Name:${arrName[i]} - Phone:${arrPhones[i]}`);
}

//! Example 5 - Arrays and Strings

// Write a script that prints to the console all the words of a string except the first and the last one.
// The resulting string must not start or end whitespace character.The script should work for any line.

// ? Metoda 1
const string = "Welcome to the future";
const words = string.split(" ");
console.log(words);
words.shift();
console.log(words);
words.pop();
console.log(words);
const str = words.join(" ");
console.log(str);

// ? Metoda 2
const string = "Welcome to the future";
const words = string.split(" ");
console.log(words);
console.log(words.slice(1, 3).join(" "));
console.log(words);

//! Example 6 - Arrays and Strings
// Write a script that "unwraps" a string (reverse letter order) and prints it to the console.
// const string = "Welcome to the future";
const arr = string.split("");
console.log(arr);
const rev = arr.reverse();
console.log(rev);
const result = rev.join("");
console.log(result);

const result = string.split(" ").reverse().join(" ");
console.log(result);

//! Example 7 - Sorting an array

// Write a script to sort an array of strings alphabetically by the first letter of an element.

const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

console.log(langs.sort());
console.log(langs);
for (let i = 0; i < langs.length - 1; i++) {
  for (let j = i + 1; j < langs.length; j++) {
    console.log(`${langs[i]} > ${langs[j]}`);
    if (langs[i] > langs[j]) {
      const temp = langs[i];
      langs[i] = langs[j];
      langs[j] = temp;
    }
  }
  console.log(langs);
}

//! Example 8 - Search for an element

// Write a script to find the smallest number in an array. The code should work for any array of numbers. Use a loop to solve problems.

const numbers = [2, 17, 95, 1, 23, 8];
// console.log(numbers.sort((a, b) => b - a));
let min = numbers[0];

for (const number of numbers) {
  if (min > number) {
    min = number;
  }
}
console.log(min);
