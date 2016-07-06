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
  $("body").fadeOut("fast", function() {
    window.scrollTo(0, 0);
  });
  $("body").fadeIn();
});

$("#languages").change(function(){
  var language = $("#languages").val();
  filterPostings(language);
});

//frontend
$(document).ready(function() {
  // $("#filter-button").click(function() {
  //   var language = $("#languages").val();
  //   filterPostings(language);
  // });

  $("#reset-button").click(function() {
    resetPostings();
  });
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
