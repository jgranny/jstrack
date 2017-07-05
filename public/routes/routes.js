jstrackApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider

  .when('/', {
    templateUrl: '../pages/home.html',
    controller: 'home'
  })

  .when('/new-job', {
    templateUrl: '../pages/jobForm.html',
    controller: 'jobs'
  })

  .when('/login', {
    templateUrl: '../pages/login.html',
    controller: 'login'
  })

  .when('/signup', {
    templateUrl: '../pages/signup.html',
    controller: 'signup'
  })

})
