import { ReactNode } from "react";

export default function Mensagem({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <div
      className="mensagem"
      style={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#4CAF50",
        color: "white",
        textAlign: "center",
        padding: "10px",
        borderRadius: "8px",
        maxWidth: "200px",
        animation: "fadeInOut 3s ease",
      }}
    >
      {children}
    </div>
  );
}
