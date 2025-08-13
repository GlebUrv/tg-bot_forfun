import React, { useState } from "react";
import "./Catalog.css";
import Item from "../Item/Item";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
  { id: 1, title: "Product 1", description: "Description 1", price: 100 },
  { id: 2, title: "Product 2", description: "Description 2", price: 200 },
  { id: 3, title: "Product 3", description: "Description 3", price: 300 },
];

const getTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.price, 0);
};

const Catalog = () => {
  const [cart, setCart] = useState([]);
  const { tg } = useTelegram();

  const onAdd = (product) => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyInCart) {
      newItems = cart.filter((item) => item.id !== product.id);
    } else {
      newItems = [...cart, product];
    }

    setCart(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `В корзине (${newItems.length}). Купить за ${getTotalPrice(
          newItems
        )} руб.`,
      });
    }
  };

  return (
    <div className={"list"}>
      {products.map((item) => (
        <Item product={item} onAdd={onAdd} className={"item"} />
      ))}
    </div>
  );
};

export default Catalog;
