import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import "./App.css";
import Header from "./components/Header/header";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      The app is working!
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
