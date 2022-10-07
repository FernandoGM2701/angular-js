(function() {
    var app = angular.module("appNgRepeat", [ ]);

    app.controller('secondController', ['$scope', function($scope) {
    
        $scope.listNames = [ "Fernando Gutierrez", "Enrique Bunbury", "Joaquin Ramirez" ];

        $scope.listTeams = {
            team: [{
                name: "Deportivo Municipal",
                alias: "Echa Muni",
                fundation: 1935
            }, {
                name: "Real Madrid",
                alias: "Madrid",
                fundation: 1960
            }, {
                name: "Barcelona",
                alias: "Barza",
                fundation: 1980
            }
            ]
        }
    } ]);

}) ();