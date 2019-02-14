function Mostrar()
{
//tomo el mes
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño) {
  case "Enero":
  text = "¡Que empieces bien el año!"
  break;
  case "Marzo":
  text = "¡A clases!"
  break;
  case "Julio":
  text = "¡Se vienen las vacaciones!"
  break;
  case "Diciembre":
  text = "¡Felices fiestas!"

}
alert(text)


}//FIN DE LA FUNCIÓN
