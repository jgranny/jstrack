jstrackApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider

  .when('/', {
    templateUrl: '../pages/home.html',
    controller: 'jobs'
  })

  .when('/new-job', {
    templateUrl: '../pages/jobForm.html',
    controller: 'jobs'
  })

  .when('/login', {
    templateUrl: '../pages/login.html',
    controller: 'authentication'
  })

  .when('/signup', {
    templateUrl: '../pages/signup.html',
    controller: 'authentication'
  })

})
