<!DOCTYPE html>

<?php
$name = ($_POST['user_name']);
$email    = ($_POST['user_email']);
$phone   = ($_POST['user_phone']);
$message = ($_POST['user_message']);
$subject   = "Contact Form Query";

$emailmessage   = "

Name: $name
Email: $email
Phone: $phone
Message: $message
Add to newsletter?: 

";

mail("you@domain.com", $subject, $emailmessage);

?>

<html>
<head>
	    <title>Contact Form</title>
	    <link rel="stylesheet" href="main.css">
	</head>
	<body>
	<div class="header">
		<div class="navbar">
	  		<a href="index.html">HOME</a>
	  		<a href="factpage.html">FUN FACTS</a>
	  		<a href="daisyguessing.html">FLOWER GAME</a>
	  		<a class="active" href="form.html">CONTACT</a>
		</div>
	</div>

<center><div class="content">

<p class="subheading">Thanks <?php echo $name; ?>!</p>
<p>We have recieved your message and will be in touch shortly.</p>
<img class="picture" src="submitflowers.jpg" width="300" height="300" align="center" /></br></br>
</div></center>
<div class="footer">
		<p>Copyright 2018</p>
		<p>Website made by Danielle</p>
	</div>
</body>
</html>



