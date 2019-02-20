function Mostrar()
{

  var numero = prompt("ingrese un número entre 0 y 10.");
  numero = parseInt(numero);
alert(numero)
while(numero >  9 || numero < 0 || numero == NaN){
  numero = prompt("ingrese un número entre 0 y 10.");
}
alert("Cheto");
}//FIN DE LA FUNCIÓN
