<?php 
if(isset($_POST['email'])) {
    $email_to = "paulpellom@gmail.com";
    $email_subject = "Tutoring Contact";

    function died($error) {
        //error code
        echo "Sorry, but there were errors:";
        echo $error;
        die();
    }

    //validation
    if(!isset($_POST['full_name']) ||
    !isset($_POST['email']) ||
    !isset($_POST['telephone']) ||
    !isset($_POST['comments'])) {
died('Please ensure all fields are filled out.')
    }

    $full_name = $_POST['full-name'];
    $email_from = $_POST['email'];
    $telephone = $_POST['telephone'];
    $comments = $_POST['comments'];

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

if(!preg_match($email_exp, $email_from)) {
    $error_message .= 'The email entered is not valid <br/>'
}
$string_exp = "/^[A-Za-z .'-]+$/";
if(!preg_match($string_exp, $full_name)){
    $error_message .= 'Name is not valid. <br/>';
}
if(strlen($comments) < 2) {
    $error_message .= 'Please enter a longer comment <br/>';
}
}

?>