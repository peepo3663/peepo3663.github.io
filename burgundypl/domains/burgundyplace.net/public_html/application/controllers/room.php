<?php

class Room extends Controller {

	function Room()
	{
		parent::Controller();	
	}
	
	function index()
	{
		$data['menu'] = 4;
		$data['content'] = $this->load->view('room/index',null,true);
		$this->load->view('template/default',$data);
	}
}
/* End of file */