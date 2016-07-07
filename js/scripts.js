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

  $("#sign-in-button").click(function() {
    $(".landing").fadeOut("fast", function() {
      $(".hidden").each(function() {
        $(this).removeClass("hidden");
        $(this).fadeIn();
      });
      showButton = true;
    });
  });

  // //Shows the ^ button
  // $(window).scroll(function(){
  //   if (showButton === true) {
  //     $("#up-button-container").fadeIn("fast");
  //     $("#up-button-container").css("position", "fixed");
  //   }
  // });

  //Scrolls to the top of page on click of ^ button
  $("#up-button").click(function() {
    $("body").fadeOut("fast", function() {
      window.scrollTo(0, 0);
    });
    $("body").fadeIn();
  });

  //Runs the backend function to display filtered jobs as selected
  $("#languages").change(function(){
    var language = $("#languages").val();
    filterPostings(language);
  });

  //Resets the listed jobs to default
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
