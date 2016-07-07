
$(function(){

  $("#sign-in-button").click(function() {
    $(".landing").fadeOut("fast", function() {
      $(".hidden").each(function() {
        $(this).removeClass("hidden");
        $(this).fadeIn();
      });
    });
  });

  $("#later-button").click(function() {
    $(".landing").fadeOut("fast", function() {
      $(".hidden").each(function() {
        $(this).removeClass("hidden");
        $(this).fadeIn();
      });
    });
  });

  //Scrolls to the top of page on click of ^ button
  $("#up-button").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  // $("#up-button").click(function() {
  //   $("body").fadeOut("fast", function() {
  //     window.scrollTo(0, 0);
  //     console.log(window.location)
  //   });
  //   $("body").fadeIn();
  // });

  //Runs the backend function to display filtered jobs as selected
  $("#languages").change(function(){
    var language = $("#languages").val();
    filterPostings(language);
  });

  //Resets the listed jobs to default
  $("#reset-button").click(function() {
    resetPostings();
  });

});
