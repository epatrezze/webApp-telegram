import "./styles.css";
import WebApp from "@twa-dev/sdk";

WebApp.MainButton.show();
WebApp.MainButton.setText("Alloha");
WebApp.MainButton.onClick(() => {
  WebApp.showAlert("ALLOHA!!!");
});

// const data = WebApp.initData.toString();

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <img
          src="https://cdn.awsli.com.br/600x450/1285/1285102/produto/53857013/0aa7b24f1a.jpg"
          alt="Descrição da Imagem"
          className="imagem-produtos"
        />
        <p>produto</p>

        <button>-</button>
        <button>+</button>
      </div>
      <div className="card">
        <img
          src="https://cdn.awsli.com.br/600x450/1285/1285102/produto/53857013/0aa7b24f1a.jpg"
          alt="Descrição da Imagem"
          className="imagem-produtos"
        />
        <p>produto</p>

        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
}
