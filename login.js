let login_form = document.getElementById('login_form');
let username_input = login_form.querySelector('input[type=text]');
let password_input = login_form.querySelector('input[type=password');
let form_submit_btn = document.getElementById('form_submit');

let user = {}
let is;

form_submit_btn.addEventListener('click', (e) => {

    e.preventDefault()

    user.username = username_input.value;
    user.password = password_input.value;
    // console.log(user);

    fetch('https://romancehouse-e1018-default-rtdb.firebaseio.com/users.json')
        .then(res => res.json())
        .then(data => {
            is = Object.entries(data).some(a => {
                return a[1].username == user.username && a[1].password == user.password
            });
        })

})
export {is , user}
