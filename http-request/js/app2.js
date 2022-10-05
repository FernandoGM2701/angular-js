(function() {
  var app = angular.module("appHttpRequest2", [ ]);

  app.controller('httpController2', ['$scope', '$http', function($scope, $http) {
  
      $scope.geo = {};

      const url = 'http://www.geoplugin.net/json.gp?jsoncallback';

      $http( {method: 'GET', url: url} ).then(function(data) {
        $scope.geo = data.data;
      });

      // $http( { method: "GET", url: "http://www.geoplugin.net/json.gp?jsoncallback" }).then(
      //   function successCallback(response) {
      //     $scope.geo = response.data;
      //   },
      //   function errorCallback(response) {
      //     $scope.geo = response.data | "Request failed";
      //   }
      // );
      
  } ]);

}) ();