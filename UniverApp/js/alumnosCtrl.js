app.controller('alumnosCtrl', ['$scope', '$http',  function($scope, $http) {

  $scope.setActive("mAlumnos");

  $scope.alumnos = {};

  const url = 'http://localhost/services_angularjs/servicios/alumnos.listado.php';

  $http( {method: 'GET', url: url} ).then(function(data) {
    $scope.alumnos = data.data;
  });

}]);