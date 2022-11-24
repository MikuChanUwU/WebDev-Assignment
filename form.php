<?PHP
$email = $_POST["email"];
$to = "roystonloo@arknightsotaku.net";
$subject = $_POST["enquiry"];
$headers = "From: ".$email;
$message = $_POST["comment"];

$user = "$email";
$usersubject = "Thank You";
$userheaders = "From: ". $to;
$usermessage = "Thank you for submitting your request. You should receive a reply within 3 working days.";
mail($to,$subject,$message,$headers);
mail($user,$usersubject,$usermessage,$userheaders);

echo "<script>window.location = 'https://www.arknightsotaku.net/success.html'</script>";
?>
