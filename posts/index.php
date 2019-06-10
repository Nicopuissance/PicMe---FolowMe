<?php
/**
 * Created by PhpStorm.
 * User: nicolasduwavrent
 * Date: 2019-06-09
 * Time: 22:00
 */

session_start();

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Mon espace</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<body>
<header>
    <h1>FolowMe - Mes posts</h1>

</header>


<?php
if (isset($_SESSION["connected"]) &&
    $_SESSION["connected"]) {
    include "../nav.php";
    echo '<h2>Mes posts</h2>';
    echo '<section id="myposts"></section>';

} else {

    echo "<p>Accès refusé !</p>";

}


?>
<script src='../js/jquery.min.js'></script>
<?php
if (isset($_SESSION["connected"]) && $_SESSION["connected"]) {
    print("<script src='../js/posts.js'></script>");
}
?>

</body>
</html>
