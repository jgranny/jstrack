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

})
