<?php
require "confing/confing.php";
$pdo = new PDO("mysql:hostname=$hostname;dbname=$db;charset=UTF8;",$user,$passwd);



if($_SERVER['REQUEST_METHOD'] == "POST"){
if(isset($_POST['username']) && isset($_POST['Password'])){
/* Execute a prepared statement by binding PHP variables */
$user = $_POST['username'];
$pass = md5($_POST['Password']);
$sth = $pdo->prepare('SELECT *
    FROM users
    WHERE username = :user AND password = :pass');
$sth->bindParam("user", $user, PDO::PARAM_STR);
$sth->bindParam("pass", $pass, PDO::PARAM_STR);
$sth->execute(); 
if($sth->rowCount() == 1){
    $arr = ["response"=>"1"];
}else{
    $arr = ["response"=>"0"];    
}
echo json_encode($arr);
}


}