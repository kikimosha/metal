<?php
require 'libs/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.keneg.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@keneg.ru';                 // SMTP username
$mail->Password = '8KyoGB5Kn2';                           // SMTP password
//$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25;                                    // TCP port to connect to

$mail->From = 'info@keneg.ru';
$mail->FromName = 'Mailer';
$mail->addAddress('info@keneg.ru');               // Name is optional

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters   // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказ обратного звонка с сайта keneg.ru';
$mail->Body    = '<b>Имя: </b>' . $_POST['name'] . '<br><b>Телефон: </b>' . $_POST['phone'];

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}