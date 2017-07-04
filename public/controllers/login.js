jstrackApp.controller('login', ['$scope', '$http', '$window', '$cookies', '$location', 'jobsService', function($scope, $http, $window, $cookies, $location, jobsService) {
  $scope.loginInfo = {
    username: null,
    password: null
  };

  $scope.submit = function () {
    $scope.loginInfo.username = this.username || null;
    $scope.loginInfo.password = this.password || null;

    $http({
      method: 'POST',
      url: 'http://127.0.0.1:8004/login',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: JSON.stringify($scope.loginInfo)
    })
    .then(
      res => {
        $cookies.put('userId', res.data._id);
        $cookies.put('username', res.data.username);

        $http({
          method: 'GET',
          url: `http://127.0.0.1:8004/jobs/${res.data._id}`,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then(jobs => {
          jobsService.jobs = jobs.data;
          $location.path('/')
        })
      },
      err => {
        console.log(err);
      }
    );
  };

}])
