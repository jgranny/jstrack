jstrackApp.controller('jobController', ['$scope', function($scope) {

  $scope.jobData = [
    {
      dateApplied: 'May 20, 2017',
      company: 'Garmin',
      position: 'Software Engineer I',
      lastContact: 'June 12, 2017',
      contacts: [{name: 'Jessica Zlab', phoneNumber: '913-555-5555', email: 'jzlab@garmin.com'}, {name: 'Katie Allgood', phoneNumber: '913-444-5555', email: 'kallgood@garmin.com'}],
      jobListingUrl: 'http://garminjobs.com'
    }
  ]

}]);
