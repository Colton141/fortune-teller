$(document).ready(function(){
  $("form#survey").submit(function(event){
    $("form").hide();
    event.preventDefault();
    var unluckyArray = []
    $("input:checkbox[name=unlucky]:checked").each(function(){
      var unluckyMode = $(this).val();
      unluckyArray.push(unluckyMode);
      for (var index = 0; index < unluckyArray.length; index += 1){
        
      }
    });
    alert(unluckyArray);
  });
});
