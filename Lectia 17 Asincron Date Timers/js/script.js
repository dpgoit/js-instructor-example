'use strict';
// const date = new Date();
// // console.log(typeof date);

// console.log('1');

// setTimeout(function () {
//   console.log('2');
// }, 0); // Asteapta 2 secunde

// console.log('3');

// Când executați acest cod, veți vedea "Start" și "End" imediat,
// și după 2 secunde veți vedea "Timeout completed".
//  Acest lucru este posibil datorită asincroniei.

// let count = 0;

// const intervalId = setInterval(function () {
//   count += 1;
//   console.log('Interval executed ' + count + ' times');

//   if (count >= 5) {
//     console.log(intervalId);
//     clearInterval(intervalId);
//   }
// }, 1000); // se executa la fiecare secunda

// const intervalId2 = setInterval(() => {
//   console.log('interval nr 2 ');
// }, 1000);
// console.log(intervalId2);

// Acest cod va afișa un mesaj o dată pe secundă,
// până când a fost afișat de 5 ori, apoi se va opri.

// let now = new Date(); // creeaza un obiect Date cu data si ora curenta

// console.log(now.getFullYear()); // afiseaza anul curent
// console.log(now.getMonth() + 1); // afiseaza luna curenta (lunile incep de la 0, deci adaugam 1)
// console.log(now.getDate()); // afiseaza ziua curenta
// console.log(now.getHours()); // afiseaza ora curenta
// console.log(now.getMinutes()); // afiseaza minutele curente

// for (let i = 3; i > 0; i--) {
//   console.log(`Valoare ${i}, se va executa dupa ${i * 1000}`);
//   const delay = i * 1000;
//   setTimeout(() => console.log(i), delay);
// }
// const start = new Date('2030-04-23');
// const end = new Date('2030-05-17');

// console.log(start);
// console.log(end);

// console.log(end - start);

// ! Exercitiu
// "Scrieți un program care calculează și afișează timpul rămas până la data de Anul Nou.
// Programul trebuie să permită utilizatorului să oprească cronometrul și să-l continue.

// Inițializați un cronometru care să numere timpul rămas până la data de Anul Nou.
// Afișați timpul rămas în formatul zile, ore, minute și secunde.
// Implementați un buton "Stop" care să oprească cronometrul în momentul în care este apăsat.
// Implementați un buton "Continue" care să relanseze cronometrul și să continue numărătoarea timpului rămas de unde a fost oprit."
// Optional scrie exercitiul folosind clase (refactorizare dupa optiunea cu functii)

// *1 - recuperare elemente din DOM
const timpEl = document.getElementById('time');
const stopBtnEl = document.getElementById('stopBtn');
const continueBtnEl = document.getElementById('continueBtn');

stopBtnEl.addEventListener('click', stopInterval);
continueBtnEl.addEventListener('click', continueInterval);

// *2 - recuperare final date (data anului nou)
const newYearDate = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);

// *4 - adaugare timp in interfata (html)
countDownTimeToNY();
let timerId = setInterval(countDownTimeToNY, 1000);

function countDownTimeToNY() {
  // *3. trebuie sa calculez diferenta intre anul nou si data actuala
  const now = new Date();
  const diff = newYearDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timpEl.textContent = `${days} d. ${hours} h. ${minutes} m. ${seconds} s.`;

  if (diff <= 0) {
    timpEl.textContent = 'Happy new year';
  }
}

function stopInterval() {
  clearInterval(timerId);
  alert('Timer stop');
}

function continueInterval() {
  continueBtnEl.disabled = false;
  timerId = setInterval(countDownTimeToNY, 1000);
}
