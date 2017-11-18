<?php
    require_once('Consult.php');

    if(isset($_GET["id_design"])) {
        $consult = new consult($_GET["id_design"]);
        $result = $consult->searchId();
        if(!$result) {
            header('Content-Type: text/plain');
            header('X-PHP-Response-Code: 404', true, 404);
            echo "No data";
        } else {
            header('Content-Type: application/json');
            $conten = array();
            while($row = mysql_fetch_assoc($result)) {
                $row = array_map("utf8_encode", $row);
                $conten = $row;
            }
            $json = json_encode($conten);
            echo $json;
        }
    } else if($_POST["downloaded"] && isset($_POST['id'])) {
        $consultDownloaded = new consult($_POST["id"]);
        $result = $consultDownloaded->downloaded();
        if(!$result) {
            header('Content-Type: text/plain');
            header('X-PHP-Response-Code: 404', true, 404);
            echo "No data";
        } else {
            $data;
            while($row = mysql_fetch_assoc($result)) {
                $row = array_map("utf8_encode", $row);
                $data = $row['download_times'];
            }
            $data = $data + 1;
            $result = $consultDownloaded->addDownloaded($data);
            echo $result;
        } 
        
    }
?>
