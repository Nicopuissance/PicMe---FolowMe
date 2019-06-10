<?php
session_start();

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>PicMe - Mes photos</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<body>
<header>
    <h1>PicMe - Mes photos</h1>

</header>


<?php
if (isset($_SESSION["connected"]) &&
    $_SESSION["connected"]) {
    include_once "../nav.php";
    echo '<h2>Mes photos</h2>';
    echo '<section id="pic"></section>';

} else {

    echo "<p>Accès refusé !</p>";

}


?>
<script src='../js/jquery.min.js'></script>
<?php
if (isset($_SESSION["connected"]) && $_SESSION["connected"]) {
    print("<script src='../js/photo.js'></script>");
}
?>

</body>
</html>