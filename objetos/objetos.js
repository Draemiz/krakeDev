probarAtributos = function(){
    let persona ={
        nombre : "Pedro",
        apellido : "Morales",
        edad : 24
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
}

crearProducto=function(){
    let producto1 = {
        nombre: "Laptop",
        precio: 850.50,
        stock: 10
    };
    let producto2 = {
        nombre: "Mouse",
        precio: 25.99,
        stock: 15
    };

    //imprimir producto 1
    console.log(producto1.nombre);
    //imprimir producto 2
    console.log(producto2.precio);

    //Comparar Stock
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto2.stock > producto1.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}

