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

$("#sign-in-button").click(function() {
  $(".landing").fadeOut("fast", function() {
    $(".container").fadeIn();
  });
});
