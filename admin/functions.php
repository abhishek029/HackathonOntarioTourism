<?php
	function redirect_to($location){
		if($location != NULL){
			header('Location: '.$location);
			exit;
		}
    }

    function sendUpdatedEmail($firstname,$lastname,$email){
        echo "Updated";
        $name = $firstname." ".$lastname;
		$to = $email;
		$subject = "Account Updated";
        $message = 'Message Body: Updated name: '.$firstname.$lastname;
		$headers = "From: noreply@ABHIPATEL.ca\r\n";
		
        
		if(mail($to, $subject, $message, $headers)){
            redirect_to('../index.html');
        }
        

        exit;
    }

    function sendCreatedEmail($firstname,$lastname,$email){
        echo "Created";
        $name = $firstname." ".$lastname;
		$to = $email;
		$subject = "Account Created";
        $message = 'Message Body: Account name: '.$firstname.$lastname;
		$headers = "From: noreply@ABHIPATEL.ca\r\n";
		
        
		if(mail($to, $subject, $message, $headers)){
            redirect_to('../index.html');
		}
        exit;
    }
?>