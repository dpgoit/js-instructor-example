import { saveTask, loadTask, updateTask, deleteTask } from './api.js';

const myInput = document.getElementById('myInput');
const myUL = document.getElementById('myUL');

// 4. o functie care adauga elemente in baza de date dar si in interfata UI
function adaugaTaskInInterfata() {
  console.log('Test');
  const inputValue = myInput.value.trim();

  if (inputValue === '') {
    alert('Trebuie sa introduci ceva in input!');
    return;
  }

  createLi(inputValue);
  addTaskToDB(inputValue);
  myInput.value = '';
}

let currentId = 1;

// 1. functie care creaza un element li
function createLi(text, isDone = false, id = currentId) {
  const liEl = document.createElement('LI');
  //   const liText = document.createTextNode(text);
  //   liEl.appendChild(liText);
  liEl.textContent = text;
  liEl.dataset.id = id;
  if (isDone) liEl.className = 'checked';
  myUL.appendChild(liEl);
  addCloseButton(liEl);
}

// 2. functie care adauga x la li element
function addCloseButton(li) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.append(txt);
  li.append(span);
}

// 3. functie care adauga task in baza de date
function addTaskToDB(text, isDone = false) {
  const newTask = { text, isDone };
  saveTask(newTask);
  currentId += 1;
}

// 5. functie care schimba comportamentul unui element li
function handleTaskBehavoir({ target }) {
  console.log(target);
  if (target.tagName === 'LI') {
    target.classList.toggle('checked');
    updateTask(target.dataset.id, target.classList.contains('checked'));
  } else if (target.classList.contains('close')) {
    target.parentNode.remove();
    deleteTask(target.parentNode.dataset.id);
  }
}

// 6. o functie care aduce elementel de pe server in UI
function fillTasksList() {
  console.log('Am dat drumul la server');
  loadTask()
    .then(todos => {
      todos.forEach(({ text, isDone, id }) => {
        createLi(text, isDone, id);
      });
      console.log(todos);
      return todos;
    })
    .then(todos => {
      currentId = todos.length === 0 ? 1 : Number(todos[todos.length - 1].id) + 1;
      console.log(currentId);
    });
}

export { adaugaTaskInInterfata, handleTaskBehavoir, fillTasksList };
