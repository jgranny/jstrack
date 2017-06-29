jstrackApp.controller('signup', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.loginInfo = {
    username: null,
    password: null
  };

  $scope.submit = function () {
    $scope.loginInfo.username = this.username || null;
    $scope.loginInfo.password = this.password || null;

    console.log($scope.loginInfo);

    // $http.post('http://127.0.0.1:8004/user', JSON.stringify($scope.loginInfo)).then(res => console.log(res), err => console.log(err));

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
      res => console.log(res),
      err => console.log(err)
    );
  };

}])
