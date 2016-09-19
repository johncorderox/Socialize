
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

  var r_num1 = Math.floor((Math.random() * al_length));
  var r_num2 = Math.floor((Math.random() * al_length));

  if(r_num1 == r_num2) {

    if (r_num2 == attribute_list.length) {

      r_num2 -= 1;
    }

    if (r_num2 == 0) {

      r_num2 += 1;
    }

    else {

      r_num2 += 1;
    }

  }


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
