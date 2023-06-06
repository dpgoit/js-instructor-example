"use strict";
// ! querySelector
// let element = document.querySelector('[data-id="123"]');
// console.log(element.textContent);
// let checkbox = document.querySelector('input[type="checkbox"]:checked');
// console.log(checkbox);

// ! Exemplu 1
// Exemplu de propagare a evenimentului de click
// const button = document.getElementById("myButton");
// const parentElement = document.getElementById("parentElement");

// button.addEventListener("click", function (event) {
//   alert("Butonul a fost apăsat!");
//   // event.stopPropagation(); // Opriți propagarea evenimentului
// });

// parentElement.addEventListener(
//   "click",
//   function () {
//     alert("Evenimentul de clic s-a propagat la elementul părinte!");
//   },
//   // - event capturing
//   true
// );

// ! Exemplu 2
// Exemplu de eveniment bubbling
// const myDiv = document.getElementById("myDiv");

// myDiv.addEventListener("click", function (event) {
//   console.log("Evenimentul de click s-a propagat de la buton la div!");
//   console.log("Elementul țintă parinte:", event.currentTarget);
//   console.log("Elementul țintă:", event.target);
//   // Afișează elementul pe care s-a declanșat evenimentul
// });

// ! Exemplu 3
// Exemplu de delegare a evenimentelor
// const myList = document.getElementById("myList");

// myList.addEventListener("click", function (event) {
//   if (event.target.tagName === "LI") {
//     console.log(event.target);
//     console.log("Ați apăsat elementul:", event.target.textContent);
//   }
// });

//! Exercitiu ===================================================

// Creați un calculator de costuri de produse în funcție de preț.
// Când variabila de date este introdusă în inputul #1 sau #2, costul total trebuie recalculat automat.
// Moneda - RON trebuie să fie întotdeauna afișată.
// Suma totală este afișată cu doua zecimale).
// În semnătura celui de-al doilea input, trebuie să existe un label de culoare care indică câte kilograme a selectat utilizatorul în cel de-al doilea input.
// Acel label trebuie să își schimbe valoarea atunci când glisorul este mutat.
// În inputul nr. 2, setați pragul minim și maxim singur.
// La încărcarea paginii, scriptul trebuie să calculeze automat costul pe baza datelor implicite pe care le-ați stabilit în marcaj.

// *Rezolvare
// 1. Data trebuie stocata
// 2. Trebuie sa recuperez data din input
// 3. Trebuie sa o stochez
// 4. Daca in input se modifica ceva, trebuie sa modific valoarea de return (ce eveniment?)
// 5. Trebuie sa updatez valoarea afisata pentru rezultat si valorea kg din input

const data = {
  price: 0,
  quantity: 0,
  calcTotalPrice() {
    return (this.quantity * this.price).toFixed(2);
  },
};

// Recuperare data din inputs
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const total = document.getElementById("total");
const amount = document.getElementById("amount");
const mainForm = document.getElementById("form");

dataFill();
displayTotal();

mainForm.addEventListener("change", handleFormChange);

function handleFormChange({ target }) {
  const { value } = target;

  if (priceInput === target) {
    if (!Number(value)) {
      console.log("Not a number");
      return;
    }
  } else if (target === quantityInput) {
    amount.textContent = value;
  }

  target.setAttribute("value", value);
  dataFill();
  displayTotal();
}

function dataFill() {
  data.price = priceInput.getAttribute("value");
  data.quantity = quantityInput.getAttribute("value");
}

function displayTotal() {
  total.textContent = data.calcTotalPrice() + "RON";
}

console.log(data);
