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
      <div className="logo-container">
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Face%20In%20Clouds.webp"
          alt="Face In Clouds"
          width="25"
          height="25"
        />
        <h1>Olá, {WebApp.initDataUnsafe?.user?.first_name}</h1>
      </div>
      <div className="app-item">
        {mostrarBotoes && <div className="app-item-counter">{contador}</div>}

        <div className="app-item-photo">
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Tulip.webp"
            alt="Tulip"
            width="25"
            height="25"
            className="app-item-photo"
          />
        </div>
        <div className="cafe-item-label">
          <span className="cafe-item-title">Purple Tulipe 40g - </span>
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
      <div className="app-item">
        {mostrarBotoes && <div className="app-item-counter">{contador}</div>}
        <div className="app-item-photo">
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Hibiscus.webp"
            alt="Hibiscus"
            width="25"
            height="25"
            className="app-item-photo"
          />
        </div>
        <div className="cafe-item-label">
          <span className="cafe-item-title">Hibiscus 40g - </span>
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
      <div className="app-item">
        {mostrarBotoes && <div className="app-item-counter">{contador}</div>}
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
      <div className="app-item">
        {mostrarBotoes && <div className="app-item-counter">{contador}</div>}
        <div className="app-item-photo">
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Four%20Leaf%20Clover.webp"
            alt="Four Leaf Clover"
            width="25"
            height="25"
            className="app-item-photo"
          />
        </div>
        <div className="cafe-item-label">
          <span className="cafe-item-title">Lucky 40g - </span>
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
      <div className="app-item">
        {mostrarBotoes && <div className="app-item-counter">{contador}</div>}
        <div className="app-item-photo">
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Snowflake.webp"
            alt="Snowflake"
            width="25"
            height="25"
            className="app-item-photo"
          />
        </div>
        <div className="cafe-item-label">
          <span className="cafe-item-title">Snow 40g - </span>
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
      <div className="app-item">
        {mostrarBotoes && <div className="app-item-counter">{contador}</div>}
        <div className="app-item-photo">
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/High%20Voltage.webp"
            alt="High Voltage"
            width="25"
            height="25"
            className="app-item-photo"
          />
        </div>
        <div className="cafe-item-label">
          <span className="cafe-item-title">Raio 40g - </span>
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
