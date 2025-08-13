import React from "react";
import "./header.css";
import Button from "../Button/button";

const Header = () => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };

  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>
        {tg.initDataUnsafe?.user?.username || "Пользователь"}
      </span>
    </div>
  );
};

export default Header;
