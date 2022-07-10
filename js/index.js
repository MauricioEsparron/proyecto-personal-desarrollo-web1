var actualNoticia = 0;
function rotacion() {

    var ImagenNoticia = new Array(5); //posicion del 0 al 2
    ImagenNoticia[0] = "../imagenes/Noticias.jpg";
    ImagenNoticia[1] = "../imagenes/logo_java.jpg";
    ImagenNoticia[2] = "../imagenes/logo_python.png";
    ImagenNoticia[3] = "../imagenes/logo_javascript.png";
    ImagenNoticia[4] = "../imagenes/logo_c_mas_mas.png";
    var objImagen;
    
    objImagen = document.getElementById("imagen");

    objImagen.src = ImagenNoticia[actualNoticia];//Imagen [2]
    actualNoticia++;//actual 3

    if (actualNoticia == ImagenNoticia.length)
    actualNoticia = 0;

    setTimeout("rotacion()", 1500)
}

var actualBtc = 0;
function rotacionb() {
    var ImagenBtc = new Array(4); //posicion del 0 al 2
    ImagenBtc[0] = "../imagenes/Criptonoticias.jpg";
    ImagenBtc[1] = "../imagenes/btc_grafico.jpg";
    ImagenBtc[2] = "../imagenes/btc_imagen1.jpg";
    ImagenBtc[3] = "../imagenes/efectivo_imagen.jpg";
    var objImagenBtc;

    objImagenBtc = document.getElementById("imagenBtc");

    objImagenBtc.src = ImagenBtc[actualBtc];//Imagen [2]
    actualBtc++;//actual 3

    if (actualBtc == ImagenBtc.length)
    actualBtc = 0;

    setTimeout("rotacionb()", 1500)
}    

var actualNovedad = 0;
function rotacionc() {
    var ImagenNavegadores = new Array(4); //posicion del 0 al 2
    ImagenNavegadores[0] = "../imagenes/novedades.png";
    ImagenNavegadores[1] = "../imagenes/navegador_1.jpg";
    ImagenNavegadores[2] = "../imagenes/navegador_2.jpg";
    ImagenNavegadores[3] = "../imagenes/navegador_3.jpg";
    var objImagenNavegadores;

    objImagenNavegadores = document.getElementById("imagenNavegadores");

    objImagenNavegadores.src = ImagenNavegadores[actualNovedad];//Imagen [2]
    actualNovedad++;//actual 3

    if (actualNovedad == ImagenNavegadores.length)
    actualNovedad = 0;

    setTimeout("rotacionc()", 1500);
}    

