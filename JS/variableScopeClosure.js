// {
//   // show message
//   let message = "Hello";
//   console.log(message);
// }

// {
//   // show another message
//   let message = "Goodbye";
//   console.log(message);
// }

// function sayHiBye(firstName, lastName) {
//   // helper nested function to use below
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   console.log("Hello, " + getFullName());
//   console.log("Bye, " + getFullName());
// }

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2

// // Garbage Collection
// function f() {
//   let value = 123;

//   return function () {
//     console.log(value);
//   };
// }
// let g = f(); // g.[[Environment]] stores a reference to the Lexical Environment
// // of the corresponding f() call

// function f() {
//   let value = Math.random();

//   return function () {
//     console.log(value);
//   };
// }
// // 3 functions in array, every one of them links to Lexical Environment
// // from the corresponding f() run
// let arr = [f(), f(), f()];
// console.log(arr);

// function f() {
//   let value = 123;

//   return function () {
//     console.log(value);
//   };
// }
// let g = f(); // while g function exists, the value stays in memory
// // g = null; // ...and now the memory is cleaned up
// console.log(g);

// function f() {
//   let value = Math.random();
//   function g() {
//     debugger; // in console: type alert(value); No such variable!
//   }
//   return g;
// }
// let g = f();
// g();
// console.log(g);

// let value = "Surprise!";

// function f() {
//   let value = "the closest value";
//   function g() {
//     debugger; // in console: type alert(value); Surprise!
//   }
//   return g;
// }

// let g = f();
// g();
// console.log(g());

// task 4 test
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };

  this.down = function () {
    return --count;
  };
}

let counter = new Counter();
console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1
