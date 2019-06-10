<?php
/**
 * Created by PhpStorm.
 * User: nicolasduwavrent
 * Date: 2019-06-10
 * Time: 18:56
 */

session_start();

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>My Space - Mes infos</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<body>
<header>
    <h1>My Space - Mes infos</h1>

</header>


<?php
if (isset($_SESSION["connected"]) &&
    $_SESSION["connected"]) {
    include_once "../nav.php";
    echo "<h3 id='bienvenu'>Bienvenue " . $_SESSION["username"] . "</h3>";
    ?>
    <h2>Mon espace</h2>
    <section id="infos">

        <div>
            <label for="name">Nom</label>
            <input type="text" id="name">
        </div>
        <div>
            <label for="username">Pseudo</label>
            <input type="text" id="username">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email">
        </div>
        <div>
            <h3>Adresse</h3>
            <div>
                <label for="street">Rue</label>
                <input type="text" id="street">
            </div>
            <div>
                <label for="suite">N° rue</label>
                <input type="text" id="suite">
            </div>
            <div>
                <label for="city">Ville</label>
                <input type="text" id="city">
            </div>
            <div>
                <label for="zipcode">Code Postal</label>
                <input type="text" id="zipcode">
            </div>
        </div>
        <div>
            <label for="phone">Téléphone</label>
            <input type="tel" id="phone">
        </div>
        <div>
            <label for="website">Site Web</label>
            <input type="text" id="website">
        </div>
        <div>
            <h3>Entreprise</h3>
            <div>
                <label for="compagny-name">Nom</label>
                <input type="text" id="company-name">
            </div>
            <div>
                <label for="compagny-catchPhrase">Slogant</label>
                <input type="text" id="company-catchPhrase">
            </div>
            <div>
                <label for="compagny-bs">Coeur de métier</label>
                <input type="text" id="company-bs">
            </div>
        </div>
        <div>
            <h3>Localisation</h3>
            <div>Carte</div>
        </div>
    </section>
    <?php
} else {

    echo "<p>Accès refusé !</p>";

}


?>
<script src='../js/jquery.min.js'></script>
<?php
if (isset($_SESSION["connected"]) && $_SESSION["connected"]) {
    print("<script src='../js/myspace.js'></script>");
}
?>

</body>
</html>



    
