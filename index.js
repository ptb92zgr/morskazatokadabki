const toggleMenuBtn = document.querySelector(".menu__btn");
const menuItems = document.querySelector(".menu__items");
const menuLink = document.querySelectorAll("menu__link");
const lines = document.querySelectorAll("path");
const sections = document.querySelectorAll(".section");
const btns = document.querySelectorAll(".section__btn");

let slideIndex = 1;

// //slider
showSlides(slideIndex);

// Button controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// slide remote
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("section__slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

    if (window.matchMedia("(min-width: 1024px)")) {
    }
  }
  slides[slideIndex - 1].style.display = "block";
}

const showMenu = () => {
  menuItems.classList.toggle("show__menu");
};

toggleMenuBtn.addEventListener("click", showMenu);
menuItems.addEventListener("click", showMenu);
