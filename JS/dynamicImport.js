// let modulePath = prompt("Which module to load?");

// import(modulePath)
//   .then(obj => <module object>)
//   .catch(err => <loading error, e.g. if no such module>)

//   {/* // 📁 say.js
// export function hi() {
//   alert(`Hello`);
// }

// export function bye() {
//   alert(`Bye`);
// }
// {/* …Then dynamic import can be like this: */}

// let {hi, bye} = await import('./say.js');

// hi();
// bye(); */}

// // 📁 say.js
// export default function() {
//   alert("Module loaded (export default)!");
// }

// let obj = await import("./say.js");
// let say = obj.default;
// // or, in one line: let {default: say} = await import('./say.js');

// say();
export function hi() {
  alert(`Hello`);
}

export function bye() {
  alert(`Bye`);
}

export default function () {
  alert("Module loaded (export default)!");
}
