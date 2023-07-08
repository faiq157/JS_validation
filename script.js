const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
form.addEventListener('submit', e => {
    e.preventDefault();
    checkinput();
});

function checkinput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    }
        else {
            setSuccessFor(username);
    }
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    }
    else if (! isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'password cannott be blank');
    } else {
        setSuccessFor(password);
    }
    if (password2Value==='') {
        setErrorFor(password2, 'password2 cannot be blank');

    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'passwords does not match');
    }
    else {
        setSuccessFor(password2);
    }
}
    

    function setErrorFor(input,message) {
        const formcontrol = input.parentElement;
        const small = formcontrol.querySelector('small');
        formcontrol.className = 'form_control error';
        small.innerText = message;
}
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form_control success';
}
    function isEmail(email) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    }

