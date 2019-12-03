<?php
ini_set('error_reporting', E_ALL ^ E_NOTICE ^ E_WARNING);
ini_set('display_errors', 'on');
ini_set('max_execution_time', 10);

header('Access-Control-Allow-Origin: *');
$players = [];
$servername = "mysql";
$username = "root";
$password = "tiger";
$dbname = "docker";

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM PLAYERS";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
    $players[] = ["id"=>$row["ID"], "alias"=>$row["ALIAS"], "name"=>$row["NAME"], "birthday"=>$row["BIRTHDAY"], "club"=>$row["CLUB"], "rol"=>$row["ROL"]];
    }
} else {
    echo "0 results";
}
$array = json_encode($players);
echo $array;
$conn->close();
