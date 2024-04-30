import fazFetch from "./fazFetch";

export default async function excluirMusica(id: number) {
  try {
    await fazFetch("DELETE", process.env.NEXT_PUBLIC_EXCLUIR_MUSICA!, {
      id,
    });
  } catch (error) {
    console.log("Erro ao excluir música:", error);
  }
}
