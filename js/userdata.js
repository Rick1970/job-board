//Constructor function for new job postings
function BackPosition(title, description, company, location, tags, arrayIndex) {
  this.title = title;
  this.description = description;
  this.company = company;
  this.location = location;
  this.tags = tags; //array
  this.arrayIndex = arrayIndex; //hidden property, equal to position in backPositionArray
}
