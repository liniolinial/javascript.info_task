// let user = {
//   firstName: "John",
//   // sayHi() {
//   //   console.log(`Hello, ${this.firstName}!`);
//   // },
// };
// console.log(`Hello, ${this.firstName}!`.call(user));
// console.log('Hello, ${this.firstName}!`);
// setTimeout(user.sayHi, 1000); // Hello, undefined!

// let f = user.sayHi;
// setTimeout(f, 1000); // lost user context

//solution1-wrapper
// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

// setTimeout(function () {
//   user.sayHi(); // Hello, John!
// }, 1000);

// setTimeout(() => user.sayHi(), 1000);
// // console.log(user.sayHi());

//problem of wrapper solution
// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

// setTimeout(() => user.sayHi(), 1000);

// // ...the value of user changes within 1 second
// user = {
//   sayHi() {
//     console.log("Another user in setTimeout!");
//   },
// };
// Another user in setTimeout!

//
//solution2-.bind
// let user = {
//   firstName: "John",
// };

// function func() {
//   console.log(this.firstName);
// }

// let funcUser = func.bind(user);
// funcUser(); // John

// let user = {
//   firstName: "John",
// };

// function func(phrase) {
//   console.log(phrase + ", " + this.firstName);
// }

// // bind this to user
// let funcUser = func.bind(user);

// funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)

//with object method
// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

// let sayHi = user.sayHi.bind(user); // (*)

// // can run it without an object
// sayHi(); // Hello, John!

// setTimeout(sayHi, 1000); // Hello, John!

// // even if the value of user changes within 1 second
// // sayHi uses the pre-bound value which is reference to the old user object
// user = {
//   sayHi() {
//     console.log("Another user in setTimeout!");
//   },
// };

// let user = {
//   firstName: "John",
//   say(phrase) {
//     console.log(`${phrase}, ${this.firstName}!`);
//   },
// };

// // let say = user.say.bind(user);

// say("Hello"); // Hello, John! ("Hello" argument is passed to say)
// say("Bye"); // Bye, John! ("Bye" is passed to say)

// bind all in a loop
// let user = {
//   firstName: "John",
//   say(phrase) {
//     console.log(`${phrase}, ${this.firstName}!`);
//   },
// };

// // Binden aller Funktionen im Objekt an das Objekt selbst
// for (let key in user) {
//   if (typeof user[key] == "function") {
//     user[key] = user[key].bind(user);
//   }
// }

// user.say("Hello"); // Ausgabe: Hello, John!
// user.say("Bye"); // Ausgabe: Bye, John!
// Unterschied: vor .say  user zu binden!!

// partial functions
// function mul(a, b) {
//   return a * b;
// }
// let double = mul.bind(null, 2);

// console.log(double(3)); // = mul(2, 3) = 6
// console.log(double(4)); // = mul(2, 4) = 8
// console.log(double(5)); // = mul(2, 5) = 10

// //triple
// function mul(a, b) {
//   return a * b;
// }

// let triple = mul.bind(null, 3);

// console.log(triple(3)); // = mul(3, 3) = 9
// console.log(triple(4)); // = mul(3, 4) = 12
// console.log(triple(5)); // = mul(3, 5) = 15

//going partial without context
// function partial(func, ...argsBound) {
//   return function (...args) {
//     // wrapper(*)
//     return func.call(this, ...argsBound, ...args);
//   };
// }

// // Usage:
// let user = {
//   firstName: "John",
//   say(time, phrase) {
//     console.log(`[${time}] ${this.firstName}: ${phrase}!`);
//   },
// };

// // add a partial method with fixed time
// user.sayNow = partial(
//   //partial = function
//   user.say,
//   new Date().getHours() + ":" + new Date().getMinutes()
// );

// user.sayNow("Hello");
// // Something like:
// // [10:00] John: Hello!

//task1
// function f() {
//   console.log(this); // ?
// }
// let user = {
//   g: f.bind(null),
// };
// user.g();

//task2
// function f() {
//   console.log(this.name);
// }
// f = f.bind({ name: "John" }).bind({ name: "Ann" });
// f();

//task3
function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;
console.log(sayHi.test);

// let bound = sayHi.bind({
//   name: "John",
// }); // John

// console.log(bound.test); // what will be the output? why?
