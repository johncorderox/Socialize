$(document).ready(function(){

  $("li").mouseenter(function(){

    $(this).css("color","black");

  });

  $("li").mouseleave(function(){

    $(this).css("color","#FF8C94");

  });


});


function getCode() {

if (userURL.value == "") {

  alert("You did not enter a URL");
}

else if (userURL.value.length < 6) {

  alert("Not a valid URL, Please try again.");
}

var placeholder = userURL.value;


}
