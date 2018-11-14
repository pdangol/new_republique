<?php

//Add your information here
$recipient = "dangolprabesh@gmail.com";

//Don't edit anything below this line

//import form information
$email = $_POST['email'];

$email=stripslashes($email);
$message= "Email Address: $email";

/*
Simple form validation
check to see if an email and message were entered
*/

//if no message entered and no email entered print an error
if (empty($email)){
print "No email address and no message was entered. <br>Please include an email and a message";
}

//mail the form contents
if(mail("$recipient", "$subject", "$message", "From: $email" )) {

	// Email has sent successfully, echo a success page.

	echo '<div class="alert alert-success alert-dismissable fade show">
		<button type = "button" class = "close" data-dismiss = "alert" aria-hidden = "true">&times;</button>
    
		<p style="margin-bottom: 0;">Email Sent Successfully! We Will get back to you shortly</p></div>';

	} else {

	echo 'ERROR!';

	}

