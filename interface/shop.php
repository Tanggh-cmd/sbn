<?php
include('./conn.php');

$idList = $_REQUEST['idlist'];

// echo $idList;
$sql="select * from mydata where Id in ($idList)";

// echo $sql;

$res = $mysqli->query($sql);

$arr = array();

while($row = $res->fetch_assoc()){

    array_push($arr,$row);
};

$json = json_encode($arr);

echo $json;

$mysqli->close();
?>