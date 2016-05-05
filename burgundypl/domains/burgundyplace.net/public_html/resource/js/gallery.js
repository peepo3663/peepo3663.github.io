function slideGallery(){
	indexGallery++;
	if(indexGallery == 4){
		indexGallery = 1;
	}
	$("#container").scrollTo($("#item"+indexGallery), 800 ,{ axis:'x',easing: 'easeInOutExpo' });
	timer = setTimeout("slideGallery()",3000);
	setGalleryPage();
}
function moveGalleryTo(v){
	indexGallery = v
	clearTimeout(timer);
	$("#container").scrollTo($("#item"+indexGallery), 800 ,{ axis:'x',easing: 'easeInOutExpo' });
	setGalleryPage();
}
function setGalleryPage(){
	if(indexGallery == 1){
		$("#gallery_page_over1").show();
		$("#gallery_page1").hide();
		$("#gallery_page_over2").hide();
		$("#gallery_page2").show();
		$("#gallery_page_over3").hide();
		$("#gallery_page3").show();
	}
	if(indexGallery == 2){
		$("#gallery_page_over1").hide();
		$("#gallery_page1").show();
		$("#gallery_page_over2").show();
		$("#gallery_page2").hide();
		$("#gallery_page_over3").hide();
		$("#gallery_page3").show();
	}
	if(indexGallery == 3){
		$("#gallery_page_over1").hide();
		$("#gallery_page1").show();
		$("#gallery_page_over2").hide();
		$("#gallery_page2").show();
		$("#gallery_page_over3").show();
		$("#gallery_page3").hide();	
	}
}