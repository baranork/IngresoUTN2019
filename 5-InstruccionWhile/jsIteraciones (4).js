function Mostrar()
{

  var numero = prompt("Ingrese un número entre 0 y 9.");
  numero = parseInt(numero);

while(numero >  9 || numero < 0 || isNaN(numero)){
  if (numero > 9){
    alert("Este numero es mayor a 9, por favor, elija un numero entre 0 y 9")
  }
  else if (numero < 0){
    alert("Este numero es menor a 0, por favor, elija un numero entre 0 y 9")
  }
  else{
    alert("No ha ingresado un numero, por favor, elija un numero entre 0 y 9")
  }
  numero = prompt("Ingrese un número entre 0 y 9.");
}

document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN
