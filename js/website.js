$(document).ready(function() {


    changesearch();

    $('#userURL, #final, #submit, #reset, #reset2, #help, #extra-content').hide();


    $("#userURL").keyup(function(event) {

        if (event.keyCode == 13) {

            $('#submit').click();

        }

    });



});

function showcode() {


    $('#userURL, #submit, #reset').toggle();
    $('#searchbox').toggle();
    $('.main-content').hide("slow");
    $('#icon').show();



}

function changesearch() {


    var al_length = attribute_list.length;

    var r_num1 = Math.floor((Math.random() * al_length));
    var r_num2 = Math.floor((Math.random() * al_length));

    if (r_num1 == r_num2) {

        if (r_num2 == attribute_list.length) {

            r_num2 -= 1;
        }

        if (r_num2 == 0) {

            r_num2 += 1;
        } else {

            r_num2 += 1;
        }

    }



    $('#searchbox').attr('placeholder',

        "Try " + "'" + attribute_list[r_num1] + "'" + " or even " + "'" + attribute_list[r_num2] + "'");


}
var attribute_list = [

    'Deviantart',
    'Email',
    'Facebook',
    'Flickr',
    'Foursquare',
    'Github',
    'Google +',
    'Instagram',
    'LinkedIn',
    'Myspace',
    'Nintendo',
    'Periscope',
    'Pinterest',
    'Playstation',
    'Quora',
    'Reddit',
    'Skype',
    'Snapchat',
    'Spotify',
    'SoundCloud',
    'Tumblr',
    'Twitter',
    'Vine',
    'WhatsApp',
    'Yahoo ID',
    'Yelp',
    'Youtube'
];
