export type Musica = {
  id?: number;
  nome?: string;
  tipo?: string;
};

export type MusicasJson = {
  erro: string;
  msg: string;
  musicas: Array<Musica>;
};
