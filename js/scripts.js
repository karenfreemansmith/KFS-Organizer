//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}

Contact.prototype.fullName=function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state, zip) {
  this.street=street;
  this.city=city;
  this.state=state;
  this.zip=zip;
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

 $(".contact").last().click(function() {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.firstName);
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
});
