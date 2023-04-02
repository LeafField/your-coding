import "ress";
import "swiper/swiper-bundle.min.css";
import "../styles/style.scss";
import { accordionAnimation } from "./accordion";
import { hamburgerActions } from "./hamburger";
import { intersection } from "./intersection";

import Swiper, { Autoplay } from "swiper";

window.addEventListener("DOMContentLoaded", () => {
  hamburgerActions();
  intersection(".js-intersection");
  accordionAnimation();
});

new Swiper(".swiper", {
  modules: [Autoplay],
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loopedSlides: 3,
  spaceBetween: 56,
  grabCursor: true,
  speed: 600,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1920: {
      slidesPerView: 5,
      loopedSlides: 5,
      spaceBetween: 56,
    },
  },
});
