var app = angular.module('fer',[ ]);

app.controller('profesCtrl', function(){
    this.profesor = profesorData;
}); 

var profesorData = {
	nombre: "Fernando Gutierrez",
	bio: "Bachiller en Ingeniera de Sistemas y Full Stack Developer",
	edad: 27,
	foto: "img/fer.PNG"
}