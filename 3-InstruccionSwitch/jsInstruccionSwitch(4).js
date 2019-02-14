function Mostrar()
{
//tomo el mes
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño){
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
  text = "tiene 31 días"
  break;
  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
  text = "tiene 30 días"
  break;
  case "Febrero":
  text = "tiene 28 días"
}
alert(mesDelAño + " " + text)



}//FIN DE LA FUNCIÓN
