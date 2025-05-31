import { useEffect, useState } from "react";

export default function ExemploUseEffect() {
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => setTempo(t => t + 1), 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Tempo decorrido: {tempo} segundos</p>
    </div>
  );
}
