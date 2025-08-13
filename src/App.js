import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import "./App.css";
import Header from "./components/Header/header";
import { Routes, Route } from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import Form from "./components/Form/Form";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Catalog />} />
        <Route path={"/form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
