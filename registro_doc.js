const fs = require ('fs');

let datos = {
	cedEst:{
		alias:'ce',
		demand : true
	},
	nomEst:{
		alias:'ne',
		demand : true
	},
	idCur:{
		alias:'ic',
		demand : true
	}
};

let crearArchivo = (cedEstu,nomEstu,curEstu) => {
	texto = 'La persona con nombre: '+nomEstu+' identificado con cedula: '+ cedEstu+' desea inscribirse en el curso con id: '+curEstu.id+' correspondiente a: '+curEstu.nombre;
	return texto;	
}

module.exports = {
	datos,
	crearArchivo
};