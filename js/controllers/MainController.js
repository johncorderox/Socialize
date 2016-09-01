app.controller('MainController', ['$scope', function($scope) {

    $scope.validaton = function() {

        var input = document.getElementById('userURL').value;
        var error = document.getElementById('error-output');

        if (!input) {

            error.innerHTML = "Your URL contents are empty.";
            $('#userURL').addClass('invalid-box');

        } else if (input.length < 7) {

            error.innerHTML = "Not a valid URL!";
            $('#userURL').addClass('invalid-box');
        } else {

            error.innerHTML = "";
            $('#userURL').removeClass('invalid-box');

        }


    }

    $scope.code = function() {

        $scope.validaton();
    }


    $scope.detectClick = function(subject) {


        var clickedSubject = $scope.subjects.indexOf(subject);
        switch (clickedSubject) {


            case 0:
                showcode();
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
            name: 'Snapchat'
        }, {
            name: 'Skype'
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
