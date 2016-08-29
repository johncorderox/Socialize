var error_color = "#ff1a1a";
var border_color = "#bfbfbf";
var dark_pink = "#FF8C94";



$(document).ready(function(){



  $("#userURL").keyup(function(event){

    if (event.keyCode == 13) {

      $('#button').click();

    }

  });

});

$(document).on('mouseenter','li', function(){
    $(this).css("color","black");
}).on('mouseleave','li', function(){
    $(this).css("color","#FF8c94");
});
