
let empleados = [
    {cedula:"1714616123", nombre:"John", apellido:"Cena", sueldo:500.0},
    {cedula:"0914632123", nombre:"Luisa", apellido:"Gonzalez", sueldo:900.0},
    {cedula:"1102345678", nombre:"Alexandra", apellido:"Moreno", sueldo:800.0}
];

mostrarEmpleados = function(){
    let divTabla = document.getElementById("tablaEmpleados");

    let contenido = "<table border='1'>";
    contenido += "<tr>";
    contenido += "<th>CEDULA</th>";
    contenido += "<th>NOMBRE</th>";
    contenido += "<th>APELLIDO</th>";
    contenido += "<th>SUELDO</th>";
    contenido += "</tr>";

    for(let i = 0; i < empleados.length; i++){
        let emp = empleados[i];
        contenido += "<tr>";
        contenido += "<td>" + emp.cedula + "</td>";
        contenido += "<td>" + emp.nombre + "</td>";
        contenido += "<td>" + emp.apellido + "</td>";
        contenido += "<td>" + emp.sueldo + "</td>";
        contenido += "</tr>";
    }

    contenido += "</table>";
    divTabla.innerHTML = contenido;
}

mostrarOpcionEmpleado = function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");

    deshabilitarFormularioEmpleado();
    mostrarEmpleados();
}


mostrarOpcionRol = function(){
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
}


mostrarOpcionResumen = function(){
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}

ejecutarNuevo = function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");

    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");

    esNuevo = true;
}

buscarEmpleado = function(cedula){
    for(let i = 0; i < empleados.length; i++){
        if(empleados[i].cedula === cedula){
            return empleados[i];
        }
    }
    return null;
}

agregarEmpleado = function(empleado){
    let existe = buscarEmpleado(empleado.cedula);
    if(existe == null){
        empleados.push(empleado);
        return true;
    }
    return false;
}

guardar = function(){

    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldoTxt = recuperarTexto("txtSueldo");
    let sueldo = parseFloat(sueldoTxt);

    let valido = true;

    // Limpiar los errores
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");

    // validaciones para cedula, nombre, apelliod y sueldo 
    if(cedula.length !== 10 || isNaN(cedula)){
        mostrarTexto("lblErrorCedula", "Cédula inválida debe tener 10 caractéres");
        valido = false;
    }
    if(nombre.length < 3 || nombre !== nombre.toUpperCase()){
        mostrarTexto("lblErrorNombre", "Nombre inválido, debe ir todo en mayúsculas");
        valido = false;
    }
    if(apellido.length < 3 || apellido !== apellido.toUpperCase()){
        mostrarTexto("lblErrorApellido", "Apellido inválido, debe ir todo en mayúsculas");
        valido = false;
    }
    if(isNaN(sueldo) || sueldo < 400 || sueldo > 5000){
        mostrarTexto("lblErrorSueldo", "Sueldo inválido min $400, máx 5000");
        valido = false;
    }

    if(!valido){
        return;
    }
    if(esNuevo){
        let emp = {};
        emp.cedula = cedula;
        emp.nombre = nombre;
        emp.apellido = apellido;
        emp.sueldo = sueldo;

        let resultado = agregarEmpleado(emp);

        if(resultado){
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarFormularioEmpleado();
            esNuevo = false;
        }else{
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + cedula);
        }
    }
}


deshabilitarFormularioEmpleado = function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}