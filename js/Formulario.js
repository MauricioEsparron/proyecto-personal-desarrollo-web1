/*const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');*/
/*
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}*/

function validaciones() {

    var objUsuario = document.getElementById("usuario");
    var usuario;
    usuario = objUsuario.value;
    var patron;

    patron = /^[a-zA-Z0-9\_\-]{4,16}$/;// Letras, numeros, guion y guion_bajo
    if (!patron.test(usuario)) {
        alert("Usuario incorrecto, solo se acepta letras de 4 a 16 caracteres");
        return 0;
    }


    /*---------------------------------------*/

    var ObjNombre = document.getElementById("nombre");
    var nombre = ObjNombre.value;
    var patron;

    patron = /^[a-zA-Z0-9\_\-]{4,16}$/;// Letras, numeros, guion y guion_bajo
    if (!patron.test(nombre)) {
        alert("Nombre incorrecto, solo se acepta letras de 4 a 16 caracteres");
        return 0;
    }

    /*---------------------------------------*/

    var ObjPassword = document.getElementById("password");
    var password = ObjPassword.value;
    var patron;

    patron = /^.{4,12}$/;// 4 a 12 digitos.
    if (!patron.test(password)) {
        alert("La contraseña tiene que ser de 4 a 12 caracteres.");
        return 0;
    }

    /*---------------------------------------*/

    var ObjCorreo = document.getElementById("correo");
    var correo = ObjCorreo.value;
    var patron;

    patron = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!patron.test(correo)) {
        alert("El correo solo puede contener letras, números, puntos, guiones y guion bajo");
        return 0;
    }

    /*---------------------------------------*/
    var ObjCelular = document.getElementById("celular");
    var celular = ObjCelular.value;
    var patron;

    patron = /^\d{7,14}$/; // 7 a 14 numeros.
    if (!patron.test(celular)) {
        alert("El telefono solo puede contener numeros y el maximo son 14 caracteres");
        return 0;
    }

    /*---------------------------------------*/
    var ObjDni = document.getElementById("dni");
    var dni = ObjDni.value;
    var patron;

    patron = /^\d{8}$/;;
    if (!patron.test(dni)) {
        alert("Dni incorrecto, solo se acepta números (8 caracteres)");
        return 0;
    }
    alert("Bienvenido");

    window.open("ventaCursos.html");
    window.close();

}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
