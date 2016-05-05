<script>
	$(document).ready(function() { 		
		$("a.group").fancybox({ 'overlayColor': '#000000'}); 
		$('.gallery_fade').mouseover(function(){
			$(this).fadeTo(0,0.4);
		}).mouseout(function(){
			$(this).fadeTo(0,1);
		});
	}); 
</script>
<div id="content_wrapper">
	<div id="lead_text_about_us" class="lead_text_inner"><img src="<?=base_url()?>resource/image/lead_text_gallery.png" /></div>
	<div id="left_column">
		<div class="cufon" >Gallery</div>
		<div  class="inner_content">
			<?php for($i=0;$i<28;$i++):?>
			<div class="thumb_gallery gallery_fade" <?if($i%5!=4):?>style="margin-right:10px;"<?endif;?>>
				<a href="<?=base_url()?>resource/image/gal<?=$i?>.jpg" class="group" rel="group">
					<img src="<?=base_url()?>resource/image/thumb/gal<?=$i?>.jpg" alt="">
				</a>
			</div>	
			<?php endfor;?>
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
		<div class="cufon" style="padding-top:10px;" >Reservation</div>
		<div class="inner_content">
			<span class="text">
				If you're interested in our room, please click a button below to reserve.<br />
			</span>
			<div id="map">
				<a href="<?=site_url()?>reservation/add"><img src="<?=base_url()?>resource/image/btn_reserv_room.png" class="btn"></a>
			</div>
		</div>
	</div>
	<div class="clear"></div>
</div>