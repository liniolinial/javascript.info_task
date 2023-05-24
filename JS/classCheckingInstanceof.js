// obj instanceof Class

// class Rabbit {}
// let rabbit = new Rabbit();

// // is it an object of Rabbit class?
// console.log(rabbit instanceof Rabbit); // true

// // instead of class, working with constructor functions
// function Rabbit() {}
// console.log(new Rabbit() instanceof Rabbit); // true

// // built-in classes like Array
// let arr = [1, 2, 3];
// console.log(arr instanceof Array); // true
// console.log(arr instanceof Object); // true

////symbol.hasInstance ->
// //setup instanceOf check that assumes that
// //anything with canEat property is an animal
// class Animal {
//   static [Symbol.hasInstance](obj) {
//     if (obj.canEat) return true;
//   }
// }

// let obj = { canEat: true };
// console.log(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called

// standard logic
// obj.__proto__ === Class.prototype?
// obj.__proto__.__proto__ === Class.prototype?
// obj.__proto__.__proto__.__proto__ === Class.prototype?
// ...
// // if any answer is true, return true
// // otherwise, if we reached the end of the chain, return false

//inheritance in second step
// class Animal {}
// class Rabbit extends Animal {}

// let rabbit = new Rabbit();
// console.log(rabbit instanceof Animal); // true

// // rabbit.__proto__ === Animal.prototype (no match)
// // rabbit.__proto__.__proto__ === Animal.prototype (match!)

//after obj change: prototype property =/ obj
// function Rabbit() {}
// let rabbit = new Rabbit();

// // changed the prototype
// Rabbit.prototype = {};

// // ...not a rabbit any more!
// console.log(rabbit instanceof Rabbit); // false

////obj-arr
// let obj = {};
// console.log(obj); // [object Object]
// console.log(obj.toString()); // the same

// copy toString method into a variable for convenience
// let objectToString = Object.prototype.toString;
// // what type is this?
// let arr = [];
// console.log(objectToString.call(arr)); // [object Array]

////internally
// let s = Object.prototype.toString;

// console.log(s.call(123)); // [object Number]
// console.log(s.call(null)); // [object Null]
// console.log(s.call(console.log)); // [object Function]

// symbol.toStringTag
// let user = {
//   [Symbol.toStringTag]: "User",
// };

// console.log({}.toString.call(user)); // [object User]

// // toStringTag for the environment-specific object and class:
// alert( window[Symbol.toStringTag]); // Window
// alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

// alert( {}.toString.call(window) ); // [object Window]
// alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]

//task1
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B); // true
