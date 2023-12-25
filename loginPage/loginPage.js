let name_input = document.getElementById('input_name');
let family_input = document.getElementById('input_family');
let username_input = document.getElementById('input_username');
let password_input = document.getElementById('input_password');

let send_btn = document.querySelector('button');

let is_username_exist;
username_input.addEventListener('keyup', (event) => {
    console.log('change');
    fetch('https://romancehouse-e1018-default-rtdb.firebaseio.com/users.json')
        .then(res => res.json())
        .then(data => {

            is_username_exist = Object.entries(data).some(a => {
                return a[1].username == event.target.value 
                // console.log(a[1].username, event.target.value, is_username_exist);
            })
            is_username_exist && alert('این نام کاربری توسط فرد دیگری ذخیره شده');
        })
})

function UserInfo(name, family, username, password) {

    this.name = name;
    this.family = family;
    this.username = username;
    this.password = password;

}

// let newUser = {name:'ytyt',family:'787'}

function fetch_send(a) {

    fetch('https://romancehouse-e1018-default-rtdb.firebaseio.com/users.json',
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(a)

        })
        .then(res => console.log(res))
}


send_btn.addEventListener('click', (event) => {

    event.preventDefault();

    let newUser = new UserInfo(
        name_input.value,
        family_input.value,
        username_input.value,
        password_input.value,
    )

    fetch_send(newUser)

})