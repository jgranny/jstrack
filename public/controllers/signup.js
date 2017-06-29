jstrackApp.controller('signup', ['$scope', '$http', '$window', '$cookies', function($scope, $http, $window, $cookies) {
  $scope.loginInfo = {
    username: null,
    password: null
  };

  $cookies.userId = null;
  $cookies.username = null;

  $scope.submit = function () {
    $scope.loginInfo.username = this.username || null;
    $scope.loginInfo.password = this.password || null;

    console.log($scope.loginInfo);

    $http({
      method: 'POST',
      url: 'http://127.0.0.1:8004/user',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: JSON.stringify($scope.loginInfo)
    })
    .then(
      res => {
        $cookie.put('userId', res.data._id);
        $cookie.put('username', res.data.username);
        $location.path('/')
      },
      err => console.log(err)
    );
  };

}])
