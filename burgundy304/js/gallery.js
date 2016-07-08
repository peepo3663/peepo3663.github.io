$(document).ready(function(){
  for(i = 1; i <= 32; i++) {
    $('#gallery').append('<div class="col-sm-4 col-xs-6"><div class="panel panel-default"><div class="panel-thumbnail"><a href="images/gallery/gallery-'+ i +'.jpg"><img src="images/gallery/gallery-' + i +'.jpg" class="img-responsive"></a></div></div></div>');
  }
});