let puntos;
puntos=0
let lanzamientos;
lanzamientos=5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    //Si el jugador obtiene mas de 20 puntos
    if (puntos > 20) {
    //mostrar en pantalla un mensaje GANASTE!!
    cambiarTexto("lblmensaje", "¡¡GANASTE!!");
    //invocar a limpiar
    limpiar();
}
}
modificarLanzamientos=function(){
    //resta 1 a la variable lanzamiento, guarda el resultado en la misma variable
    lanzamientos = lanzamientos - 1;
    //muestra en pantalla
    cambiarTexto("lblLanzamientos", lanzamientos);
    //si lanzaminetos llega a 0 mostrar en pantalla "GAME OVER"
    if(lanzamientos === 0 && puntos <= 20){
        cambiarTexto("lblmensaje", "GAME OVER");
    //invocar a limpiar
    limpiar();
}
}
limpiar = function (){
    //despues de oobtener ganaste, colocar otra vez puntaje en 0 y lanzamientos en 5
    puntos = 0;
    lanzamientos = 5;
    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    //En variables y en pantalla

}

mostrarCara = function(numero){
    if(numero == 1){
        cambiarImagen("imgDado","dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado","dados6.png");
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}