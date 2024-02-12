import "./styles.css";
import WebApp from "@twa-dev/sdk";

// WebApp.MainButton.show();
// WebApp.MainButton.setText("Alloha");
// WebApp.MainButton.onClick(() => {
//   WebApp.showAlert("ALLOHA!!!");
// });

const data = WebApp.initData.toString();

export default function App() {
  return (
    <div className="App">
      <div id="twa-container">
        <h1>Hello TWA</h1>
      </div>
      <h1>Hello CodeSandbox</h1>
      <h2>{data}</h2>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
