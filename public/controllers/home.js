jstrackApp.controller('home',['$scope', '$http', '$cookies', 'jobsService', function($scope, $http, $cookies, jobsService) {
  $scope.jobData = jobsService.jobs;

  $scope.getJobs = function() {
    const userId = $cookies.get('userId');

    $http({
      method:'GET',
      url: `http://127.0.0.1:8004/jobs/${userId}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => {
      $scope.jobData = [];

      res.data.forEach(job => {
        $scope.jobData.push(job);
      })
    })
  }

  $scope.getJobs();

}]);
