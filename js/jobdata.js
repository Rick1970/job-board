//Constructor function for new job postings
function BackPosition(title, description, company, location, tags, arrayIndex) {
  this.title = title;
  this.description = description;
  this.company = company;
  this.location = location;
  this.tags = tags; //array
  this.arrayIndex; //hidden property, equal to position in backPositionArray
}

//array of all job postings
var backPositionArray = [
  new BackPosition ("Junior Front-End Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Microsoft Fibers Company", "Seattle, WA", ["C-Sharp", "Javascript"], 0),
  new BackPosition ("Senior Web Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Expedient-ish", "San Jose, CA", ["C-Sharp", "Javascript"], 1),
  new BackPosition ("Software Development Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Wolf Ram E Hart", "Portland, OR", ["C-Sharp", "Javascript"], 2),
  new BackPosition ("Back-End Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Amazon Travel Corporation", "Portland, OR", ["C-Sharp", "Javascript"], 3),
  new BackPosition ("Web Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The Searing Inferno", "Seattle, WA", ["C-Sharp", "Javascript"], 4),
  new BackPosition ("Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Adobe Houses", "Seattle, WA", ["C-Sharp", "Javascript"], 5),
  new BackPosition ("Front-End Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The Pin & Cushion Donut Company", "Seattle, WA", ["C-Sharp", "Javascript"], 6),
  new BackPosition ("Junior Cheeseburger Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The Pin & Cushion Donut Company", "Seattle, WA", ["C-Sharp", "Javascript"], 7),
  new BackPosition ("Junior Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Nord of Ballard", "Portland, OR", ["C-Sharp", "Javascript"], 8),
  new BackPosition ("Big Data Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ross and Friends", "San Jose, CA", ["C-Sharp", "Javascript"], 9),
  new BackPosition ("Data Manager", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The Sapphire Group", "Seattle, WA", ["C-Sharp", "Javascript"], 10),
  new BackPosition ("Web Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Anywhere But Here Corporation", "Seattle, WA", ["C-Sharp", "Javascript"], 11),
  new BackPosition ("Application Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "No One But You, Inc.", "San Jose, CA", ["C-Sharp", "Javascript"], 12),
  new BackPosition ("Associate Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The Germany Foundation", "Los Angeles, CA", ["C-Sharp", "Javascript"], 13),
  new BackPosition ("Marketing Technologist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Corporation for Public Broadcasting", "Seattle, WA", ["C-Sharp", "Javascript"], 14),
  new BackPosition ("SEO Consultant", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Boredom Foundation", "Los Angeles, CA", ["C-Sharp", "Javascript"], 15),
  new BackPosition ("Web Analytics Developers", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Amazon Boat Travels", "San Jose, CA", ["C-Sharp", "Javascript"], 16),
  new BackPosition ("Digital Marketing Manager", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The River Amazon, Inc.", "Los Angeles, CA", ["C-Sharp", "Javascript"], 17),
  new BackPosition ("Social Media Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Data Miners, Inc.", "San Francisco, CA", ["C-Sharp", "Javascript"], 18),
  new BackPosition ("Content Manager", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Bitcoiners United, Ltd.", "San Francisco, CA", ["C-Sharp", "Javascript"], 19),
  new BackPosition ("Senior Back-End Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The Unbearable Company", "Seattle, WA", ["C-Sharp", "Javascript"], 20),
  new BackPosition ("White Mage Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Some Mercenary Company", "San Francisco, CA", ["C-Sharp", "Javascript"], 21),
  new BackPosition ("Software Architect", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Too Much Time Foundation", "Portland, OR", ["C-Sharp", "Javascript"], 22),
  new BackPosition ("Principal Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Sugary Water Group", "Portland, OR", ["C-Sharp", "Javascript"], 23),
  new BackPosition ("UX Designer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Duck Duck Goose, Inc.", "Seattle, WA", ["C-Sharp", "Javascript"], 24),
  new BackPosition ("Web Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Internet Overachievers Corporation", "Seattle, WA", ["C-Sharp", "Javascript"], 25),
  new BackPosition ("Senior Front-End Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Microsoft Towels & Bedding", "Seattle, WA", ["C-Sharp", "Javascript"], 26),
  new BackPosition ("Master Yi", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Epicurious Coding School", "Seattle, WA", ["C-Sharp", "Javascript"], 27),
  new BackPosition ("Server-Side Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The School of Life", "Seattle, WA", ["C-Sharp", "Javascript"], 28),
  new BackPosition ("Developer 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Plato's Academy", "San Jose, CA", ["C-Sharp", "Javascript"], 29),
  new BackPosition ("UI Designer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Almost Done Company", "Seattle, WA", ["C-Sharp", "Javascript"], 30),
  new BackPosition ("Database Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Two Birds", "San Jose, CA", ["C-Sharp", "Javascript"], 31),
  new BackPosition ("Developer 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Microsoft Comforters", "San Francisco, CA", ["C-Sharp", "Javascript"], 32),
  new BackPosition ("Data Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "A Gate Company", "Seattle, WA", ["C-Sharp", "Javascript"], 33),
  new BackPosition ("Network Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Bills, Birds, and Dan, Incorporated", "Seattle, WA", ["C-Sharp", "Javascript"], 34),
  new BackPosition ("Junior Software Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Miners Disheartened, Inc.", "Seattle, WA", ["C-Sharp", "Javascript"], 35),
  new BackPosition ("Web Development Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Company for Two", "Seattle, WA", ["C-Sharp", "Javascript"], 36),
  new BackPosition ("Corporate Storyteller", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "World Workshop Company", "Columbis, OH", ["C-Sharp", "Javascript"], 37),
  new BackPosition ("Engineer Intern", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Some Kind Of Corporation", "San Francisco, CA", ["C-Sharp", "Javascript"], 38),
  new BackPosition ("Software Development Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ninety-Nine Problems", "Seattle, WA", ["C-Sharp", "Javascript"], 39),
  new BackPosition ("Chicken Nugget Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Flash Coding Academy", "San Jose, CA", ["C-Sharp", "Javascript"], 40),
  new BackPosition ("Front-End Designer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "University of Tough Ducks", "San Francisco, CA", ["C-Sharp", "Javascript"], 41)
];
