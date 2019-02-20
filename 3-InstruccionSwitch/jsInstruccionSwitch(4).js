function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño){
        case "Febrero":
        alert("Este mes tiene 28 días");
        break;

        case "Abril":
        case "Septiembre":
        case "Junio":
        case "Noviembre":
        alert("Este mes tiene 30 días");
        break;

        default:
        alert("Este mes tiene 31 días");
    }



}//FIN DE LA FUNCIÓN