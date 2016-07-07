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

//filters job postings by tag (e.g. programming language)
function filterPostings(match) {
  $(".back-job-postings").each(function(index) {
    if (backPositionArray[index].tags.indexOf(match) === -1) {
      $(this).hide();
    } else if (backPositionArray[index].tags.indexOf(match) > -1) {
      $(this).show();
    }
  });
  $("#showMoreResults").text("");
}

//resets job posting results to default state when clicked
function resetPostings() {
  $(".back-job-postings").each(function(index) {
    $(this).hide();
  });
  $("#showMoreResults").text("Show More Results");
  numberDisplayed = 1;
  showMoreResults();
}

//show more job posting results when clicked
var numberDisplayed = 1;

function showMoreResults() {
  var numberDisplayedTo = numberDisplayed + 6;
  for (var i = numberDisplayed; i < numberDisplayedTo; i++) {
    var number = $(".back-job-postings:nth-child(" + i + ")");
    if (i === backPositionArray.length) {
      number.fadeIn();
      $("#showMoreResults").text("");
    } else if (number.length > 0) {  //roundabout way of checking for existence
      number.fadeIn();
    } else {
      $("#showMoreResults").text("");
    }
  };
  numberDisplayed += 6;
}

//randomizes colors for job posting heading
function randomizeColors() {
  $(".panel-heading").each(function() {
    var h = Math.floor(Math.random() * 360);
    var s = Math.floor(Math.random() * 30) + 50;
    var l = Math.floor(Math.random() * 20) + 40;
    var a = 0.9;
    $(this).css("background-color", "hsla(" + h + "," + s + "%," + l + "%, " + a + ")");
  });
}

//populates job postings, hides everything, and shows initial six job postings
for (var i = 0; i < backPositionArray.length; i++) {
  displayPostings(i);
};

$(".back-job-postings").each(function(index) {
  $(this).hide();
})

showMoreResults();
randomizeColors();
