"use strict";
// ! Ex 1 - scrie un eventListener care sa evite activarea prea frevcenta a evenimentului scroll

// Selecționează elementele HTML pentru a le actualiza ulterior
// Obiect care va ține evidența evenimentelor de scroll
// Adaugă un eveniment de scroll care se activează la fiecare scroll
// Incrementarea numărului de evenimente de scroll
// Actualizarea conținutului elementului HTML pentru afișarea numărului de evenimente de scroll

// Adaugă un eveniment de scroll care se activează la fiecare 1500ms (1.5 secunde)
// Utilizează funcția _.throttle() pentru a evita activarea prea frecventă a evenimentului

// const outputScrollStandart = document.getElementById("outputScrollStandart");
// const outputScrollThrottling = document.getElementById(
//   "outputScrollThrottling"
// );

// const eventScrollCounter = {
//   standard: 0,
//   throttled: 0,
// };

// document.addEventListener("scroll", () => {
//   eventScrollCounter.standard += 1;
//   outputScrollStandart.textContent = eventScrollCounter.standard;
// });

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventScrollCounter.throttled += 1;
//     outputScrollThrottling.textContent = eventScrollCounter.throttled;
//   }, 1500)
// );

// // ! Ex 2 - scrie un eventListener care sa evite activarea prea frevcenta a evenimentului resize
// const outputResizeStandart = document.getElementById("outputResizeStandart");
// const outputResizeThrottling = document.getElementById(
//   "outputResizeThrottling"
// );

// const eventResizeCounter = {
//   standard: 0,
//   throttled: 0,
// };

// window.addEventListener("resize", () => {
//   eventResizeCounter.standard += 1;
//   outputResizeStandart.textContent = eventResizeCounter.standard;
// });

// window.addEventListener(
//   "resize",
//   _.throttle(() => {
//     eventResizeCounter.throttled += 1;
//     outputResizeThrottling.textContent = eventResizeCounter.throttled;
//   }, 1500)
// );

//! Ex. 3
// Exercițiu: Debounce în gestionarea evenimentelor de input

// Scopul acestui exercițiu este să exersăm utilizarea funcției _.debounce()
// din biblioteca Lodash pentru a implementa un comportament de debounce în gestionarea evenimentelor de input.

// const nameInput = document.querySelector("#nameInput");
// console.log(nameInput);

// nameInput.addEventListener("input", _.debounce(handleInputDebounce, 5000));
// nameInput.addEventListener("input", _.throttle(handleInputDebounce, 300));

// function handleInputDebounce(event) {
//   console.log(event.target.value);
// }

// !Ex.4: Validare a lungimii câmpului de input

// Scopul acestui exercițiu este să implementăm o validare a lungimii unui câmp de input utilizând funcția _.debounce()
// din biblioteca Lodash. De-a lungul exercițiului,
// vom avea un formular de autentificare și vom valida lungimea unui câmp de input în timp real.

const CORRECT_INPUT_LENGTH = {
  min: 3,
  max: 15,
};

const CLASS_NAME = {
  wrong: "wrong",
  correct: "correct",
};

const signInForm = document.querySelector("#signInForm");

signInForm.addEventListener(
  "input",
  _.debounce((event) => {
    const { target } = event;
    if (
      target.value.length < CORRECT_INPUT_LENGTH.min ||
      target.value.length > CORRECT_INPUT_LENGTH.max
    ) {
      target.classList.add(CLASS_NAME.wrong);
      target.classList.remove(CLASS_NAME.correct);
    } else {
      target.classList.add(CLASS_NAME.correct);
      target.classList.remove(CLASS_NAME.wrong);
    }
  }, 800)
);

// 1. o functie care sa creeze elementele, ne folosim de backsticks
// .map(el=> `<div><img src=`${el.original}` class="gallery__image" data-source=`${}` /></div>`)

// 2. o functie pt basicLightBox
// function galery(event) {
//   const instance = basicLightbox.create(`<img src="${originalUrl}">`);
//   instance.show();
// }

// 3. insert de la elementele ce vin din functie
// vasdsadsa.insertAdjenctHTML("before",HTML_CODE)

// 4. un eventListener
// ekljeqwlkjelqw.addEventListener("click", galery);
