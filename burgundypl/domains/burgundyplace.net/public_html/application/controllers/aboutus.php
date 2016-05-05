<?php

class Aboutus extends Controller {

	function Aboutus()
	{
		parent::Controller();	
	}
	
	function index()
	{
		$data['menu'] = 2;
		$data['content'] = $this->load->view('aboutus/index',null,true);
		$this->load->view('template/default',$data);
	}
}

/* End of file */