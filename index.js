import { NavbarClass } from "./components/navbar/navbar.js";
import { Production } from "./components/product/product.js";

window.customElements.define('navbar-comp', NavbarClass);
window.customElements.define('product-container', Production)


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper_btn1",
      prevEl: ".swiper_btn2",
    },
  });