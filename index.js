import { NavbarClass } from "./components/navbar/navbar.js";
window.customElements.define('navbar-comp', NavbarClass);

let onload_page = document.getElementById('onload_page');
let titel_h1 = document.getElementById('title_h1');
let titel_h2 = document.getElementById('title_h2');
let site_container = document.querySelector('.site_container');

window.addEventListener('load', () => {
    setTimeout(function () {
        onload_page.style.display = 'none';
        // site_container.style.overflowY = 'auto';
        // titel_h1.style.animation = 'title_anime 2s';
        // titel_h2.style.animation = 'title_anime_2 2s';
    }, 1000)
})