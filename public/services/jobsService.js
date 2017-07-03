jstrackApp.service('jobsService', function() {
  //Test data
  this.jobs = [
    {
      dateApplied: 'May 20, 2017',
      company: 'Hooli',
      position: 'Software Engineer I',
      lastContact: 'June 12, 2017',
      contacts: [{name: 'John Doe', phoneNumber: '913-555-5555', email: 'jd@test.com'}, {name: 'Steve Smith', phoneNumber: '913-444-5555', email: 'ss@test.com'}],
      jobListingUrl: 'http://hooli.com/jobs'
    }
  ];
});
