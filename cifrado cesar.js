function cifrado_cesar(Texto,s,espacio)
{
	var pat=/^[0-9A-z\s]*$/  
    	if(!pat.test(Texto))
     		return 'Texto no válido'
    var let='abcdefghijklmnopqrstuvwxyz'+(espacio?' ':'')
    var Texto=Texto.toLowerCase()  
    	if(!espacio) 
    		for(var a=0;a<Texto.length;a++)
    			Texto=Texto.replace(' ','')
    var s = s%let.length,r='' 
        s = s<0?let.length+s:s
    for(var a = 0; a < Texto.length; a++)
    {
    	l=let.charAt((let.indexOf(Texto.charAt(a))+s)%let.length) 
        r+=l.length==0?' ':l  
    }  
    return r
}
