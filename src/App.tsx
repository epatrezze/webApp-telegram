import React, { useState } from "react";
import WebApp from "@twa-dev/sdk";
import "./styles.css";
import { Telegram } from "@twa-dev/types";
import { BackButton } from "@twa-dev/sdk/react";
import { MainButton } from "@twa-dev/sdk/react";

<MainButton text="Finalizar" onClick={() => alert("submitted")} />;

<BackButton onClick={() => window.history.back()} />;

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

window.Telegram.WebApp.HapticFeedback.notificationOccurred("success");

// const data = "WebApp.initDataUnsafe";

const App: React.FC = () => {
  const [mostrarBotoes, setMostrarBotoes] = useState<boolean>(false);
  const [contador, setContador] = useState<number>(0);

  const mostrarOpcoes = () => {
    setMostrarBotoes(true);
    if (contador === 0) {
      setContador(1);
    }
  };

  const incrementar = () => {
    setContador((prevContador) => {
      const novoContador = prevContador + 1;
      if (novoContador > 100) {
        return prevContador;
      }
      return novoContador;
    });
  };

  const decrementar = () => {
    setContador((prevContador) => {
      const novoContador = prevContador - 1;
      if (novoContador <= 0) {
        setMostrarBotoes(false);
        return prevContador - 1;
      }
      return novoContador;
    });
  };

  return (
    <div className="App">
      <p>Olá, {WebApp.initDataUnsafe?.user?.first_name}</p>
      <div className="app-item">
        <div className="app-item-counter">{contador}</div>
        <div className="app-item-photo">
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Herb.webp"
            alt="Herb"
            width="25"
            height="25"
            className="app-item-photo"
          />
        </div>
        <div className="cafe-item-label">
          <span className="cafe-item-title">Camomila 40g - </span>
          <span className="cafe-item-price">$1.49</span>
        </div>
        <div className="botoes-container">
          {!mostrarBotoes && (
            <button
              id="botao-add"
              className="botao-add"
              onClick={mostrarOpcoes}
            >
              ADD
            </button>
          )}
          {mostrarBotoes && (
            <div className="botoes-opcoes">
              <button className="botao-opcao-negativo" onClick={decrementar}>
                -
              </button>
              <button className="botao-opcao-positivo" onClick={incrementar}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
