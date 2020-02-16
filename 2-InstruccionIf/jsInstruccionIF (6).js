function mostrar()
{
//tomo la edad  
 var edad ;
 edad = document.getElementById("edad").value;

if ( edad <= 12  )
    {alert ("es un niño");
}
else if (edad >= 13 && edad <= 17 ){
    alert ("es adolescente");
} 
else {
    alert ("es un adulto")
}


}//FIN DE LA FUNCIÓN