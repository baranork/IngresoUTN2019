/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

 */
function CalcularPrecio ()
{
   const lampara = 35
   var cantlampara
   var descuento
   var precio
   var marca
   var precioTotal
   var impuesto

   cantlampara = parseInt(document.getElementById("cantidad").value);
   marca = document.getElementById("marca").value;

  //Saco descuentos

  switch(cantlampara){
    case 1:
    case 2:
    descuento = 0
    break;
    case 3:
    if (marca === "ArgentinaLuz" || marca === "FelipeLamparas"){
       descuento = lampara * 10 /100;}
    break;
    case 4:
    if (marca === "ArgentinaLuz" || marca === "FelipeLamparas"){
       descuento = lampara * 25 / 100;}
    break;
    case 5:
    if (marca === "ArgentinaLuz"){
       descuento = lampara * 40 / 100;}
    break;
    default:
    descuento = lampara * 50 / 100;   
  }  
 

  // Aplico descuentos y devuelvo precio individual con descuento

  precio = lampara - descuento;

  document.getElementById("precioDescuento").value = precio;

  precioTotal = precio * cantlampara;

  // Aplico impuestos (En caso que sea necesario) y devuelvo el total

  if (precioTotal > 120){
    impuesto = precioTotal * 10 / 100
    precioTotal = precioTotal + impuesto;
    precioTotal.toFixed(2);

    alert("El precio total es de $" + precioTotal + " y pagó $" + impuesto + " de ingresos brutos")
  }
  else {
    alert("El precio total es de $" + precioTotal)
  }
}
