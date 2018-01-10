

//Select Boxes
var beverage = $("#beverage").val();

//Radio Buttons
var flavor = $("input:radio[name=flavor]:checked").val();

//Checkboxes
//we will cover this

//Date
var dob = $("#born").val();

//Color
var favoriteColor = $("#color").val();


$(document).ready(function() {
  $("input").click(function(event){
      event.preventDefault();
      $(".form").hide();
      $(".receiptArea").show();
  });

});
