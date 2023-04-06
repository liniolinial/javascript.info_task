// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // convert prices to array, map each key/value pair into another pair
//   // and then fromEntries gives back the object
//   Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
// );

// console.log(doublePrices); // 8

//task1
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
//method1
// function sumSalaries(sum) {
//   let addAll = Object.values(sum).reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
//   return addAll;
// }
// console.log(sumSalaries(salaries));

//method2
// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// }
// console.log(sumSalaries(salaries));

//task2
let user = {
  name: "John",
  age: 30,
};

// function count(obj) {
//   let keyNum = Object.keys(obj).length;
//   return keyNum;
// }
function count(obj) {
  return Object.keys(obj).length;
}
console.log(count(user));
