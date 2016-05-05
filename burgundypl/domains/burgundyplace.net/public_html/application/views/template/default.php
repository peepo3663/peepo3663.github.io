<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <!--===========================================
    Designed and Developed by www.onbasic.com
  =============================================== -->

<title>Burgundy Place | Thonglor service apartment</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="robots" content="all" />
<meta name="author" content="onbasic.com" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<link rel="icon" type="image/x-icon" href="<?=base_url()?>favicon.ico" />
<link rel="shortcut icon" type="image/x-icon" href="<?=base_url()?>favicon.ico" />

<link rel="stylesheet" type="text/css" href="<?=base_url()?>resource/css/main.css" />

<link rel="stylesheet" type="text/css" href="<?=base_url()?>resource/css/png_fix.css" />

<script type="text/javascript" src="<?=base_url()?>resource/js/jquery.min.js"></script>
<script type="text/javascript" src="<?=base_url()?>resource/js/jquery.pngFix.js"></script>
<script type="text/javascript" src="<?=base_url()?>resource/js/jquery.cycle.js"></script>
<script type="text/javascript" src="<?=base_url()?>resource/js/cufon-yui.js"></script>
<script type="text/javascript" src="<?=base_url()?>resource/js/helvetica.font.js"></script>
<script type="text/javascript" src="<?=base_url()?>resource/js/jquery.scrollTo.js"></script>
<script type="text/javascript" src="<?=base_url()?>resource/js/jquery.easing.js"></script>
<script type="text/javascript" src="<?=base_url()?>resource/js/gallery.js"></script>
<script type="text/javascript" src="<?=base_url()?>resource/fancybox/fancy.js"></script>
<script type="text/javascript">
			Cufon.replace('div.cufon');
</script>
<script type="text/javascript">
var index = Math.floor(Math.random()*4)+1;
var indexGallery = 1; 
$(document).ready(function() {
	$('#lead_inner1').hide();
	$('#lead_inner2').hide();
	$('#lead_inner3').hide();
	$('#lead_inner4').hide();
	$("#lead_inner"+index).fadeIn(2500, function(){
		$("#lead_inner"+index).animate({opacity: 1.0}, 2500, follow);
	});
	$("#container").scrollTo($("#item"+indexGallery), 0 ,{ axis:'x'});
	setGalleryPage();
	setTimeout("slideGallery()",3000);
	
	$('.btn').mouseover(function(){
		$(this).fadeTo(1,0.6);
    }).mouseout(function(){
		$(this).fadeTo(1,1);
    });
	
	$("div.lead_text_inner").animate({ opacity: 0,right: "50px"}, 0 );	
	setTimeout(function(){
		$("div.lead_text_inner").animate({ opacity: 1,right: "70px"}, 1000);
	},1000);

	$("img").pngFix();

});
function follow(){
	index++;
	if(index == 5){
		index = 1;
	}
	temp1 = index - 1;
	if(temp1 ==0 ){
		temp1 = 4;
	}
	temp2 = temp1 - 1;
	if(temp2 ==0 ){
		temp2 = 4;
	}	
	temp3 = temp2 - 1;
	if(temp3 ==0 ){
		temp3 = 4;
	}	
	

	$('#lead_inner'+temp3).hide();
	
	$('#lead_inner'+index).css({'z-index' : '10'});
	$('#lead_inner'+temp1).css({'z-index' : '9'});
	$('#lead_inner'+temp2).css({'z-index' : '8'});	
	$('#lead_inner'+temp3).css({'z-index' : '7'});	

	$("#lead_inner"+index).fadeIn(2500, function(){
		$("#lead_inner"+index).animate({opacity: 1.0}, 2500, follow);
	});
}
</script>
<style>
@import url("<?=base_url()?>resource/fancybox/fancy.css");
</style>
</head>
<body>
<div id="wrapper">
	<div id="header_default">
		<div class="slideshow">
       
			<div class="lead_inner" id="lead_inner1">lead1</div>
			<div class="lead_inner" id="lead_inner2">lead2</div>
			<div class="lead_inner" id="lead_inner3">lead3</div>
			<div class="lead_inner" id="lead_inner4">lead4</div>

		</div>
		<?$this->load->view('template/header');?>
	</div>
	<div id="content">
		<?=$content?>		
		<div id="footer">
			<div id="footer_wrapper">
				<?$this->load->view('template/footer');?>
			</div>
		</div>
	</div>	

</div>
<script type="text/javascript"> Cufon.now(); </script>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-12649767-1");
pageTracker._trackPageview();
} catch(err) {}</script>
</body>
</html>

  <!--===========================================
    Designed and Developed by www.onbasic.com
  =============================================== -->


