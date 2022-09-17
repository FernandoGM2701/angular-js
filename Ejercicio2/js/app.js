var app = angular.module('fer',[ ]);

app.controller('profesCtrl', function(){
    this.profesor = profesorData;
}); 

var profesorData = {
	nombre: "Fernando Gutierrez",
	bio: "Hola mi nombre es Fernando, estudie en la Universidad Nacional de Mayor de San Marcos me encatan la tencología JavaScript y soyBachiller en Ingeniera de Sistemas y Full Stack Developer",
	edad: 27,
	foto: "img/fer.PNG"
}