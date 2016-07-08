<html lang = "en">
<head>
  <link href="../css/main.css" rel="stylesheet" />
</head>
  <body>
    <form action = "email.php" method = "POST">
      <input type = "text" size = "40" name = "title"  /><br />
      <input type = "text" size = "40" name = "name"
       <input type = "text" size = "40" name = "email" /><br />
       <textarea cols="10" rows="10" name = "message">
       </textarea><br />
      <input type = "submit" value = "Submit" name = "send"/>
    </form>
</body>
</html>

<?php

if (!empty($_POST['title']) && !empty($_POST['message']) && !empty($_POST['name'])) {

  $title = $_POST['title'];
  $message = $_POST['message'];
  $name = $_POST['name'];
  $email = $_POST['email'];


}

else {

echo "bad";
}



 ?>
