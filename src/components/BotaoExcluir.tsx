"use client";

import excluirMusica from "@/functions/excluirMusica";

export default function BotaoExcluir({
  setExcluir,
  id,
}: {
  setExcluir: Function;
  excluir: boolean;
  id: number;
}) {
  return (
    <button
      style={{
        background: "#242424",
        padding: "10px",
        border: "0",
        cursor: "pointer",
      }}
      onClick={() => {
        setExcluir(true);
        excluirMusica(id);
      }}
    >
      excluir
    </button>
  );
}
