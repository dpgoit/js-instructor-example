import { save, load } from './storage.js';

// fără memoria locală

//  scrie logica de adăugare a unei activități apăsând butonul de adăugare
// *  1.1. citește valoarea din câmpul de intrare
// * 1.2. verificăm dacă termenul este gol, dacă este gol, informăm utilizatorul despre acest lucru și nu adăugăm activitatea
// *  1.3. dacă există o activitate, atunci creăm un element de listă căruia îi adăugăm textul activității
// *  1.4. adaugă un x la elementul de listă
//  * 1.5. curăță câmpul de intrare
// scrie logica stării activității (completată sau nu)
//  * 2.1. făcând clic pe exces - schimbăm clasa la verificat
// scrie logica de eliminare a unei activități din listă
//  * 3.1. dacă am făcut clic pe cruce - ștergem excesul de pe pagină

// cu memoria locală
//  vom stoca activitățile sub forma unui array de obiecte
//   4.1. obiectul cu câmpurile: text, esteFăcut, ID. ID-ul este necesar pentru căutarea elementelor, pentru a șterge elementele și pentru a actualiza starea elementelor.
//  Identificatorul trebuie să fie atât în element, cât și în obiectul din depozit.
//  când adăugăm li la pagină, îl vom adăuga și în stocare
//  scrie logica funcției care va prelua datele din stocare și le va adăuga pe pagină sub forma de excese
//  scrie logica de eliminare a activității de pe pagină și pentru actualizarea stării activității.

const myInput = document.getElementById('myInput');

const myUL = document.getElementById('myUL');
let currentId = 0;

function adaugaTaskNou() {
  const inputValue = myInput.value.trim();
  if (inputValue === '') {
    alert('Trebuie sa introduci un task in input!');
    return;
  }
  creareaUnuiNouLiElement(inputValue);

  // * 1.5
  myInput.value = '';
  adaugaTaskPeLocalStorage(inputValue);
}

// *1.3
function creareaUnuiNouLiElement(inputValue, esteFacut = false, id = currentId) {
  const liEl = document.createElement('li');
  liEl.textContent = inputValue;
  liEl.dataset.id = id;
  if (esteFacut) liEl.className = 'checked';
  myUL.append(liEl);
  creareaUnuiButtonX(liEl);
}

// *1.4
function creareaUnuiButtonX(li) {
  const span = document.createElement('span');
  span.textContent = '\u00D7';
  span.className = 'close';
  li.append(span);
}

function comportamentTask({ target }) {
  const currentState = load('tasks');
  console.log(target);
  if (target.tagName === 'LI') {
    target.classList.toggle('checked');
    const taskIndex = currentState.findIndex(
      taskObj => Number(taskObj.id) === Number(target.dataset.id),
    );
    currentState[taskIndex].isDone = !currentState[taskIndex].isDone;
  } else if (target.classList.contains('close')) {
    target.parentNode.remove();
    const taskIndex = currentState.findIndex(
      taskObj => Number(taskObj.id) === Number(target.parentNode.dataset.id),
    );
    currentState.splice(taskIndex, 1);
  }
  save('tasks', currentState);
}

function adaugaTaskPeLocalStorage(text, esteFacut = false) {
  const currentState = load('tasks');
  const newTask = { text, esteFacut, id: currentId };
  if (currentState === undefined) {
    save('tasks', [newTask]);
  } else {
    currentState.push(newTask);
    save('tasks', currentState);
  }
  currentId += 1;
}

function adaugaTaskuriCeExistaDejaInLocalStorage() {
  const currentState = load('tasks');
  if (currentState !== undefined) {
    currentState.forEach(element => {
      const { text, esteFacut, id } = element;
      creareaUnuiNouLiElement(text, esteFacut, id);
    });
    currentId = currentState[currentState.length - 1].id + 1;
  }
}

export { adaugaTaskNou, comportamentTask, adaugaTaskuriCeExistaDejaInLocalStorage };
