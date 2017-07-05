jstrackApp.controller('jobs', ['$scope', '$http', '$window', '$cookies', '$location', 'jobsService', 'requests', function($scope, $http, $window, $cookies, $location, jobsService, requests) {
  //An object to put the new data from the form into and send to the db
  $scope.newJobData = {
    dateApplied: null,
    company: null,
    position: null,
    jobListingUrl: null
  };

  //Job data taken in from the form
  $scope.submit = function () {
    $scope.newJobData.dateApplied = this.dateApplied || null;
    $scope.newJobData.company = this.company || null;
    $scope.newJobData.position = this.position || null;
    $scope.newJobData.jobListingUrl = this.jobListingUrl || null;

    const userId = $cookies.get('userId')
    let jobData = JSON.stringify($scope.newJobData);

    requests.addJob(userId, jobData)
      .then(
        res => {
          jobsService.jobs.push(res.data);
          $location.path('/')
        },
        err => console.log(err)
      );
  };

}]);
