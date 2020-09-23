$(function()
{
    let numeros = '1234567890';
	let letras  = 'qwertyuiopasdfghjklñzxcvbnm' +
				'QWERTYUIOPASDFGHJKLÑZXCVBNM' +
                'ÁÉÍÓÚáéíóú- ';	
    $('.txtNumero').keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
		if(numeros.indexOf(caracter) < 0)
			return false;	

    })
    
})