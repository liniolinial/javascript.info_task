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
