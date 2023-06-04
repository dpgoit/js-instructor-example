"use strict";
// ! Ex 1
/*
1.Identifică un element din documentul HTML cu id-ul "block". 
Schimbă culoarea de fundal a acestui element în albastru.

2. Identifică toate elementele din documentul HTML care au clasa "text". 
Adaugă clasa "active" celui de-al treilea element din această listă.

3. Afișează în consolă lista elementelor cu clasa "text".

4. Identifică ultimul element cu clasa "text" dintr-un element care are clasa "container".
Afișează în consolă acest element.

5. Schimbă culoarea de fundal a ultimului element identificat în pasul anterior în verde.

6. Creează o listă cu toate elementele "button" din documentul HTML. 
Parcurge lista și, în funcție de valoarea atributului "data-active" al fiecărui element, 
schimbă culoarea de fundal în verde dacă valoarea este "true", sau în galben dacă valoarea este "false".

7. Identifică elementul cu id-ul "showCT". 
Adaugă acestui element un eveniment care afișează în consolă evenimentul 
și elementul care a declanșat evenimentul atunci când este făcut un clic pe el.
*/

// * Rezolvare
// const block = document.querySelector("#black") // => folosind querySelector trebuie sa specific si ce tip de atribut este (clasa cu "." sau id cu "#")
//? 1.
const block = document.getElementById("block");
// console.log(block);
block.style.backgroundColor = "blue";

//? 2
const texts = document.getElementsByClassName("text");
// console.log(texts);
// console.log(texts[2]);
texts[2].classList.add("active");

//? 3-5
const text1 = document.querySelector(".container .text:last-child");
// console.log(text1);
text1.style.backgroundColor = "green";

// ? 6
const buttons = [...document.getElementsByTagName("button")];
buttons.forEach((elementDinArray) => {
  // console.log(elementDinArray);
  // 1. Identific daca elementul este true
  const status = elementDinArray.dataset.active;
  // console.log(status);

  // 2. Ii adaug culorile in functie de status (de atribut verde pentru true / galben pentru false)
  if (status === "true") {
    // console.log(status);
    elementDinArray.style.backgroundColor = "green";
  } else {
    elementDinArray.style.backgroundColor = "yellow";
  }
});

// ? 7
const showCT = document.getElementById("showCT");
showCT.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.currentTarget);
});

// ! Ex 2
/*
1. Identifică un element din documentul HTML care are clasa "form".
Salvează-l într-o variabilă numită "form".

2. Adaugă un ascultător de evenimente pentru evenimentul de "submit" formularului,
folosind o funcție numită "handleSubmit" ca funcție de callback.

3. Definește funcția "handleSubmit". Aceasta trebuie să facă următoarele:

a. Prevină comportamentul implicit al evenimentului de "submit".

b. Afisează în consolă elementul "login" al formularului (folosind "console.dir").

c. Extrage elementele "login" și "password" din formular folosind deconstrucția.

d. Verifică dacă oricare dintre valorile elementelor "login" sau "password" sunt goale.
Dacă este așa, afișează un mesaj în consolă și întrerupe execuția funcției.

e. Afișează în consolă valoarea elementelor "login" și "password".

f. Resetează formularul după trimiterea datelor. */

// * Rezolvare
// ? 1
const form = document.querySelector(".form");
console.log(form);

// ? 2
form.addEventListener("submit", handleSubmit);

// ? 3
function handleSubmit(event) {
  // ? 3.a
  event.preventDefault();

  // ? 3.b
  console.dir(event.currentTarget.elements.login);

  // ? 3.c
  const {
    elements: { login, password },
  } = event.currentTarget;

  // ? 3.d
  if (login.value === "" || password.value === "") {
    return console.log("Completeaza campurile!");
  }

  // ? 3.e
  console.log(`Login: ${login.value}, Password: ${password.value}`);

  // ? 3.f
  event.currentTarget.reset();
}
