$(document).ready(function(){

  $(".code").hide();


  $("li").mouseenter(function(){

    $(this).css("color","black");

  });

  $("li").mouseleave(function(){

    $(this).css("color","#FF8C94");

  });

});

function showContent() {

  $('.code').toggle(280);

}

function switchError() {

    alert("Error while processing link. Please contact the website administrator.");
    console.log("Error in switch regarding $scope.detectClick function");

  }

function reset() {

  document.getElementById('userURL').value = "";
  document.getElementById('textBox').value = "Your Code will be here!";

}
