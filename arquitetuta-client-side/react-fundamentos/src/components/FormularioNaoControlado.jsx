import { useRef } from "react";

export default function FormularioNaoControlado() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Valor: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulário não controlado</h2>
      <input ref={inputRef} />
      <button type="submit">Enviar</button>
    </form>
  );
}
