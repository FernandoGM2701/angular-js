var app = angular.module('nameApp',[ ]);

app.controller('firstController', function(){
    this.data = profesorData;
}); 

var profesorData = {
	name: "Fernando Gutierrez",
	biography: "Hola mi nombre es Fernando, estudie en la Universidad Nacional de Mayor de San Marcos me encatan la tencología JavaScript y soyBachiller en Ingeniera de Sistemas y Full Stack Developer",
	age: 27,
	photo: "img/fer.PNG"
}