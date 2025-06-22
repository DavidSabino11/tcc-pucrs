import { useState } from "react";

export default function FormularioControlado() {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome enviado: ${nome}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulário controlado</h2>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
}
