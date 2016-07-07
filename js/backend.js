//global variable
var numberDisplayed = 6;

//populates job postings at initiation of page
function displayPostings(i) {
  var sentence = "<div class='back-job-postings col-md-4'><div class='panel panel-primary'><div class='panel-heading'><h3 class='panel-title'>" + backPositionArray[i].title + "</h3></div><div class='panel-body'><p><strong>Company: </strong>" + backPositionArray[i].company + "</p><p><strong>Location: </strong>" + backPositionArray[i].location + "</p><p><strong>Description: </strong>" + backPositionArray[i].description + "</p><p>";
  for (var j = 0; j < backPositionArray[i].tags.length; j++) {
    if (j < backPositionArray[i].tags.length - 1) {
      sentence += "<strong>&#35;" +backPositionArray[i].tags[j] + "</strong>, ";
    } else {
      sentence += "<strong>&#35;" +backPositionArray[i].tags[j] + "</strong>";
    }
  }
  sentence += "</p></div></div></div>";
  $("#job-search-output").append(sentence);
}

for (var i = 0; i < numberDisplayed; i++) {
  displayPostings(i);
};

//randomizes colors for job posting heading
$.each($(".panel-heading"), function() {
  var color = Math.floor(Math.random() * 256);
  // $(this).css("background-color", "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.random() + ")");
  $(this).css("background-color", "hsla(" + Math.floor(Math.random() * 360) + "," + Math.floor(Math.random() * 100) + "%," + Math.floor(Math.random() * 100) + "%," + Math.random() + ")");
});

//filters job postings by tag (i.e. programming language)
function filterPostings(match) {
  $(".back-job-postings").each(function(index) {
    if (backPositionArray[index].tags.indexOf(match) === -1) {
      $(this).hide();
    } else if (backPositionArray[index].tags.indexOf(match) > -1) {
      $(this).show();
    }
  });
}


//resets job posting results to default state when clicked
function resetPostings() {
  $(".back-job-postings").each(function(index) {
    $(this).show();
  });
}

//show more job posting results when clicked
function showMoreResults() {
  var numberDisplayedTo = numberDisplayed + 6;
  for (var i = numberDisplayed; i < numberDisplayedTo; i++) {
    displayPostings(i);
  };
  numberDisplayed += 6;
}
