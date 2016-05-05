<?php

class Facilities extends Controller {

	function Facilities()
	{
		parent::Controller();	
	}
	
	function index()
	{
		$data['menu'] = 3;
		$data['content'] = $this->load->view('facilities/index',null,true);
		$this->load->view('template/default',$data);
	}
}

/* End of file */