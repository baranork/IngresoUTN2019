function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
  var respuesta;
  var numero;

  do {
    numero = parseInt(prompt("Ingrese un número"))

    while(isNaN(numero) ){
      numero = parseInt(prompt("Caracter incorrecto. Ingrese un número"))
    }
    if(numero < 0){
      negativo = numero * negativo
    }
    else{
      positivo = numero + positivo
    }

    contador++

    respuesta = confirm("¿Desea ingresar otro número?")
  } while(respuesta == true);

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
