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
$(function(){



$("#sign-in-button").click(function() {
  $(".landing").fadeOut("fast", function() {
    $(".container").fadeIn();
  });
});

$(window).scroll(function(){
  $("#up-button-container").fadeIn("fast");
  $("#up-button-container").css("position", "fixed");
});

$("#up-button").click(function() {
  window.scrollTo(0, 0);
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
