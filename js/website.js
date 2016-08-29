var error_color = "#ff1a1a";
var border_color = "#bfbfbf";
var dark_pink = "#FF8C94";



$(document).ready(function(){

  $('#searchbox').hide();

  $("#userURL").keyup(function(event){

    if (event.keyCode == 13) {

      $('#button').click();

    }

  });

  $("#s-trigger").click(function(){

    $('#searchbox').show();

  })

});
