import React from "react";
import "./header.css";
import Button from "../Button/button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{user?.username || "Пользователь"}</span>
    </div>
  );
};

export default Header;
