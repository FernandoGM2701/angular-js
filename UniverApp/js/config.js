app.config( function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './intermediate/home.html'
    })
    .when('/profesores', {
      templateUrl: './intermediate/profesores.html'
    })
    .when('/alumnos', {
      templateUrl: './intermediate/alumnos.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});