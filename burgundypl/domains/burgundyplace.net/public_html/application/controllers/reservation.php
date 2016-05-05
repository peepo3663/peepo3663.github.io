<?php

class Reservation extends Controller {

	function Reservation()
	{
		parent::Controller();
		$this->load->plugin('phpmailer');
	}
	
	function add()
	{
		$room_type = $this->uri->rsegment(3);
		$data['room_type'] = $room_type;
		$data['menu'] = 5;
		$data['content'] = $this->load->view('reservation/index',$data,true);
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
						
			//---------------read template -------------------------
			$template_path = "./resource/email_template/contact_us.htm";				
			$fh = fopen($template_path, 'r');
			$template = fread($fh, filesize($template_path));
			fclose($fh);
			//------------------------------------------------------
			
			$room_type = $this->input->post('room_type');
			$name = $this->input->post('name');
			$email = $this->input->post('email');
			$phone = $this->input->post('phone');
			$message = $this->input->post('message');
			
			// subject for admin
			$subject = 'Room reservation from www.burgundyplace.net';

			// message for admin
			$body = '
			<p><strong>Room reservation from www.burgundyplace.net</strong><br />
			Room Type: '.$room_type.'<br />
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
			$subject = 'Thank you for your reservation';

			// message for user
			$body = '
			<p><strong>Thank you for your reservation.</strong><br />
			Room Type: '.$room_type.'<br />
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
			
			redirect('reservation/thanks/');
		}
	}
	function thanks()
	{
		$data['menu'] = 5;
		$data['content'] = $this->load->view('reservation/thanks',null,true);
		$this->load->view('template/default',$data);
	}
}

/* End of file */