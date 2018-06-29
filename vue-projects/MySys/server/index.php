<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: token, Content-Type');
header("Content-Type: application/json; charset=UTF-8");
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../../vendor/autoload.php';
require './mysql.php';

$app = new Slim\App;


$app->get('/', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    return $response;
});

$app->get('/article', function($request, $response, $args) {	
    try {
		$conn = connect_db();
        $stmt = $conn->query("select * from article");
		$stmt->execute();
        $names = $stmt->fetchAll(PDO::FETCH_OBJ);
        $conn = null;
        echo   json_encode($names);
    } catch(PDOException $e) {
        echo  '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$app->get('/article/{id}', function($request, $response, $args) {
    try {
        $conn = connect_db();
        $id = $args['id'];
        $sql = "SELECT * FROM article WHERE `id` = '$id'";
        $stmt = $conn->query($sql);
		$stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        $conn = null;
        echo   json_encode($result);
    } catch(PDOException $e) {
        echo  '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$app->post('/article', function($request, $response, $args){
    $form = $request->getParsedBody();
    $conn = connect_db();
    $date = date("Y-m-d");
    $sql = "insert into article (name,content,createtime)"
            . " VALUES('$form[name]','$form[content]', '$date')";
    $exe = $conn->query($sql);
    $conn = null;
    echo true;
});

$app->put('/article/{id}', function($request, $response, $args){
    $id = $args['id'];
    $form = $request->getParsedBody();
    $conn = connect_db();
    $date = date("Y-m-d");
    $sql = "update article set name='$form[name]', content='$form[content]', createtime='$date' where id='$id'";
    try {
        $exe = $conn->query($sql);
        $conn = null;
        echo true;
    } catch(PDOException $e) {
        echo  '{"error":{"text":'. $e->getMessage() .'}}';
    }
   
});

$app->delete('/article/{id}', function($request, $response, $args) {
    $id = $args['id'];
    $conn = connect_db();
    $sql = "DELETE FROM article WHERE id=$id";
    $exe = $conn->query($sql);
    $conn = null;
    echo true;
});

$app->run();
