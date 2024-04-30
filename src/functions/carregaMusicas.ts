import { Musica, MusicasJson } from "@/types/types";
import fazFetch from "./fazFetch";

export default async function carregaMusicas(): Promise<Array<Musica>> {
  try {
    const musicas: Array<Musica> = await fazFetch(
      "GET",
      process.env.NEXT_PUBLIC_CARREGA_MUSICA!
    ).then((dados: MusicasJson): Array<Musica> => dados.musicas);
    return musicas;
  } catch {
    throw new Error("Erro na requisição");
  }
}
