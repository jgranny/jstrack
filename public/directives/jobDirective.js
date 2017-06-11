jstrackApp.directive('jobDirective', function() {
  return {
    replace: true,
    restrict: 'A',
    templateUrl: 'directives/templates/jobTemplate.html'
  }
});
