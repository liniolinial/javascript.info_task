// let sayHi = function () {
//   console.log("Hi");
// };
// console.log(sayHi.name);

// function f(sayHi = function () {}) {
//   console.log(sayHi.name); // sayHi (works!)
// }
// f();

// {
//   let user = {
//     sayHi() {
//       // ...
//     },

//     sayBye() {
//       // ...
//     },
//   };
//   console.log(user.sayHi.name); // sayHi
//   console.log(user.sayBye.name); // sayBye
// }
// {
//   // function created inside array
//   let arr = [function () {}];
//   console.log(arr[0].name);
// }
// {
//   function f1(a) {}
//   function f2(a, b) {}
//   function many(a, b, ...more) {}

//   console.log(f1.length); // 1
//   console.log(f2.length); // 2
//   console.log(many.length); // 2
// }

{
  //??????????????????????????
  //   function ask(question, ...handlers) {
  //     let isYes = confirm(question);
  //     for (let handler of handlers) {
  //       if (handler.length == 0) {
  //         if (isYes) handler();
  //       } else {
  //         handler(isYes);
  //       }
  //     }
  //   }
  //   // for positive answer, both handlers are called
  //   // for negative answer, only the second one
  //   ask(
  //     "Question?",
  //     () => console.log("You said yes"),
  //     (result) => console.log(result)
  //   );
} //??????????????????????????

{
  // function sayHi() {
  //   console.log("Hi");
  //   // let's count how many times we run
  //   sayHi.counter++;
  // }
  // sayHi.counter = 0; // initial value
  // sayHi(); // Hi
  // sayHi(); // Hi
  // console.log(`Called ${sayHi.counter} times`); // Called 2 times
}
{
  // function makeCounter() {
  //   // instead of:
  //   // let count = 0
  //   function counter() {
  //     return counter.count++;
  //   }
  //   return counter;
  // }
  // let counter = makeCounter();
  // counter.count = 0;
  // console.log(counter()); // 0
  // console.log(counter()); // 1
}

// {
//   function makeCounter() {
//     function counter() {
//       return counter.count++;
//     }

//     counter.count = 0;

//     return counter;
//   }

//   let counter = makeCounter();

//   counter.count = 10;
//   console.log(counter()); // 10
// }
// {
//   let sayHi = function func(who) {
//     if (who) {
//       console.log(`Hello, ${who}`);
//     } else {
//       func("Guest"); // use func to re-call itself
//     }
//   };
//   sayHi(); // Hello, Guest

//   // But this won't work:
//   func(); // Error, func is not defined (not visible outside of the function)
// }
// {
//   let sayHi = function (who) {
//     if (who) {
//       console.log(`Hello, ${who}`);
//     } else {
//       sayHi("Guest"); // Error: sayHi is not a function
//     }
//   };

//   let welcome = sayHi;
//   sayHi = null;

//   welcome();
// }
// {
//   let sayHi = function func(who) {
//     if (who) {
//       console.log(`Hello, ${who}`);
//     } else {
//       func("Guest"); // Now all fine
//     }
//   };

//   let welcome = sayHi;
//   sayHi = null;

//   welcome(); // Hello, Guest (nested call works)
// }
//task1
{
  // function makeCounter() {
  //   function counter() {
  //     return counter.count--;
  //   }
  //   counter.count = 0;
  //   return counter;
  // }
  // let counter = makeCounter();
  // counter.set(value) = 10;
  // console.log(counter()); // 10
}
{
  // function makeCounter() {
  //   function counter() {
  //     return counter.set(value).decrease();
  //   }
  //   // function counter() {
  //   //   return counter.count--;
  //   // }
  //   counter.decrease--;
  //   counter.set() = 0;
  //   return counter;
  // }
  // let counter = makeCounter();
  // counter.set(value) = 10;
  // console.log(counter());
}
// task 1 lösung von mir
// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count--;
//   }

//   function set(value) {
//     count = value;
//   }
//   function decrease() {
//     count--;
//   }

//   counter.set = set;
//   counter.decrease = decrease;

//   return counter;
// }
// let counter = makeCounter();
// counter.set(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());

//task1 lösung
// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   }

//   counter.set = (value) => (count = value);

//   counter.decrease = () => count--;

//   return counter;
// }
// let counter = makeCounter();
// counter.set(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());

//task2-mein Versuch
function sumTheNum() {
  let count = 0;

  function calculator(value) {
    count += value;
    return calculator;
  }
  calculator.set = (value) => (count = value);
  return calculator;
}

let sum = sumTheNum();
sum.set();
console.log(sum(1));
console.log(sum(1)(2)(3));

// task2-Lösung
// function sum(a) {
//   let currentSum = a;
//   function f(b) {
//     currentSum += b;
//     return f;
//   }
//   f.toString = function () {
//     return currentSum;
//   };
//   return f;
// }
// console.log(sum(1)(2).toString()); // 3
// console.log(sum(5)(-1)(2).toString()); // 6
// console.log(sum(6)(-1)(-2)(-3).toString()); // 0
// console.log(sum(0)(1)(2)(3)(4)(5).toString()); // 15
