// let user = {
//   name: "John",
//   hi() {
//     console.log(this.name);
//   },
//   bye() {
//     console.log("Bye");
//   },
// };

// user.hi(); // John  -> works

// // // now let's call user.hi or user.bye depending on the name
// (user.name == "John" ? user.hi : user.bye)(); // undefined -> Error!

// let user = {
//   name: "John",
//   hi() {
//     console.log(this.name);
//   },
// };
// user.hi();

//lösung
// // split getting and calling the method in two lines
// let hi = user.hi.bind(user);
// hi(); // Error, because this is undefined

//task1
// let user = {
//   name: "John",
//   go: function () {
//     console.log(this.name);
//   },
// };

// let user = {
//   name: "John",
//   go() {
//     console.log(this.name);
//   },
// };
// // user.go();
// user.go;

//task2
let obj, method;

obj = {
  go: function () {
    console.log(this);
  },
};

// obj.go(); // (1) [object Object]

// obj.go(); // (2) [object Object]

(method = obj.go)(); // (3) undefined

// method = obj.go(); // (3) [object Object]

// (obj.go || obj.stop)(); // (4) undefined
