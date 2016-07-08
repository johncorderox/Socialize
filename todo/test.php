<html lang = "en">
  <body>
    <form action = "test.php" method = "POST">
      <input type = "text" size = "30" name = "title"  /><br />
        <textarea cols="10" rows="10" name = "message">
      </textarea><br />
     <input type = "text" size = "30" name = "name" /><br />
      <input type = "submit" value = "Submit" />
    </form>
</body>
</html>

<?php

if (!empty($_POST['title']) && !empty($_POST['message']) && !empty($_POST['name'])) {

  $title = $_POST['title'];
  $message = $_POST['message'];
  $name = $_POST['name'];

}

else {

echo "bad";
}


 ?>
