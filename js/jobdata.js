//Constructor function for new job postings
function BackPosition(title, description, company, tags, arrayIndex) {
  this.title = title;
  this.description = description;
  this.company = company;
  this.tags = tags; //array
  this.arrayIndex; //hidden property, equal to position in backPositionArray
}

//array of all job postings
var backPositionArray = [
  new BackPosition ("Developer 1", "A .NET developer working on mostly back-end applications", "Microsoft", ["C-Sharp", "Javascript"], 0),

  new BackPosition ("Developer 2", "A Java developer working on mostly cloud applications", "Amazon", ["Java", "Javascript", "Ruby"], 1),

  new BackPosition ("Developer 3", "A Ruby developer working mostly on websites", "Ruby Shop, Inc.", ["Ruby", "Javascript", "CSS", "HTML"], 2),

  new BackPosition ("Developer 4", "A Javascript developer who works mostly on front-end development", "Expedia", ["Javascript", "CSS", "HTML"], 3),

  new BackPosition ("Developer 5", "Another Javascript developer position that specializes in front-end development", "Movemedia", ["Javascript", "CSS", "HTML", "Ruby"], 4),

  new BackPosition ("Developer 6", "A Ruby developer working mostly on server-side applications", "Wolf, Ram, E Hart,Inc.", ["Ruby", "Javascript", "SQL", "PHP"], 5),

  new BackPosition ("Developer 7", "A database specialist working on server-side applications", "ACME, Inc.", ["Ruby", "SQL", "Python", "PHP", "Javascript", "Java"], 6),

  new BackPosition ("Developer 8", "A front-end specialist working on customer-facing applications", "Amazon", ["HTML", "CSS", "Javascript"], 7)
];
