import React from "react";
import "./header.css";
import Button from "../Button/Button.jsx";
import { useTelegram } from "../../hooks/useTelegram.js";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className={"header"}>
      <p>Welcome to the Telegram Bot Web App!</p>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{user?.username || "Пользователь"}</span>
    </div>
  );
};

export default Header;
