// // arrow function have no this
// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach((student) =>
//       console.log(this.title + ": " + student)
//     );
//   },
// };
// group.showList();

//use regular function
// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(function (student) {
//       // Error: Cannot read property 'title' of undefined
//       console.log(this.title + ": " + student);
//     });
//   },
// };
// group.showList();

//no arguments
function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  console.log("Hello, " + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds

//same without an arrow function
function defer(f, ms) {
  return function (...args) {
    let ctx = this;
    setTimeout(function () {
      return f.apply(ctx, args);
    }, ms);
  };
}
