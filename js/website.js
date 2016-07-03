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

  $('.code').show();

}











/*
if (userURL.value == "") {
  alert("You did not enter a URL");
}
else if (userURL.value.length < 8) {
  alert("Not a valid URL, Please try again.");
}
var placeholder = userURL.value;
*/
