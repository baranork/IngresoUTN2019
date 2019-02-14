function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10
  var num = Math.floor(Math.random() * (10 - 1) + 1);
if (num > 8){
  alert("EXCELENTE")
}
else if (num <9 && num > 3){
  alert("APROBÓ")
}
else {
  alert("Vamos, la próxima se puede")
}


}//FIN DE LA FUNCIÓN
