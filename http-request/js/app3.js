(function() {
  var app = angular.module("appHttpRequest3", [ ]);

  app.controller('httpController3', ['$scope', '$http', function($scope, $http) {
  
      $scope.clima = {};

      const url_clima = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=13&appid=9f50a805aa0089a1edd1829a5db029f0';

      $http( {method: 'GET', url: url_clima} ).then(function(response) {
        $scope.clima = response.data;
      });

      // $http( { method: "GET", url: "http://www.geoplugin.net/json.gp?jsoncallback" }).then(
      //   function successCallback(response) {
      //     $scope.geo = response.data;
      //   },
      //   function errorCallback(response) {
      //     $scope.geo = response.data | "Request failed";
      //   }
      // );

      $scope.kelvinToCelcius = function(k) {
          c = k - 273.15;
          c = Math.round( c*100) / 100;
          return c;
      }
      
  } ]);

}) ();