import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      The app is working!
      <p>Welcome to the Telegram Bot Web App!</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
