import "ress";
import "swiper/swiper-bundle.min.css";
import "../styles/style.scss";
import { accordionAnimation } from "./accordion";
import { hamburgerActions } from "./hamburger";
import { intersection } from "./intersection";

import Swiper, { Autoplay } from "swiper";
import { scrollAnimation } from "./scroll";

window.addEventListener("DOMContentLoaded", () => {
  hamburgerActions();
  intersection(".js-intersection");
  accordionAnimation();
});

const contacts = document.querySelectorAll<HTMLAnchorElement>(".contact-btn");

contacts.forEach((element) => {
  element.addEventListener("click", (e) => scrollAnimation(e));
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
    delay: 5000,
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
