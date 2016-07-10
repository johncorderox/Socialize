var error_color = "#ff1a1a";
var border_color = "#bfbfbf";


$(document).ready(function(){

  $(".code").hide();

  $("#userURL").keyup(function(event){

    if (event.keyCode == 13) {

      $('#button').click();

    }

  })

  $("li").mouseenter(function(){

    $(this).css("color","black");

  });

  $("li").mouseleave(function(){

    $(this).css("color","#FF8C94");

  });

  $("#button").hover(function(){

    $(this).css("color", "white");

  },function() {

    $(this).css("color","black");


  });

});


function showContent() {

  $(".code").hide();
  $('.code').show(280);

}

function switchError() {

    alert("Error while processing link. Please contact the website administrator.");
    console.log("Error in switch regarding $scope.detectClick function");

}

function reset() {

  document.getElementById('userURL').style.borderColor = "";
  document.getElementById('userURL').style.borderStyle = "";
  document.getElementById('userURL').style.borderStyle = "";
  document.getElementById('userURL').value = "";
  document.getElementById('textBox').value = "Your Code will be here!";

  //alert message can pop up again.
  check = 0;

}

function checkFields() {

if (!document.getElementById('userURL').value) {


    document.getElementById('userURL').style.borderColor = error_color;
    document.getElementById('userURL').style.borderStyle = "thick";
    document.getElementById('userURL').style.borderStyle = "solid";


    System.exit();

  }

}
//test commit
//again
