app.controller('MainController', ['$scope', function($scope) {

    var imgsrc = "";


    $scope.code = function() {

        var input = document.getElementById('userURL').value;
        var error = document.getElementById('error-output');
        var userURL = document.getElementById('final').value;

        if (!input) {

            error.innerHTML = "You did not enter a URL!";
            System.exit(0);

        } else if (input.length < 7) {

            error.innerHTML = "URL is not valid!";
            console.log("Most likely the user entered a false URL, a fake URL, or randomness,The function checks for a length > 7");
            System.exit(0);
        } else {

            error.innerHTML = "";

            $('#final, #reset').show();
            $('#userURL, #submit').hide();
            document.getElementById('final').value =

                "<a href=\"" + userURL + "\">" + "<img src=\"" + imgsrc + "\">";


        }



    }


    $scope.reset = function(num) {

      var input = document.getElementById('userURL').value;
      var error = document.getElementById('error-output');
      var userURL = document.getElementById('final').value;
      document.getElementById('final').value = "";

        error.innerHTML = "";
        input.value = "";


        imgsrc = "";


        $('#searchbox').show();
        $('#final, #reset, #userURL').hide();
        $('.title').removeClass("animated_top");


    }




    $scope.detectClick = function(subject) {
        showcode();
        var clickedSubject = $scope.subjects.indexOf(subject);
        switch (clickedSubject) {

            case 0:
                imgsrc = "Deviantart.png";
                document.getElementById('icon').src ="icons/Twitter.png";

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
