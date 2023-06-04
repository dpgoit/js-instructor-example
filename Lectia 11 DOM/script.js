"use strict";
//! 1.Imi pun cat mai multe intrebari (stringuri / arrays/ numere) => return de argument
// 1.1. Ce poate sa intre in functie ca si argument?
// 1.2  Ce o sa fie ca si return?
// 1.3 Cum pot sa imi dau seama ce tip de argument intra in functia mea?
// 1.4 Cum inversez ceva in javascript?

//! 2. Sparg problema in probleme si mai mici
// 2.1 verific ce input imi intra in functie
// 2.2 return de ceva (console.log("Input nu este bun"))
// 2.3 in cazul in care este string il sparg in ceva
// 2.4 reverse de input (sa zicem string prima data)

// ! 3. Caut pe net

// ! 4. Pseudo code

/*
functia reverse (argument)
 if daca nu este string / number /array 
  returnez un mesaj 

 if daca este string 
 pt string execut revers in modul in care se face pentru string
 
 if daca este number
 trebuie sa fac number string ca altfel nu merge sa faci return 
 
 if daca este array 
 folosesc ceva metoda care interseaza un array
*/

// function reverse(arg) {
//   if (
//     !typeof arg === "string" &&
//     !typeof arg === "number" &&
//     !Array.isArray(arg)
//   ) {
//     return arg;
//   }

//   if (typeof arg === "string") {
//     const transformArgToArray = arg.split("").reverse().join("");
//     return transformArgToArray;
//   }
//   if (typeof arg === "number") {
//     const transformArgToArray = "" + arg;
//     return transformArgToArray.split("").reverse().join("");
//   }
//   if (Array.isArray(arg)) {
//     return arg.reverse().join("");
//   }
// }
// // console.log(
// //   reverse({ name: "asta este un obiect, deci nu poate fi inversat" })
// // );
// console.log(reverse("mouse"));
// console.log(reverse(20));
// console.log(reverse(["m", "o", "u", "s", "e"]));

// ! Ex.1
//* 1. Create a list of technologies studied in the Fullstack course using js
// Show how it is done with the help of **map** and **reduce**

const container = document.getElementById("container");
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node", "Angular"];
/*
 1. Sa fac un container pt lista mea elemente  => document.create('ul')
 2. O sa folosesc un for loop pentru a recupera fiecare element din array =>   (for loop) 
 3. Trebuie sa folosesc o metoda ce creaza o lista (li) => const liEl = document.create('li')
 4. Trebuie sa folosesc o metoda ce ma ajuta sa adaug textul la lista nou creata => .textContent
 5. Trebuie sa adaug listele create in interiorul lui ul (care a fost si el nou creat) => .append(liEl)
 6. Trebuie sa adaug ul (lista mea) in interiorul lui 'container' => .append(list)
*/

// *for loop
// const list = document.createElement("ul");

// for (const tech of technologies) {
//   console.log(tech);
//   const liEl = document.createElement("li");
//   liEl.textContent = tech;
//   list.append(liEl);
// }

// container.append(list);
// console.log(container);

// console.log(list);
// <li>HTML</li>
// * map
const list = document.createElement("ul");

const listContent = technologies
  .map((tech) => {
    return `<li>${tech}</li>`;
  })
  .join("");

list.insertAdjacentHTML("beforeend", listContent);

container.append(list);
