$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $wValid = $('#w-valid'),
      $hValid = $('#h-valid');

  $width.keypress(function(e){
    if(/[abcdf-zABCDF-Z]/.test(e.key)){
      e.preventDefault();
    }
  }); 

  


  $btnCal.click(function(){
    var w = $width.val(),
        h = $height.val();
    if(!w){
      $wValid.html('宽度不能为空');
      return;
    }
    else{
      $wValid.html('');
    }
    if(!h){
      $hValid.html('高度不能为空');
      return;
    }else{
      $hValid.html('');
    }

    var per  = 2*(w+h),
        area = w*h;
    $perimeter.val(per);
    $area.val(area);              
  });

});
