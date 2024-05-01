<?php
  $env = $_ENV;
  $dbName = $env["DB_NAME"];
  $host = $env["HOST"];
  $root = $env["ROOT"];
  $senha = $env["SENHA"];

    function getConexao():PDO{
        $DSN = "mysql:dbname=$dbname;host=$host;charset=utf8";

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
