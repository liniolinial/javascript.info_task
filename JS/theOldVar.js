//scoping in practice sheet
{
  if (true) {
    var test = true; // use "var" instead of "let"
  }
  console.log(test);

  if (true) {
    let test = true; // use "let"
  }
  console.log(test); // ReferenceError: test is not defined
}

for (var i = 0; i < 10; i++) {
  var one = 1;
  // ...
}

console.log(i); // 10, "i" is visible after loop, it's a global variable
console.log(one); // 1, "one" is visible after loop, it's a global variable
{
  //   let user;
  //   let user; // SyntaxError: 'user' has already been declared

  var user = "Pete";

  var user = "John"; // this "var" does nothing (already declared)
  // ...it doesn't trigger an error

  console.log(user); // John
}

{
  function sayHi() {
    phrase = "Hello";

    console.log(phrase);

    var phrase;
  }
  sayHi();
}

{
  // code blocks are ignored
  function sayHi() {
    phrase = "Hello"; // (*)

    if (true) {
      var phrase;
    }

    console.log(phrase);
  }
  sayHi();
}

function sayHi() {
  alert(phrase);

  var phrase = "Hello";
}

sayHi();

// inhaltlisch Global object ist mit diesem Chapter verbunden.
