
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

  //Show more job posting results
  $("#showMoreResultsButton").click(function() {
    showMoreResults();
  });
});
