function Mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta
  var numero

  do {
    numero = parseInt(prompt("Ingrese un número"))

    while(isNaN(numero) ){
      numero = parseInt(prompt("Caracter incorrecto. Ingrese un número"))
    }
    acumulador = acumulador + numero

    contador++

    respuesta = confirm("¿Desea ingresar otro número?")
  } while(respuesta == true);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
