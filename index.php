<?php
session_start();


?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Pic Me, follow me !- Follow your friends</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<main>
    <header>
        <h1>Pic Me, follow me !</h1>
    </header>
    <?php
    if (isset($_SESSION["connected"]) &&
        $_SESSION["connected"]) {
        ?>
        <nav>
            <a href="myspace" id="info">Mon espace</a>
            <a href="photo" id="photo">Mes photos</a>
            <a href="posts" id="posts">Mes postes</a>
            <a href="photo/logout.php" id="logoutLink"
               class="loginoutLink">LOGOUT</a>
        </nav>


        <?php
    } else {
        ?>
        <h2>Connexion</h2>
        <section id="connect">
            <div class="inline">
                <div>
                    <label for="username">Pseudo</label>
                    <input id="username" type="text">
                </div>
                <div>
                    <label for="number">Téléphone</label>
                    <input id="number" type="password">
                </div>
            </div>
            <div class='loginoutLink'>
                <a href='photo' id='loginLink'>LOGIN</a>
            </div>

        </section>
        <?php
    }
    ?>
    <h2>Posts</h2>
    <section id="allPosts">
    </section>

    <footer></footer>

</main>

<script src='js/jquery.min.js'></script>
<script src='js/connexion.js'></script>
<script src='js/allposts.js'></script>
</body>
</html>