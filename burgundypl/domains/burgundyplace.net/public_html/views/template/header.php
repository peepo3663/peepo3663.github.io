		<div id="top">
			<div id="top_wrapper">
				<div id="logo"><a href="<?=site_url()?>" title="Home"><img src="<?=base_url()?>resource/image/logo.png" alt="logo"/></a></div>
				<div id="nav">
					<ul id="menu">
					<li id="home">
						<a href="<?=site_url()?>" title="Home" <? if($menu == 1):?>class="selected" <? endif;?>>Home</a>
					</li>
					<li id="about">
						<a href="<?=site_url()?>aboutus" title="About Us"  <? if($menu == 2):?>class="selected" <? endif;?> >About Us</a>
					</li>	
					<li id="facilities">
						<a href="<?=site_url()?>facilities" title="Facilities"  <? if($menu == 3):?>class="selected" <? endif;?>>Facilities</a>
					</li>	
					<li id="room">
						<a href="<?=site_url()?>room" title="Room"  <? if($menu == 4):?>class="selected" <? endif;?>>Room</a>
					</li>	
					<li id="reservation">
						<a href="<?=site_url()?>reservation/add" title="Reservation"  <? if($menu == 5):?>class="selected" <? endif;?>>Reservation</a>
					</li>	
					<li id="gallery">
						<a href="<?=site_url()?>gallery" title="Gallery"  <? if($menu == 6):?>class="selected" <? endif;?>>Gallery</a>
					</li>	
					<li id="contact">
						<a href="<?=site_url()?>contactus" title="Contact Us"  <? if($menu == 7):?>class="selected" <? endif;?>>Contact Us</a>
					</li>					
				</ul>
				</div>
			</div>
		</div>
		<div id="curve">curve bg</div>