// let obj = {};
// console.log(obj); // "[object Object]" ?  // {}

// let obj = {};

// console.log(obj.__proto__ === Object.prototype); // true

// console.log(obj.toString === obj.__proto__.toString); //true
// console.log(obj.toString === Object.prototype.toString); //true

// console.log(Object.prototype.__proto__); // null

//for 3 built ins to fit
// let arr = [1, 2, 3];

// // it inherits from Array.prototype?
// console.log(arr.__proto__ === Array.prototype); // true

// // then from Object.prototype?
// console.log(arr.__proto__.__proto__ === Object.prototype); // true

// // and null on the top.
// console.log(arr.__proto__.__proto__.__proto__); // null

// function f() {}

// console.log(f.__proto__ == Function.prototype); // true
// console.log(f.__proto__.__proto__ == Object.prototype); // true, inherit from objects

//changing native prototypes
// String.prototype.show = function () {
//   console.log(this);
// };

// "BOOM!".show(); // BOOM!
// "BM!".show(); // BM!

//polyfilling
// if (!String.prototype.repeat) {
//   // if there's no such method
//   // add it to the prototype

//   String.prototype.repeat = function (n) {
//     // repeat the string n times

//     // actually, the code should be a little bit more complex than that
//     // (the full algorithm is in the specification)
//     // but even an imperfect polyfill is often considered good enough
//     return new Array(n + 1).join(this);
//   };
// }
// console.log("La".repeat(3)); // LaLaLa

//borrwoing form prototypes
// let obj = {
//   0: "Hello",
//   1: "world!",
//   length: 2,
// };

// obj.join = Array.prototype.join;

// console.log(obj.join(",")); // Hello,world!  ---join funktioniert nur bei string value.

//task1
// function f() {
//   console.log("Hello!");
// }

// setTimeout(f, 1000); // shows "Hello!" after 1 second
// f.defer(1000);

//erster Versuch
// String.prototype.defer = setTimeout(console.log("Hello!"), ms);
// f.defer(1000); // shows "Hello!" after 1 second

//task1-lösung
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 sec
