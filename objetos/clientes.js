let clientes = [
  {cedula:"12723272", nombre:"Juan", edad:20},
  {cedula:"34231231", nombre:"Mario", edad:50},
  {cedula:"23457675", nombre:"Pepe", edad:22}
];

mostrarClientes = function (){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"+
    "<th>Cedula</th>"+"<th>Nombre</th>"+"<th>Edad</th>"+
    "</tr>";
    let elementoCliente;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        contenidoTabla+=
        "<tr><td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML = contenidoTabla;
}