// function pow(x, n) {
//   let result = 1;

//   // multiply result by x n times in the loop
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// console.log(pow(2, 3)); // 8

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// console.log(pow(3, 3));

// function pow(x, n) {
//   return x * pow(x, n);
// }
// console.log(pow(3, 3)); // 27

// function pow(x, n) {
//   return n == 1 ? x : x * pow(x, n - 1);
// }
// console.log(pow(3, 3)); // 27

// let company = {
//   sales: [
//     {
//       name: "John",
//       salary: 1000,
//     },
//     {
//       name: "Alice",
//       salary: 1600,
//     },
//   ],

//   development: {
//     sites: [
//       {
//         name: "Peter",
//         salary: 2000,
//       },
//       {
//         name: "Alex",
//         salary: 1800,
//       },
//     ],

//     internals: [
//       {
//         name: "Jack",
//         salary: 1300,
//       },
//     ],
//   },
// };

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     // case (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//   } else {
//     // case (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//     }
//     return sum;
//   }
// }
// console.log(sumSalaries(company)); // 7700

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };
// console.log(list);

// let secondList = list.next.next;
// list.next.next = null;
// list.next.next = secondList;

// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };

// // prepend the new value to the list
// list = { value: "new item", next: list.next.next.next };
// console.log(list);

// task #1-1
// function sumTo(n) {
//   let result = 0;
//   for (let i = 0; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }
// console.log(sumTo(5)); // 15

//task #1-2
// function sumTo(n) {
//   if (n == 1) {
//     return n;
//   } else {
//     return n + sumTo(n - 1);
//   }
// }
// console.log(sumTo(6));

// //oder

// function sumTo(n) {
//     if (n == 1) {
//       return n;
//     } else {
//       return (n * (n + 1)) / 2;
//     }
//   }
//   console.log(sumTo(6));

//task #1-3
// function sumTo(n) {
//   let sumTo = { value: 1 };
//   sumTo.next = { value: 2 };
//   sumTo.next.next = { value: 3 };
//   sumTo.next.next.next = { value: 4 };
//   sumTo.next.next.next.next = { value: 5 };
//   sumTo.next.next.next.next.next = { value: 6 };
//   // prepend the new value to the list
//   sumTo = { value: n, next: sumTo.next.next.next };
// }
// console.log(sumTo(6));

//task #2 -recursive version
// function factorial(n) {
//   if (n == 1) {
//     return 1;
//   } else {
//     return n * (n - 1);
//   }
// }
// console.log(factorial(5));

// task #2 - aber loop version
// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5)); // 120

//task #3
// function fib(n) {
//   if (n <= 2) {
//     return 1;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }

// function fib(n) {
//   return n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
// }

//wichtig: n ist die position, keine nummer
//vllt zwei for loop am ende addieren
// function fib(n) {
//   let array = [];
//   if (n <= 2) {
//     return 1;
//   } else {
//     for (let i = 0; i < n; i++) {
//       return fib(n - 1) + fib(n - 2);
//     }
//   }
// }

// loop - idee weiter überlegen
// function fib(n) {
//   let numbers = [0, 1];
//   if (n <= 0) {
//     numbers = [];
//   } else if (n == 1) {
//     numbers = [1];
//   } else {
//     for (let i = 2; i < n; i++) {
//       numbers[i] = numbers[i - 2] + numbers[i - 1];
//     }
//   }
//   console.log(numbers);
// }

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(40)); // 13
// console.log(fib(77)); // 5527939700884757

//task4
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// // //-loop
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  if (Object.values(next)) {
    return null;
  } else {
    // let firstList = list.next;
    // let nextPush = firstList.push(next);
    // return nextPush;
    return list.push((prev, current) => prev + current.next);
  }
}
console.log(printList(list));

// //-recursion
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };
// function printList(list) {
//   if (list.next.next.next.next === null) {
//     return;
//   } else {
//     let firstList = list.next;
//     let nextPush = firstList.push(next);
//     return nextPush;
//   }
// }
// console.log(printList(list));
