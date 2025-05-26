// I selected the menu open and close buttons so I can attach event listeners to them
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// When I click the menu open button, I toggle a class on the body to show or hide the mobile menu
menuOpenButton.addEventListener("click", () => {
    // I used classList.toggle to easily add/remove the mobile menu visibility class
    document.body.classList.toggle("show-mobile-menu");
});

// When the close button (X icon) is clicked, I just trigger the same function as clicking the open button
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Here, I’m initializing SwiperJS for the slider section
const swiper = new Swiper('.slider_wrapper', {
  loop: true,   // I want the slides to loop infinitely
  grabCursor: true,    // Adds a hand cursor to indicate draggable/swipe interaction
  spaceBetween: 25,    // Adds space between slides

  // I enabled pagination so users can see their position and click to navigate
  pagination: {
    el: '.swiper-pagination', 
    clickable: true,      // I want the bullets to be interactive
    dynamicBullets: true, // The bullets will grow/shrink based on the current slide position
  },

  // I added navigation arrows for next/prev slide functionality
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // These breakpoints make the slider responsive based on screen size
  breakpoints: {
    0:{
        slidesPerView: 1 // On small screens, show 1 slide
    },
    768:{
        slidesPerView: 2 // On tablets, show 2 slides
    },
    1024:{
        slidesPerView: 3 // On desktops, show 3 slides
    }
  }
});