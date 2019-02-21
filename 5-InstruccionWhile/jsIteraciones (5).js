function Mostrar()
{

var sexo = prompt("Ingrese f ó m.").toLowerCase();

while( !(sexo == "f" || sexo == "m") ){
  sexo = prompt("Dato inválido. Ingrese f ó m.")
}

switch(sexo){
    case "f":
    sexo = "Femenino"
    break;
    
    case "m":
    sexo = "Masculino"
    break;
}
document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN