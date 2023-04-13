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
// function Counter() {
//   let count = 0;

//   this.up = function () {
//     return ++count;
//   };

//   this.down = function () {
//     return --count;
//   };
// }

// let counter = new Counter();
// console.log(counter.up()); // 1
// console.log(counter.up()); // 2
// console.log(counter.down()); // 1

//task5 test
// "use strict";
// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
//   sayHi();
// }
// // weil function draußen abgerufen ist, es hat nichts mit zum closure zu tun

// task6
// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(sum(1)(2));
// console.log(sum(5)(-1));
// sum(1)(2);

//task7
// let x = 1;
// function func() {
//   console.log(x); // ?
//   let x = 2; // func weiß nicht, was x ist.
// }
// func();
// // error

//task8
// function inBetween(a, b) {
//   return arr.filter((item) => a <= item && item <= b);
// }
// function inArray(input) {
//   let result = [];
//   for (let str of input) {
//     if (arr.includes(str)) {
//       result.push(str);
//     }
//   }
//   return result;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(inBetween(3, 6)); // 3,4,5,6
// console.log(inArray([1, 2, 10])); // 1,2

//task9-meine Lösung
// function byField(input) {
//   if (input === "name") {
//     return users.sort((a, b) => (a.name > b.name ? 1 : -1));
//   }
//   if (input === "age") {
//     return users.sort((a, b) => (a.age > b.age ? 1 : -1));
//   }
// }
//task9-lösung
// function byField(fieldName) {
//   return users.sort((a, b) => (a.fieldName > b.fieldName ? 1 : -1));
// }

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];
// console.log(byField("name"));
// console.log(byField("age"));

//task10 -meine Lösung
// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = i;
//     shooters.push(shooter);
//     i++;
//   }
//   return shooters;
// }
// let army = makeArmy();
// console.log(army[0]); // 10 from the shooter number 0
// console.log(army[1]); // 10 from the shooter number 1
// console.log(army[2]); // 10 ...and so on.
// console.log(army[3]);
// console.log(army[4]);
// console.log(army[5]);
// console.log(army[6]);
// console.log(army[7]);
// console.log(army[8]);
// console.log(army[9]);
// console.log(army[10]);

// //task10-lösung
// function makeArmy() {

//   let shooters = [];

//   for(let i = 0; i < 10; i++) {
//     let shooter = function() { // shooter function
//       alert( i ); // should show its number
//     };
//     shooters.push(shooter);
//   }

//   return shooters;
// }

// let army = makeArmy();
