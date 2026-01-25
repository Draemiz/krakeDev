let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function (seleccionado) {

    let eleccionComputador = generarElemento();

    let ruta = generarRuta(eleccionComputador);
    mostrarImagen("imgComputador", ruta);

    let resultado = determinarGanador(seleccionado, eleccionComputador);

    if (resultado === 0) {
        mostrarTexto("resultado", "EMPATE");
    } else if (resultado === 1) {
        puntosUsuario++;
        mostrarTexto("resultado", "¡GANASTE LA PARTIDA!");
    } else {
        puntosComputador++;
        mostrarTexto("resultado", "¡PERDISTE LA PARTIDA!");
    }

    mostrarTexto("puntosUsuario", puntosUsuario);
    mostrarTexto("puntosComputador", puntosComputador);

    if (puntosUsuario === 5) {
        mostrarTexto("resultado", "HAS GANADO EL JUEGO");
    } else if (puntosComputador === 5) {
        mostrarTexto("resultado", "EL COMPUTADOR TE HA VENCIDO");
    }
};

limpiar = function () {
    puntosUsuario = 0;
    puntosComputador = 0;

    mostrarTexto("puntosUsuario", 0);
    mostrarTexto("puntosComputador", 0);
    mostrarTexto("resultado", "");
    mostrarImagen("imgComputador", "");
};
