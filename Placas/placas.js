validarPlaca = function () {
    let placa;
    let erroresEstructura;

    placa = recuperarTexto("txtPlaca");
    erroresEstructura = validarEstructura(placa);

    let contenedor = document.getElementById("mensaje");
    contenedor.classList.remove("ok", "error", "oculto");

    if (erroresEstructura == null) {

        mostrarTexto("lblResultado", "ESTRUCTURA CORRECTA");
        mostrarTexto("lblErrores", "La placa ingresada cumple con el formato válido.");

        let provincia = obtenerProvincia(placa);
        if (provincia != null) {
            mostrarTexto("lblProvincia", "Provincia: " + provincia);
        } else {
            mostrarTexto("lblProvincia", "Provincia incorrecta");
        }

        let tipoVehiculo = obtenerTipoVehiculo(placa);
        if (tipoVehiculo != null) {
            mostrarTexto("lblTipo", "Tipo de vehículo: " + tipoVehiculo);
        } else {
            mostrarTexto("lblTipo", "Tipo de vehículo incorrecto");
        }

        contenedor.classList.add("ok");

    } else {

        mostrarTexto("lblResultado", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura);
        mostrarTexto("lblProvincia", "");
        mostrarTexto("lblTipo", "");

        contenedor.classList.add("error");
    }

    let diaPico = obtenerDiaPicoYPlaca(placa);

    if (diaPico != null) {
        mostrarTexto("lblPicoPlaca", "Pico y placa: " + diaPico);
    } else {
        mostrarTexto("lblPicoPlaca", "No aplica pico y placa");
    }
}

limpiar = function () {
    mostrarTextoEnCaja("txtPlaca", "");

    mostrarTexto("lblResultado", "");
    mostrarTexto("lblErrores", "");
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblTipo", "");
    mostrarTexto("lblPicoPlaca", "");

    let contenedor = document.getElementById("mensaje");
    contenedor.classList.add("oculto");
    contenedor.classList.remove("ok", "error");
}
