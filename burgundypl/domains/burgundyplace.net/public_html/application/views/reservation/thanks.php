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
<div id="content_wrapper">
	<div id="lead_text_about_us" class="lead_text_inner"><img src="<?=base_url()?>resource/image/lead_text_reservation.png" /></div>
			<div id="left_column_short">
				<div class="cufon" >Reservation</div>
					<div  class="inner_content"  style="height:200px;"><span class="text"><strong>Thanks for reservation!</strong><br />
				Your message has been sent. We will get back to you as soon as possible. </span>
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
		