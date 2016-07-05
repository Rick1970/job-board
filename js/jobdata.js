//Constructor function for new job postings
function backPosition(title, description, company, tags) {
  this.title = title;
  this.description = description;
  this.company = company;
  this.tags = tags; //array
  this.arrayIndex; //hidden property, equal to position in backPositionArray
}

//array of all job postings
var backPositionArray = [
  {
  title: "Developer 1",
  description: "A developer position at Microsoft",
  company: "Microsoft",
  tags: ["C#", "Javascript", ".NET"]
  }
];
