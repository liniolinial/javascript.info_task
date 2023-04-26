// let sum = new Function("a", "b", "return a + b");

// console.log(sum(1, 2));

// let sayHi = new Function('console.log("Hello")');

// sayHi(); // Hello

// let str = console.log("Hello" + 2 + 5);
// let func = new Function(str);
// func();
let str = "Hello" + 2 + 5;
let func = new Function(str);
func();

function getFunc() {
  let value = "test";

  let func = function () {
    console.log(value);
  };

  return func;
}

getFunc()();
