import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
}

export default function ExemploUseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>useReducer</h2>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button class="btnRedu" onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
