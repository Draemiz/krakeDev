jugar = function(){
    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblMensaje", "ES MAYOR A 3");
        cambiarTexto("lblMensaje2", "GANASTE!");
    }else{
        cambiarTexto("lblMensaje", "ES MENOR A 3");
        cambiarTexto("lblMensaje2", "ESTAS DE MALAS");
    }
}

//Crear funcion lanzarDado, no recibe parametros
//retorna numero aleatrio entre 1 y 6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); //entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado); //entero entre 0 y 5
    valorDado=numeroEntero+1; //entero entre 1 y 6
    return valorDado; 
}