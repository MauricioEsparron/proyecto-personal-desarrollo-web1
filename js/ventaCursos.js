var Actual = 0;
function carrucel() {

    var ImagenCurso = new Array(6);
    ImagenCurso[0] = "../imagenes/curso1.jpg";
    ImagenCurso[1] = "../imagenes/curso2.jpg";
    ImagenCurso[2] = "../imagenes/curso4.jpg";
    ImagenCurso[3] = "../imagenes/curso6.jpg";
    ImagenCurso[4] = "../imagenes/curso5.jpg"
    ImagenCurso[5] = "../imagenes/curso3.jpg"
    var objImagen;

    objImagen = document.getElementById("cursos");

    objImagen.src = ImagenCurso[Actual];//Imagen [2]
    Actual++;//actual 3

    if (Actual == ImagenCurso.length)
        Actual = 0;

    setTimeout("carrucel()", 1000)

}
var precioSinIGV;
function adicionarCarrito() {

    var objProducto, objCantidad, objTabla, objPrecio;
    var nomProducto, cantidad, precioConIGV;
    var numeroFilas, fila;
    var celdaItem, celdaCantidad, celdaPrecioSinIGV, celdaPrecioConIGV;

    objProducto = document.getElementById("productos");
    objCantidad = document.getElementById("cantidad");
    objTabla = document.getElementById("miTabla");
    objPrecio = document.getElementById("bloque2").getElementsByTagName("label")[2];

    valorProducto = objProducto.value;
    var cantidad = objCantidad.value;

    if (cantidad == "" || cantidad == 0 || cantidad > 6)
        alert("Debes ingresar una cantidad");
    else
        compraValida = 1;

    if (compraValida = 1) {
        switch (valorProducto) {
            case "a": precioSinIGV = 100; break;
            case "b": precioSinIGV = 180; break;
            case "c": precioSinIGV = 150; break;
            case "d": precioSinIGV = 500; break;
            case "e": precioSinIGV = 250; break;
            case "f": precioSinIGV = 600; break;
            default: precioSinIGV = 0;
        }
    }
    objPrecio.innerHTML = "<strong>Precio : " + precioSinIGV + "</strong>";



    nomProducto = objProducto.options[objProducto.selectedIndex].text;
    cantidad = objCantidad.value;
    precioConIGV = (precioSinIGV * cantidad) * 1.18;

    numeroFilas = objTabla.rows.length; //1

    fila = objTabla.insertRow(numeroFilas);

    celdaItem = fila.insertCell(0);
    celdaCantidad = fila.insertCell(1);
    celdaPrecioSinIGV = fila.insertCell(2);
    celdaPrecioConIGV = fila.insertCell(3);

    celdaItem.innerHTML = nomProducto;
    celdaCantidad.innerHTML = cantidad;
    celdaPrecioSinIGV.innerHTML = precioSinIGV;
    celdaPrecioConIGV.innerHTML = precioConIGV;

}
