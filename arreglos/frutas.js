let frutas=["pera","manzana","banana"];

function probarBusqueda() {
    let FrutaIngresada = recuperarTexto("lblfruta").toLowerCase().trim();
    let resultado = buscar(FrutaIngresada);

    if (resultado == null) {
        alert("No existe la fruta");
    } else {
        alert(resultado + " en el cesto");
    }
}

buscar = function(fruta){
    let elemento;
    let frutaEncontrada = null;
    for (let i=0; i<frutas.length; i++) {
        elemento = frutas[i];
        if(fruta==elemento){
            frutaEncontrada = elemento;
            break;
        }
    }
    return frutaEncontrada
}