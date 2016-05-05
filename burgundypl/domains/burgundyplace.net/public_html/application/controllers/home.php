<?php

class Home extends Controller {

	function Home()
	{
		parent::Controller();	
	}
	
	function index()
	{
		$data['menu'] = 1;
	

		$data['content'] = $this->load->view('home/index',null,true);
		$this->load->view('template/home',$data);
	}
}

/* End of file */