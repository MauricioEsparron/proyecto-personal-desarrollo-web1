var actualAndroid = 0;
function rotacion() {

    var ImagenAndroid = new Array(4);
    ImagenAndroid[0] = "../imagenes/android.jpg";
    ImagenAndroid[1] = "../imagenes/android2.jpg";
    ImagenAndroid[2] = "../imagenes/android2.jpg";
    ImagenAndroid[3] = "../imagenes/android2.jpg";
    var objImagen;
    
    objImagen = document.getElementById("pos0");

    objImagen.src = ImagenAndroid[actualAndroid];
    actualAndroid++;

    if (actualAndroid == ImagenAndroid.length)
    actualAndroid = 0;

    setTimeout("rotacion()", 1500)
}


var actualAndroidB = 0;
function rotacionB() {

    var ImagenAndroidB = new Array(4);
    ImagenAndroidB[0] = "../imagenes/android2.jpg";
    ImagenAndroidB[1] = "../imagenes/android.jpg";
    ImagenAndroidB[2] = "../imagenes/android2.jpg";
    ImagenAndroidB[3] = "../imagenes/android2.jpg";
    var objImagen;
    
    objImagen = document.getElementById("pos1");

    objImagen.src = ImagenAndroidB[actualAndroidB];
    actualAndroidB++;

    if (actualAndroidB == ImagenAndroidB.length)
    actualAndroidB = 0;

    setTimeout("rotacionB()", 1500)
}


var actualAndroidC = 0;
function rotacionC() {

    var ImagenAndroidC = new Array(4); 
    ImagenAndroidC[0] = "../imagenes/android2.jpg";
    ImagenAndroidC[1] = "../imagenes/android2.jpg";
    ImagenAndroidC[2] = "../imagenes/android.jpg";
    ImagenAndroidC[3] = "../imagenes/android2.jpg";
    var objImagen;
    
    objImagen = document.getElementById("pos2");

    objImagen.src = ImagenAndroidC[actualAndroidC];
    actualAndroidC++;

    if (actualAndroidC == ImagenAndroidC.length)
    actualAndroidC = 0;

    setTimeout("rotacionC()", 1500)
}
var actualAndroidD = 0;
function rotacionD() {

    var ImagenAndroidD = new Array(4); 
    ImagenAndroidD[0] = "../imagenes/android2.jpg";
    ImagenAndroidD[1] = "../imagenes/android2.jpg";
    ImagenAndroidD[2] = "../imagenes/android2.jpg";
    ImagenAndroidD[3] = "../imagenes/android.jpg";
    var objImagen;
    
    objImagen = document.getElementById("pos3");

    objImagen.src = ImagenAndroidD[actualAndroidD];
    actualAndroidD++;

    if (actualAndroidD == ImagenAndroidD.length)
    actualAndroidD = 0;

    setTimeout("rotacionD()", 1500)
}


