import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import "./App.css";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      The app is working!
      <p>Welcome to the Telegram Bot Web App!</p>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
