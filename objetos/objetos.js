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

modificandoAtributos = function(){
    let cuenta ={
        numero:"1352356578",
        saldo: 0.0
    } 
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function(){
    let cliente = {
        cedula:"1792726152",
        nombre:"Juan"
    }
    let cliente1={};
    cliente1.nombre = "Juanito";
    cliente1.apellido = "Salcedo";
    cliente1.cedula="1789329859";
}

probarIncrementarSaldo=function(){
    let cta = {numero:"1753218593", saldo:34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}

probarDeterminarMayor=function(cuenta,monto){
    let per1={nombre:"Daniel",edad:45};
    let per2={nombre:"Luisa",edad:48};
    let mayor;
    mayor = determinarMayor(per1,per2);
    if(mayor !=null){
        console.log("el mayor es: "+mayor.nombre);
    }
}

incrementarSaldo = function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor = function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1
    }else if(persona2.edad>persona1.edad){
        return persona2
    }else{
        return null;
    }
}