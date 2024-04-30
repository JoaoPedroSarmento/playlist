"use client";
import React, { useEffect, useState } from "react";
import carregaMusicas from "@/functions/carregaMusicas";
import { Musica } from "@/types/types";
import Row from "./Row";
import "@/styles/table.css";

export default function Table() {
  const [rows, setRows] = useState<Array<Musica>>([]);
  const [lastRow, setLastRow] = useState<Musica | null>(null);

  useEffect(() => {
    async function fetchDados() {
      try {
        const dados = await carregaMusicas();
        setRows(dados);
      } catch (e) {
        console.error(`Erro: ${e}`);
      }
    }
    fetchDados();
  }, []);

  useEffect(() => {
    // Atualiza a última linha
    if (rows.length > 0) {
      setLastRow(rows[rows.length - 1]);
    }
  }, [rows]);

  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>NOME</td>
          <td>TIPO</td>
          <td>excluir</td>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ id, nome, tipo }) => (
          <Row key={id} id={id!} nome={nome!} tipo={tipo!} />
        ))}
      </tbody>
      <tfoot>
        {lastRow && (
          <Row
            key={lastRow.id}
            id={lastRow.id!}
            nome={lastRow.nome!}
            tipo={lastRow.tipo!}
          />
        )}
      </tfoot>
    </table>
  );
}
