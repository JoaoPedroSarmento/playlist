<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

// Permitir que o cabeçalho Content-Type seja usado em solicitações CORS
header("Access-Control-Allow-Headers: Content-Type");
require_once("../models/funcoes.php");

$con = getConexao();
$infoMusica = file_get_contents("php://input");
$musica = json_decode($infoMusica, true);

if(!empty($musica)){
    try{
  
        $sql = "INSERT INTO Musica (nome, tipo) VALUES (? , ?)";
    
        $ps = $con->prepare($sql);  
        
        $ps->bindParam(1 , $musica["nome"]);
        $ps->bindParam(2 , $musica["tipo"]);
        $ps->execute();
        respostaJson(false, "Musica adicionada com sucesso!");
    }catch(PDOException $error){
        respostaJson(true, "Erro ao adicionar musica. " . $error->getMessage());
    }
}else{
    respostaJson(true, "Erro ao adicionar musica. Dados não recebidos.");
}

?>
