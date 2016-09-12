var error_color = "#ff1a1a";
var border_color = "#bfbfbf";
var dark_pink = "#FF8C94";

var trigger = 0;


$(document).ready(function() {

  changesearch();
    $('#userURL , #userbutton, textarea, button').hide();


    $("#userURL").keyup(function(event) {

        if (event.keyCode == 13) {

            $('#userbutton').click();

        }

    });

    $("#s-trigger").click(function() {


        $('#searchbox').toggle("slow");


    });


});

function showcode () {

    $('#userURL , #userbutton, textarea, button').toggle();
    $('#searchbox').toggle();
    $('.title').toggleClass("animated_top");
    $('#userURL').css('margin-bottom', '30px');


}





function changesearch () {

  var al_length = attribute_list.length;

  var r_num1 = Math.floor((Math.random() * al_length) + 1);
  var r_num2 = Math.floor((Math.random() * al_length) + 1);

  $('#searchbox').attr('placeholder',

  "Try " +"'" +attribute_list[r_num1] +"'" + " or even " +"'" +attribute_list[r_num2]+"'");


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
             'Nintendo Network ID',
             'Periscope',
             'Pinterest',
             'Playstation Network',
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
             'Yelp',
             'Youtube'
    ];
