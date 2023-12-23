import { NavbarClass } from "./components/navbar/navbar.js";
import { Production } from "./components/product/product.js";

window.customElements.define('navbar-comp', NavbarClass);
window.customElements.define('product-container', Production)

let login_form = document.getElementById('login_form');
let username_input = login_form.querySelector('input[type=text]');
let password_input = login_form.querySelector('input[type=password');
let form_submit_btn = document.getElementById('form_submit');
let products_container = document.querySelector('.products_container')

let user = {}
let which_user;
let user_in = document.querySelector('.user_in');
let user_off = document.querySelector('.user_off');



form_submit_btn.addEventListener('click', (e) => {

    e.preventDefault()

    user.username = username_input.value;
    user.password = password_input.value;
    // console.log(user);

    fetch('https://romancehouse-e1018-default-rtdb.firebaseio.com/users.json')
        .then(res => res.json())
        .then(data => {
            which_user = Object.entries(data).filter(a => {
                return a[1].username == user.username && a[1].password == user.password
            });
            console.log(which_user);
            user_in.classList.toggle('hide');
            user_off.classList.toggle('hide');

            user_in.querySelector('h1').innerHTML = which_user[0][1].name;
            user_in.querySelector('img').src = which_user[0][1].pic;

        })


})


let newUser = {
    name: 'reza',
    family: 'yarahmadi',
    username: 'rezayar',
    password: '4022'
}

let img = document.querySelector('img');
let name_family = document.querySelector('.name_family');





let products_fragment = document.createDocumentFragment();

fetch('https://romancehouse-e1018-default-rtdb.firebaseio.com/sofa.json')
    .then(res => res.json())
    .then(data => {

        Object.entries(data).forEach(a => console.log(a))

    })


