// try {
//   // code...
// } catch (err) {
//   // error handling
// }
// //errorless ex
// try {
//   console.log("Start of try runs"); // (1) <--
//   // ...no errors here
//   console.log("End of try runs"); // (2) <--
// } catch (err) {
//   console.log("Catch is ignored, because there are no errors"); // (3)
// }
// // Start of try runs
// // End of try runs
//error ex
// try {
//   console.log("Start of try runs"); // (1) <--
//   lalala; // error, variable is not defined!
//   console.log("End of try (never reached)"); // (2)
// } catch (err) {
//   console.log(`Error has occurred!`); // (3) <--
// }
// // Start of try runs
// // Error has occurred!
//error object
// try {
//     // ...
//   } catch (err) { // <-- the "error object", could use another word instead of err
//     // ...
//   }
// try {
//   lalala; // error, variable is not defined!
// } catch (err) {
//   console.log(err.name); // ReferenceError
//   console.log(err.message); // lalala is not defined
//   console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)
//   // Can also show an error as a whole
//   // The error is converted to string as "name: message"
//   console.log(err); // ReferenceError: lalala is not defined
// }
//optional catch binding
// try {
//     // ...
//   } catch { // <-- without (err)
//     // ...
//   }

//try...catch use
// let json = '{"name":"John", "age": 30}'; // data from the server
// let user = JSON.parse(json); // convert the text representation to JS object
// // now user is an object with properties from the string
// console.log(user.name); // John
// console.log(user.age); // 30

// //wenn json shief geht.
// let json = "{ bad json }";

// try {
//   let user = JSON.parse(json); // <-- when an error occurs...
//   console.log(user.name); // doesn't work
// } catch (err) {
//   // ...the execution jumps here
//   console.log(
//     "Our apologies, the data has errors, we'll try to request it one more time."
//   );
//   console.log(err.name);
//   console.log(err.message);
// }
// // Our apologies, the data has errors, we'll try to request it one more time.
// // SyntaxError
// // Unexpected token b in JSON at position 2

//json syntax correct, name nicht
// let json = '{ "age": 30 }'; // incomplete data

// try {
//   let user = JSON.parse(json); // <-- no errors
//   console.log(user.name); // no name!
// } catch (err) {
//   console.log("doesn't execute");
// }
// // undefined

//throw operator
// // throw <error object></error>
// let error = new Error(message);
// // or
// let error = new SyntaxError(message);
// let error = new ReferenceError(message);
// // ...

//basic built in error- name property= name of the constructor
// let error = new Error("Things happen o_O");
// console.log(error.name); // Error
// console.log(error.message); // Things happen o_O

//json.parse error
// try {
//   JSON.parse("{ bad json o_O }");
// } catch (err) {
//   console.log(err.name); // SyntaxError
//   console.log(err.message); // Unexpected token b in JSON at position 2
// }

//absance of name-> fill with name
// let json = '{ "age": 30 }'; // incomplete data

// try {
//   let user = JSON.parse(json); // <-- no errors

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); // (*)
//   }

//   console.log(user.name);
// } catch (err) {
//   console.log("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
// }

//rethrowing
// let json = '{ "age": 30 }'; // incomplete data

// try {
//   user = JSON.parse(json); // <-- forgot to put "let" before user

//   // ...
// } catch (err) {
//   console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
//   // (no JSON Error actually)
// }

//instanceof operator
// try {
//   user = {
//     /*...*/
//   };
// } catch (err) {
//   if (err instanceof ReferenceError) {
//     console.log("ReferenceError"); // "ReferenceError" for accessing an undefined variable
//   }
// }

//catch handles nur syntaxError
// let json = '{ "age": 30 }'; // incomplete data
// try {
//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }

//   blabla(); // unexpected error

//   console.log(user.name);
// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.log("JSON Error: " + err.message);
//   } else {
//     throw err; // rethrow (*)
//   }
// }
// // JSON Error: Incomplete data: no name

// function readData() {
//   let json = '{ "age": 30 }';

//   try {
//     // ...
//     blabla(); // error!
//   } catch (err) {
//     // ...
//     if (!(err instanceof SyntaxError)) {
//       throw err; // rethrow (don't know how to deal with it)
//     }
//   }
// }

// try {
//   readData();
// } catch (err) {
//   console.log("External catch got: " + err); // caught it!
// }
// // External catch got: ReferenceError: blabla is not defined

//try catch finally
// try {
//   ... try to execute the code ...
// } catch (err) {
//   ... handle errors ...
// } finally {
//   ... execute always ...
// }

// try {
//   console.log("try");
//   if (confirm("Make an error?")) BAD_CODE();
// } catch (err) {
//   console.log("catch");
// } finally {
//   console.log("finally");
// }

//fib func ex
// let num = +console.log("Enter a positive integer number?", -7);

// let diff, result;

// function fib(n) {
//   if (n < 0 || Math.trunc(n) != n) {
//     throw new Error("Must not be negative, and also an integer.");
//   }
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try {
//   result = fib(num);
// } catch (err) {
//   result = 0;
// } finally {
//   diff = Date.now() - start;
// }
// fib(-14);
// // throw new Error("Must not be negative, and also an integer.");
// // ^
// // Error: Must not be negative, and also an integer.
// console.log(result || "error occurred");

// console.log(`execution took ${diff}ms`);
// // Enter a positive integer number? 35
// // error occurred
// // execution took 0ms

//syntax for outside error
// window.onerror = function(message, url, line, col, error) {
//   // ...
// };

{
  /* <script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };

  function readData() {
    badFunc(); // Whoops, something went wrong!
  }

  readData();
</script> */
}

//task1
// The first one uses finally to execute the code after try...catch:

try {
  work work
} catch (err) {
  handle errors
} finally {
  cleanup the working space
}
// The second fragment puts the cleaning right after try...catch:

try {
  work work
} catch (err) {
  handle errors
}

// cleanup the working space