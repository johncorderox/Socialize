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

function getCode(num) {

// Deviantart
if (num == 0) {

var usersrc = "http://i68.tinypic.com/537ora.jpg";
var userLink = document.getElementById('userURL').value;
var output = "<a href=\"" + userLink + "\">" + "<img src = \""+ usersrc + "\"</a>";
document.getElementById('textBox').value = output;

  }

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
