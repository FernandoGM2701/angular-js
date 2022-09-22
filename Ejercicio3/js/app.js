(function() {
    var app = angular.module("appNgRepeat", [ ]);

    app.controller('secondController', ['$scope', function($scope) {
    
        $scope.listNames = [ "Fernando Gutierrez", "Enrique Bunbury", "Joaquin Ramirez" ];


    } ]);

}) ();