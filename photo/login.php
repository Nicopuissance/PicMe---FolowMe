<?php
session_start();
$_SESSION["username"] = $_POST["username"];
switch ($_POST["id"]) {
    case 0:
        test($_POST["code"], array(1, 3, 7, 5, 4, 2));
        break;
    case 1:
        test($_POST["code"], array(0, 1, 4, 7, 8));
        break;
    case 2:
        test($_POST["code"], array(2, 1, 4, 7, 6));
        break;
    case 3:
        test($_POST["code"], array(0, 4, 8, 5, 2));
        break;
    case 4:
        test($_POST["code"], array(6, 3, 0, 4, 8, 5, 2));
        break;
    case 5:
        test($_POST["code"], array(0, 1, 2, 4, 6, 7, 8));
        break;
    case 6:
        test($_POST["code"], array(0, 3, 6, 7, 8, 5, 2));
        break;
    case 7:
        test($_POST["code"], array(1, 0, 3, 6, 7, 8, 5, 2));
        break;
    case 8:
        test($_POST["code"], array(0, 1, 2, 5, 4, 3, 6, 7, 8));
        break;
    case 9:
        test($_POST["code"], array(6, 3, 0, 1, 4, 8));
        break;
    default:
        echo json_encode(false);
        break;

}

function test($path, $correction)
{
    if ($path == $correction) {
        $_SESSION["connected"] = true;
        echo json_encode(true);
    } else {
        $_SESSION["connected"] = false;
        echo json_encode(false);
    }
}



