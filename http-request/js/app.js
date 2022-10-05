(function() {
  var app = angular.module("appHttpRequest", [ ]);

  app.controller('httpController', ['$scope', '$http', function($scope, $http) {
  
      $scope.teacher = {};
      $scope.tableTeacher = "./intermediate/tableTeacher.html";

      $http.get('./json/profesores.json').then(function(data) {
        $scope.teacher = data.data.profesores;
      });
  } ]);

}) ();