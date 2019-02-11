<?php
	function redirect_to($location){
		if($location != NULL){
			header('Location: '.$location);
			exit;
		}
    }

    function sendUpdatedEmail($firstname,$lastname,$email){
        echo "Updated";
        // exit;
    }

    function sendCreatedEmail($firstname,$lastname,$email){
        echo "Created";
        // exit;
    }
?>