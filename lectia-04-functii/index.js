"use strict";

//! Example 1 - Body mass index

// Write a function calcBMI(weight, height) that calculates and returns the body mass index of a person.
// To do this, divide the weight in kilograms by square of a person's height in meters.

// The weight and height will be specially passed as strings.
// Non - integer numbers can be specified as 24.7 or 24.7, i.e.a comma can be used as a decimal separator.

// Body mass index must be rounded to one decimal place;

function calcBMI(weight = "", height = "") {
  //   console.log(typeof weight, typeof height);
  const parsedWeight = Number(weight.replace(",", "."));
  const parsedHeight = Number(height.replace(",", "."));
  //   console.log(typeof parsedHeight, typeof parsedWeight);

  return (parsedWeight / parsedHeight ** 2).toFixed(1);
}

const bmi = calcBMI("88,3", "1.75");
const bmiDenis = calcBMI("82,3", "1.82");
console.log(bmi); // 28.8
console.log(bmiDenis);

//! Example 2 - Smaller of numbers

// Write a function min(a,b) that returns the smaller of the numbers a and b.

const min = function (a, b) {
  //   if (a < b) {
  //     return a;
  //   } else return b;

  //   return a < b ? a : b;

  return Math.min(a, b);
};

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

//! Example 3 - Area of a rectangle

// Write a function getRectArea(dimensions) to calculate the area of a rectangle with sides,
// the values of which will be passed to the dimensions parameter as a string.Values are guaranteed to be separated by a space.

function getRectArea(dimensions) {
  const data = dimensions.split(" ");
  return Number(data[0]) * Number(data[1]);
}

// console.log(getRectArea("8 11"));

//! Example 4 - Element logging

// Write a function logItems(items) that takes an array and uses a for loop that for each element of the array
// will print a message to the console in the format < item number > - <item value >.The numbering of elements should start with 1.

// For example, for the first element of the array ['Mango', 'Poly', 'Ajax'] with index 0 will print 1 - Mango and for index 2 will print 3 - Ajax.

function logItems(items = ["Denis", "Paul"]) {
  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1}:${items[i]}`);
  }
}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

//! Example 5 - Contact logging

// Write a function printContactsInfo(names, phones) that prints to the console the name and the user's phone number.
// The names and phones parameters will be passed strings of names and phone numbers separated by commas.
// Sequence number of names and phone numbers in the rows indicate a match.Number of names and phones guaranteed to be the same.

function printContactsInfo(names, phones, age) {
  const namesArr = names.split(",");
  const phonesArr = phones.split(",");
  const ageArr = age.split(",");
  //   console.log(namesArr);
  //   console.log(phonesArr);
  //   console.log(ageArr);

  for (let i = 0; i < namesArr.length; i++) {
    console.log(
      `Name:${namesArr[i]} - Phone:${phonesArr[i]} - Age:${ageArr[i]}`
    );
  }
}

function printContactsInfo(...rest) {
  console.log(rest);
  const namesArr = rest[0].split(",");
  const phonesArr = rest[1].split(",");
  const ageArr = rest[2].split(",");

  for (let i = 0; i < namesArr.length; i++) {
    console.log(
      `Name:${namesArr[i]} - Phone:${phonesArr[i]} - Age:${ageArr[i]}`
    );
  }
}

printContactsInfo(
  "Jacob,William,Solomon,Artemis",
  "89001234567,89001112233,890055566377,890055566300",
  "33,21,36,54"
);

//! Example 6 - Finding the largest element

// Write a function findLargestNumber(numbers) that looks for the largest number in array.

function findLargestNumber(numbers) {
  const largestNumber = numbers.sort(function (a, b) {
    return b - a;
  });
  //   console.log(largestNumber);
  return largestNumber[0];
}

function findLargestNumber(numbers) {
  let largestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

function findLargestNumber(numbers) {
  // Math.max(...numbers) === Math.max(2, 17, 94, 1, 23, 37)
  return Math.max(...numbers);
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94

//! Example 7 - Average value

// Write a calcAverage() function that takes an arbitrary number of arguments and returns their average.
// All arguments will be only numbers.

function calcAverage(...rest) {
  // ...rest === [1,2,3,4]
  let sum = 0;
  console.log(sum);
  // [1,2,3,4]
  for (let i = 0; i < rest.length; i++) {
    console.log(`Valorea de adunat:${rest[i]} - index:${i}`);
    console.log(`sum = ${sum} + ${rest[i]} `);
    sum += rest[i]; // sum = sum + rest[i]
    console.log(`sum: ${sum}`);
  }

  return sum / rest.length;
}

console.log(calcAverage(1, 2, 3, 4)); // 2.5
console.log(calcAverage(14, 8, 2)); // 8
console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

//! Example 8 - Collection of courses (includes, indexOf, push, etc.)

// Write functions to work with the courses collection of training courses:

// addCourse(name) - adds a course to the end of the collection
// removeCourse(name) - removes a course from the collection
// updateCourse(oldName, newName) - changes the name to a new one

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

function addCourse(name) {
  if (courses.includes(name)) {
    console.log("Already exist!");
    return;
  }
  courses.push(name);
}

addCourse("Express");
console.log(courses);
addCourse("HTML");
console.log(courses);

function removeCourse(name) {
  const courseIndex = courses.indexOf(name);
  if (courseIndex === -1) {
    console.log(`Nu exista un curs cu acest nume - ${name}`);
    return;
  }
  courses.splice(courseIndex, 1);
}
removeCourse("React");
console.log(courses);

function updateCourse(name, newName) {
  const courseIndex = courses.indexOf(name);
  if (courseIndex === -1) {
    console.log(`Nu exista un curs cu acest nume - ${name}`);
    return;
  }
  courses[courseIndex] = newName;
}

updateCourse("Express", "NodeJS");
console.log(courses);
