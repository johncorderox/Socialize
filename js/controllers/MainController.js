app.controller('MainController', ['$scope', function($scope) {

  $scope.detectClick = function(subject) {


    var clickedSubject = $scope.subjects.indexOf(subject);
    switch (clickedSubject) {


    case 0:

    break;

  }
}

$scope.searchdecoration = function() {
  /* placeholder for random social search box genorator */


}

  $scope.subjects = [

      {name: 'Deviantart'},
      {name: 'Email'},
      {name: 'Facebook'},
      {name: 'Flickr'},
      {name: 'Foursquare'},
      {name: 'Github'},
      {name: 'Google +'},
      {name: 'Instagram'},
      {name: 'LinkedIn'},
      {name: 'Myspace'},
      {name: 'Nintendo Network ID'},
      {name: 'Periscope'},
      {name: 'Pinterest'},
      {name: 'Playstation Network'},
      {name: 'Quora'},
      {name: 'Reddit'},
      {name: 'Snapchat'},
      {name: 'Skype'},
      {name: 'Tumblr'},
      {name: 'Twitter'},
      {name: 'Vine'},
      {name: 'WhatsApp'},
      {name: 'Yelp'},
      {name: 'Youtube'}

  ];


}]);
