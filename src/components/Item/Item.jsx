import React from "react";
import "./Item.css";
import Button from "../Button/button";

const Item = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className={"product " + className}>
      <div className={"img"} />
      <div className={"title"}>{product.title}</div>
      <div className={"description"}>{product.description}</div>
      <div className={"price"}>Стоимость: {product.price}</div>
      <Button className={"add-btn"} onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </div>
  );
};

export default Item;
