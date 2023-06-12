import chalk from "chalk";
import _ from "lodash";

// ! LECTIA 15
// 1. Node.js: Scrieți un script simplu care să ruleze în Node.js.
// Acesta ar putea fi, de exemplu, un script care să afișeze "Hello, World!" în consolă.

// 2. Inițializarea unui proiect: Inițializați un nou proiect folosind npm init.
// Completați câmpurile necesare pentru a genera un fișier package.json. (install chalk)

// 3. Comanda NPM: Creați un nou proiect și instalați un pachet folosind npm.
// Un exemplu bun ar fi pachetul lodash. Verificați dacă pachetul a fost instalat corect.

// 4. Scripturi npm: Adăugați un script în package.json care să ruleze fișierul
// JavaScript principal al aplicației folosind comanda node.

// 5. Instalarea pachetelor: Instalați un pachet suplimentar în proiectul dvs.
// Poate fi, de exemplu, pachetul express.

// 6. Ștergerea pachetelor: Încercați să dezinstalați pachetul pe care l-ați instalat la punctul anterior.

// 7. Instalarea unei versiuni specifice a unui pachet: Încercați să instalați o
// anumită versiune a pachetului lodash, de exemplu versiunea 4.17.1.

// 8. Tipuri de dependințe: Instalați un pachet ca dependință de dezvoltare.
// Un bun exemplu este pachetul nodemon, care este util pentru dezvoltarea aplicațiilor Node.js.

// 9. Named Export
// Să presupunem că avem un modul care exportă o clasă Person și o funcție createPerson.
// Acum, într-un alt fișier, importăm clasa Person și funcția createPerson,
// creăm o nouă persoană și o lăsăm să se prezinte.

// 10. Default Export
// Vom crea un modul care exportă implicit o clasă MathUtils care
// are câteva metode statice pentru operații matematice.
// Într-un alt fișier, importăm clasa MathUtils și folosim metodele sale pentru a efectua câteva operații matematice.

// *REZOLVARE
// * 1. Node.js: Scrieți un script simplu care să ruleze în Node.js.
// Acesta ar putea fi, de exemplu, un script care să afișeze "Hello, World!" în consolă.
console.log("Hello, World!");
console.log("Hello, Denis!");

// * 2. Inițializarea unui proiect: Inițializați un nou proiect folosind npm init.
// Completați câmpurile necesare pentru a genera un fișier package.json. (install chalk)

// *3. Comanda NPM: Creați un nou proiect și instalați un pachet folosind npm.
// Un exemplu bun ar fi pachetul lodash. Verificați dacă pachetul a fost instalat corect.

let objects = [{ n: 2 }, { n: 2 }, { n: 8 }, { n: 30 }, { d: 17 }];
console.log(chalk.blue(_.sumBy(objects, "n")));
console.log(_.sumBy(objects, "d"));
console.log(chalk.red("Hello world"));

// * 4. Scripturi npm: Adăugați un script în package.json care să ruleze fișierul
// JavaScript principal al aplicației folosind comanda node.

// * 5. Instalarea pachetelor: Instalați un pachet suplimentar în proiectul dvs.
// Poate fi, de exemplu, pachetul express.

// * 6. Ștergerea pachetelor: Încercați să dezinstalați pachetul pe care l-ați instalat la punctul anterior.

// * 7. Instalarea unei versiuni specifice a unui pachet: Încercați să instalați o
// anumită versiune a pachetului lodash, de exemplu versiunea 4.17.1.

// * 8. Tipuri de dependințe: Instalați un pachet ca dependință de dezvoltare.
// Un bun exemplu este pachetul nodemon, care este util pentru dezvoltarea aplicațiilor Node.js.
console.log(chalk.red("Hello Denis Paul"));
console.log(chalk.red("Hello Denis Mucioiu"));

// * 9. Named Export
// Să presupunem că avem un modul care exportă o clasă Person și o funcție createPerson.
// Acum, într-un alt fișier, importăm clasa Person și funcția createPerson,
// creăm o nouă persoană și o lăsăm să se prezinte.
import { Person, createPerson } from "./personClass.js";

let denis = createPerson("Denis", 27);
console.log(denis.salut());

let alex = new Person("Alex", 30);
console.log(alex.salut());

// import * as person from "./personClass.js";

// let denis = person.createPerson("Denis", 27);
// console.log(denis.salut());

// let alex = new person.Person("Alex", 30);
// console.log(alex.salut());
// console.log(person);

// * 10. Default Export
// Vom crea un modul care exportă implicit o clasă MathUtils care
// are câteva metode statice pentru operații matematice.
// Într-un alt fișier, importăm clasa MathUtils și folosim metodele sale pentru a efectua câteva operații matematice.
import MathUtils from "./mathClass.js";

console.log(chalk.green(MathUtils.adunare(3, 5)));
console.log(MathUtils.scadere(5, 3));
console.log(MathUtils.inmultire(5, 10));
