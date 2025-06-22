import { useState } from "react";

export default function ExemploUseState() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <h2>useState</h2>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
