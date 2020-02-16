/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;

    nombre = prompt ("Ingrese nombre:");

    alert (nombre);
}

//TP 1.A
function prueba(){

    var producto1;
    var producto2;
    var producto3;

    producto1 = prompt ("ingrese precio producto 1");
    producto2 = prompt ("inrese ptrecio producto 2");
    producto3 = prompt ("ingtrese precio producto 3");

    alert (parseInt(producto1) + parseInt(producto2) + parseInt(producto3));
}