<?php
    function getConexao():PDO{
        $DSN = 'mysql:dbname=bg5twkjfgkncohcxq4oj;host=bg5twkjfgkncohcxq4oj-mysql.services.clever-cloud.com;charset=utf8';

        try{
            $pdo = new PDO($DSN,'uki0wiingu0endsh','f1J6za2UL7XR0mqVLlhe',[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
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
