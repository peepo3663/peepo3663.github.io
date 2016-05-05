<script src="<?=base_url()?>resource/js/jquery.validate.js"></script>
<script>
	$(document).ready(function() { 
		$("a.group").fancybox({ 
		'frameWidth': 500,
		'frameHeight': 300,
		'overlayColor': '#000000'
		}); 
		
		$("a.group2").fancybox({ 
		'frameWidth': 750,
		'frameHeight': 390,
		'overlayColor': '#000000'
		}); 
	}); 
</script>
<script>
function validateForm(obj){
	var returnValue = true;	
	$("span.error").hide();
	if(obj.name.value == ""){
		$("#name_error").fadeIn(400);
		returnValue = false;
	}else{
		$("#name_error").hide();
	}
	if(!isValidEmail(obj.email.value)){
		$("#email_error").fadeIn(400);
		returnValue = false;
	}else{
		$("#email_error").hide();
	}
	
	if(obj.message.value == ""){
		$("#message_error").fadeIn(400);
		returnValue = false;
	}else{
		$("#message_error").hide();
	}
	return returnValue;
}
function isValidEmail(str){
	return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
}
</script>
<div id="content_wrapper">
	<div id="lead_text_about_us" class="lead_text_inner"><img src="<?=base_url()?>resource/image/lead_text_contact_us.png" /></div>
	
			<div id="left_column_short">
				<div class="cufon" >Contact Us</div>
				<div  class="inner_content"><span class="text">Please fill in your enquiries or comments in the form below.</span>
				</div>
				<div id="contact_form">
					<form id="contactForm" method="post" onSubmit="return validateForm(this)">
						<div class="label_form">Name <span class="star">*</span> <span class="error" id="name_error">Please enter your name</span></div>
						<div><input type="text" class="text_input" name="name"/></div>
						<div class="label_form">Email <span class="star">*</span> <span class="error" id="email_error">Please enter a valid email</span></div>
						<div><input type="text" class="text_input" name="email"/></div>
						<div class="label_form">Phone </div>
						<div><input type="text" class="text_input" name="phone"/></div>
						<div class="label_form">Message <span class="star">*</span> <span class="error" id="message_error">Please enter your message</span></div>
						<div><textarea class="textarea_form" name="message"></textarea></div>
						<div id="contact_submit"><input type="image" src="<?=base_url()?>resource/image/btn_submit.png"  class="btn"/></div>
					</form>
				</div>
			</div>
			<div id="right_column">
				<div class="cufon" >Contact Information</div>
				<div class="inner_content">
					<span class="text">
						<strong>Burgundy Place Service Apartment</strong><br />
						147 Soi Sukhumvit 63 (Ekamai), Klongton-Nua, Wattana, Bangkok 10110 THAILAND<br /><br />

						Phone: 02-3925140<br />
						Fax: 023925141<br />
						Email: wanicha@burgundyplace.net<br /><br />

                                               
					</span>
					<div id="map">
						<a href="<?=base_url()?>resource/image/graphic_map.gif" class="group"><img src="<?=base_url()?>resource/image/btn_graphicmap.png" class="btn"></a>
						<a href="<?=site_url()?>contactus/google_map" class="group2 iframe"><img src="<?=base_url()?>resource/image/btn_googlemap.png"  class="btn"></a>
					</div>
				</div>
			</div>
			<div class="clear"></div>
		</div>