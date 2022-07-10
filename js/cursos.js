
function mostrarMensaje(){
    

    alert("Completa el siguiente formulario")
    window.open("registro.html");
    window.close();



}
var objNombre = "";
function mensaje() {

    objNombre = document.getElementById("nombre");
    nombre = objNombre.value;

    var longitud = nombre.length;

    if (longitud <= 5 || longitud >40) {
        alert("Tu nombre no cumple con los requisitos, ingresa un nombre que contenga de 5 a 40 caracteres");
    }
}

var objComentario = "";
function limitar() {

    objComentario = document.getElementById("comentario");
    var objRestante = document.getElementById("restante");
    var comentario = objComentario.value;
    var longitud = comentario.length;

   
    if (longitud > 200) {
        longitud = 200;
        comentario = comentario.substring(0, 200);
        document.getElementById("comentario").value = comentario;
    }

    objRestante.innerHTML = 200 - longitud;

    var objValor = 200;
    if (objValor - longitud == 0) {
        alert("tu comentario ha llegado al limite de caracteres permitido");
    }

}

function validacionComentario(){

    objComentario = document.getElementById("comentario");
    var comentario = objComentario.value;
    var longitud = comentario.length;

    if (longitud > 200) {
        longitud = 200;
        comentario = comentario.substring(0, 200);
        document.getElementById("comentario").value = respuesta1;
    }

    if (longitud == 0) {
        alert("Necesitas completar el campo para poder enviar tu comentario");
    } else if(longitud <= 9){
        alert("El comentario es muy corto, intenta con uno mayor a 10 caracteres")
    }else{
        alert("Envio exitoso");
    }

}

function limitarB() {
    var objRespuesta1 = "";
    objRespuesta1 = document.getElementById("respuesta1");
    var objRestanteRespuesta1 = document.getElementById("restanteRespuesta1")
    var respuesta1 = objRespuesta1.value;
    var longitud = respuesta1.length;

    if (longitud > 200) {
        longitud = 200;
        respuesta1 = respuesta1.substring(0, 200);
        document.getElementById("respuesta1").value = respuesta1;
    }
    objRestanteRespuesta1.innerHTML = 200 - longitud;
}

function limitarC() {
    var objRespuesta2 = "";
    objRespuesta2 = document.getElementById("respuesta2");
    var objRestanteRespuesta2 = document.getElementById("restanteRespuesta2")
    var respuesta2 = objRespuesta2.value;
    var longitud = respuesta2.length;

    if (longitud > 200) {
        longitud = 200;
        respuesta2 = respuesta2.substring(0, 200);
        document.getElementById("respuesta2").value = respuesta2;
    }
    objRestanteRespuesta2.innerHTML = 200 - longitud;
}

function validacion() {

    var objNombre = document.getElementById("nombre");
    var nombre;
    nombre = objNombre.value;


    if (objNombre == "" || objComentario == "") {
        alert("Necesitas completar los campos para poder enviar tu respuesta");
    } 
 
}
//falta darle funcionalidad
function restablecer() {
    objComentario = "";
    objNombre = "";
    alert("los valores se han restablecido correctamente")
}

function envio(){

    var objRespuesta1 = "";
    objRespuesta1 = document.getElementById("respuesta1");
    var respuesta1 = objRespuesta1.value;
    var longitud = respuesta1.length;

    if (longitud > 200) {
        longitud = 200;
        respuesta1 = respuesta1.substring(0, 200);
        document.getElementById("respuesta1").value = respuesta1;
    }

    if (longitud == 0) {
        alert("Necesitas completar el campo para poder enviar tu respuesta");
    } else if(longitud <= 9){
        alert("La respuesta es muy corta")
    }else{
        alert("Envio exitoso");
    }

}

function envioB(){
    var objRespuesta2 = "";
    objRespuesta2 = document.getElementById("respuesta2");
    var respuesta2 = objRespuesta2.value;
    var longitud = respuesta2.length;

    if (longitud > 200) {
        longitud = 200;
        respuesta2 = respuesta2.substring(0, 200);
        document.getElementById("respuesta2").value = respuesta2;
    }

    if (longitud == 0) {
        alert("Necesitas completar el campo para poder enviar tu comentario");
    } else if(longitud <= 9){
        alert("La respuesta es muy corta")
    }else{
        alert("Envio exitoso");
    }
}