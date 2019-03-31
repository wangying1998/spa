$(function(){
  var $range = $('#range');
  var $txt = $('#age');
  
  $range.change(function(){
    $txt.html($range.val());
  });

});
