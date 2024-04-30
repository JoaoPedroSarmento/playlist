import { Musica, MusicasJson } from "@/types/types";
type ConfigMetodoBase = {
  method: string;
  headers?: Record<string, string>;
  body?: string;
};

export default async function fazFetch(
  metodo: string,
  url: string,
  dados?: Musica
): Promise<MusicasJson> {
  let configMetodo: ConfigMetodoBase = {
    method: metodo,
  };
  if (metodo !== "GET") {
    configMetodo = {
      ...configMetodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    };
  }

  try {
    return await fetch(url, configMetodo)
      .then((response): Response => {
        if (!response.ok)
          throw new Error("Ocorreu um erro ao fazer a requisição.");

        return response;
      })
      .then((response): Promise<MusicasJson> => {
        return response.json();
      });
  } catch (error) {
    throw error;
  }
}
