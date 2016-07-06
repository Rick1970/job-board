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
  new BackPosition ("Junior Front-End Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Microsoft Fibers Company", "Seattle, WA", ["HTML", "CSS", "Javascript"], 0),
  new BackPosition ("Senior Web Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Expedient-ish", "San Jose, CA", ["HTML", "CSS", "Javascript"], 1),
  new BackPosition ("Software Development Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Wolf Ram E Hart", "Portland, OR", ["C-Sharp", "Ruby", "SQL", "PHP", "Python"], 2),
  new BackPosition ("Back-End Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Amazon Travel Corporation", "Portland, OR", ["Ruby", "SQL", "PHP", "Java"], 3),
  new BackPosition ("Web Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The Searing Inferno", "Seattle, WA", ["Javascript", "Ruby"], 4),
  new BackPosition ("Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Adobe Houses", "Seattle, WA", ["SQL", "Java"], 5),
  new BackPosition ("Front-End Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The Pin & Cushion Donut Company", "Seattle, WA", ["HTML", "CSS", "Javascript"], 6),
  new BackPosition ("Junior Cheeseburger Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The Pin & Cushion Donut Company", "Seattle, WA", ["Android", "Java"], 7),
  new BackPosition ("Junior Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Nord of Ballard", "Portland, OR", ["Ruby", "SQL", "PHP"], 8),
  new BackPosition ("Big Data Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ross and Friends", "San Jose, CA", ["Python", "SQL", "PHP", "Ruby"], 9),
  new BackPosition ("Data Manager", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The Sapphire Group", "Seattle, WA", ["C-Sharp", "Python", "SQL", "PHP"], 10),
  new BackPosition ("Mobile Web Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Anywhere But Here Corporation", "Seattle, WA", ["iOS", "Javascript"], 11),
  new BackPosition ("Application Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "No One But You, Inc.", "San Jose, CA", ["Java", "Android"], 12),
  new BackPosition ("Associate Mobile Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The Germany Foundation", "Los Angeles, CA", ["PHP", "Javascript", "Android"], 13),
  new BackPosition ("Marketing Technologist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Corporation for Public Broadcasting", "Seattle, WA", ["HTML", "CSS", "Javascript"], 14),
  new BackPosition ("SEO Consultant", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Boredom Foundation", "Los Angeles, CA", ["HTML", "Javascript"], 15),
  new BackPosition ("Web Analytics Developers", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Amazon Boat Travels", "San Jose, CA", ["Javascript", "Java", "HTML"], 16),
  new BackPosition ("Mobile Marketing Manager", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The River Amazon, Inc.", "Los Angeles, CA", ["Android", "Javascript", "iOS"], 17),
  new BackPosition ("Social Media Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Data Miners, Inc.", "San Francisco, CA", ["iOS", "HTML", "CSS"], 18),
  new BackPosition ("Content Manager", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Bitcoiners United, Ltd.", "San Francisco, CA", ["SQL", "PHP", "Java"], 19),
  new BackPosition ("Senior Back-End Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The Unbearable Company", "Seattle, WA", ["C-Sharp", "Ruby", "SQL", "PHP", "Python"], 20),
  new BackPosition ("White Mage Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Some Mercenary Company", "San Francisco, CA", ["C-Sharp", "Heal"], 21),
  new BackPosition ("Software Architect", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Too Much Time Foundation", "Portland, OR", ["C-Sharp", "Java", "SQL", "PHP"], 22),
  new BackPosition ("Principal Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Sugary Water Group", "Portland, OR", ["C-Sharp", "Ruby", "SQL", "PHP", "Javascript"], 23),
  new BackPosition ("UX Designer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Duck Duck Goose, Inc.", "Seattle, WA", ["HTML", "CSS"], 24),
  new BackPosition ("Mobile Web Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Internet Overachievers Corporation", "Seattle, WA", ["HTML", "CSS", "iOS", "Android"], 25),
  new BackPosition ("Senior Mobile Developer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Microsoft Towels & Bedding", "Seattle, WA", ["iOS", "Android", "Java", "SQL"], 26),
  new BackPosition ("Master Yi", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Epicurious Coding School", "Seattle, WA", ["HTML", "CSS", "Javascript", "Java", "C-Sharp", "PHP", "Python", "SQL"], 27),
  new BackPosition ("Server-Side Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "The School of Life", "Seattle, WA", ["C-Sharp", "SQL", "Java"], 28),
  new BackPosition ("Mobile Search Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Plato's Academy", "San Jose, CA", ["Android", "iOS"], 29),
  new BackPosition ("UI Designer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Almost Done Company", "Seattle, WA", ["HTML", "CSS"], 30),
  new BackPosition ("Database Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Two Birds", "San Jose, CA", ["Ruby", "SQL", "PHP"], 31),
  new BackPosition ("Pre-enactor Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Microsoft Comforters", "San Francisco, CA", ["C-Sharp", "Android"], 32),
  new BackPosition ("Data Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "A Gate Company", "Seattle, WA", ["Java", "Javascript", "SQL"], 33),
  new BackPosition ("Network Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Bills, Birds, and Dan, Incorporated", "Seattle, WA", ["Javascript", "SQL", "Python"], 34),
  new BackPosition ("Junior Software Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Miners Disheartened, Inc.", "Seattle, WA", ["C-Sharp", "Javascript", "Ruby"], 35),
  new BackPosition ("Web Development Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Company for Two", "Seattle, WA", ["C-Sharp", "Ruby", "Java"], 36),
  new BackPosition ("Corporate Storyteller", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "World Workshop Company", "Columbis, OH", ["HTML"], 37),
  new BackPosition ("Engineer Intern", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Some Kind Of Corporation", "San Francisco, CA", ["Java", "Python"], 38),
  new BackPosition ("Software Development Engineer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ninety-Nine Problems", "Seattle, WA", ["Java", "C-Sharp", "PHP", "Python", "SQL"], 39),
  new BackPosition ("Chicken Nugget Specialist", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Flash Coding Academy", "San Jose, CA", ["C-Sharp", "Ruby"], 40),
  new BackPosition ("Front-End Designer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "University of Tough Ducks", "San Francisco, CA", ["HTML", "CSS", "Ruby", "Javascript"], 41)
];
