$(function() {
  $("#page-top").on("click", function() {
    var position = 0;
    var speed = 500;

    $("html,body").animate({scrollTop: position}, speed);
  })
})