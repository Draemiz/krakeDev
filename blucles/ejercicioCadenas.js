ejecutarPrueba=function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function(cadena){
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log ("Caracter "+caracter+" posicion "+posicion);
    }

    for(let posicion=0;posicion<=cadena.length-1;posicion){
        caracter=cadena.charAt(posicion);
        console.log ("Caracter "+caracter+" posicion "+posicion);
    }
}

invertirCadena = function(cadena){
    let resultado = "";

    for(let posicion = cadena.length - 1; posicion >= 0; posicion--){
        let letra = cadena.charAt(posicion);
        resultado = resultado + letra;
    }

    return resultado;
}

ejecutarPrueba2 = function(){
    let texto = recuperarTexto("txtCadena");
    let cadenaInvertida = invertirCadena(texto);
    mostrarTexto("lblResultado", cadenaInvertida);
}