function calcularPromedioNotas(){
    //recuperar notas
    let nota1 = recuperarFlotante("txtNota1");
    let nota2 = recuperarFlotante("txtNota2");
    let nota3 = recuperarFlotante("txtNota3");
    //calcular promedio
    let promedio = calcularPromedio(nota1, nota2, nota3);
    
    let promedioResultado = promedio.toFixed(2);
    cambiarTexto("lblResultado", `El promedio es: ${promedioResultado}`);
    
    let mensaje;
    let rutaGif;
    if (promedio < 5 && promedio > 0) {
        // Condición 1: REPROBADO (menor a 5 y mayor a 0)
        mensaje = "REPROBADO";
        rutaGif = "reprobado.gif";
        
    } else if (promedio >= 5 && promedio <= 8) {
        // Condición 2: BUEN TRABAJO (mayor o igual a 5 y menor o igual a 8)
        mensaje = "BUEN TRABAJO";
        rutaGif = "exito.gif"; 
 
    } else if (promedio > 8 && promedio <= 10) {
         // Condición 3: EXCELENTE (mayor a 8 y menor oo igual a 10)
         mensaje = "EXCELENTE";
         rutaGif = "excelente.gif";
        
    } else {
        // Condición 4: DATOS INCORRECTOS (Cualquier otro valor)
        mensaje = "DATOS INCORRECTOS";
         rutaGif = "erro.gif"; 
    }
    
     // 4. Mostrar el mensaje y la imagen (GIF)
    cambiarTexto("lblResultado", `El promedio es: ${promedioResultado} - ${mensaje}`);
    cambiarImagen("imgResultado", rutaGif);
}

