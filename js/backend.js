//backend
function displayPostings(i) {
  var sentence = "<div class='back-job-postings panel panel-primary'><div class='panel-heading'><h3 class='panel-title'>" + backPositionArray[i].title + "</h3></div><div class='panel-body'><p><strong>Company: </strong>" + backPositionArray[i].company + "</p><p><strong>Description: </strong>" + backPositionArray[i].description + "</p><p>";
  for (var j = 0; j < backPositionArray[i].tags.length; j++) {
    if (j < backPositionArray[i].tags.length - 1) {
      sentence += "<strong>&#35;" +backPositionArray[i].tags[j] + "</strong>, ";
    } else {
      sentence += "<strong>&#35;" +backPositionArray[i].tags[j] + "</strong>";
    }
  }
  sentence += "</p></div></div>";
  $("#back-job-posting").append(sentence);
}

for (var i = 0; i < backPositionArray.length; i++) {
  displayPostings(i);
}

function filterPostings (match) {
  $(".back-job-postings").each(function(index) {
    if (backPositionArray[index].tags.indexOf(match) === -1) {
      $(this).hide();
    } else if (backPositionArray[index].tags.indexOf(match) > -1) {
      $(this).show();
    }
  });
}

//frontend
$(document).ready(function() {
  $("#filter").click(function(event) {
    event.preventDefault();

    var language = $("#languages").val();
    filterPostings(language);
  });
});
