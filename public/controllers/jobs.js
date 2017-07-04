jstrackApp.controller('jobs', ['$scope', '$http', '$window', '$cookies', '$location', 'jobsService', function($scope, $http, $window, $cookies, $location, jobsService) {

  $scope.jobData = jobsService.jobs;
  //An object to put the new data into and send to the db
  $scope.newJobData = {
    dateApplied: null,
    company: null,
    position: null,
    jobListingUrl: null
  }

  //Job data taken in from the form
  $scope.submit = function () {
    const userId = $cookies.get('userId')
    console.log('user id: ', userId);

    $scope.newJobData.dateApplied = this.dateApplied || null;
    $scope.newJobData.company = this.company || null;
    $scope.newJobData.position = this.position || null;
    $scope.newJobData.jobListingUrl = this.jobListingUrl || null;

    $http({
      method: 'POST',
      url: `http://127.0.0.1:8004/jobs/${userId}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: JSON.stringify($scope.newJobData)
    })
    .then(
      res => {
        jobsService.jobs.push(res.data);
        $location.path('/')
      },
      err => console.log(err)
    );
  }


}]);
