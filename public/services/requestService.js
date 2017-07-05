jstrackApp.service('requests', ['$http', function($http) {

  this.login = function(data) {
    return $http({
      method: 'POST',
      url: 'http://127.0.0.1:8004/login',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data
    })
  }

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

  this.addJob = function(uid, data) {
    return $http({
      method: 'POST',
      url: `http://127.0.0.1:8004/jobs/${uid}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data
    })
  };

}]);
