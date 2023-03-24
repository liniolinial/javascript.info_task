// let arr = [1, 2];

// // create an array from: arr and [3,4]
// alert( arr.concat([3, 4]) ); // 1,2,3,4

// // create an array from: arr and [3,4] and [5,6]
// alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
// alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
//   });

// let length = ["Bilbo", "Gandalf", "Nazgul"].forEach(item => item.length);
// alert( length ); //undefined

// function compare(a,b){
//   if (a > b) return 1;
//   if (a = b) return 0;
//   if (a < b) return -1;
// }

// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//   alert( a + " <> " + b );
//   return a - b;
// });

// let countries = ['Österreich', 'Andorra', 'Vietnam'];

// alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)
// alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)

// let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');

// for (let name of arr) {
//   alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// }

// const fruits = ["Apple", "Banana", "Orange"];

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// const fruits = ["Apple", "Banana", "Orange"];

// const fruitsJuice = fruits.map(function (fruit) {
//   return fruit.length + " Juice";
// });

// console.log(fruitsJuice);

//task 1.
// function camelize(str) {
//   let input = prompt(
//     "This function will camelize the dash-separated words.",
//     ""
//   );
//   let arr = input.split("-");

// }

// function camelize(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }

// function camelize(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }

//task #2
// function filterRange(arr, a, b) {
//   return arr.filter((index) => a <= index && index <= b);
// }

// let arr = [5, 955, 34, 2, 6, 7, 3, 8, 1];
// let filtered = filterRange(arr, 1, 80);
// alert(filtered);
// alert(arr);

//task #3
// let arr = [5, 2, 1, -10, 8];
// console.log(arr.sort((a, b) => b - a));

//task #4
// function copySorted(arr) {
//   let clone = arr.slice();
//   alert(clone.sort());
//   alert(arr);
//   //alternative: return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert(sorted);
// alert(arr);

//task #5 -1
// function calculate(str) {
//   let string = str.split(" ");
//   if (string[1] == "+") {
//     return parseInt(string[0]) + parseInt(string[2]);
//   }
//   if (string[1] == "-") {
//     return parseInt(string[0]) - parseInt(string[2]);
//   }
// }
// console.log(calculate("3 + 7"));

// function Calculator() {
//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b,
//   };

//   this.calculate = function (str) {
//     let split = str.split(" "),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }

// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("", (a, b) => a / b);
// powerCalc.addMethod("malmal", (a, b) => a ** b);
// powerCalc.addMethod("%", (a, b) => a % b);
// let result = powerCalc.calculate("5 malmal 3");
// console.log(result); // 8

//task 6
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((item) => {
//   return {
//   fullName: item.name + " " + item.surname,
//   id: item.id };
// });

// console.log(usersMapped);
// /* ... your code ... */

// // usersMapped = [
// //   { fullName: "John Smith", id: 1 },
// //   { fullName: "Pete Hunt", id: 2 },
// //   { fullName: "Mary Key", id: 3 },
// // ];

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // John Smith

//task7
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [pete, john, mary];

// function sortByAge(arr) {
//   let sorting = arr.map((item) => {
//     return {
//       name: item.name + " ",
//       age: item.age,
//     };
//   });

//   let byAge = arr.sort((a, b) => {
//     if (a.age > b.age) return 1;
//     if (a.age == b.age) return 0;
//     if (a.age < b.age) return -1;
//   });
//   return byAge;
// }
// console.log(sortByAge(arr));
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].age); // 30

//task8
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let randomSort = array.sort(() => {
//       // return 0;
//       return Math.floor(Math.random() * array.length - i); //=hardcoden
//     });
//     return randomSort;
//   }
// }

// let arr = [1, 2, 3];
// console.log(shuffle(arr));

//test
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }
// let count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };
// for (let i = 0; i < 1000000; i++) {
//   let array = [2, 1, 3];
//   shuffle(array);
//   count[array.join("")]++;
// }
// // show counts of all possible permutations
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }

//task9
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// function getAverageAge(users) {
//   let average = users.map((item) => {
//     return {
//       name: item.name + " ",
//       age: item.age,
//     };
//   });
//   let arrayOfAge = users.map((item) => {
//     return item.age;
//   });
//   let ageArray = arrayOfAge.reduce((sum, current) => sum + current, 0);
//   return ageArray / arrayOfAge.length;
// }
// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

//task10
// function unique(arr) {
//   let goThrough = arr.forEach((value) => {
//     function filter(a, b) {
//       if (!a === b) {
//         if (arr.includes(value)) {
//           if (value === value) {
//             return a && b;
//           } else {
//             return a || b;
//           }
//         }
//       }
//     }
//     return filter;
//   });
//   return goThrough;
// }

//Lösung von task 10
// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }
//   return result;
// }
// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// console.log(unique(strings));

//task11
// function groupById(users) {
//   let inMap = users.map((value) => {
//     return value.id + users;
//   });

//   // let obj = users.reduce((add, current) => add.id + current, 0);
//   // for (let obj in nameTag) {
//   //   return push.obj;
//   // }
//   // return nameTag;
//   return inMap;
// }

//task 11 mit Marion
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  return arr.reduce((acc, curr) => {
    acc.curr.id = curr;
    return acc;
  }, {});
}
let usersById = groupById(users);
console.log(usersById);
