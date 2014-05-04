window.onload = function()
{
	//alert("Cargó...");
	var color = "#DEF50E";
	var dibujar = SVG('divsvg').size("100%", 300);
	var posOrg = [[0,0], [0, 0], [200, 0],[250, 0], [250,25], [140,25],[140,200],[0,200,],[0,175],[110,175],[110,25],[0,25],[0,0]];
	var posDestino = [[235,0], [250, 0], [270,20],[270,250],[240,250],[240,30],[150,250],[70,35],[70,250],[40,250],[40,20],[65,0],[80,0],[150,200],[235,0]]; 
	var continua = dibujar.polyline(posOrg).fill("none").stroke({width : 3});
	var animo = false;
	nom_div("posLinea").addEventListener('click', function(event)
	{
		if(!animo)
		{
			continua.animate(1000).plot(posDestino);
		}
		else
		{
			continua.animate(1000).plot(posOrg);
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}