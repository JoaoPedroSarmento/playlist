import { Musica, MusicasJson } from "@/types/types";
import fazFetch from "./fazFetch";

export default async function adicionarMusica(dados: Musica): Promise<void> {
  try {
    await fazFetch(
      "POST",
      process.env.NEXT_PUBLIC_ADICIONAR_MUSICA_URL!,
      dados
    ).then((dados: MusicasJson) => dados.musicas);
  } catch (error) {
    console.error("Erro ao adicionar música:", error);
    throw error;
  }
}
