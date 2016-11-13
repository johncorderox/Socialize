app.controller('MainController', ['$scope', function($scope) {


    $scope.code = function() {

        var input = document.getElementById('userURL').value;
        var error = document.getElementById('error-output');
        var userURL = document.getElementById('userURL').value;

        if (!input || input.length < 3) {

            error.innerHTML = "You did not enter a valid URL!";
            System.exit(0);

        }
          else {

            error.innerHTML = "";

            $('#final, #reset2').show();
            $('#userURL, #submit, #reset').hide();
            document.getElementById('final').value =

                "<a href=\"" + userURL + "\">" + "<img src=\"" + imgsrc + "\" border=\"0\" alt=\"socialicon\">";

        }

    }

    $scope.reset = function() {


        var error = document.getElementById('error-output');
        error.innerHTML = "";

        document.getElementById('userURL').value = "";
      //  document.getElementById('final').value = "";


        $('#searchbox, .main-content').show();
        $('#final, #reset, #userURL, #submit, #icon, #reset2').hide();
        $('.title').removeClass("animated_top");

    }


    $scope.detectClick = function(subject) {

        showcode();

        var clickedSubject = $scope.subjects.indexOf(subject);

        switch (clickedSubject) {

            case 0:

                imgsrc = "Deviantart.png";
                document.getElementById('icon').src = "icons/deviantart.png";


                break;

            case 1:
                imgsrc = "mail.png";
                document.getElementById('icon').src = "icons/mail.png";


                break;

            case 2:
                imgsrc = "facebook.png";
                document.getElementById('icon').src = "icons/facebook.png";


                break;

            case 3:
                imgsrc = "flickr.png";
                document.getElementById('icon').src = "icons/flickr.png";


                break;

            case 4:
                imgsrc = "foursquare.png";
                document.getElementById('icon').src = "icons/foursquare.png";


                break;

            case 5:
                imgsrc = "github.png";
                document.getElementById('icon').src = "icons/github.png";


                break;

            case 6:
                imgsrc = "googleplus.png";
                document.getElementById('icon').src = "icons/googleplus.png";


                break;

            case 7:
                imgsrc = "instagram.png";
                document.getElementById('icon').src = "icons/instagram.png";


                break;

            case 8:
                imgsrc = "linkedin.png";
                document.getElementById('icon').src = "icons/linkedin.png";


                break;

            case 9:
                imgsrc = "myspace.png";
                document.getElementById('icon').src = "icons/myspace.png";


                break;

            case 10:
                imgsrc = "game.png";
                document.getElementById('icon').src = "icons/game.png";


                break;

            case 11:
                imgsrc = "perioscope.png";
                document.getElementById('icon').src = "icons/perioscope.png";


                break;

            case 12:
                imgsrc = "pinterest.png";
                document.getElementById('icon').src = "icons/pinterest.png";


                break;

            case 13:
                imgsrc = "game.png";
                document.getElementById('icon').src = "icons/game.png";


                break;

            case 14:
                imgsrc = "quora.png";
                document.getElementById('icon').src = "icons/quora.png";


                break;

            case 15:
                imgsrc = "reddit.png";
                document.getElementById('icon').src = "icons/reddit.png";


                break;

            case 16:
                imgsrc = "skype.png";
                document.getElementById('icon').src = "icons/skype.png";


                break;

            case 17:
                imgsrc = "snapchat.png";
                document.getElementById('icon').src = "icons/snapchat.png";


                break;

            case 18:
                imgsrc = "spotify.png";
                document.getElementById('icon').src = "icons/spotify.png";


                break;

            case 19:
                imgsrc = "soundcloud.png";
                document.getElementById('icon').src = "icons/soundcloud.png";


                break;

            case 20:
                imgsrc = "tumblr.png";
                document.getElementById('icon').src = "icons/tumblr.png";


                break;

            case 21:
                imgsrc = "twitter.png";
                document.getElementById('icon').src = "icons/twitter.png";


                break;

            case 22:
                imgsrc = "vine.png";
                document.getElementById('icon').src = "icons/vine.png";


                break;

            case 23:
                imgsrc = "whatsapp.png";
                document.getElementById('icon').src = "icons/whatsapp.png";


                break;

            case 24:
                imgsrc = "yelp.png";
                document.getElementById('icon').src = "icons/yelp.png";


                break;

            case 25:
                imgsrc = "youtube.png";
                document.getElementById('icon').src = "icons/youtube.png";


                break;
                /* below are custom, additional sites */

            case 26:
                imgsrc = "yahooid.png";
                document.getElementById('icon').src = "icons/yahooid.png";


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
        },
        /* Below are additional social networks for better organization */
        {
            name: 'Yahoo ID'
        }

    ];


}]);
