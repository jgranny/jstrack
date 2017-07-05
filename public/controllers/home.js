jstrackApp.controller('home',['$scope', '$http', '$cookies', 'jobsService', 'requests', function($scope, $http, $cookies, jobsService, requests) {
  $scope.jobData = jobsService.jobs;

  //Get a user's jobs when the page loads
  $scope.getJobs = function() {
    const userId = $cookies.get('userId');

    requests.getJobs(userId)
      .then(res => {
        $scope.jobData = [];

        res.data.forEach(job => {
          $scope.jobData.push(job);
        });
      });
  };

  $scope.getJobs();

}]);
