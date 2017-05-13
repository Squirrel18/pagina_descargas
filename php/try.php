<?php
    require_once('consult.php');

    /*$consult = new consult($_GET["id_design"]);
    $result = $consult->searchId();

    if(!$result) {
        header('Content-Type: text/plain');
        header('X-PHP-Response-Code: 404', true, 404);
        echo "no data";
    } else {
        header('Content-Type: application/json');
        $conten = array();
        while($row = mysql_fetch_assoc($result)) {
            $row = array_map("utf8_encode", $row);
            $conten = $row;
        }
        $json = json_encode($conten);
        echo $json;
    }*/

    $id = $_GET["id_design"];
    echo $id;

?>