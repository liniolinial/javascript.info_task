// // ex1
// form.onclick = function (event) {
//   event.target.style.backgroundColor = "yellow";

//   // chrome needs some time to paint yellow
//   setTimeout(() => {
//     alert("target = " + event.target.tagName + ", this=" + this.tagName);
//     event.target.style.backgroundColor = "";
//   }, 0);
// };

// // ex2

// for (let elem of document.querySelectorAll("*")) {
//   elem.addEventListener(
//     "click",
//     (e) => alert(`Capturing: ${elem.tagName}`),
//     true
//   );
//   elem.addEventListener("click", (e) => alert(`Bubbling: ${elem.tagName}`));
// }
