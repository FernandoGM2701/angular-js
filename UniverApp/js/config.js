app.config( function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './intermediate/home.html',
      controller: 'homeCtrl',
    })
    .when('/profesores', {
      templateUrl: './intermediate/profesores.html',
      controller: 'profesoresCtrl'
    })
    .when('/alumnos', {
      templateUrl: './intermediate/alumnos.html',
      controller: 'alumnosCtrl'

    })
    .otherwise({
      redirectTo: '/'
    });
});