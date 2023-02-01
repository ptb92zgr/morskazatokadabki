const toggleMenuBtn = document.querySelector(".menu__btn");
const menuItems = document.querySelector(".menu__items");
const menuLink = document.querySelectorAll("menu__link");

//automatic slider for about section

// automaticSlides();
// function automaticSlides() {
//   let i;
//   let autSlides = document.getElementsByClassName("section__slider-item");
//   for (i = 0; i < autSlides.length; i++) {
//     autSlides[i].style.display = "none";
//   }
//   automaticSlideIndex++;
//   if (automaticSlideIndex > autSlides.length) {
//     automaticSlideIndex = 1;
//   }

//   autSlides[automaticSlideIndex - 1].style.display = "block";
//   setTimeout(automaticSlides, 2000);
// }

// //slider for beers
// showSlides(slideIndex);

// // Button controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // slide remote
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("section__slide");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";

//     if (window.matchMedia("(min-width: 1024px)")) {
//     }
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

const showMenu = () => {
  menuItems.classList.toggle("show__menu");
};

const hideMenu = () => {
  menuItems.classList.toggle("show__menu");
};

toggleMenuBtn.addEventListener("click", showMenu);
menuItems.addEventListener("click", showMenu);
