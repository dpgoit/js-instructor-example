// * 9. Named Export
// Să presupunem că avem un modul care exportă o clasă Person și o funcție createPerson.
// Acum, într-un alt fișier, importăm clasa Person și funcția createPerson,
// creăm o nouă persoană și o lăsăm să se prezinte.

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  salut() {
    return `Buna, eu sunt ${this.name} si am ${this.age} ani!`;
  }
}

export function createPerson(name, age) {
  return new Person(name, age);
}
