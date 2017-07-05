jstrackApp.service('requests', ['$http', function($http) {

  //---------- Signup Route ----------
  this.signup = function(data) {
    return $http({
      method: 'POST',
      url: 'http://127.0.0.1:8004/user',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data
    })
  }

  //---------- Login Route ----------
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

  //---------- Job Routes ----------
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
