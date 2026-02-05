ejecutar1 = function(){
    for(let j=0; j<=5; j++){
        console.log(j);
    }
}

//Imprimir los numeros desde el 10 al 20 (Incluido)
ejecutar2 = function(){
    for(let j=10; j<=20; j++){
        console.log(j);
    }
}

//Imprimir los numeros desde el 10 al 20 (Excluido)
ejecutar3 = function(){
    for(let j=10; j<20; j++){
        console.log(j);
    }
}

//Imprimir los numeros desde el 20 al 10 (Incluido)
ejecutar4 = function(){
    for(let j=20; j>=10; j--){
        console.log(j);
    }
}

//Imprimir los numeros desde el 0 al 20 (de 2 en 2)
ejecutar5 = function(){
    for(let j=0; j<=20; j+=2){
        console.log(j);
    }
}

//Imprimir los numeros impares del 1 al 10
ejecutar6 = function(){
    for(let j=1; j<=10; j+=2){
        console.log(j);
    }
}

//Imprimir los numeros pares del 0 al 10
ejecutar7 = function(){
    for(let j=0; j<=10; j+=2){
        console.log(j);
    }
}

//Imprimir -> voy a pasar el examen 10 veces
ejecutar8 = function(){
    for(let j=1; j<=10; j++){
        console.log("voy a pasar el examen");
    }
}

//Imprimir -> voy a pasar el examen 10 veces
ejecutar9 = function(){
    for(let j=10; j<20; j++){
        console.log("voy a pasar el examen");
    }
}

//Imprimir -> voy a pasar el examen 10 veces
ejecutar10 = function(){
    for(let j=0; j<10; j++){
        console.log("voy a pasar el examen");
    }
}

//Imprimir los numeros del 1 al 10, indicar si es multiplo de 3
ejecutar11 = function(){
    for(let j=1; j<=10; j++){
        if(j%3==0){
            console.log(j+" Es multiplo de 3");
        }
        else{
            console.log(j);
        }
    }
}

//Grabar un audio indicando que pasa con la variable j, 
// mientras se ejecuta el for paso a paso (como su usted fuera el debug).
ejecutar12 = function(){
    for(let j=8; j>4; j-=2){
        console.log(j);
    }
}

//Que imprime la variable acumulado
ejecutar13 = function(){
    let acumulado=0;
    for(let i=1; i<=4; i++){
        acumulado = acumulado + i;
    }
    console.log(acumulado);
}

//ejercicio 1: Se entrega un formulario con cajas de texto y las funciones utilitarias para leer enteros, flotantes o texto, 
//también para mostrar información, incluso para habilitar o deshabilitar componentes. Se pide al estudiente tomar 
//valores de las cajas, hacer calculos y en función de los resultados mostrar información diferenciada.

//ejercicio 2: Narrar paso a paso en un audio la ejecución de un for (1 disinto por cada estudiante)

//ejercicio 3: Se pedira 5 enunciados diferentes de For

//Nota: Todos los ejercicios se subirán a Git y se calificara los commits
