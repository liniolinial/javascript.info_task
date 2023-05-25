// function loadScript(src) {
//   // creates a <script> tag and append it to the page
//   // this causes the script with given src to start loading and run when complete
//   let script = document.createElement("script");
//   script.src = src;
//   document.head.append(script);
// }

// load and execute the script at the given path...aber
// loadScript("/my/script.js");
// // the code below loadScript
// // doesn't wait for the script loading to finish
// // ...

// loadScript("/my/script.js"); // the script has "function newFunction() {…}"
// newFunction(); // no such function!

////function as a second parameter- it works
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(script);

//   document.head.append(script);
// }

// loadScript("/my/script.js", function(){
//     newFunction(); // so now it works
// });

////real runnable example
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
//   (script) => {
//     alert(`Cool, the script ${script.src} is loaded`);
//     alert(_); // _ is a function declared in the loaded script
//   }
// );

// loadScript("/my/script.js", function (script) {
//   console.log(`Cool, the ${script.src} is loaded, let's load one more`);

//   loadScript("/my/script2.js", function (script) {
//     console.log(`Cool, the second script is loaded`);
//   });
// });

// for more script
// loadScript("/my/script.js", function (script) {
//   loadScript("/my/script2.js", function (script) {
//     loadScript("/my/script3.js", function (script) {
//       // ...continue after all scripts are loaded
//     });
//   });
// });

////Handling errors
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
// //usage dazu
// loadScript("JS/introCallback.js", function (error, script) {
//   if (error) {
//     // handle error
//   } else {
//     // script loaded successfully
//   }
// });

////pyramid of doom
////problem situation
// loadScript("1.js", function (error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     loadScript("2.js", function (error, script) {
//       if (error) {
//         handleError(error);
//       } else {
//         // ...
//         loadScript("3.js", function (error, script) {
//           if (error) {
//             handleError(error);
//           } else {
//             // ...continue after all scripts are loaded (*)
//           }
//         });
//       }
//     });
//   }
// });

////making every action a standalone function: solution for that
loadScript("1.js", step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript("2.js", step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript("3.js", step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...continue after all scripts are loaded (*)
  }
}
