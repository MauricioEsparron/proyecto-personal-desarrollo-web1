function validaciones() {

    /*

    Regla Nombres y Apellidos
    - Debe tener letras
    - Mínimo 1 caracter
*/

    var objNombre = document.getElementById("nombre");
    var nombre;
    nombre = objNombre.value;
    var patron;


    patron = /^\D{3,20}$/;

    if(!patron.test(nombre)){
    alert("Nombre incorrecto, solo se acepta letras (3 a 20 digitos)");
    return 0;}


    var objApellido = document.getElementById("apellido");
    var apellido
    apellido = objApellido.value;
    var patron;


    patron = /^\D{3,20}$/;

    if(!patron.test(apellido)){
    alert("Apellido incorrecto, solo se acepta letras (3 a 20 digitos)");
    return 0;}

    /*
        Regla Dirección
    
        - Alfanumérico
    
        - Mínimo 1 caracter
    */
  
        var objDrireccion = document.getElementById("direccion");
        var direccion
        direccion = objDrireccion.value;
        var patron;
    
    
        patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    
        if(!patron.test(direccion)){
        alert("Direccion incorrecto, solo se acepta letras");
        return 0;}
    
    /*
        Regla DNI
    
        - 8 dígitos numéricos
    */
    var objDni = document.getElementById("dni");
    var dni;
    dni = objDni.value;
    var patron;


    patron = /^\d{8}$/;

    if(!patron.test(dni)){
    alert("Dni incorrecto, solo acepta números (8 digitos)");
    return 0;}


    /*
        Regla Celular
    
        - Empezar con 9
    
        - 9 dígitos numéricos */

    var objCelular = document.getElementById("celular");
    var celular;        
    celular = objCelular.value;
    var patron;


    patron = /^\d{9}$/;

    if(!patron.test(celular)){
    alert("Celular incorrecto, solo acepta numeros (9 digitos)");
    return 0;}      
    
    alert("Bienvenido");

        window.open("ventaCursos.html");
        window.close();
}

function btn1() {
    alert("solo se acepta letras (3 a 20 digitos)");
}
function btn2() {
    alert("solo se acepta letras (3 a 20 digitos)");
}
function btn3() {
    alert("solo se acepta letras (3 a 20 digitos)");
}
function btn4() {
    alert("solo acepta números (8 digitos)");
}
function btn5() {
    alert("solo acepta numeros (9 digitos)");
}

