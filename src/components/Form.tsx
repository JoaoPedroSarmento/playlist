"use client";
import { ReactNode, useRef, useState } from "react";
import adicionarMusica from "@/functions/adicionarMusica";
import { Musica } from "@/types/types";
import "@/styles/form.css";
import Link from "next/link";
import Mensagem from "./Mensagem";

export default function Form(): ReactNode {
  const inputTipo = useRef<HTMLInputElement>(null);
  const inputNome = useRef<HTMLInputElement>(null);
  const [mensagem, setMensagem]: [string, Function] = useState<string>("");

  const handleAdicionarMusica = (): void => {
    const tipo = inputTipo.current?.value;
    const nome = inputNome.current?.value;

    if (tipo !== undefined && nome !== undefined) {
      const novaMusica: Musica = {
        tipo,
        nome,
      };

      try {
        adicionarMusica(novaMusica);

        setMensagem("Música adicionada");

        inputTipo.current!.value = "";
        inputNome.current!.value = "";

        setTimeout(() => {
          setMensagem("");
        }, 3000);
      } catch (error) {
        setMensagem("Erro ao adicionar música");
      }
    }
  };

  return (
    <section
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className="form">
        <div className="form-group">
          <label htmlFor="nome">Nome música </label>
          <input type="text" id="nome" autoComplete="off" ref={inputNome} />
        </div>
        <div className="form-group">
          <label htmlFor="tipo">Tipo</label>
          <input type="text" id="tipo" autoComplete="off" ref={inputTipo} />
        </div>
        <div className="button-group">
          <button
            className="button button-primary"
            onClick={handleAdicionarMusica}
          >
            Adicionar
          </button>
          <Link href="/">
            <p className="button button-secondary">Voltar</p>
          </Link>
        </div>

        {mensagem && (
          <Mensagem>
            <p>{mensagem}</p>
          </Mensagem>
        )}
      </div>
    </section>
  );
}
