jstrackApp.controller('jobs', ['$scope', '$http', '$window', function($scope, $http, $window) {

  //Job data taken in from the form
  $scope.submit = function () {
    $scope.newJobData.dateApplied = this.dateApplied || null;
    $scope.newJobData.company = this.company || null;
    $scope.newJobData.position = this.position || null;
    $scope.newJobData.jobListingUrl = this.jobListingUrl || null;

    console.log($scope.newJobData)

    //Send post request with new data
    //Then redirect to home page
    $window.location.href = '/'

  }

  //An object to put the new data into and send to the db
  $scope.newJobData = {
    dateApplied: null,
    company: null,
    position: null,
    jobListingUrl: null
  }

  //Test Data
  $scope.jobData = [
    {
      dateApplied: 'May 20, 2017',
      company: 'Garmin',
      position: 'Software Engineer I',
      lastContact: 'June 12, 2017',
      contacts: [{name: 'Jessica Zlab', phoneNumber: '913-555-5555', email: 'jz@garmin.com'}, {name: 'Katie Allgood', phoneNumber: '913-444-5555', email: 'ka@garmin.com'}],
      jobListingUrl: 'http://garminjobs.com'
    }
  ]

}]);
