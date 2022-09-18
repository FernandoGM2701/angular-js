var app = angular.module('nameApp',[ ]);

app.controller('firstController', function($scope) {
    $scope.data = profesorData;
    $scope.inputData = {};

    $scope.editData = function() {
        angular.copy($scope.data, $scope.inputData);
    }

    $scope.cancelEditData = function() {
        $scope.inputData = {};
    }

    $scope.saveEditData = function() {
        angular.copy($scope.inputData, $scope.data);
    }
}); 

var profesorData = {
	name: "Fernando Gutierrez",
	biography: "Hola mi nombre es Fernando, estudie en la Universidad Nacional de Mayor de San Marcos me encatan la tencología JavaScript y soyBachiller en Ingeniera de Sistemas y Full Stack Developer",
	age: 27,
	photo: "img/fer.PNG"
}