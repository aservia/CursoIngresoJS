/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1;
    var numero2;
    var suma;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

suma = parseInt (numero1) + parseInt (numero2);

alert ("la suma es " + suma);

}

function restar()
{
	var numero1;
    var numero2;
    var resta;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

resta = parseInt (numero1) - parseInt (numero2);

alert ("la resta es " + resta);


}

function multiplicar()
{ 
    var numero1;
    var numero2;
    var multiplicacion;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    multiplicacion = parseInt (numero1) * parseInt (numero2);

    alert ("la multiplicacion es " + multiplicacion);
}

function dividir()
{
	

var numero1;
var numero2;
var division;


numero1 = document.getElementById("numeroUno").value;
numero2 = document.getElementById("numeroDos").value;

division = parseInt (numero1) / parseInt (numero2);

alert ("la division es " + division);
}