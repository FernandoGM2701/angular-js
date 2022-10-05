(function() {
  var app = angular.module("appHttpRequest", [ ]);

  app.controller('httpController', ['$scope', '$http', function($scope, $http) {
  
      $scope.teacher = {};

      $http.get('./json/profesores.json').then(function(data) {
        $scope.teacher = data.data.profesores;
      });
  } ]);

}) ();