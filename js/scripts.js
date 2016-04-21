//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

//user interface logic
$("form#new-contact").submit(function(event){
  event.preventDefault();

  var inputFirstName = $("input#new-first-name").val();
  var inputLastName = $("input#new-last-name").val();

  var newContact = new Contact(inputFirstName, inputLastName);

  $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

  $("input#new-first-name").val("");
  $("input#new-last-name").val("");

});

$(".contact").last().click(alert("you clicked?"));
  //function() {
  //$("#show-contact").show();
  //$("#show-contact h2").text(newContact.firstName);
  //$(".first-name").text(newContqact.firstName);
  //$(".last-name").text(newContact.lastName);
//});
