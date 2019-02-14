function Mostrar()
{
//tomo el mes
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño) {
  case "Enero":
  case "Febrero":
  case "Marzo":
  case "Abril":
  case "Mayo":
  case "Junio":
  text = "Falta para el invierno"
  break;
  case "Julio":
  case "Agosto":
  text = "Abrigate que hace frio"
  break;
  default:
  text = "Ya pasamos el frio, ahora calor!"
  break;
}

alert (text);




}//FIN DE LA FUNCIÓN
