"use strict";

//! Example 1 - User Input and Branching
// Using the if..else and prompt constructs, write code that will ask: "What is the official name of JavaScript?".
// If the user enters ECMAScript, then show an alert with the string "Correct!", otherwise - "Do not know? ECMAScript!"

// const answer = prompt("What is the official name of JavaScript?"); // ECMAScript
// const rightAnswer = "ECMAScript";

// if (answer === rightAnswer) {
//   alert("Correct!");
// } else {
//   alert(`Do not know? ${rightAnswer}`);
// }

//! Example 2 - Branching
// Write a script that prints the string "This is a positive number" to the console, if the user entered a number
// greater than zero in the prompt.If zero was entered, output to the console the string "This is zero".
// If a negative number is passed, in the console should be the string "This is a negative number".

// const userInput = prompt("Enter a number");

// if (userInput === null) {
//   console.log("Your input field is empty");
// } else if (Number(userInput) === 0) {
//   console.log("This is zero");
// } else if (Number(userInput) > 0) {
//   console.log("This is a positive number");
// } else if (Number(userInput) < 0) {
//   console.log("This is a negative number");
// } else {
//   console.log("Input a number");
// }

//! Example 3 - Nested branches
// Write a script that compares the numbers in variables a and b. If both values greater than 100,
// then print the maximum of them to the console.Otherwise, the console should show the sum of the value b and the number 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else {
//   console.log(b + 512);
// }

// !  "!=" (operatorul diferite de)

// const a = 11;
// const b = 10;

// if (a === b) {
//   console.log("a este egal cu b");
// } else {
//   console.log("a este diferit de b");
// }

// if (a !== b) {
//   console.log("a este diferit de b");
// } else {
//   console.log("a este egal cu b");
// }

// // ! '!' (not)
// const x = true;

// if (!x) {
//   console.log("x este fals");
// } else {
//   console.log("x este true");
// }

//! Example 5 - Link Formatting (endsWith)
// Write a script that checks if the value of the link variable ends symbol /. if not, add this character
// to the end of the link value.Use if...else construction.

// let link = "https://my-site.com/about";

// if (!link.endsWith("/") && link.includes("site")) {
//   link += "/";
// }

// console.log(link);

//! Example 9 - Project submission deadline (if...else)
// Write a script to display the project deadline time. Use if...else construction.

// If there are 0 days before the deadline - output the string "Today"
// If it's 1 day before the deadline - output the string "Tomorrow"
// If it's 2 days before the deadline - output the string "The day after tomorrow"
// If it's 3+ days before the deadline - print the string "Date in the future"

const daysUntilDeadline = 1;

// if (daysUntilDeadline === 0) {
//   console.log("Today");
// } else if (daysUntilDeadline === 1) {
//   console.log("Tomorrow");
// } else if (daysUntilDeadline === 2) {
//   console.log("The day after tomorrow");
// } else {
//   console.log("Date in the future");
// }

// switch (daysUntilDeadline) {
//   case 0: {
//     console.log("Today");
//     break;
//   }
//   case 1: {
//     console.log("Tomorrow");
//     break;
//   }
//   case 2: {
//     console.log("The day after tomorrow");
//     break;
//   }
//   default: {
//     console.log("Date in the future");
//   }
// }

//! Example 10 - The for loop
// Write a for loop that prints numbers in ascending order to the browser console from min to max,
// but only if the number is a multiple of 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

//! Example 11 - User Input and Branching
// Write a script that will ask for login using prompt and log result in browser console.

// If the visitor enters "Admin", then prompt prompts for a password
// If nothing is entered or the Esc key is pressed - print the line "Canceled"
// Otherwise print the string "I don't know you"
// Check password like this:

// If the password is "I'm an admin", then output the string "Hello!"
// Else output the string "Wrong password"

const login = prompt("Enter user");

if (login === "Admin") {
  const password = prompt("Enter password");

  if (password === "I'm an admin") {
    console.log("Hello!");
  } else {
    console.log("Wrong password");
  }
} else if (login === null) {
  console.log("Canceled");
} else {
  console.log("I don't know you");
}
