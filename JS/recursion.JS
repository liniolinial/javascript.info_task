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

//meine Lösung
//wichtig: n ist die position, keine nummer
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

// solution:
// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

//task4
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
// Lösung-loop
// function printList(list) {
//   let tmp = list;
//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }
// console.log(printList(list));

//Lösung-recursion
// function printList(list) {
//   console.log(list.value); // output the current item
//   if (list.next) {
//     printList(list.next); // do the same for the rest of the list
//   }
// }
// printList(list);
// console.log(typeof list);
//my try
// function printList(list) {
//   if (Object.values(next)) {
//     return null;
//   } else {
//     // let firstList = list.next;
//     // let nextPush = firstList.push(next);
//     // return nextPush;
//     return list.push((prev, current) => prev + current.next);
//   }
// }

//my try
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

//task5
// function printList(list) {
//   let tmp = list;
//   for (let i = 0; i > next; i--) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }
// console.log(printList(list));

// function printList(list) {
//   console.log(list.value); // output the current item
//   if (list.next) {
//     printList(list.next); // do the same for the rest of the list
//   }
// }
// printList(list);

//task5 lösung
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  // console.log(list.value);
}

printReverseList(list);

// function printReverseList(list) {
//   let arr = [];
//   let tmp = list;

//   while (tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// printReverseList(list);
