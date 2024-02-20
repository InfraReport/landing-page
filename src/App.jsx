import { useState } from "react";
import infraLogo from "./assets/infraLogo.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={infraLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Infra Tech Studio</h1>
      <h3>
        Desenvolvimento de soluções para sua empresa. Veja nossos projetos
        &#128071;
      </h3>
      <div className="card">
        <div>
          <h4>Páginas de vendas</h4>
          <a href="https://ojuliocode.com.br" target="_blank">
            <button onClick={() => setCount((count) => count + 1)}>
              @ojuliocode
            </button>
          </a>
        </div>
        <div>
          <h4> Sistemas </h4>
          <a href="">
            <button onClick={() => setCount((count) => count + 1)}>
              @infrareport
            </button>
          </a>
        </div>
      </div>
      <footer>
        Agende uma conversa
        <a href="mailto:infratechstudio@gmail.com">
          {" "}
          <p> &nbsp; clicando aqui</p>{" "}
        </a>
      </footer>
    </>
  );
}

export default App;
