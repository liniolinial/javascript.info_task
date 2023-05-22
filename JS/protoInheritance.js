// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

// from bottom to up
// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal; // (*)

// // we can find both properties in rabbit now:
// console.log(rabbit.eats); // true (**)
// console.log(rabbit.jumps); // true

// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   },
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,  //properties from animal inheritance
// };

// // walk is taken from the prototype
// rabbit.walk(); // Animal walk

// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   },
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };

// // walk is taken from the prototype chain
// longEar.walk(); // Animal walk
// console.log(longEar.jumps); // true (from rabbit)

//writing doesn't use prototype
// let animal = {
//   eats: true,
//   walk() {
//     /* this method won't be used by rabbit */
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// rabbit.walk = function () {
//   console.log("Rabbit! Bounce-bounce!");
// };

// rabbit.walk(); // Rabbit! Bounce-bounce!

// let user = {
//   name: "John",
//   surname: "Smith",

//   //accessor property setters, getters
//   set fullName(value) {
//     //modify
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     // read only
//     return `${this.name} ${this.surname}`;
//   },
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true, //ist noch nicht bei user definiert
// };

// console.log(admin.fullName); // John Smith (*)   -> from get fullName value

// // setter triggers! = value modify oder ändern
// admin.fullName = "Alice Cooper"; // (**)

// console.log(admin.fullName); // Alice Cooper, state of admin modified
// console.log(user.fullName); // John Smith, state of user protected

// animal has methods
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       console.log(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   },
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal,
// };

// // modifies rabbit.isSleeping
// rabbit.sleep(); // der Grund, warum: console.log(animal.isSleeping); // undefined (no such property in the prototype)

// console.log(rabbit.isSleeping); // true
// console.log(animal.isSleeping); // undefined (no such property in the prototype)

//for... in loop
// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// // Object.keys only returns own keys
// console.log(Object.keys(rabbit)); // jumps

// // for..in loops over both own and inherited keys
// for (let prop in rabbit) console.log(prop); // jumps, then eats

//inheritance filtering
// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     console.log(`Our: ${prop}`); // Our: jumps
//   } else {
//     console.log(`Inherited: ${prop}`); // Inherited: eats
//   }
// }

//task1
// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit.jumps); // ? (1) true

// delete rabbit.jumps;

// console.log(rabbit.jumps); // ? (2) null

// delete animal.jumps;

// console.log(rabbit.jumps); // ? (3) undefined

//task2
let head = {
  glasses: 1,
  __proto__: null,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

// //teil1
// console.log(pockets.pen);
// console.log(bed.glasses);
//teil2
// console.log(pockets.glasses);
console.log(head.glasses);

///////
// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   },
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };

// // walk is taken from the prototype chain
// longEar.walk(); // Animal walk
// console.log(longEar.jumps); // true (from rabbit)
