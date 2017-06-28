jstrackApp.controller('login', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.loginInfo = {
    username: null,
    password: null
  };

  $scope.submit = function () {
    $scope.loginInfo.username = this.username || null;
    $scope.loginInfo.password = this.password || null;

    console.log($scope.loginInfo);
  }
}])
