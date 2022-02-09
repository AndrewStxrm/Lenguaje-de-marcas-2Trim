function validarFormulario() {

    var x = document.forms["signUp"]["usuario"].value;
    var y = document.forms["signUp"]["email"].value;
    if (x == "") {
        alert("Introduce un nombre de usuario por favor");
        return false;
    }

    if (y == "") {
        alert("Tienes que meter un correo");
        return false;
    }

}


const togglePassword = document.querySelector('#verPass');
const password = document.querySelector('#pass');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('bi-eye');
});



