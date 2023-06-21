'use strict';
// const promise = new Promise(resolve => {
//   resolve(10);
// });

// promise
//   .then(value => {
//     return new Promise(resolve => {
//       resolve(value * 2);
//     });
//   })
//   .then(value => console.log(value));

// ! Example 2 - Promisiunea reject
// console.log('A');
// Promise.resolve('B')
//   .then(value => {
//     console.log('intrat in then');
//     console.log(value);
//   })
//   .catch(err => console.error(err))
//   .finally(() => console.log('C'));

// console.log('D');

// ! Exemplu 3 - server copy cu setTimeout si Promise
// console.log('Request initial - data...');

// setTimeout(() => {
//   console.log('Preparare data');

//   const data = {
//     id: 1,
//     text: 'Salut Denis, de la server',
//     status: 'important',
//   };

//   setTimeout(() => {
//     console.log(`Data primita:${data.text}`);
//   }, 2000);
// }, 2000);

// const promiseDenis = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preparare data');

//     const data = {
//       id: 1,
//       text: 'Salut Denis, de la server',
//       status: 'important',
//     };

//     if (data.id === 2) {
//       resolve(data);
//     } else {
//       reject('Server error');
//     }
//   }, 2000);
// });

// console.log(
//   setTimeout(() => {
//     console.log(promiseDenis);
//   }, 3000),
// );
// promiseDenis
//   .then(data => {
//     console.log('Raspuns primit');
//     console.log(data);
//     return data;
//   })
//   .catch(err => console.error(err))
//   .finally(() => {
//     console.log('Operatiuena s-a incheiat');
//   });

// ! Example 3

// const promise = new Promise((res, rej) => {
//   const serverStatus = false;
//   if (serverStatus) {
//     res('OK');
//   } else rej('Error: Aici este o eroare');
// });

// promise.then(data => {
//   console.log(data);
// });

// ! Example 4 - .race() && .all

function sleep(ms) {
  return new Promise((rez, rej) =>
    setTimeout(() => {
      rez(ms);
    }, ms),
  );
}

sleep(2000).then(data => console.log(`after ${data}`));
sleep(5000).then(data => console.log(`after ${data}`));

// Promise.all([sleep(2000), sleep(5000)]).then(values => {
//   console.log(values);
//   console.log('All Promises');
// });

Promise.race([sleep(2000), sleep(5000), sleep(500)]).then(values => {
  console.log(values);
  console.log('Race promise');
});

// !TEMA
// TEMA 1
// doua eventListeners pt start si stop
// select la toate elementele ce iti trebuie
// pe ceva anume poti sa schimbi backgroundColor folosind functia data

// Descris în documentație
import flatpickr from 'flatpickr';
// Import suplimentar de stil
import 'flatpickr/dist/flatpickr.min.css';

// TEMA 2
// select la tot
flatpickr('#datetime-picker', options);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const startTime = Date.now();
    // verificam daca data selectata este in trecut (daca daca return si mesaj cu Notify)
    // Notify.failure("Please choose a date in the future");
    if (selectedDate < startTime) {
      Notify.failure('Please choose a date in the future');
      refs.startButton.disabled = true;
      return;
    }

    // Daca este ok, click event si o functie care se ocupa sa verifice timpul
    // functie startCountdown

    const { days, hours, minutes, seconds } = convertMs(timeDifference);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// ! TEMA 3
// Select la ce ne trebuie
// submit event la o functie care sa se ocupe de generarea de
// .then de la functia createPromise (trebuie adaugata logica/ poate niste notificari ? cu Notify)
// poate un for loop in functie de nr luat din interfata de amount?

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       }
//       reject({ position, delay });
//     }, delay);
//   });
// }
