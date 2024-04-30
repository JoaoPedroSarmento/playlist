<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Methods: GET");
// Permitir que o cabeçalho Content-Type seja usado em solicitações CORS
header("Access-Control-Allow-Headers: Content-Type");
require_once("../models/funcoes.php");
$con = getConexao();

$musicas = null;
try {
    $sql = "SELECT id, nome , tipo FROM Musica";
    $ps = $con->prepare($sql);
    $ps->execute();

    $musicas = $ps->fetchAll(PDO::FETCH_ASSOC);

    respostaJson(false, "musicas listadas com sucesso!", $musicas);
} catch (PDOException $error) {
    respostaJson(true, "Erro ao listar os musicas." . $error->getMessage());
}
?>
