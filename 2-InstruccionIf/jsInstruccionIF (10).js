function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;

	numero = Math.floor(Math.random() * 10) + 1; 

	if (numero >=9 )
	{
		alert ("EXCELENTE nota: " + numero);
	}
	else if ( numero >=4 )
	{
		alert ("APROBÓ nota: "  + numero);
	}
	else
	{
		alert ("Vamos, la proxima se puede. nota: "  + numero);
	}
}

//FIN DE LA FUNCIÓN