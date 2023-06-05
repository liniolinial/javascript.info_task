// function greet() {
//   console.log("안녕하세요!");
// }

// greet.message = "인사 메시지입니다.";

// greet.sayHello = function () {
//   console.log(this.message);
// };

// greet(); // 함수 호출- 안녕하세요!
// console.log(greet.message); // 속성 값 출력- 인사 메시지입니다.
// greet.sayHello(); // 메서드 호출- 인사 메시지입니다.
// <input type="button" id="button" onclick="sayThanks()"></input>

// input.onclick = function () {
//   alert(1);
// };
// // ...
// input.onclick = function () {
//   alert(2);
// }; // replaces the previous handler

// element.addEventListener(event, handler, [options]);

// const element = document.getElementById("myElement");

// function handler1() {
//   console.log("Handler 1");
// }

// function handler2() {
//   console.log("Handler 2");
// }

// function combinedHandler(event) {
//   handler1();
//   handler2();
// }

// element.addEventListener("click", combinedHandler);
// class Menu {
//   handleEvent(event) {
//     switch (event.type) {
//       case "mousedown":
//         elem.innerHTML = "Mouse button pressed";
//         break;
//       case "mouseup":
//         elem.innerHTML += "...and released.";
//         break;
//     }
//   }
// }

// let menu = new Menu();

// elem.addEventListener("mousedown", menu);
// elem.addEventListener("mouseup", menu);
