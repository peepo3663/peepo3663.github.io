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
	<div id="lead_text_about_us" class="lead_text_inner"><img src="<?=base_url()?>resource/image/lead_text_contact_us.png" /></div>
	
	<div id="left_column">
				<div class="cufon" >Contact Us</div>
				<div  class="inner_content"  style="height:200px;"><span class="text"><strong>Thanks for contacting us!</strong><br />
				Your message has been sent. We will get back to you as soon as possible. </span>
				</div>
			</div>
			<div id="right_column">
				<div class="cufon" >Contact Information</div>
				<div class="inner_content">
					<span class="text">
						<strong>Burgundy Grande Co., Ltd.</strong><br />
						147 Fl.1 Sukhumvit 63 (Ekamai), Klongton-Nua, Wattana, Bangkok 10110 THAILAND<br /><br />

						Phone: 02-3925140<br />
						Fax: 023925141<br />
						Email: info@burgundyplace.net<br /><br />

                                                  <strong>Wiriyaporn Ampan</strong> (Sales Manager) <br />

                                Mobile:	08-9204-2353<br />
					</span>
					<div id="map">
						<a href="<?=site_url()?>contactus/graphic_map" class="group iframe"><img src="<?=base_url()?>resource/image/btn_graphicmap.png" class="btn"></a>
						<a href="<?=site_url()?>contactus/google_map" class="group2 iframe"><img src="<?=base_url()?>resource/image/btn_googlemap.png"  class="btn"></a>
					</div>
				</div>
			</div>
			<div class="clear"></div>
		</div>