<script>
$(document).ready(function() {
	$("#lead_text_about_us").animate({ opacity: 0,right: "50px"}, 0 );	
	setTimeout(function(){
		$("#lead_text_about_us").animate({ opacity: 1,right: "70px"}, 1000);
	},1000);
});
</script>
<div id="content_wrapper">
	<div id="lead_text_about_us" class="lead_text_inner"><img src="<?=base_url()?>resource/image/lead_text_facilities.png" /></div>
	<div id="left_column">
            <div class="cufon" >Facilities</div>
		<div  class="inner_content"><span class="text">At Burgundy Place, several facility including Playground, Swimming pool, Gym as well as Delivering car, cleaning as well as many other services are provided to ensure your comfort and happiness while staying with us. </span>
		</div>
            <ul>
               <li>Swimming Pool</li>
 <li>Fitness</li>
 <li>Lounge</li>
 <li>Golf Driving Course</li>
 <li>Playground</li>
 <li>Roof Garden</li>

 <li>Room amenities</li>
 <li>Cleaning Services</li>
 <li>Cable TV</li>
 <li>Wireless Internet</li>


            </ul>


		

		
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