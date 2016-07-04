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
