"use strict";
//! Slide 1
// let clatita = {
//   esteBuna: true,
// };

// let clatitaCuCiocolata = Object.create(clatita);
// clatitaCuCiocolata.ciocolata = true;

// // console.log(clatita); // {esteBuna: true}
// console.log(clatitaCuCiocolata.esteBuna); // true
// console.log(clatitaCuCiocolata); // {ciocolata: true}

//! Slide 2
// class Casa {
//   constructor(numarCamere, areBucatarie) {
//     this.numarCamere = numarCamere;
//     this.areBucatarie = areBucatarie;
//   }

//   aprindeLumina() {
//     console.log("Lumina este aprinsă");
//   }
// }

// let casaMea = new Casa(3, true);
// casaMea.aprindeLumina(); // Lumina este aprinsă
// console.log(casaMea.numarCamere); // 3
// console.log(casaMea.areBucatarie); // true

//! Slide 3
// class Jurnal {
//   #secret;

//   constructor(secret) {
//     this.#secret = secret;
//   }

//   #citesteSecret() {
//     return this.#secret;
//   }

//   dezvaluieSecret() {
//     return this.#citesteSecret();
//   }
// }

// let jurnalulMeu = new Jurnal("Mi-am cumparat o bicicleta noua!");
// console.log("test");
// console.log(jurnalulMeu.#citesteSecret());

// console.log(jurnalulMeu.dezvaluieSecret()); // Mi-am cumparat o bicicleta noua!

//! Slide 4
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Cat extends Animal {
//   speak() {
//     super.speak();
//     console.log(`${this.name} meows.`);
//   }
// }

// const cat = new Cat("Tom");
// cat.speak(); // "Tom makes a noise. Tom meows."

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get emailUser() {
//     return this.email;
//   }

//   set emailUser(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts; // this.posts = []
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const user = new User("denispaul@eqwi.com");
// // console.log(user.email);
// // console.log(user.emailUser);
// // user.emailUser = "paul@eqwhjkehwq.com";
// // console.log(user.email);

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");

// console.log(editor.posts); // ['post-1']

// !Ex 1
// Write a Blogger class to create a blogger object with the following properties:

// name - name
// age - age, number
// numberOfPosts - number of posts, number
// topics - an array of topics the blogger specializes in
// The class expects one parameter - object of settings with the same name properties.

// Add a getInfo() method that returns string: User ${name} is ${age} years old and has ${number of posts} posts.

// Add the updatePostCount(value) method, which in the value parameter takes number of posts to add to the user.

class Blogger {
  constructor({ name, age, numberOfPosts, topics }) {
    this.name = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.name} is ${this.age} old and has ${this.numberOfPosts} posts.`;
  }
  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// !Example 2 - Storagе
// Write a Storage class that creates objects for managing a warehouse of goods. When called, it will receive one argument - the initial array of goods, and write it to the items property.

// Add class methods:

// getItems() - returns an array of products.
// addItem(item) - receives a new product and adds it to the current ones.
// removeItem(item) - receives the product and, if it exists, removes it from the current.

class Storage {
  constructor(arr) {
    this.items = arr;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    return this.items.push(item);
  }
  removeItem(item) {
    // const idx = this.items.indexOf(item);
    // if (idx !== -1) {
    //   this.items.splice(idx, 1);
    // } else {
    //   console.log("Elementul nu exista!");
    // }

    // if (idx === -1) {
    //   console.log("Elementul nu exista!");
    // } else {
    //   this.items.splice(idx, 1);
    // }

    if (this.items.includes(item)) {
      const idx = this.items.indexOf(item);
      this.items.splice(idx, 1);
    } else {
      console.log("Elementul nu exista!");
    }
  }
}

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍋");
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// !Example 3 - User
// Write a class User which creates an object with properties login and email.
// Declare private properties #login and #email, which can be accessed
// via getter and setter of login and email.

class User {
  #login;
  #email;
  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }

  set loginUser(login) {
    this.#login = login;
  }
  set emailUser(email) {
    this.#email = email;
  }

  get loginUser() {
    return this.#login;
  }
  get emailUser() {
    return this.#email;
  }
}

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.loginUser); // Mango
// mango.loginUser = "Mangodoge";
// console.log(mango.loginUser); // Mangodoge

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.loginUser); // Poly
// poly.loginUser = "Polycutie";
// console.log(poly.loginUser); // Polycutie

// poly.loginUser = "Anda";
// console.log(poly.loginUser); // Polycutie

// !Example 4 - Notes
// Write a Notes class that manages the collection of notes in the items property.
// A note is an object with text and priority properties.
// Add a static property Priority to the class, which will store the object with priorities.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Add methodsaddNote(note), removeNote(text) and updatePriority(text, newPriority).

class Notes {
  static Priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };
  constructor(arr) {
    this.items = arr;
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(text) {
    const inArr = this.items.find((item) => item.text === text);

    if (inArr) {
      const idx = this.items.findIndex((item) => {
        return item.text === text;
      });

      this.items.splice(idx, 1);
    } else {
      console.log("Nu exista in notiele tale");
    }
  }
  updatePriority(text, newPriority) {
    const inArr = this.items.find((item) => item.text === text);
    if (inArr) {
      inArr.priority = newPriority;
    } else {
      console.log("Nu exista in notiele tale");
    }
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
myNotes.addNote({
  text: "My second note",
  priority: Notes.Priority.NORMAL,
});
myNotes.addNote({
  text: "A treia notita",
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

// myNotes.removeNote("My second note");
// console.log(myNotes.items);

myNotes.updatePriority("My second note", Notes.Priority.HIGH);
console.log(myNotes.items);
