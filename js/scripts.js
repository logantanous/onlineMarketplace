

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



  var d = new Date();

  var month = d.getMonth()+1;
  var day = d.getDate();

  var output =
      ((''+month).length<2 ? '0' : '') + month + '/' +
      ((''+day).length<2 ? '0' : '') + day + '/' + d.getFullYear();

  //alert(output);
  $(".date").html(output);

  $(".submit").click(function(event){
      event.preventDefault();

      var email = $("#email").val();
      $(".email").text(email);

      var name = $("#name").val();
      $(".name").text(name);

      var address1 = $("#address1").val();
      $(".address1").text(address1);

      var address2 = $("#address2").val();
      $(".address2").text(address2);

      var city = $("#city").val();
      $(".city").text(city);

      var state = $("#state").val();
      $(".state").text(state);

      var country = $("#country").val();
      $(".country").text(country);

      /*$(".form").hide();
      $(".receiptArea").show();*/
  });

});
