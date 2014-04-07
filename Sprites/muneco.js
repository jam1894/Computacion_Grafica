window.onload = function()
{
	// body...

	//alert("monacho")
	//var pasos = ["caminar_uno","caminar_dos","caminar_tres","caminar_cuatro"];
	var pasos = "caminar";
	var paso = 1;

	setInterval(function()
	{
		//console.log("Hola");
		nom_div("sprite").setAttribute("class", "container caminar_" + paso);
		paso++;

		if(paso >= 5)
 			{
 				paso = 1;
 			}
	
	}, 190);

	function nom_div(div)
	{
		return document.getElementById(div);
	}


}