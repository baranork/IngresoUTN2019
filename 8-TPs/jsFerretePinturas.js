/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados ()
{
  var fahrenheit;
  var centigrados;

  fahrenheit = parseFloat(document.getElementById("temperatura").value);

centigrados = (fahrenheit - 32) / 1.8;

alert(fahrenheit + " fahrenheit son " + centigrados + " grados")
}

function CentigradosFahrenheit ()
{
  var centigrados;
  var fahrenheit;

  centigrados = parseFloat(document.getElementById("temperatura").value);

fahrenheit = (centigrados * 1.8) + 32;

alert(centigrados + " grados son " + fahrenheit + " fahrenheit");
}
