import Table from "@/components/Table";
import styles from "./page.module.css";
import Link from "next/link";
import "@/styles/botoes.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ display: "grid", gap: "20px" }}>
        <h2> Playlist </h2>
        <Link
          href="adicionarMusica"
          className="button button-secondary"
          style={{
            width: "170px",
          }}
        >
          /adicionarMusica
        </Link>
        <Table />
      </div>
      <div>
        <br />
      </div>
      <div className={styles.center}></div>
    </main>
  );
}
