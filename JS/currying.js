// function curry(f) {
//   // curry(f) does the currying transform
//   return function (a) {
//     return function (b) {
//       return f(a, b);
//     };
//   };
// }

// // usage
// function sum(a, b) {
//   return a + b;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1)(2)); // 3

//implementations of currying- called both normally and partially
// function sum(a, b) {
//   return a + b;
// }

// let curriedSum = _.curry(sum); // using _.curry from lodash library

// console.log(curriedSum(1, 2)); // 3, still callable normally
// console.log(curriedSum(1)(2)); // 3, called partially

// reallife example usage
// var _ = require("lodash");

// function log(date, importance, message) {
//   console.log(
//     `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
//   );
// }

// log = _.curry(log);
// log(new Date(), "DEBUG", "some debug"); // log(a, b, c)
// log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)
// // logNow will be the partial of log with fixed first argument
// let logNow = log(new Date());

// // use it
// logNow("INFO", "message"); // [HH:mm] INFO message
// let debugNow = logNow("DEBUG");

// debugNow("message"); // [HH:mm] DEBUG message

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args); // a
    } else {
      return function (...args2) {
        //b
        return curried.apply(this, args.concat(args2)); //c
      };
    }
  };
}

//   Usage examples:
function sum(a, b, c) {
  return a + b * c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1, 2)(3)); // test
console.log(curriedSum(1)(2)(3)); // 6, full currying

// // func is the function to transform
// function curried(...args) {
//   if (args.length >= func.length) {
//     // (1)
//     return func.apply(this, args);
//   } else {
//     return function (...args2) {
//       // (2)
//       return curried.apply(this, args.concat(args2));
//     };
//   }
// }

// console.log(curriedSum(1, 2, 3));
// // Ergebnis: 7
// // Berechnung: 1 + (2 * 3) = 7

// console.log(curriedSum(1)(2, 3));
// // Ergebnis: 7
// // Berechnung: 1 + (2 * 3) = 7

// console.log(curriedSum(1, 2)(3));
// // Ergebnis: 7
// // Berechnung: 1 + (2 * 3) = 7

// console.log(curriedSum(1)(2)(3));
// // Ergebnis: 7
// // Berechnung: 1 + (2 * 3) = 7
