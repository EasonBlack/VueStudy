<?php
 
function connect_db() {
    $server = 'localhost'; // this may be an ip address instead
    $user = 'root';
    $pass = 'root';
    $database = 'demo'; // name of your database
    $connection =  new PDO("mysql:host=$server;dbname=$database", $user, $pass);
    return $connection;
}
?>
