function Mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

while(isNaN(repeticiones)){
  repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
}

for(var conteo = 0; repeticiones > conteo ; conteo++){
  console.log("Hola UTNFRA");

}

}//FIN DE LA FUNCIÓN
