jstrackApp.controller('jobs', ['$scope', '$http', '$window', '$cookies', function($scope, $http, $window, $cookies) {

  //An object to put the new data into and send to the db
  $scope.newJobData = {
    dateApplied: null,
    company: null,
    position: null,
    jobListingUrl: null
  }

  //Job data taken in from the form
  $scope.submit = function () {
    $scope.newJobData.dateApplied = this.dateApplied || null;
    $scope.newJobData.company = this.company || null;
    $scope.newJobData.position = this.position || null;
    $scope.newJobData.jobListingUrl = this.jobListingUrl || null;

    console.log($scope.newJobData)

    $scope.jobData.push($scope.newJobData);

    //Send post request with new data
    //Then redirect to home page
  }

  //Test Data
  $scope.jobData = [
    {
      dateApplied: 'May 20, 2017',
      company: 'Hooli',
      position: 'Software Engineer I',
      lastContact: 'June 12, 2017',
      contacts: [{name: 'John Doe', phoneNumber: '913-555-5555', email: 'jd@test.com'}, {name: 'Steve Smith', phoneNumber: '913-444-5555', email: 'ss@test.com'}],
      jobListingUrl: 'http://hooli.com/jobs'
    }
  ]

}]);
