
$(function(){
  $("#sign-in-button").click(function() {
    $("#login-error").fadeIn();
  });

  $("#sign-up-button").click(function() {
    $("#complete-profile-container").fadeIn();
    $('html, body').animate({
      scrollTop: 200
    }, 500);
  });

  $("#later-button").click(function() {
    $(".landing").fadeOut("fast", function() {
      $(".hidden").each(function() {
        $(this).removeClass("hidden");
        window.scrollTo(0, 0);
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
  $("#showMoreResults").click(function() {
    showMoreResults();
  });

  $("#sign-up-form").submit(function(event) {
    event.preventDefault();

    var userName = $("#sign-up-name").val();
    var userPassword = $("#register-password").val();
    var userEmail = $("#register-email").val();
    var userCity = $("#sign-up-city").val();
    var userState = $("#state-dropdown").val();
    var userInterest $("#marketing-dropdown").val();

    alert(userName);
    alert(userPassword);
    alert(userEmail);
    alert(userCity);
    alert(userState);
    alert(userInterest);
  });
  
});
