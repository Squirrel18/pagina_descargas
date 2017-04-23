<?php
    require_once('consult.php');

    $consult = new consult($_GET["id_design"]);
    $result = $consult->searchId();

    if(!$result) {
        header('Content-Type: text/plain');
        echo "no data";
    } else {
        header('Content-Type: application/json');
        $conten = array();
        $i = 0;
        while ($row = mysql_fetch_assoc($result)) {
            $row = array_map("utf8_encode", $row);
            $conten[$i] = $row;
            $i++;
        }
        $json = json_encode($conten);
        echo $json;
    }

    /*$id = $_GET["id_design"];
    echo $id;*/

?>