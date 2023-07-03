import { adaugaTaskInInterfata, handleTaskBehavoir, fillTasksList } from './functii.js';

const addBtn = document.getElementById('addBtn');
const myUL = document.getElementById('myUL');

addBtn.addEventListener('click', adaugaTaskInInterfata);

myUL.addEventListener('click', handleTaskBehavoir);

window.addEventListener('DOMContentLoaded', fillTasksList);
