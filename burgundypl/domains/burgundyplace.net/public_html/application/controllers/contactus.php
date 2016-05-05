<?php

class Contactus extends Controller {

	function Contactus()
	{
		parent::Controller();
		$this->load->plugin('phpmailer');
		
	}
	
	function index()
	{
		$data['menu'] = 7;
		$data['content'] = $this->load->view('contactus/add',null,true);
		$this->load->view('template/default',$data);
		
		if($_POST)
		{
			
			
			$mail = new PHPMailer();
			$mail->IsHTML(true); 
			$mail->IsSMTP();
			$mail->SMTPAuth = true;
			$mail->Host = 'ssl://smtp.gmail.com:465';
			$mail->Username = "burgundy.co.th@gmail.com"; 
			$mail->Password = "burgundy123"; 
			
			
			$name = $this->input->post('name');
			$email = $this->input->post('email');
			$phone = $this->input->post('phone');
			$message = $this->input->post('message');
						
			//---------------read template -------------------------
			$template_path = "./resource/email_template/contact_us.htm";				
			$fh = fopen($template_path, 'r');
			$template = fread($fh, filesize($template_path));
			fclose($fh);
			//------------------------------------------------------
			
			
			// subject for admin
			$subject = 'New message from www.burgundyplace.net';

			// message for admin
			$body = '
			<p><strong>New message from www.burgundyplace.net</strong><br />
			Name: '.$name.'<br />
			Phone: '.$phone.' <br />
			Email: '.$email.'<br />
			Message: '.$message.'<br />
			</p> <br /><br />
			Please contact '.$email.'
			';
			
			$mail_body = str_replace("[content]",$body,$template);
			
			$mail->From = "no-reply@burgundyplace.net"; 
			$mail->FromName = "Burgundy Place";
			$mail->Subject = $subject;
			$mail->Body = $mail_body;
			$mail->AddAddress("suporn.t@lightinghouse.co.th"); 
			$mail->AddCC("burgundy.co.th@gmail.com");
			$mail->Send();
			
			
			
			// subject for user
			$subject = 'Thank you for your message';

			// message for user
			$body = '
			<p><strong>Thank you for your message.</strong><br />
			Name: '.$name.'<br />
			Phone: '.$phone.' <br />
			Email: '.$email.'<br />
			Message: '.$message.'<br />
			</p> <br /><br />
			We will contact you shortly
			';
			
			$mail_body = str_replace("[content]",$body,$template);
			
			$mail2 = new PHPMailer();
			$mail2->IsHTML(true); 
			$mail2->IsSMTP();
			$mail2->SMTPAuth = true;
			$mail2->Host = 'ssl://smtp.gmail.com:465';
			$mail2->Username = "burgundy.co.th@gmail.com"; 
			$mail2->Password = "burgundy123"; 
			
			$mail2->From = "no-reply@burgundyplace.net"; 
			$mail2->FromName = "Burgundy Place";
			$mail2->Subject = $subject;
			$mail2->Body = $mail_body;
			$mail2->AddAddress($email); 
			$mail2->Send();
			
			
			redirect('/contactus/thanks/');
		}
	}
	function graphic_map()
	{
		$this->load->view('contactus/graphic_map');
	}
	function google_map()
	{
		$this->load->view('contactus/google_map');
	}
	function thanks()
	{
		$data['menu'] = 7;
		$data['content'] = $this->load->view('contactus/thanks',null,true);
		$this->load->view('template/default',$data);
	}
}

/* End of file */