<?php
  $env = $_ENV;
  $dbName = $env["POSTGRES_DATABASE"];
  $host = $env["POSTGRES_HOST"];
  $root = $env["POSTGRES_USER"];
  $senha = $env["POSTGRES_PASSWORD"];

    function getConexao():PDO{
        $DSN = "mysql:dbname=$dbName;host=$host;charset=utf8";

        try{
            $pdo = new PDO($DSN,$root,$senha,[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
        }catch(PDOException $error){
            die("ERRO AO CONECTAR COM O BANCO DE DADOS {$error->getMessage()}");
        }
        
        return $pdo;
    }
    function respostaJson(bool $erro, string $msg, array $dados=null){
        header("Content-Type:application/json;charset=utf-8");
        die(json_encode(["erro"=>$erro, "msg"=>$msg, "musicas"=>$dados]));
    }
?>                  
