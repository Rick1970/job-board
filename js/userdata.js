//Constructor function for new users
function User(userName, userPassword, userEmail, userCity, userState, userInterest) {
  this.name = userName;
  this.password = userPassword;
  this.email = userEmail;
  this.city = userCity;
  this.state = userState;
  this.interest = userInterest;
}

var userArray = [];
