jstrackApp.service('requests', ['$http', function($http) {

  this.getJobs = function (uid) {
    return $http({
      method:'GET',
      url: `http://127.0.0.1:8004/jobs/${uid}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  };

}]);
