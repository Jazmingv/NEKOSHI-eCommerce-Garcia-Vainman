import "../../App.css";
import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemDetail = (props) => {

  const onAdd = (counter) => {
    console.log(`${props.title} added to cart. Quantity: ${counter}`);
  };

  return (
    <div className="container">
      <div className="card-image">
        <img
          src={props.imageUrl}
          alt={props.title}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="card-right">
        <h2 className="item-title">{props.title}</h2>
        <h5>{props.author}</h5>
        <p className="item-price">
          <b>${props.price}</b>
        </p>
        <p className="item-desc">{props.sinopsis}</p>
        <br></br>
        <ItemCount
          initialQuantity={props.initialQuantity}
          currentStock={props.currentStock}
          onAdd={onAdd()}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
