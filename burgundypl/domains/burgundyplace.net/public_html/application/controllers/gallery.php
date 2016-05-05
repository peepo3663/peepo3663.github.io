<?php

class Gallery extends Controller {

	function Gallery()
	{
		parent::Controller();	
	}
	
	function index()
	{
		$data['menu'] = 6;
		$data['content'] = $this->load->view('gallery/index',null,true);
		$this->load->view('template/default',$data);
	}
}

/* End of file */