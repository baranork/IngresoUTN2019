/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1
    var precio2
    var precio3
    var resultado

    precio1 = parseInt(document.getElementById("precioUno").value);
    precio2 = parseInt(document.getElementById("precioDos").value);
    precio3 = parseInt(document.getElementById("precioTres").value);
    
    resultado = precio1 + precio2 + precio3;

    alert(resultado);
	
}
function Promedio () 
{
	
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var total;
    var impuesto;
    var resultado;

    precio1 = parseInt(document.getElementById("precioUno").value);
    precio2 = parseInt(document.getElementById("precioDos").value);
    precio3 = parseInt(document.getElementById("precioTres").value);
    
    resultado = precio1 + precio2 + precio3;

     = resultado * 100

    
	
}