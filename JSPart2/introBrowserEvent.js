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

////hier-----
// let slider = document.getElementById("slider");
// let slides = document.querySelectorAll(".slide");
// let buttonPrev = document.getElementById("buttonPrev");
// let buttonNext = document.getElementById("buttonNext");
// document.body.prepend(slides.length);

// function showSlide() {
//   for (let i = 0; i < slides.length; i++) {
//     if (i < limit) {
//       slides[i].style.display = "block";
//     } else {
//       slides[i].style.display = "none";
//     }
//   }
// }

// // function goForward() {
// //   limit -= 3;
// //   if (limit > slides.length) {
// //     limit = slides.length;
// //   }
// //   showSlide();
// // }

// function goForward() {
//   const currentActiveIndex = Array.from(slides);
//   const nextActiveIndex = currentActiveIndex + 3;

//   for (let i = currentActiveIndex; i < nextActiveIndex; i++) {
//     if (slides[i]) {
//       slides[i].style.display = "block";
//     }
//   }
// }

// function goBackward() {
//   limit += 3;
//   if (limit < 3) {
//     limit = 3;
//   }
//   showSlide();
// }

// buttonNext.addEventListener("click", goForward);
// buttonPrev.addEventListener("click", goBackward);
// showSlide();
////bis hier----

const slides = document.querySelectorAll(".slide");
const buttonPrev = document.getElementById("buttonPrev");
const buttonNext = document.getElementById("buttonNext");

let startIndex = 0;
let limit = 3;

function showSlides(startIndex, limit) {
  slides.forEach((slide, index) => {
    if (index >= startIndex && index < startIndex + limit) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

function goForward() {
  if (startIndex + limit <= slides.length) {
    startIndex += limit;
    if (startIndex + limit > slides.length) {
      startIndex = slides.length - 3;
    }
    showSlides(startIndex, limit);
  }
}
//nur muss ich bei hier den if -3 Bediengung fragen, weil hier 10. gerade Zahl ist
function goBackward() {
  if (startIndex >= limit) {
    startIndex -= limit;
  } else {
    startIndex = 0;
  }
  showSlides(startIndex, limit);
}
// hier nicht weil schon wegen goForward teil ungerade Zahl 9 ist, also passt das hier
buttonNext.addEventListener("click", goForward);
buttonPrev.addEventListener("click", goBackward);
