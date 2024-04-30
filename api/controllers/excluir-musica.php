<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type");
require_once("../models/funcoes.php");

$con = getConexao();
$info = file_get_contents("php://input");
$id = json_decode($info, true)["id"];

if(!empty($id)){
    try{
  
        $sql = "DELETE FROM Musica WHERE id = ?";
    
        $ps = $con->prepare($sql);  
        
        $ps->bindValue(1 , $id);
        $ps->execute();
        respostaJson(false, "Música removida com sucesso!");
    }catch(PDOException $error){
        respostaJson(true, "Erro ao remover música. " . $error->getMessage());
    }
}else{
    respostaJson(true, "Erro ao remover música. Dados não recebidos.");
}

?>
