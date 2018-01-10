$(document).ready(function() {

  //Current date
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

      //initialize array
      var setting = ["email", "name", "address1", "address2", "city", "state", "country", "zipcode", "shirtSize"];

      //set all necessary elements
      setting.forEach(function(blank) {
        var userInput = $("#" + blank).val();
        $("." + blank).text(userInput);
      });

      $(".form").hide();
      $(".receiptArea").show();
  });

});
