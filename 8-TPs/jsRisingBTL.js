/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos.
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso ()
{
 var edad
 var sexo
 var estadoCivil
 var sueldoBruto
 var legajo
 var nacionalidad

 edad = parseInt(prompt("Ingrese su edad (Entre 18 y 90 años)"));

 while( !(edad >= 18 && edad <= 90) ){
     edad = parseInt(prompt("Edad inválida. Ingrese su edad (Entre 18 y 90 años)"))
 }
 document.getElementById("Edad").value = edad + " años";


 sexo = (prompt("Ingrese su sexo ('M' ó 'F')")).toLowerCase();

while( !(sexo == "m" || sexo == "f") ){
  sexo = (prompt("Sexo inválido. Ingrese su sexo ('M' ó 'F')")).toLowerCase();

}
if(sexo == "f"){
  document.getElementById("Sexo").value = "Femenino"
}
else{
  document.getElementById("Sexo").value = "Masculino"
}


estadoCivil = parseInt(prompt("Ingrese su Estado Civil (1: Soltero/a, 2: Casado/a, 3: Divorciado/a, 4: Viudo/a") );

while(isNaN(estadoCivil)){
  estadoCivil = parseInt(prompt("Opción inválida. Ingrese su Estado Civil (1: Soltero/a, 2: Casado/a, 3: Divorciado/a, 4: Viudo/a") )
}
while( !(estadoCivil <= 4 && estadoCivil >=1) ){
  estadoCivil = parseInt(prompt("Opción inválida. Ingrese su Estado Civil (1: Soltero/a, 2: Casado/a, 3: Divorciado/a, 4: Viudo/a") )
}
if(sexo == "m"){
switch(estadoCivil){
  case 1:
  document.getElementById("EstadoCivil").value = "Soltero";
  break;
  case 2:
  document.getElementById("EstadoCivil").value = "Casado";
  break;
  case 3:
  document.getElementById("EstadoCivil").value = "Divorciado";
  break;
  case 4:
  document.getElementById("EstadoCivil").value = "Viudo";
  break;
}
}
else{
  switch(estadoCivil){
    case 1:
    document.getElementById("EstadoCivil").value = "Soltera";
    break;
    case 2:
    document.getElementById("EstadoCivil").value = "Casada";
    break;
    case 3:
    document.getElementById("EstadoCivil").value = "Divorciada";
    break;
    case 4:
    document.getElementById("EstadoCivil").value = "Viuda";
    break;
}
}

sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto"));

while(isNaN(sueldoBruto)){
  sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto"))

}
while(sueldoBruto < 8000){
  sueldoBruto = parseInt(prompt("Su sueldo bruto no puede ser menor a $8000. Ingrese su sueldo bruto"))
}

{
  document.getElementById("Sueldo").value = "$" + sueldoBruto
}

legajo = parseInt(prompt("Ingrese su legajo"));

while(legajo > 9999 || legajo < 1000){
  legajo = parseInt(prompt("El legajo tiene que ser de 4 cifras sin números a la izquierda. Ingrese su legajo"))
}
document.getElementById("Legajo").value = legajo;

nacionalidad = prompt("Ingrese su nacionalidad (A: Argentino, E: Extranjero, N: Nacionalizado)").toLowerCase();

while( !(nacionalidad == "a" || nacionalidad == "e" || nacionalidad == "n") ){
  nacionalidad = prompt("Nacionalidad inválida. Ingrese su nacionalidad (A: Argentino, E: Extranjero, N: Nacionalizado").toLowerCase();
}
if(sexo == "m"){
  switch(nacionalidad){
    case "a":
    document.getElementById("Nacionalidad").value = "Argentino";
    break;
    case "e":
    document.getElementById("Nacionalidad").value = "Extranjero";
    break;
    case "n":
    document.getElementById("Nacionalidad").value = "Nacionalizado";
    break;
  }
  }
  else{
    switch(nacionalidad){
      case "a":
      document.getElementById("Nacionalidad").value = "Argentina";
      break;
      case "e":
      document.getElementById("Nacionalidad").value = "Extranjera";
      break;
      case "n":
      document.getElementById("Nacionalidad").value = "Nacionalizada";
      break;
  }
  }

}

