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

let user = {
  name: "John",
  hi() {
    console.log(this.name);
  },
};
user.hi();

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
