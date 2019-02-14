function Mostrar()
{
//tomo el mes
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño){
  case "Febrero":
  text = "Este mes no tiene más de 29 días"
  break;
  default:
  text = "Este mes tiene 30 o más días"
}

alert(text);

}//FIN DE LA FUNCIÓN
