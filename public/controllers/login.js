jstrackApp.controller('login', ['$scope', '$http', '$window', '$cookies', '$location', 'jobsService', 'requests', function($scope, $http, $window, $cookies, $location, jobsService, requests) {
  $scope.loginInfo = {
    username: null,
    password: null
  };

  $scope.submit = function () {
    $scope.loginInfo.username = this.username || null;
    $scope.loginInfo.password = this.password || null;

    let loginInfo = JSON.stringify($scope.loginInfo);

    requests.login(loginInfo)
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
