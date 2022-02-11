/**
 * Validación del formulario de registro
 */

function validarFormulario() {

    var x = document.forms["signUp"]["usuario"].value;
    var y = document.forms["signUp"]["email"].value;


    if (x == "") {
        alert("Introduce un nombre de usuario por favor");
        return false;
    } else if(!/^[a-zA-Z0-9]+$/.test(x)){   //RegEx para el usuario
        alert("Formato de usuario incorrecto");
        return false;
    }

    if (y == "") {
        alert("Tienes que meter un correo");
        return false;   
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(y)){    //RegEx para que el correo tenga @ que tenga el .com o cualquier dominio de entre 2 y 4 letras
        alert("Formato de correo incorrecto");
        return false;
    }

}

/**
 * Visualizador de contraseña con el ojo
 */

const togglePassword = document.querySelector('#verPass');
const password = document.querySelector('#pass');

togglePassword.addEventListener('click', function (e) {

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // activación del icono
    this.classList.toggle('fa-eye-slash');
});


/**
 * Menú hamburguesa
 */

const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click', hamburguesa)

function hamburguesa() {                        //Función que activa y desactiva el menu hamburguesa cuando pulsas el boton
    toggleButton.classList.toggle('close')
    navWrapper.classList.toggle('show')
};


/**
* Función para hacer el header sticky
*/

window.onscroll = function () { stickyHeader() };
var header = document.getElementById("header");
var sticky = header.offsetTop;
function stickyHeader() {
    if (window.pageYOffset > sticky) {  //Aquí le añado el atributo de sticky
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


/**
 * Título escribiendose automáticamente
 */

var i = 0;
var txt = 'Bienvenido a los quizzes de Dark Souls';
var speed = 50; 
var j = 0;

function typeWriter() {
  if (j < txt.length) {
    document.getElementById("titulo").innerHTML += txt.charAt(j);  //Aquí me imprime las letras del título
    j++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter; //window.onload para que se active la impresión del texto al abrir la página

/**
 * Galería de imágenes con filtros
 */

filterSelection("todo") 
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("columna");       //Función que recoge todos los filtros añadidos y quitados en caso de no haber elegido un filtro que no sea el de "todos"
  if (c == "todo") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "showFilter");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "showFilter"); 
  }
}

function AddClass(element, name) {      //Y aquí le añade a la funcion anterior la clase de las imágenes que se quieren mostrar
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }

}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");  //Y aquí por otro lado, se eliminan
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {                         //Y por último, aquí, el botón pulsado para cambiar el filtro se queda marcado
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/**
 * Slider de imágenes al final de la página que se mueva automáticamente
 */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Cambio de imagen cada 4 segundos
}
