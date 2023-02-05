<?php
$to      = 'patrykjanicki.lm@gmail.com';
$name    = $_POST['name'];
$surname    = $_POST['surname'];
$email    = $_POST['email'];
$number    = $_POST['number'];
$subject = 'Zapytanie o noclegi od: ' . $name .$surname;
$message = $_POST['message'];
$headers = 'From: ' . $name . $surname" .
$headers .= 'Content-Type: text\html; charset-utf-8\r\n';

mail($to, $subject, $message, $headers);
?>