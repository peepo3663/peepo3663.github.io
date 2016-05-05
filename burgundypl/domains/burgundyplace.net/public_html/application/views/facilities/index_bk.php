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
		<div class="facilities_list">
			<div class="thumb"><img src="<?=base_url()?>resource/image/fac1.jpg" /></div>
			<div class="detail">
				<span class="text"><span class="text_head">Swimming Pool</span><br />
                                    We understand that Health and wellbeing is always the top priority of people, therefore at the Burgundy Place we will provide our customer with a fitness center and swimming pool at the roof top. </span>
			</div>
			<div class="clear"></div>
		</div>
		<div class="facilities_list">
			<div class="thumb"><img src="<?=base_url()?>resource/image/small_garden.jpg" /></div>
			<div class="detail">
				<span class="text"><span class="text_head">Playground and small garden area</span><br />
The Burgundy Place also understands that some of our customers do have children. Therefore on the roof top level, there are also playground and small garden facility available for customers. These facilities will allow customer to enjoy family time together with their children as well as relaxing at the same time. </span>
			</div>
			<div class="clear"></div>
		</div>
		<div class="facilities_list">
			<div class="thumb"><img src="<?=base_url()?>resource/image/fac2.jpg" /></div>
			<div class="detail">
				<span class="text"><span class="text_head">Room Facilities</span><br />
For the convenient of tenants, there are several facilities that will be building in with each and every unit. These facilities are including Television, Refrigerator, Air condition, Washing machine, Electronic stove and Microwave oven. </span>
			</div>
			<div class="clear"></div>
		</div>
		<div class="facilities_list">
			<div class="thumb"><img src="<?=base_url()?>resource/image/golf_car.jpg" /></div>
			<div class="detail">
				<span class="text"><span class="text_head">Driving Service</span><br />
				Understand that we are locating in Thonglor and surrounded by many shopping center and areas. The Burgundy Place will therefore provide our tenants with driving service that will cover the Thonglor and Ekamai Zone. </span>
			</div>
			<div class="clear"></div>
		</div>
		<div class="facilities_list">
			<div class="thumb"><img src="<?=base_url()?>resource/image/maid_service.jpg" /></div>
			<div class="detail">
				<span class="text"><span class="text_head">Maid Service</span><br />
				We Burgundy Place belief that cleanliness is one of the main comfort for our tenant, therefore our company will be providing maid service that will be taking care of our tenant's room twice a week.</span>
			</div>
			<div class="clear"></div>
		</div>
		<div class="facilities_list">
			<div class="thumb"><img src="<?=base_url()?>resource/image/internet.jpg" /></div>
			<div class="detail">
				<span class="text"><span class="text_head">Internet Service</span><br />
				To assure your comfort while you are staying, The Burgundy Place will offer you a free internet that allow you to enter the cyber world for free of chart and will be coming in the form of Wireless internet. </span></div>
			<div class="clear"></div>
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