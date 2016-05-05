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
	if(obj.room_type.value == ""){
		$("#room_type_error").fadeIn(400);
		returnValue = false;
	}
	if(obj.name.value == ""){
		$("#name_error").fadeIn(400);
		returnValue = false;
	}
	if(!isValidEmail(obj.email.value)){
		$("#email_error").fadeIn(400);
		returnValue = false;
	}
	
	if(obj.message.value == ""){
		$("#message_error").fadeIn(400);
		returnValue = false;
	}
	return returnValue;
}
function isValidEmail(str){
	return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
}
</script>
<div id="content_wrapper">
	<div id="lead_text_about_us" class="lead_text_inner"><img src="<?=base_url()?>resource/image/lead_text_reservation.png" /></div>
			<div id="left_column_short">
				<div class="cufon" >Reservation</div>
				<div  class="inner_content"><span class="text">Please fill in your information in the form below to reserve rooms. </span>
				</div>
				<div id="contact_form">
				
					<form id="contactForm" method="post" onSubmit="return validateForm(this)">
						<div class="label_form">Room Type <span class="star">*</span> <span class="error" id="room_type_error">Please enter room type</span></div>
						<div>
							<select name="room_type" class="form">
								<option value="">---- Please select ----</option>
								<option value="a" <?if($room_type == "a"):?> selected<?endif;?>>Type A</option>
								<option value="b" <?if($room_type == "b"):?> selected<?endif;?>>Type B</option>
								<option value="c" <?if($room_type == "c"):?> selected<?endif;?>>Type C</option>
							</select>
						</div>
						
						
						<div class="label_form">Name <span class="star">*</span> <span class="error" id="name_error">Please enter your name</span></div>
						<div><input type="text" class="text_input" name="name"/></div>
						<div class="label_form">Email <span class="star">*</span> <span class="error" id="email_error">Please enter a valid email</span></div>
						<div><input type="text" class="text_input" name="email"/></div>
						<div class="label_form">Phone </div>
						<div><input type="text" name="phone" class="text_input" /></div>
						<div class="label_form">Message <span class="star">*</span> <span class="error" id="message_error">Please enter your message</span></div>
						<div><textarea class="textarea_form" name="message"></textarea></div>
						<div id="contact_submit"><input type="image" src="<?=base_url()?>resource/image/btn_submit.png"  class="btn"/></div>
					</form>
				</div>
			</div>
			<div id="right_column">
				<div class="cufon" >Room Type</div>
				<div class="inner_content">
					<div class="room_type">
						<div class="thumb"><a href="<?=site_url()?>room" title="room detail"><img src="<?=base_url()?>resource/image/room_type_side1.jpg" /></a></div>
						<div class="detail"><span class="text"><span class="text_head"><a href="<?=site_url()?>room" title="room detail">One bedroom</a></span><br />
		Our one  bedroom studio have one bedroom and one bath room with 60 square meter space. </span>
						</div>
						<div class="clear"></div>
					</div>
					<div class="room_type">
						<div class="thumb"><a href="<?=site_url()?>room" title="room detail"><img src="<?=base_url()?>resource/image/room_type_side2.jpg" /></a></div>
						<div class="detail"><span class="text"><span class="text_head"><a href="<?=site_url()?>room" title="room detail">Two bedroom</a></span><br />
		Our two Bedroom studio have two bedroom and two bath room with 100-130 square meter space. </span>
						</div>
						<div class="clear"></div>
			</div>
				</div>
			</div>
			<div class="clear"></div>
		</div>
		