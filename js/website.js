var error_color = "#ff1a1a";
var border_color = "#bfbfbf";
var dark_pink = "#FF8C94";

var trigger = 0;


$(document).ready(function() {

    $('#userURL , #userbutton, #final').hide();

    $("#userURL").keyup(function(event) {

        if (event.keyCode == 13) {

            $('#userbutton').click();

        }

    });

    $("#s-trigger").click(function() {


        $('#searchbox').toggle("slow");


    });


});

function showcode() {

    $('#userURL , #userbutton').toggle();
    $('#searchbox').toggle();
    $('.title').toggleClass("animated_top");

}
