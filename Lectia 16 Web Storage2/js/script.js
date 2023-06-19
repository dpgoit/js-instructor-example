console.log('inainte de try catch');

// ! try and catch
// try {
//   const data = { name: 'Denis', age: 27, car: false };
//   localStorage.setItem('user', JSON.stringify(data));
//   console.log('test');
// } catch (error) {}

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   try {
//     if (i === 5) throw new Error('i este egal cu 5');
//   } catch (error) {
//     console.error(error.message);
//   }
// }

//

// ! functii reutilizabile de salvare si recupare de pe localStorage
import { save, load } from './storage.js';

// const user = { name: 'Denis', age: 27, car: false };

// save('user', user);

// console.log(load('user'));

/*
Scrie o listă de activități (Todo-list) în care poți crea, șterge elemente și salva lista în memoria locală (local storage)
Stilurile și structura pot fi preluate de aici - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
*/

/*

fără memoria locală

 scrie logica de adăugare a unei activități apăsând butonul de adăugare
  1.1. citește valoarea din câmpul de intrare
  1.2. verificăm dacă termenul este gol, dacă este gol, informăm utilizatorul despre acest lucru și nu adăugăm activitatea
  1.3. dacă există o activitate, atunci creăm un element de listă căruia îi adăugăm textul activității
  1.4. adaugă un x la elementul de listă
  1.5. curăță câmpul de intrare
scrie logica stării activității (completată sau nu)
  2.1. făcând clic pe exces - schimbăm clasa la verificat
scrie logica de eliminare a unei activități din listă
  3.1. dacă am făcut clic pe cruce - ștergem excesul de pe pagină

cu memoria locală
 vom stoca activitățile sub forma unui array de obiecte
  1.1. obiectul cu câmpurile: text, esteFăcut, ID. ID-ul este necesar pentru căutarea elementelor, pentru a șterge elementele și pentru a actualiza starea elementelor.
 Identificatorul trebuie să fie atât în element, cât și în obiectul din depozit.
 când adăugăm li la pagină, îl vom adăuga și în stocare
 scrie logica funcției care va prelua datele din stocare și le va adăuga pe pagină sub forma de excese
 scrie logica de eliminare a activității de pe pagină și pentru actualizarea stării activității.
*/

import {
  adaugaTaskNou,
  comportamentTask,
  adaugaTaskuriCeExistaDejaInLocalStorage,
} from './functii.js';

const addBtn = document.getElementById('addBtn');
const myUL = document.getElementById('myUL');

addBtn.addEventListener('click', adaugaTaskNou);
myUL.addEventListener('click', comportamentTask);
adaugaTaskuriCeExistaDejaInLocalStorage();
