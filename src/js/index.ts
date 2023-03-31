import "ress";
import "../styles/style.scss";
import { accordionAnimation } from "./accordion";
import { hamburgerActions } from "./hamburger";
import { intersection } from "./intersection";

window.addEventListener("DOMContentLoaded", () => {
  hamburgerActions();
  intersection(".js-intersection");
  accordionAnimation();
});
