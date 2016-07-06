// $(".panel-heading").next().animate({
//   height: "toggle"
// }, 300, function(){
//     console.log("hi");
// });

// $(".panel-heading").click(function() {
//   $(this).next().animate({
//     height: "toggle"
//   }, 300, function(){
//     console.log("hi");
//   });
// });
var showButton = false;
$(function(){

var colors = ["#E63946", "#457B9D", "#028090", "#FFBF00"]

  $("#sign-in-button").click(function() {
    $(".landing").fadeOut("fast", function() {
      $(".hidden").each(function() {
        $(this).removeClass("hidden");
        $(this).fadeIn();
      });
      showButton = true;
    });
  });

  $(window).scroll(function(){
    if (showButton === true) {
      $("#up-button-container").fadeIn("fast");
      $("#up-button-container").css("position", "fixed");
    }
  });

  $("#up-button").click(function() {
    $("body").fadeOut("fast", function() {
      window.scrollTo(0, 0);
    });
    $("body").fadeIn();
  });

  $("#languages").change(function(){
    var language = $("#languages").val();
    filterPostings(language);
    $.each($(".panel-heading"), function() {
      var position = Math.floor(Math.random() * (6-1));
      $(this).css("background-color", colors[position]);
    });
  });

  $("#reset-button").click(function() {
    resetPostings();
  });


// function randoColor() {
//
// };
//
// function invert(item) {
//   $(item).css("background-color", "grey");
// }
//
// $(".panel").hover(function(){
//   invert($(this));
//   $(this).focusOut
// });

});
