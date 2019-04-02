$(document).ready(function(){
  $("form#survey").submit(function(event){
    $("form").hide();
    event.preventDefault();
    var alt1 = ["1"];
    var alt2 = ["7"];
    var alt3 = ["11"];
    var unluckyArray = []
    $("input:checkbox[name=unlucky]:checked").each(function(){
      var unluckyMode = $(this).val();
      unluckyArray.push(unluckyMode);
      for (var index = 0; index < unluckyArray.length; index += 1){
        if (alt1.includes(unluckyArray[index])) {
          $(".result1").show();
          $(".fortune").show();
          return;
        } else if (alt2.includes(unluckyArray[index])) {
          $(".result2").show();
          $(".fortune").show();
          return;
        } else if (alt3.includes(unluckyArray[index])) {
          $(".result3").show();
          $(".fortune").show();
          return;
        } else {
          $(".result4").show();
          $(".fortune").show();
        }
      }
    });
  });
});
