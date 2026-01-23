
//calcular taza de interes que otorga el banco a una empresa

function calcularTasaInteres(ingresoAnual) {
    let tasa;
    //ingresos menores a 300 000
    if (ingresoAnual < 300000) {
        tasa = 0.16; // taza del 16%
}else if (ingresoAnual>=300000 && ingresoAnual <500000){ 
    //ingresos entre 300 000 a 500 000
    tasa= 0.15; // taza del 15%
}else if (ingresoAnual>=500000 && ingresoAnual <1000000){ 
    //ingresos entre 500 000 a 1000 000
    tasa= 0.14; // taza del 14%
}else if (ingresoAnual>=1000000 && ingresoAnual <2000000){ 
    //ingresos entre 1000 000 a 2000 000
    tasa= 0.13; // taza del 13%
}
// 2000 000 o más 
else{
    taza = 12; //taza del 12%
}
return tasa;
}

//Calcular valor de la cuota mensual que debe 
//pagar un cliente cuanto tiene un prestamo.

function calcularCapacidadPago(edad, ingresos,egresos){
    let valorSobrante = ingresos - egresos;
    let capacidad;

    if(edad > 50){
        capacidad = valorSobrante * 0.30;
    }else{
        capacidad = valorSobrante * 0,40;
    }
    return capacidad;
}

//Valoe de descuento que recibe un usuario por la compra de un producto

function calcularDescuento(precio, cantidad){
    let total = precio * cantidad;
    let descuento = 0;

    if(cantidad < 3){
        descuento = 0;
    }else if(cantidad >= 3 && cantidad <= 5){
        descuento = 0.2;
    }else if(cantidad >= 6 && cantidad <= 11){
        descuento = 0.3;
    }else if(cantidad > 12){
        descuento =  0,4;
    }

    let totalDescuento = total * descuento;
    let totalFinal = total - totalDescuento;
    return totalFinal;

}

//Determinar categoria de colesterol de acuerdo al nivel de 
//colesteron que se mide en un examen

function determinarColesterolLDL(lvlColesterol){
    
    if(lvlColesterol < 100){
        return "optimo";
    }else if(lvlColesterol >= 100 && lvlColesterol <= 129){
        return "Regular";
    }else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
        return "Límite superior al rango normal";
    } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
        return "¡¡Alto!!";
    } else {
        return "PELIGRO - ¡Muy alto!";
    }
}

//Validar clave ingresada 

function validarClave(clave){
    if(clave.length >= 8 && clave.length <= 16){
        return true;
}else {
        return False;
    }
}

//============
//Determinar sila letra que recibe como parametro es mayuscula

function esMauscula(caracter){
    let codigo = caracter.charCodeAt(0);
   
    // Rango ASCII para A-Z en mayustucas es 65 a 90
    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
}

function esMinuscula(caracter) {
    let codigo = caracter.charCodeAt(0);
    
    // Rango ASCII para a-z en minusculas es 97 a 122
    // Códigos para vocales con tilde
    // á: 225, é: 233, í: 237, ó: 243, ú: 250
    if (
        (codigo >= 97 && codigo <= 122) ||
        codigo == 225 ||  codigo == 233 || codigo == 237 ||
        codigo == 243 || codigo == 250
    
    ) {
        return true;
    } else {
        return false;
    }
}

function esDigito(caracter) {
    let codigo = caracter.charCodeAt(0);
    
    // Rango ASCII para dígitos del 0 al 9 es 48 a 57
    if (codigo >= 48 && codigo <= 57) {
        return true;
    } else {
        return false;
    }
}

//============
//Un padre condiciona el permiso de su hijo, solo sale si saca más de 90
//en cualquier materia, matematicas, física, geometria.

function darPermiso(matematicas, fisica, geometria) {

    if (matematicas > 90 || fisica > 90 || geometria > 90) {
        return true;
    } else {
        return false;
    }
}

//Un padre condiciona el permiso de su hijo, solo sale si saca más de 90
//en materia, matematicas o física y mas de 80 en geometria.

function otorgarPermiso(matematicas, fisica, geometria) {

    if ((matematicas > 90 || fisica > 90) && geometria > 80) {
        return true;
    } else {
        return false;
}
}

//Un padre condiciona el permiso de su hijo, solo sale si saca más
//de 90 en matematicas, fisica o geometria y si fisina es más alta que matematicas.

function dejarSalir(matematicas, fisica, geometria) {

    if (
        (matematicas > 90 || fisica > 90 || geometria > 90) &&
        (fisica > matematicas)
    ) {
        return true;
    } else {
        return false;
    }
}
