function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var number

	number = Math.round(Math.random() * 10);

	if(number > 8) alert("EXCELENTE")
	else if (number > 3) alert("APROBÓ")
	else alert("Vamos, la proxima se puede");
	
	alert(number);

}//FIN DE LA FUNCIÓN