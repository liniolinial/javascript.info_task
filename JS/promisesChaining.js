// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000); // (*)
// })
//   .then(function (result) {
//     // (**)

//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     // (***)

//     console.log(result); // 2
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 4
//     return result * 2;
//   });

//add many .then to a single promise= not chaining
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// });

// promise.then(function (result) {
//   console.log(result); // 1
//   return result * 2;
// });

// promise.then(function (result) {
//   console.log(result); // 1
//   return result * 2;
// });

// promise.then(function (result) {
//   console.log(result); // 1
//   return result * 2;
// });

//returning promises
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 1

//     return new Promise((resolve, reject) => {
//       // (*)
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     // (**)

//     console.log(result); // 2

//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result); // 4
//   });

//example loadScript
// loadScript("/article/promise-chaining/one.js")
//   .then(function (script) {
//     return loadScript("/article/promise-chaining/two.js");
//   })
//   .then(function (script) {
//     return loadScript("/article/promise-chaining/three.js");
//   })
//   .then(function (script) {
//     // use functions declared in scripts
//     // to show that they indeed loaded
//     one();
//     two();
//     three();
//   });

//arrow func form
// loadScript("/article/promise-chaining/one.js")
//   .then((script) => loadScript("/article/promise-chaining/two.js"))
//   .then((script) => loadScript("/article/promise-chaining/three.js"))
//   .then((script) => {
//     // scripts are loaded, we can use functions declared there
//     one();
//     two();
//     three();
//   });

// //add direkt chain
// loadScript("/article/promise-chaining/one.js").then((script1) => {
//   loadScript("/article/promise-chaining/two.js").then((script2) => {
//     loadScript("/article/promise-chaining/three.js").then((script3) => {
//       // this function has access to variables script1, script2 and script3
//       one();
//       two();
//       three();
//     });
//   });
// });

// //thenables object
// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     console.log(resolve); // function() { native code }
//     // resolve with this.num*2 after the 1 second
//     setTimeout(() => resolve(this.num * 2), 1000); // (**)
//   }
// }

// new Promise((resolve) => resolve(1))
//   .then((result) => {
//     return new Thenable(result); // (*)
//   })
//   .then(console.log); // shows 2 after 1000ms

////bigger fetch
// let promise = fetch(url);

// fetch("/article/promise-chaining/user.json")
//   // .then below runs when the remote server responds
//   .then(function (response) {
//     // response.text() returns a new promise that resolves with the full response text
//     // when it loads
//     return response.text();
//   })
//   .then(function (text) {
//     // ...and here's the content of the remote file
//     alert(text); // {"name": "iliakan", "isAdmin": true}
//   });

// //inti arrow
// // same as above, but response.json() parses the remote content as JSON
// fetch("/article/promise-chaining/user.json")
//   .then((response) => response.json())
//   .then((user) => alert(user.name)); // iliakan, got user name

//not good
// Make a request for user.json
// fetch("/article/promise-chaining/user.json")
//   // Load it as json
//   .then((response) => response.json())
//   // Make a request to GitHub
//   .then((user) => fetch(`https://api.github.com/users/${user.name}`))
//   // Load the response as json
//   .then((response) => response.json())
//   // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
//   .then((githubUser) => {
//     let img = document.createElement("img");
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => img.remove(), 3000); // (*)
//   });

//now good
// fetch("/article/promise-chaining/user.json")
//   .then((response) => response.json())
//   .then((user) => fetch(`https://api.github.com/users/${user.name}`))
//   .then((response) => response.json())
//   .then(
//     (githubUser) =>
//       new Promise(function (resolve, reject) {
//         // (*)
//         let img = document.createElement("img");
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => {
//           img.remove();
//           resolve(githubUser); // (**)
//         }, 3000);
//       })
//   )
//   // triggers after 3 seconds
//   .then((githubUser) => alert(`Finished showing ${githubUser.name}`));

//good code + reusable code
// function loadJson(url) {
//   return fetch(url).then((response) => response.json());
// }

// function loadGithubUser(name) {
//   return loadJson(`https://api.github.com/users/${name}`);
// }

// function showAvatar(githubUser) {
//   return new Promise(function (resolve, reject) {
//     let img = document.createElement("img");
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   });
// }

// // Use them:
// loadJson("/article/promise-chaining/user.json")
//   .then((user) => loadGithubUser(user.name))
//   .then(showAvatar)
//   .then((githubUser) => alert(`Finished showing ${githubUser.name}`));
// // ...

//task1
promise.then(f1).catch(f2);
//then: resolve, catch: reject
// downfall
// Versus:
promise.then(f1, f2);
//zwei Parameter für then.
// spread/ spiral
// no
