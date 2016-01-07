$(document).ready(function() {

  var friends = ["Robert", "Jeff", "Adam", "Javier", "Tim", "Kevin"];

  friends.forEach(function(friend) {
    alert("Hello, " + friend);
  });

  var flavors = ["Peanut Butter Cup", "Horchata", "Butter Pecan", "Brownie", "Raspberry Cheesecake"];

  $("body").append("<h2>My favorite Ice Cream flavors are:");
  flavors.forEach(function(flavor) {
    $("body").append("<h3>" + flavor + "</h3>");


  });
  var total = 1;
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.forEach(function(number) {
    total *= number;
  });
  alert(total);
});
