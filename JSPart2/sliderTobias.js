const PER_VIEW = 3;

const slider = document.getElementById("slider");
const slides = slider.querySelectorAll("li");
const buttonPrev = document.getElementById("buttonPrev");
const buttonNext = document.getElementById("buttonNext");

const slidesLength = slides.length;
/* Total page number ceil because e.g. 10 / 3 = 3.33 = need 4 pages to display */
const pages = Math.ceil(slidesLength / PER_VIEW);
let currentIndex = PER_VIEW;

function showSlide(method) {
  switch (method) {
    case "next":
      currentIndex += PER_VIEW;
      break;
    case "prev":
      currentIndex -= PER_VIEW;
  }

  /* Gets current page number */
  const currentPage = Math.ceil(currentIndex / PER_VIEW);

  /* Checks if first page */
  if (currentPage == 1) {
    buttonPrev.disabled = true;
  } else {
    buttonPrev.disabled = false;
  }

  /* Checks if last page */
  if (currentPage == pages) {
    buttonNext.disabled = true;
  } else {
    buttonNext.disabled = false;
  }

  for (let i = 0; i < slidesLength; i++) {
    if (i < currentIndex && i >= currentIndex - PER_VIEW) {
      slides[i].style.display = "block";
    } else {
      slides[i].style.display = "none";
    }
  }
}

function next() {
  showSlide("next");
}

function prev() {
  showSlide("prev");
}

buttonNext.addEventListener("click", next);
buttonPrev.addEventListener("click", prev);
showSlide();
