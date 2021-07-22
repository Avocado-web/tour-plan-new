const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
  },
  effect: "coverflow",
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
  },
});


var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке");
  document
  .querySelector(".navbar-button")
  .classList.toggle("navbar-button--visible");
});


