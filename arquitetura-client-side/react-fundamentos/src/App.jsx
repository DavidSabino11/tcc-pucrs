import ExemploUseState from "./components/ExemploUseState";
import ExemploUseReducer from "./components/ExemploUseReducer";
import ExemploUseEffect from "./components/ExemploUseEffect";
import EventosBasicos from "./components/EventosBasicos";
import FormularioControlado from "./components/FormularioControlado";
import FormularioNaoControlado from "./components/FormularioNaoControlado";
import ComponenteBasico from "./components/ComponenteBasico";
import Separador from "./components/Separadodor";

function App() {
  return (
    <div class="container">
      <h1>Exemplos fundamentais do React</h1>
      <Separador />
      <ComponenteBasico texto="Exemplo de texto" />
      <Separador />
      <EventosBasicos />
      <Separador />
      <ExemploUseState />
      <Separador />
      <ExemploUseReducer />
      <Separador />
      <ExemploUseEffect />
      <Separador />
      <FormularioControlado />
      <Separador />
      <FormularioNaoControlado />
    </div>
  );
}

export default App;