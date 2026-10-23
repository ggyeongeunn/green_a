// swiper
let swiper = new Swiper(".proSwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".proSwiper .swiper-button-next",
    prevEl: ".proSwiper .swiper-button-prev",
  },
  pagination: {
    el: ".proSwiper .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    481: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// mobile navigation
const mobNav = document.querySelector(".mobile");
const menuPop = document.querySelector(".mobile-pop");
const overlay = document.querySelector(".overlay");
const headerHeight = document.querySelector("header").clientHeight;

mobNav.addEventListener("click", () => {
  menuPop.classList.toggle("on");
  menuPop.style.top = `${headerHeight}px`;

  if (menuPop.classList.contains("on")) {
    document.body.style.overflow = "hidden";
    overlay.style.display = "block";
  } else {
    document.body.style.overflow = "auto";
    overlay.style.display = "none";
  }
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
    menuPop.classList.remove("on");
  }
});

const main = document.querySelector("main");
main.style.marginTop = `${headerHeight}px`;
