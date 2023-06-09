//// event delegation
// let selectedTd;
// table.onclick = function (event) {
//   let target = event.target; // where was the click?
//   if (target.tagName != "TD") return; // not on TD? Then we're not interested
//   highlight(target); // highlight it

/////improved one
//   let td = event.target.closest("td"); // (1)
//   if (!td) return; // (2)
//   if (!table.contains(td)) return; // (3)
//   highlight(td); // (4)
// };
// function highlight(td) {
//   if (selectedTd) {
//     // remove the existing highlight if any
//     selectedTd.classList.remove("highlight");
//   }
//   selectedTd = td;
//   selectedTd.classList.add("highlight"); // highlight the new td
// }

// delegation examples
// class Menu {
//     constructor(elem) {
//       this._elem = elem;
//       elem.onclick = this.onClick.bind(this); // (*)
//     }

//     save() {
//       alert('saving');
//     }

//     load() {
//       alert('loading');
//     }

//     search() {
//       alert('searching');
//     }

//     onClick(event) {
//       let action = event.target.dataset.action;
//       if (action) {
//         this[action]();
//       }
//     };
//   }

//   new Menu(menu);

//// counter and one more counter!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// document.addEventListener("click", function (event) {
//   if (event.target.dataset.counter != null) {
//     // if the attribute exists...
//     event.target.value++;
//   }
// });

////toggler
// document.addEventListener("click", function (event) {
//   let id = event.target.dataset.toggleId;
//   if (!id) return;

//   let elem = document.getElementById(id);

//   elem.hidden = !elem.hidden;
// });

//bubbling konzept wiederholung
// function handleClick(event) {
//   alert("Element geklickt:" + event.target.id);
// }

// // Hinzufügen der Event-Handler

// document.getElementById("outer").addEventListener("click", handleClick);
// document.getElementById("inner").addEventListener("click", handleClick);

// task1
// document.addEventListener("click", function (event) {
//   if (event.target.dataset.removeButton !== undefined) {
//     return;
//     let div= document.getElementsByClassName('pane');
//     event.target.dataset.pane.remove();
//   }
// });

// lösung task1
// container.onclick = function (event) {
//   if (event.target.className != "remove-button") return;

//   let pane = event.target.closest(".pane");
//   pane.remove();
// };

// task2
// tree.onclick = function (event) {
//   if (event.target.className === "tree") {
//     let span = document.createElement("span");
//     let treeSpan = event.target.closest(".remove-alive");
//     treeSpan.appendChild(span);
//   }
// };

// try1-2
// tree.onclick = function (event) {
//   let treeId = event.target.className.remove-button;
//   if (!id) return;

//   let li = document.querySelectorAll('.li');
//   li.hidden = !li.hidden;
// });

//2.try
// let tree = document.getElementById("tree");
// let li = document.querySelectorAll("#tree li");
// tree.onclick = function (event) {
//   li.forEach((li) => {
//     if (event.target.className === "tree") {
//       let span = document.createElement("span");
//       li.prepend(span);
//     }
//   });
// };

// // tree.onclick = function (event) {
// //   li.forEach((item) => {
// //     if (event.target.className === "tree") {
// //       let span = document.createElement('span');
// //       item.appendChild(span);
// //     }
// //   });
// // };

// meine Weise: forEach loop : hier fehlt aber den nextSibling
// li.forEach((li) => {
//   let span = document.createElement("span");
//   li.prepend(span);
// });

//lösung:
// move all text into <span>
// they occupy exactly the place necessary for the text,
// for (let li of tree.querySelectorAll("li")) {
//   let span = document.createElement("span");
//   li.prepend(span);
//   span.append(span.nextSibling); // move the text node into span
// }
// // catch clicks on whole tree
// tree.onclick = function (event) {
//   if (event.target.tagName != "SPAN") {
//     return;
//   }

//   let childrenContainer = event.target.parentNode.querySelector("ul");
//   if (!childrenContainer) return; // no children

//   childrenContainer.hidden = !childrenContainer.hidden;
// };

// move all text into <span>
// they occupy exactly the place necessary for the text,

// for (let li of tree.querySelectorAll("li")) {
//   let span = document.createElement("span");
//   li.prepend(span);
//   span.append(span.nextSibling); // move the text node into span
// }

// oder so

let li = document.querySelectorAll("li");
li.forEach((li) => {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling);
});

// catch clicks on whole tree
tree.onclick = function (event) {
  if (event.target.tagName != "SPAN") {
    return;
  }

  //mit closest
  //   let li = event.target.closest("li");
  //   if (!li) return; //

  //   let childrenContainer = li.querySelector("ul");
  //   if (!childrenContainer) return; // no children

  //   childrenContainer.hidden = !childrenContainer.hidden;

  //mit parentNode: kürzer
  let childrenContainer = event.target.parentNode.querySelector("ul");
  if (!childrenContainer) return; // no children

  childrenContainer.hidden = !childrenContainer.hidden;
};

// let childrenContainer = li.closest("li");
// if (!childrenContainer) return; // no children
