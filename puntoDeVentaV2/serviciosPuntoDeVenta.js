calcularValorDescuento = function(monto, porcentajeDescuento) {
    let descuento = (monto * porcentajeDescuento) / 100;
    return descuento;
}

calcularIVA = function(monto) {
    let iva = monto * 0.12;
    return iva;
}

calcularSubtotal = function(precio, cantidad) {
    let subtotal = precio * cantidad;
    return subtotal;
}

calcularTotal = function(subtotal, descuento, iva) {
    let total = subtotal - descuento + iva;
    return total;
}

calcularDescuentoPorVolumen = function(subtotal, cantidad) {
    let descuento = 0;

    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * 0.03;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = subtotal * 0.04;
    } else if (cantidad >= 12) {
        descuento = subtotal * 0.05;
    }

    return descuento;
}
