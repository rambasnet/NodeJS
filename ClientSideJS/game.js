function playgame() {
  var number = $("#number").val();
  //alert(hidden);
  //alert(number);
  if (isNaN(number) || number=='' || number<1 || number > 20) {
    $("#hint").text("Enter a valid number between 1 and 20");
    return;
  }
  tries++;
  if (tries > maxTries) {
    $("#hint").text(`Sorry, you lose! The number was ${hidden}`);
    $("#reset").show();
    $("#btnSubmit").attr("disabled", true);
    return;
  }

  if (number > hidden) {
    $("#hint").text("Your number is too large!");
  }
  else if(number < hidden) {
    $("#hint").text("Your number is too small!");
  }
  else {
    $("#hint").text(`Congrats! You gessed my number in ${tries} tries!`);
    $("#reset").show();
  }
}    