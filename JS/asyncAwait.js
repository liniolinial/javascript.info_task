// async function f() {
//   return 1;
// }

// async function f() {
//   return 1;
// }

// f().then(console.log); // 1

// async function f() {
//   return Promise.reject(1);
// }

// f().catch(console.log); // 1

//await
// works only inside async functions
// let value = await promise;

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   console.log(result); // "done!"
// }

// f();

//für reject
// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Fehler!"), 1000);
//   });

//   try {
//     let result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.log(error); // "Fehler!"
//   }
// }

// f();

// then to async,await
// async function showAvatar() {
//   // read our JSON
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();

//   // read github user
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // show the avatar
//   let img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // wait 3 seconds
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();

//thenable ersetzbar mit await
// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     console.log(resolve);
//     // resolve with this.num*2 after 1000ms
//     setTimeout(() => resolve(this.num * 2), 1000); // (*)
//   }
// }

// async function f() {
//   // waits for 1 second, then result becomes 2
//   let result = await new Thenable(1);
//   console.log(result);
// }
// f();
// // [Function (anonymous)]
// // 2

// class Waiter {
//   async wait() {
//     return await Promise.resolve(1);
//   }
// }

// new Waiter().wait().then(console.log);

//error handling
// async function f() {
//   await Promise.reject(new Error("Whoops!"));
// }

// async function f() {
//   throw new Error("Whoops!");
// }

// async function f() {
//   try {
//     let response = await fetch("http://no-such-url");
//   } catch (err) {
//     console.log(err); // TypeError: failed to fetch
//   }
// }

// f();// bash: ode: command not found

// async function f() {
//   try {
//     let response = await fetch("/no-user-here");
//     let user = await response.json();
//   } catch (err) {
//     // catches errors both in fetch and response.json
//     alert(err);
//   }
// }

// f();

// async function f() {
//   let response = await fetch("http://no-such-url");
// }

// // f() becomes a rejected promise
// f().catch(console.log); // TypeError: failed to fetch // (*)

//task1
// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson("https://javascript.info/no-such-user.json").catch(alert); // Error: 404

//rewrite-meine Lösung
// async function loadJson(url) {
//   let response = await fetch(url);
//   let user = await response.json();
//   if (response.status == 200) {
//     return user;
//   } else {
//     throw new Error(response.status);
//   }
// }

// loadJson("https://javascript.info/no-such-user.json").catch(conosle.log); // Error: 404

//task2
// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = "HttpError";
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new HttpError(response);
//     }
//   };

// // Ask for a user name until github returns a valid user
// async function demoGithubUser() {
// let user;
// if(true){
//     let name = prompt("Enter a name?", "iliakan");
//     if()
//     return loadJson(`https://api.github.com/users/${name}`)
// }
//     .then((user) => {
//       alert(`Full name: ${user.name}.`);
//       return user;
//     })
//     .catch((err) => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }

// demoGithubUser();

//   / class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     console.log(resolve);
//     // resolve with this.num*2 after 1000ms
//     setTimeout(() => resolve(this.num * 2), 1000); // (*)
//   }
// }

// async function f() {
//   // waits for 1 second, then result becomes 2
//   let result = await new Thenable(1);
//   console.log(result);
// }
// f();
// // [Function (anonymous)]
// // 2

//task3-meine lösung
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
  wait.then(console.log).catch(console.log);
}
f();

//task3 lösung
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // shows 10 after 1 second
  wait().then((result) => alert(result));
}

f();
