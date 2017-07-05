jstrackApp.controller('signup', ['$scope', '$http', '$window', '$cookies', '$location', 'jobsService', 'requests', function($scope, $http, $window, $cookies, $location, jobsService, requests) {
  $scope.signup = {
    username: null,
    password: null
  };

  $scope.submit = function () {
    $scope.signup.username = this.username || null;
    $scope.signup.password = this.password || null;

    let signupData = JSON.stringify($scope.signup);

    requests.signup(signupData)
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
