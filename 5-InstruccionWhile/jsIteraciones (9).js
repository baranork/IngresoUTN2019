function Mostrar()
{

	var contador=0;
	// declarar variables
  var numero
  var mayor
  var menor
  var respuesta


	do {
    numero = parseInt(prompt("Ingrese un número"))
    while( isNaN(numero) ){
      numero = parseInt(prompt("Ingrese un número"))
    }
     if(contador == 0){
       mayor = numero
       menor = numero
     }
     else{}
     if(numero > mayor){
       mayor = numero
     }
     else{

     }
    if(numero < menor){
      menor = numero
    }
    respuesta = confirm("¿Quiere ingresar otro número?")
    contador++
	} while(respuesta == true)

  document.getElementById("maximo").value = mayor;
  document.getElementById("minimo").value = menor;


}//FIN DE LA FUNCIÓN
