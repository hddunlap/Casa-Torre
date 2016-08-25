<?php
$firstName = trim(filter_input(INPUT_POST, "user_firstName", FILTER_SANITIZE_STRING));
$lastName = trim(filter_input(INPUT_POST, "user_lastName", FILTER_SANITIZE_STRING));
$email = trim(filter_input(INPUT_POST, "user_email", FILTER_SANITIZE_EMAIL));
$message = trim(filter_input(INPUT_POST, "user_topics", FILTER_SANITIZE_SPECIAL_CHARS));

if ($firstName == "" || $lastName == "" || $email == "" || $message=="") {
	echo "Please fill in the required fields: First Name, Last Name, Email, and Message";
}

if ($_POST["address"] != "") {
	echo "Bad Form!";
	exit;
}

require("phpmailer/PHPMailerAutoload.php");
$mail = new PHPMailer;



$email_body = "";
$email_body .= "First Name " . $firstName . "\n";
$email_body .= "Last Name " . $lastName . "\n";
$email_body .= "Email " . $email . "\n";
$email_body .= "Message " . $message . "\n";


	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Host = 'smtp.postmarkapp.com';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;
	$mail->Username = '664ec848-b75a-4625-a73c-77fe4f0430f4';                 // SMTP username
	$mail->Password = '664ec848-b75a-4625-a73c-77fe4f0430f4';                           // SMTP password
	$mail->Port = 2525;                                    // TCP port to connect to



	$mail->setFrom("inquiries@casatorre.co");
	$mail->addAddress('inquiries@casatorre.co', 'To Whom It May Concern');     // Add a recipient


	$mail->isHTML(false);                                  // Set email format to HTML

	$mail->Subject = 'Casa Torre Inquiry from ' . $firstName . " " . $lastName;
	$mail->Body    = $email_body;

	if(!$mail->send()) {
	    echo 'Message could not be sent.';
	    echo 'Mailer Error: ' . $mail->ErrorInfo;
	    exit;
	} 

header("location:thanks.php")

?>
