/*Al comenzar el juego generamos un número
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número
  ingresado es el mismo que el número secreto se dará
  por terminado el juego con un mensaje similar a este:
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos = 0;
var numeroUsuario;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.floor((Math.random() * 100) + 1);
		alert(numeroSecreto );


}

function verificar()
{
numeroUsuario = parseInt(document.getElementById("numero").value);

if (numeroUsuario < numeroSecreto){
  alert("Falta...")
  contadorIntentos = contadorIntentos + 1;
  document.getElementById("intentos").value = contadorIntentos;
}
else if (numeroUsuario > numeroSecreto){
  alert("Se pasó...")
  contadorIntentos = contadorIntentos + 1;
  document.getElementById("intentos").value = contadorIntentos;
}
else{
  contadorIntentos = contadorIntentos + 1;
  document.getElementById("intentos").value = contadorIntentos;
  alert("Felicidades, usted es un ganador y en tan solo " + contadorIntentos + " intento(s)!")
}

}
