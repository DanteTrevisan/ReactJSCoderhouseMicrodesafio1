import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const root = document.getElementById("root");

const crearBoton = () =>{
  
  const boton = document.createElement("boton");
  const etiqueta = document.createElement("etiqueta");
  boton.appendChild(etiqueta);
  boton.classList.add("btn");
  return boton;
}

const boton = crearBoton();
root.appendChild(boton);

export default App;
