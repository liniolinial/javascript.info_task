// let obj = {
//   get propName() {
//     // getter, the code executed on getting obj.propName
//   },

//   set propName(value) {
//     // setter, the code executed on setting obj.propName = value
//   },
// };

//add full name properties
// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };
// // console.log(user.fullName); // John Smith

// let user = {
//   get fullName() {
//     return `...`;
//   },
// };

// console.log((user.fullName = "Test")); // Error (property has only a getter)

// add setter
// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// };

// // set fullName is executed with the given value.
// user.fullName = "Alice Cooper";

// console.log(user.name); // Alice
// console.log(user.surname); // Cooper

//setter
// let user = {
//   name: "John",
//   surname: "Smith",
// };

// Object.defineProperty(user, "fullName", {
//   get() {
//     return `${this.name} ${this.surname}`;
//   },

//   set(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// });

// console.log(user.fullName); // John Smith

// for (let key in user) console.log(key); // name, surname

// // Error: Invalid property descriptor.
// Object.defineProperty({}, "prop", {
//   get() {
//     return 1;
//   },

//   value: 2,
// });

//smarter getters setters
//controlling filter
// let user = {
//   get name() {
//     return this._name;
//   },

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short, need at least 4 characters");
//       return;
//     }
//     this._name = value;
//   },
// };

// user.name = "Pet";
// console.log(user.name); // Pete

// // user.name = ""; // Name is too short...

//using for compatibility
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let john = new User("John", 25);

// console.log(john.age); // 25

//changed storag
// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;
// }

// let john = new User("John", new Date(1992, 6, 1));

//solution for that
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let john = new User("John", new Date(1992, 6, 1));

console.log(john.birthday); // birthday is available
console.log(john.age); // ...as well as the age
