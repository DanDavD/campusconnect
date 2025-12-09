import { useState, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralBtn from "./components/btn/btn.jsx";

function App() {
  const [count, setCount] = useState(0);

  // FUNCION PARA CAMBIAR EL TITULO USANDO useMemo CORRECTAMENTE
  const title = useMemo(() => {
    return count % 2 === 0 ? "Editar" : "Crear";
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* boton masison */}
      <GeneralBtn title={title} firstName="Daniel" lastName="David" />
    </>
  );
}

export default App;
