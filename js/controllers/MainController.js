app.controller('MainController', ['$scope', function($scope) {

    $scope.code = function(a) {


      var input = document.getElementById('userURL').value;
      var error = document.getElementById('error-output');
      var code = document.getElementById('final');


            error.innerHTML = "";

            code.value = a;
            $('#userbutton').hide();





            $('#userbutton').hide();
            $('textarea').show();



    }



    $scope.detectClick = function(subject) {
        showcode();
        var clickedSubject = $scope.subjects.indexOf(subject);
        switch (clickedSubject) {

            case 0:
            $scope.code("deviantart");

                break;

        }
    }


    $scope.subjects = [

        {
            name: 'Deviantart'
        }, {
            name: 'Email'
        }, {
            name: 'Facebook'
        }, {
            name: 'Flickr'
        }, {
            name: 'Foursquare'
        }, {
            name: 'Github'
        }, {
            name: 'Google +'
        }, {
            name: 'Instagram'
        }, {
            name: 'LinkedIn'
        }, {
            name: 'Myspace'
        }, {
            name: 'Nintendo Network ID'
        }, {
            name: 'Periscope'
        }, {
            name: 'Pinterest'
        }, {
            name: 'Playstation Network'
        }, {
            name: 'Quora'
        }, {
            name: 'Reddit'
        }, {
            name: 'Skype'
        }, {
            name: 'Snapchat'
        }, {
            name: 'Spotify'
        }, {
            name: 'SoundCloud'
        }, {
            name: 'Tumblr'
        }, {
            name: 'Twitter'
        }, {
            name: 'Vine'
        }, {
            name: 'WhatsApp'
        }, {
            name: 'Yelp'
        }, {
            name: 'Youtube'
        }

    ];


}]);
