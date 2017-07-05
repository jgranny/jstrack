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

          $location.path('/')
        },
        err => {
          console.log(err);
        }
      );
  };

}])
