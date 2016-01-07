$(document).ready(function() {

  var friends = ["Robert", "Jeff", "Adam", "Javier", "Tim", "Kevin"];

  for (var friendex = 0; friendex < friends.length; friendex += 1) {
    alert("Hello, " + friends[friendex] + "!");
  };


  var flavors = ["Peanut Butter Cup", "Horchata", "Butter Pecan", "Brownie", "Raspberry Cheesecake"];

  $("body").append("<h2>My favorite Ice Cream flavors are:");

  for ( var flavor = 0; flavor < flavors.length; flavor += 1) {
      $("body").append("<h3>" + flavors[flavor] + "</h3>");
  };
  var total = 1;
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  for (var index = 0; index < numbers.length; index += 1) {
    total *= numbers[index];
  };
  alert(total);
});
