export default function EventosBasicos() {
  const handleClick = () => alert("Clique detectado!");

  return (
    <div>
      <h2>Eventos básicos</h2>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}
