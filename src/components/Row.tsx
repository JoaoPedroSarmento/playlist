"use client";
import { useState } from "react";
import { ReactNode } from "react";
import BotaoExcluir from "./BotaoExcluir";

export default function Row({
  id,
  nome,
  tipo,
}: {
  id: number;
  nome: string;
  tipo: string;
}): ReactNode {
  const [excluir, setExcluir] = useState<boolean>(false);
  if (!excluir) {
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{nome}</td>
        <td>{tipo}</td>
        <td>
          <BotaoExcluir
            key={id}
            setExcluir={setExcluir}
            excluir={excluir}
            id={id}
          />
        </td>
      </tr>
    );
  }
  return null;
}
