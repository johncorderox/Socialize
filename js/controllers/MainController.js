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

        document.getElementById('userURL').placeholder = "Your URL*";
        document.getElementById('final').value = "";

        error.innerHTML = "";
        input.value = "hi";



        imgsrc = "";


        $('#searchbox, .main-content').show();
        $('#final, #reset, #userURL, #submit, #icon').hide();
        $('.title').removeClass("animated_top");
        $('#icon').removeClass("main-content");


    }



    $scope.detectClick = function(subject) {

        showcode();

        var clickedSubject = $scope.subjects.indexOf(subject);
        switch (clickedSubject) {

            case 0:

                imgsrc = "Deviantart.png";
                document.getElementById('icon').src = "icons/deviantart.png";
                $('#icon').addClass("main-content");

                break;

            case 1:
                imgsrc = "mail.png";
                document.getElementById('icon').src = "icons/mail.png";
                $('#icon').addClass("main-content");

                break;

            case 2:
                imgsrc = "facebook.png";
                document.getElementById('icon').src = "icons/facebook.png";
                $('#icon').addClass("main-content");

                break;

            case 3:
                imgsrc = "flickr.png";
                document.getElementById('icon').src = "icons/flickr.png";
                $('#icon').addClass("main-content");

                break;

            case 4:
                imgsrc = "Foursquare.png";
                document.getElementById('icon').src = "icons/Foursquare.png";
                $('#icon').addClass("main-content");

                break;

            case 5:
                imgsrc = "github.png";
                document.getElementById('icon').src = "icons/github.png";
                $('#icon').addClass("main-content");

                break;

            case 6:
                imgsrc = "Foursquare.png";
                document.getElementById('icon').src = "icons/googleplus.png";
                $('#icon').addClass("main-content");

                break;

            case 7:
                imgsrc = "instagram.png";
                document.getElementById('icon').src = "icons/instagram.png";
                $('#icon').addClass("main-content");

                break;

            case 8:
                imgsrc = "linkedin.png";
                document.getElementById('icon').src = "icons/linkedin.png";
                $('#icon').addClass("main-content");

                break;

            case 9:
                imgsrc = "myspace.png";
                document.getElementById('icon').src = "icons/myspace.png";
                $('#icon').addClass("main-content");

                break;

            case 10:
                imgsrc = "game.png";
                document.getElementById('icon').src = "icons/game.png";
                $('#icon').addClass("main-content");

                break;

            case 11:
                imgsrc = "perioscope.png";
                document.getElementById('icon').src = "icons/perioscope.png";
                $('#icon').addClass("main-content");

                break;

            case 12:
                imgsrc = "pintrest.png";
                document.getElementById('icon').src = "icons/pintrest.png";
                $('#icon').addClass("main-content");

                break;

            case 13:
                imgsrc = "game.png";
                document.getElementById('icon').src = "icons/game.png";
                $('#icon').addClass("main-content");

                break;

            case 14:
                imgsrc = "quora.png";
                document.getElementById('icon').src = "icons/quora.png";
                $('#icon').addClass("main-content");

                break;

            case 15:
                imgsrc = "reddit.png";
                document.getElementById('icon').src = "icons/reddit.png";
                $('#icon').addClass("main-content");

                break;

            case 16:
                imgsrc = "skype.png";
                document.getElementById('icon').src = "icons/skype.png";
                $('#icon').addClass("main-content");

                break;

            case 17:
                imgsrc = "snapchat.png";
                document.getElementById('icon').src = "icons/snapchat.png";
                $('#icon').addClass("main-content");

                break;

            case 18:
                imgsrc = "spotify.png";
                document.getElementById('icon').src = "icons/spotify.png";
                $('#icon').addClass("main-content");

                break;

            case 19:
                imgsrc = "soundcloud.png";
                document.getElementById('icon').src = "icons/soundcloud.png";
                $('#icon').addClass("main-content");

                break;

            case 20:
                imgsrc = "tumblr.png";
                document.getElementById('icon').src = "icons/tumblr.png";
                $('#icon').addClass("main-content");

                break;

            case 21:
                imgsrc = "twitter.png";
                document.getElementById('icon').src = "icons/twitter.png";
                $('#icon').addClass("main-content");

                break;

            case 22:
                imgsrc = "vine.png";
                document.getElementById('icon').src = "icons/vine.png";
                $('#icon').addClass("main-content");

                break;

            case 23:
                imgsrc = "whatsapp.png";
                document.getElementById('icon').src = "icons/whatsapp.png";
                $('#icon').addClass("main-content");

                break;

            case 24:
                imgsrc = "yelp.png";
                document.getElementById('icon').src = "icons/yelp.png";
                $('#icon').addClass("main-content");

                break;

            case 25:
                imgsrc = "youtube.png";
                document.getElementById('icon').src = "icons/youtube.png";
                $('#icon').addClass("main-content");

                break;
    /* below are custom, additional sites */

            case 26:
                imgsrc = "yahooid.png";
                document.getElementById('icon').src = "icons/yahooid.png";
                $('#icon').addClass("main-content");

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
