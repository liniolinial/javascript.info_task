// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
//   }

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }
// }
// // Usage:
// let user = new User("John");
// user.sayHi();

//introduction of class
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }

// // proof: User is a function
// console.log(typeof User); // function

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// class is a function
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
