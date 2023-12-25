let username_input = document.getElementById('input_name');
let userfamily_input = document.getElementById('input_family');
let userusername_input = document.getElementById('input_username');
let userpassword_input = document.getElementById('input_password');

let send_btn = document.querySelector('button');

function UserInfo(name, family, username, password) {

    this.username = name;
    this.userfamily = family;
    this.username = username;
    this.userpassword = password;

}

// let newUser = {name:'ytyt',family:'787'}

function fetch_send() {

    fetch('https://romancehouse-e1018-default-rtdb.firebaseio.com/users.json',
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newUser)

        })
        .then(res => console.log(res))
}


send_btn.addEventListener('click', (event) => {

    event.preventDefault();

    let newUser = new UserInfo(
        username_input.value,
        userfamily_input.value,
        userusername_input.value,
        userpassword_input.value,
    )

    fetch('https://romancehouse-e1018-default-rtdb.firebaseio.com/users.json')
        .then(res => res.json())
        .then(data => {
            console.log(Object.entries(data).length);
        })
        



})