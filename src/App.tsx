import React, { useState } from "react";
import WebApp from "@twa-dev/sdk";
import "./styles.css";

WebApp.MainButton.show();
WebApp.MainButton.setText("Finalizar Compra");
WebApp.MainButton.onClick(() => {
  WebApp.showAlert("Compra finalizada!");
  const data = "data";
  WebApp.sendData(data);
  WebApp.close();
});

interface ItemProps {
  nome: string;
  imagemSrc: string;
  preco: string;
}

const Item: React.FC<ItemProps> = ({ nome, imagemSrc, preco }) => {
  const [mostrarBotoes, setMostrarBotoes] = useState(false);
  const [contador, setContador] = useState(0);

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
    <div className="app-item">
      {mostrarBotoes && <div className="app-item-counter">{contador}</div>}
      <div className="app-item-photo">
        <img src={imagemSrc} alt={nome} className="app-item-photo" />
      </div>
      <div className="cafe-item-label">
        <span className="cafe-item-title">{nome}</span>
        <span className="cafe-item-price">{preco}</span>
      </div>
      <div className="botoes-container">
        {!mostrarBotoes && (
          <button id="botao-add" className="botao-add" onClick={mostrarOpcoes}>
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
  );
};

const App: React.FC = () => {
  const itens = [
    {
      nome: "Purple Tulipe 40g",
      imagemSrc:
        "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Tulip.webp",
      preco: "$1.49",
    },
    {
      nome: "Hibiscus 40g",
      imagemSrc:
        "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Hibiscus.webp",
      preco: "$1.49",
    },
    {
      nome: "Camomila 40g",
      imagemSrc:
        "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Herb.webp",
      preco: "$1.49",
    },
    {
      nome: "Lucky 40g",
      imagemSrc:
        "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Four%20Leaf%20Clover.webp",
      preco: "$1.49",
    },
    {
      nome: "Snow 40g",
      imagemSrc:
        "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Snowflake.webp",
      preco: "$1.49",
    },
    {
      nome: "Raio 40g",
      imagemSrc:
        "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/High%20Voltage.webp",
      preco: "$1.49",
    },
    // Adicione mais itens conforme necessário
  ];

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
      <div className="app-container">
        {itens.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default App;
