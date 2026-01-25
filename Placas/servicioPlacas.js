validarEstructura = function (placa) {
    let errores = "";

    if (placa == null) {
        return "La placa no puede ser null";
    }

    // Longitud
    if (placa.length !== 7 && placa.length !== 8) {
        errores += "La placa debe tener 7 u 8 caracteres. ";
        return errores;
    }

    // Letras
    if (!esMayuscula(placa.charAt(0))) {
        errores += "El primer caracter debe ser una letra mayúscula. ";
    }

    if (!esMayuscula(placa.charAt(1))) {
        errores += "El segundo caracter debe ser una letra mayúscula. ";
    }

    if (!esMayuscula(placa.charAt(2))) {
        errores += "El tercer caracter debe ser una letra mayúscula. ";
    }

    // Guion
    if (!esGuion(placa.charAt(3))) {
        errores += "El cuarto caracter debe ser un guión. ";
    }

    // Dígitos
    if (!esDigito(placa.charAt(4))) {
        errores += "El quinto caracter debe ser un dígito. ";
    }

    if (!esDigito(placa.charAt(5))) {
        errores += "El sexto caracter debe ser un dígito. ";
    }

    if (!esDigito(placa.charAt(6))) {
        errores += "El séptimo caracter debe ser un dígito. ";
    }

    // Octavo carácter (solo si existe)
    if (placa.length === 8) {
        if (!esDigito(placa.charAt(7))) {
            errores += "El octavo caracter debe ser un dígito. ";
        }
    }

    if (errores === "") {
        return null;
    } else {
        return errores;
    }
}

obtenerProvincia = function (placa) {
    let letra;

    if (placa == null || placa.length < 1) {
        return null;
    }

    letra = placa.charAt(0);

    switch (letra) {
        case "A": return "Azuay";
        case "B": return "Bolívar";
        case "U": return "Cañar";
        case "C": return "Carchi";
        case "X": return "Cotopaxi";
        case "H": return "Chimborazo";
        case "O": return "El Oro";
        case "E": return "Esmeraldas";
        case "W": return "Galápagos";
        case "G": return "Guayas";
        case "I": return "Imbabura";
        case "L": return "Loja";
        case "R": return "Los Ríos";
        case "M": return "Manabí";
        case "V": return "Morona Santiago";
        case "N": return "Napo";
        case "S": return "Pastaza";
        case "P": return "Pichincha";
        case "K": return "Sucumbíos";
        case "Q": return "Orellana";
        case "T": return "Tungurahua";
        case "Z": return "Zamora Chinchipe";
        case "Y": return "Santa Elena";
        default: return null;
    }
}

obtenerTipoVehiculo = function (placa) {
    let letra;

    if (placa == null || placa.length < 2) {
        return null;
    }

    letra = placa.charAt(1);

    if (letra === "E") {
        return "Vehículo gubernamental";
    }

    if (letra === "X") {
        return "Vehículo de uso oficial";
    }

    if (letra === "S") {
        return "Vehículo del gobierno provincial";
    }

    if (letra === "M") {
        return "Vehículo municipal";
    }

    if (letra >= "A" && letra <= "Z") {
        return "Vehículo particular";
    }

    return null;
}

obtenerDiaPicoYPlaca = function (placa) {
    let ultimoCaracter;
    let longitud;

    if (placa == null || placa.length === 0) {
        return null;
    }

    longitud = placa.length;
    ultimoCaracter = placa.charAt(longitud - 1);

    switch (ultimoCaracter) {
        case "1":
        case "2":
            return "Lunes";
        case "3":
        case "4":
            return "Martes";
        case "5":
        case "6":
            return "Miércoles";
        case "7":
        case "8":
            return "Jueves";
        case "9":
        case "0":
            return "Viernes";
        default:
            return null;
    }
}
