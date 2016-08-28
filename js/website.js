var error_color = "#ff1a1a";
var border_color = "#bfbfbf";
var orange_color = "#FFD3B5";
var dark_pink = "#FF8C94";



$(document).ready(function(){



  $("#userURL").keyup(function(event){

    if (event.keyCode == 13) {

      $('#button').click();

    }

  });

  $('#sizeButton').click(function(){


    $('#userHeight').fadeToggle();
    $('#userWidth').fadeToggle();

  });

  $("li").mouseenter(function(){

    $(this).css("color","black");

  });

  $("li").mouseleave(function(){

    $(this).css("color","#FF8C94");

  });


});


function showContent(num) {


  $('.code').show(280);

  $('#userHeight, #userWidth').hide();

  if (num == 1) {

    $('#textBox').show(200);

  }


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
  document.getElementById('userHeight').value = "";
  document.getElementById('userWidth').value = "";
  document.getElementById('textBox').value = "";

  $('#textBox').hide();

}

function checkFields() {

   if (!document.getElementById('userURL').value) {

      inputError();


    }

    else if (document.getElementById('userURL').value.length < 7) {

    inputError();

   }


   else {

     document.getElementById('userURL').style.borderColor = "";
     document.getElementById('userURL').style.borderStyle = "";
     document.getElementById('userURL').style.borderStyle = "";

   }

}

function inputError() {

            document.getElementById('userURL').style.borderColor = error_color;
            document.getElementById('userURL').style.borderStyle = "thick";
            document.getElementById('userURL').style.borderStyle = "solid";

            //ng-click will not active if this is called.
            System.exit();

}
