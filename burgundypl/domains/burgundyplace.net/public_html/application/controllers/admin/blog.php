<?php

class Blog extends Controller {

	var $model_name = 'admin/blog_model';
	var $table_name = '';
	
	function Blog()
	{
		parent::Controller();		
		$this->load->model($this->model_name ,'model');
	}
	
	function index()
	{
		$data['content_view'] = 'blog/index';
		$data['header'] = $this->load->view('template/header', '', true);
		$this->load->view('template/default',$data);
	}
}
?>