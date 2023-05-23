// class MyClass {
//     // class methods
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     .constructor() { ... }
//     ..
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

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }

// // class is a function
// console.log(typeof User); // function

// // ...or, more precisely, the constructor method
// console.log(User === User.prototype.constructor); // true
// console.log(User === User.prototype.sayHi); // false

// // The methods are in User.prototype, e.g:
// console.log(User.prototype.sayHi()); // the code of the sayHi method

// // there are exactly two methods in the prototype
// console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

//not just syntactic sugar
// rewriting class User in pure functions

// 1. Create constructor function
// function User(name) {
//   this.name = name;
// }
// // a function prototype has "constructor" property by default,
// // so we don't need to create it

// // 2. Add the method to prototype
// User.prototype.sayHi = function () {
//   console.log(this.name);
// };

// // Usage:
// let user = new User("John");
// console.log(user);
// user.sayHi();
// User.prototype.sayHi();

//differences between syntatic sugar
// class User {
//   constructor() {}
// }

// console.log(typeof User); // function
// User(); // Error: Class constructor User cannot be invoked without 'new'
// new User(); //function

//string
// class User {
//   constructor() {}
// }

// console.log(User); // class User { ... }

//class expression
// let User = class {
//   sayHi() {
//     console.log("Hello");
//   }
// };

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
// let User = class MyClass {
//   sayHi() {
//     console.log(MyClass); // MyClass name is visible only inside the class
//   }
// };

// new User().sayHi(); // works, shows MyClass definition

// console.log(MyClass); // error, MyClass name isn't visible outside of the class

//make dynamically
// function makeClass(phrase) {
//   // declare a class and return it
//   return class {
//     sayHi() {
//       console.log(phrase);
//     }
//   };
// }

// // Create a new class
// let User = makeClass("Hello");

// new User().sayHi(); // Hello

//getters setters
// class User {
//   constructor(name) {
//     // invokes the setter
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }
// }

// let user = new User("John");
// console.log(user.name); // John

// user = new User(""); // Name is too short.

//computed names
// class User {
//   ["say" + "Hi"]() {
//     console.log("Hello");
//   }
// }

// new User().sayHi();

//class field
// class User {
//   name = "John";

//   sayHi() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }

// new User().sayHi(); // Hello, John!

// let user = new User();
// console.log(user.name); // John
// console.log(User.prototype.name); // undefined

//complex expression -prompt aber console.log x
// class User {
//   name = prompt("Name, please?", "John");
// }

// let user = new User();
// alert(user.name); // John

// class Button {
//   constructor(value) {
//     this.value = value;
//   }

//   click() {
//     alert(this.value);
//   }
// }

// let button = new Button("hello");

// setTimeout(button.click, 1000); // undefined

// class Button {
//   constructor(value) {
//     this.value = value;
//   }
//   click = () => {
//     alert(this.value);
//   };
// }

// let button = new Button("hello");

// setTimeout(button.click, 1000); // hello

//task1
class Clock({ template }) {
  constructor(template){
    this.template=template;
    this.timer = null;
  }

  render(){
    let date = new Date();

    let hours = date.getHours();
    // if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop (){
    clearInterval(this.timer);
  };

  start(){
    render();
    this.timer = setInterval(()=> {this.render()}, 1000);
  };
}


let clock = new Clock({ template: "h:m:s" });
clock.start();
