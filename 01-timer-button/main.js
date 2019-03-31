$(function(){
  var n = 6;
  var $btn = $('#btn');

  var timer = window.setInterval(function(){
    n--;
    if(n == 0){
      window.clearInterval(timer);
      $btn.removeAttr('disabled');
      $btn.val('同意');
    }else{
      $btn.val('同意('+n+'s)');
    }
  },1000);

  $btn.click(function(){
    alert('SPA 01-timer-button Task ！');
  })
});
