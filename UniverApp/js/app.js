var app = angular.module('universidadApp', ['ngRoute']);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
  
  $scope.navbar = "./intermediate/navbar.html";

  $scope.setActive = function(option) {
     $scope.mInicio = "";
     $scope.mProfesores = "";
     $scope.mAlumnos = "";

     $scope[option] = "active";
  }

}]);


// Filtro personalizado de teléfono
app.filter('telefono', function() {
  return function(numero) {
    return numero.substring(0,3) + "-" + numero.substring(3,6) + "-" + numero.substring(6,9);
  }
})