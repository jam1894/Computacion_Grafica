windows.onload = function()
{
	
	var pasos = ["uno","dos","tres","cuatro","cinco"];
	var num_camina = 1;
	var caminar = false; 
	var cont = 0;

		
		setInterval(function()
 	
 		if(!caminar)
 		{
 			cont++;
 			nom_div("sprite").setAttribute("class", "caminar " + pasos[num_camina - 1]);
 			num_camina++;
 			
 			if(num_camina >= 5)
 			{
 				num_camina = 1;
 			}
			
 		}

 		Nom_div ("boton").AddEventListener ('click', function (evento)
  		{
  			= Camina caminar!;

  		}

 	}, 100);

	
 	
 	function nom_div(div)
 	{
 		return document.getElementById(div);
 	}
 
}