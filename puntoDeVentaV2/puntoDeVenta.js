calcularValorTotal = function () {
    limpiarErrores();

    let producto = recuperarTexto("txtProducto");
    let cantidad = recuperarFloat("txtCantidad");
    let precio = recuperarFloat("txtPrecio");

    if (
        esProductoValido(producto, "lblErrorProducto") &
        esCantidadValida(cantidad, "lblErrorCantidad") &
        esPrecioValido(precio, "lblErrorPrecio")
    ) {

        let subtotal = calcularSubtotal(precio, cantidad);
        let descuento = calcularDescuentoPorVolumen(subtotal, cantidad);
        let iva = calcularIVA(subtotal - descuento);
        let total = calcularTotal(subtotal, descuento, iva);

        mostrarTexto("lblSubtotal", subtotal.toFixed(2));
        mostrarTexto("lblDescuento", descuento.toFixed(2));
        mostrarTexto("lblValorIVA", iva.toFixed(2));
        mostrarTexto("lblTotal", total.toFixed(2));

        let mensaje = "Valor a pagar por " + cantidad + " " + producto +
                      " es " + total.toFixed(2) + " USD";
        mostrarTexto("lblResumen", mensaje);

    } else {
        mostrarTexto("lblTotal", "0.0");
    }
}

esProductoValido = function (producto, idError) {
    let hayError = false;

    if (producto == null || producto.trim() == "") {
        mostrarTexto(idError, "CAMPO OBLIGATORIO");
        hayError = true;
    }
    else if (producto.length > 10) {
        mostrarTexto(idError, "MAXIMO 10 CARACTERES");
        hayError = true;
    }
    else if (!isNaN(producto)) {
        mostrarTexto(idError, "INGRESE UN NOMBRE VALIDO");
        hayError = true;
    }
    if (!hayError) {
        mostrarTexto(idError, "");
    }

    return !hayError;
}



esCantidadValida = function (cantidad, idError) {
    let hayError = false;

    if (isNaN(cantidad)) {
        mostrarTexto(idError, "DEBE INGRESAR UN NUMERO");
        hayError = true;
    } else if (!Number.isInteger(cantidad)) {
        mostrarTexto(idError, "DEBE SER ENTERO");
        hayError = true;
    } else if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idError, "DEBE ESTAR ENTRE 1 Y 100");
        hayError = true;
    }

    if (!hayError) {
        mostrarTexto(idError, "");
    }

    return !hayError;
}


esPrecioValido = function (precio, idError) {
    let hayError = false;

    if (isNaN(precio)) {
        mostrarTexto(idError, "DEBE INGRESAR UN NUMERO");
        hayError = true;
    } else if (precio < 0 || precio > 50) {
        mostrarTexto(idError, "DEBE ESTAR ENTRE 1 Y 50");
        hayError = true;
    }

    if (!hayError) {
        mostrarTexto(idError, "");
    }

    return !hayError;
}

limpiarErrores = function () {
    mostrarTexto("lblErrorProducto", "");
    mostrarTexto("lblErrorCantidad", "");
    mostrarTexto("lblErrorPrecio", "");
}


limpiar = function () {

    //LIMPIAR ERRORES PRIMERO
    limpiarErrores();

    // Limpiar inputs
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTextoEnCaja("txtPrecio", "");

    // Limpiar resultados
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "");
}


/* SI TODO FUNCIONA, HACER UN PUSH */